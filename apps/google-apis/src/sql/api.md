<h1 id="cloud-sql-admin-api">Cloud SQL Admin API v1beta4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for Cloud SQL database instance management

Base URLs:

* <a href="https://sqladmin.googleapis.com/">https://sqladmin.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/cloud-sql/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/sqlservice.admin|Manage your Google SQL Service instances|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/sqlservice.admin|Manage your Google SQL Service instances|

<h1 id="cloud-sql-admin-api-backupruns">backupRuns</h1>

## sql.backupRuns.list

<a id="opIdsql.backupRuns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/backupRuns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns`

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

<h3 id="sqlbackuprunslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID, or "-" for all instances. This does not include the project ID.|
|maxResults|query|integer|false|Maximum number of backup runs per response.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
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
  "items": [
    {
      "backupKind": "SQL_BACKUP_KIND_UNSPECIFIED",
      "description": "string",
      "diskEncryptionConfiguration": {
        "kind": "string",
        "kmsKeyName": "string"
      },
      "diskEncryptionStatus": {
        "kind": "string",
        "kmsKeyVersionName": "string"
      },
      "endTime": "string",
      "enqueuedTime": "string",
      "error": {
        "code": "string",
        "kind": "string",
        "message": "string"
      },
      "id": "string",
      "instance": "string",
      "kind": "string",
      "location": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
      "timeZone": "string",
      "type": "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
      "windowStartTime": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="sqlbackuprunslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BackupRunsListResponse](#schemabackuprunslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.backupRuns.insert

<a id="opIdsql.backupRuns.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/backupRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backupKind": "SQL_BACKUP_KIND_UNSPECIFIED",
    "description": "string",
    "diskEncryptionConfiguration": {
      "kind": "string",
      "kmsKeyName": "string"
    },
    "diskEncryptionStatus": {
      "kind": "string",
      "kmsKeyVersionName": "string"
    },
    "endTime": "string",
    "enqueuedTime": "string",
    "error": {
      "code": "string",
      "kind": "string",
      "message": "string"
    },
    "id": "string",
    "instance": "string",
    "kind": "string",
    "location": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
    "timeZone": "string",
    "type": "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
    "windowStartTime": "string"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns`

Creates a new backup run on demand.

> Body parameter

```json
{
  "backupKind": "SQL_BACKUP_KIND_UNSPECIFIED",
  "description": "string",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "endTime": "string",
  "enqueuedTime": "string",
  "error": {
    "code": "string",
    "kind": "string",
    "message": "string"
  },
  "id": "string",
  "instance": "string",
  "kind": "string",
  "location": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
  "timeZone": "string",
  "type": "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
  "windowStartTime": "string"
}
```

<h3 id="sqlbackuprunsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[BackupRun](#schemabackuprun)|false|none|
|» backupKind|body|string|false|Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.|
|» description|body|string|false|The description of this run, only applicable to on-demand backups.|
|» diskEncryptionConfiguration|body|[DiskEncryptionConfiguration](#schemadiskencryptionconfiguration)|false|Encryption configuration specific to a backup.|
|» diskEncryptionStatus|body|[DiskEncryptionStatus](#schemadiskencryptionstatus)|false|Encryption status specific to a backup.|
|» endTime|body|string(google-datetime)|false|The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|» enqueuedTime|body|string(google-datetime)|false|The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|» error|body|[OperationError](#schemaoperationerror)|false|Information about why the backup operation failed. This is only present if the run has the FAILED status.|
|» id|body|string(int64)|false|The identifier for this backup run. Unique only for a specific Cloud SQL instance.|
|» instance|body|string|false|Name of the database instance.|
|» kind|body|string|false|This is always `sql#backupRun`.|
|» location|body|string|false|Location of the backups.|
|» selfLink|body|string|false|The URI of this resource.|
|» startTime|body|string(google-datetime)|false|The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|» status|body|string|false|The status of this run.|
|» timeZone|body|string|false|Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.|
|» type|body|string|false|The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.|
|» windowStartTime|body|string(google-datetime)|false|The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» backupKind|SQL_BACKUP_KIND_UNSPECIFIED|
|» backupKind|SNAPSHOT|
|» backupKind|PHYSICAL|
|» status|SQL_BACKUP_RUN_STATUS_UNSPECIFIED|
|» status|ENQUEUED|
|» status|OVERDUE|
|» status|RUNNING|
|» status|FAILED|
|» status|SUCCESSFUL|
|» status|SKIPPED|
|» status|DELETION_PENDING|
|» status|DELETION_FAILED|
|» status|DELETED|
|» type|SQL_BACKUP_RUN_TYPE_UNSPECIFIED|
|» type|AUTOMATED|
|» type|ON_DEMAND|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlbackuprunsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.backupRuns.get

<a id="opIdsql.backupRuns.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/backupRuns/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}`

Retrieves a resource containing information about a backup run.

<h3 id="sqlbackuprunsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
|id|path|string|true|The ID of this backup run.|
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
  "backupKind": "SQL_BACKUP_KIND_UNSPECIFIED",
  "description": "string",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "endTime": "string",
  "enqueuedTime": "string",
  "error": {
    "code": "string",
    "kind": "string",
    "message": "string"
  },
  "id": "string",
  "instance": "string",
  "kind": "string",
  "location": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
  "timeZone": "string",
  "type": "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
  "windowStartTime": "string"
}
```

<h3 id="sqlbackuprunsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BackupRun](#schemabackuprun)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.backupRuns.delete

<a id="opIdsql.backupRuns.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/backupRuns/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}`

Deletes the backup taken by a backup run.

<h3 id="sqlbackuprunsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
|id|path|string|true|The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/backupRuns/list) method.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlbackuprunsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-connect">connect</h1>

## sql.connect.get

<a id="opIdsql.connect.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/connectSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/connectSettings`

Retrieves connect settings about a Cloud SQL instance.

<h3 id="sqlconnectget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
|readTime|query|string|false|Optional. Optional snapshot read timestamp to trade freshness for performance.|
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
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "region": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  }
}
```

<h3 id="sqlconnectget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConnectSettings](#schemaconnectsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.connect.generateEphemeral

<a id="opIdsql.connect.generateEphemeral"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string:generateEphemeralCert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access_token": "string",
    "public_key": "string",
    "readTime": "string",
    "validDuration": "string"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}:generateEphemeralCert`

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

> Body parameter

```json
{
  "access_token": "string",
  "public_key": "string",
  "readTime": "string",
  "validDuration": "string"
}
```

<h3 id="sqlconnectgenerateephemeral-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[GenerateEphemeralCertRequest](#schemagenerateephemeralcertrequest)|false|none|
|» access_token|body|string|false|Optional. Access token to include in the signed certificate.|
|» public_key|body|string|false|PEM encoded public key to include in the signed certificate.|
|» readTime|body|string(google-datetime)|false|Optional. Optional snapshot read timestamp to trade freshness for performance.|
|» validDuration|body|string(google-duration)|false|Optional. If set, it will contain the cert valid duration.|

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
  "ephemeralCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  }
}
```

<h3 id="sqlconnectgenerateephemeral-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateEphemeralCertResponse](#schemagenerateephemeralcertresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-databases">databases</h1>

## sql.databases.list

<a id="opIdsql.databases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/databases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/databases`

Lists databases in the specified Cloud SQL instance.

<h3 id="sqldatabaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "items": [
    {
      "charset": "string",
      "collation": "string",
      "etag": "string",
      "instance": "string",
      "kind": "string",
      "name": "string",
      "project": "string",
      "selfLink": "string",
      "sqlserverDatabaseDetails": {
        "compatibilityLevel": 0,
        "recoveryModel": "string"
      }
    }
  ],
  "kind": "string"
}
```

<h3 id="sqldatabaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabasesListResponse](#schemadatabaseslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.databases.insert

<a id="opIdsql.databases.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/databases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "charset": "string",
    "collation": "string",
    "etag": "string",
    "instance": "string",
    "kind": "string",
    "name": "string",
    "project": "string",
    "selfLink": "string",
    "sqlserverDatabaseDetails": {
      "compatibilityLevel": 0,
      "recoveryModel": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/databases`

Inserts a resource containing information about a database inside a Cloud SQL instance.

> Body parameter

```json
{
  "charset": "string",
  "collation": "string",
  "etag": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "project": "string",
  "selfLink": "string",
  "sqlserverDatabaseDetails": {
    "compatibilityLevel": 0,
    "recoveryModel": "string"
  }
}
```

<h3 id="sqldatabasesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
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
|body|body|[Database](#schemadatabase)|false|none|
|» charset|body|string|false|The Cloud SQL charset value.|
|» collation|body|string|false|The Cloud SQL collation value.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API.|
|» instance|body|string|false|The name of the Cloud SQL instance. This does not include the project ID.|
|» kind|body|string|false|This is always `sql#database`.|
|» name|body|string|false|The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.|
|» project|body|string|false|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.|
|» selfLink|body|string|false|The URI of this resource.|
|» sqlserverDatabaseDetails|body|[SqlServerDatabaseDetails](#schemasqlserverdatabasedetails)|false|Represents a Sql Server database on the Cloud SQL instance.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqldatabasesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.databases.get

<a id="opIdsql.databases.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/databases/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}`

Retrieves a resource containing information about a database inside a Cloud SQL instance.

<h3 id="sqldatabasesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|database|path|string|true|Name of the database in the instance.|
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
  "charset": "string",
  "collation": "string",
  "etag": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "project": "string",
  "selfLink": "string",
  "sqlserverDatabaseDetails": {
    "compatibilityLevel": 0,
    "recoveryModel": "string"
  }
}
```

<h3 id="sqldatabasesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Database](#schemadatabase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.databases.update

<a id="opIdsql.databases.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/databases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "charset": "string",
    "collation": "string",
    "etag": "string",
    "instance": "string",
    "kind": "string",
    "name": "string",
    "project": "string",
    "selfLink": "string",
    "sqlserverDatabaseDetails": {
      "compatibilityLevel": 0,
      "recoveryModel": "string"
    }
  }'
```

`PUT /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}`

Updates a resource containing information about a database inside a Cloud SQL instance.

> Body parameter

```json
{
  "charset": "string",
  "collation": "string",
  "etag": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "project": "string",
  "selfLink": "string",
  "sqlserverDatabaseDetails": {
    "compatibilityLevel": 0,
    "recoveryModel": "string"
  }
}
```

<h3 id="sqldatabasesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|database|path|string|true|Name of the database to be updated in the instance.|
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
|body|body|[Database](#schemadatabase)|false|none|
|» charset|body|string|false|The Cloud SQL charset value.|
|» collation|body|string|false|The Cloud SQL collation value.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API.|
|» instance|body|string|false|The name of the Cloud SQL instance. This does not include the project ID.|
|» kind|body|string|false|This is always `sql#database`.|
|» name|body|string|false|The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.|
|» project|body|string|false|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.|
|» selfLink|body|string|false|The URI of this resource.|
|» sqlserverDatabaseDetails|body|[SqlServerDatabaseDetails](#schemasqlserverdatabasedetails)|false|Represents a Sql Server database on the Cloud SQL instance.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqldatabasesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.databases.delete

<a id="opIdsql.databases.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/databases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}`

Deletes a database from a Cloud SQL instance.

<h3 id="sqldatabasesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|database|path|string|true|Name of the database to be deleted in the instance.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqldatabasesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.databases.patch

<a id="opIdsql.databases.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/databases/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "charset": "string",
    "collation": "string",
    "etag": "string",
    "instance": "string",
    "kind": "string",
    "name": "string",
    "project": "string",
    "selfLink": "string",
    "sqlserverDatabaseDetails": {
      "compatibilityLevel": 0,
      "recoveryModel": "string"
    }
  }'
```

`PATCH /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}`

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

> Body parameter

```json
{
  "charset": "string",
  "collation": "string",
  "etag": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "project": "string",
  "selfLink": "string",
  "sqlserverDatabaseDetails": {
    "compatibilityLevel": 0,
    "recoveryModel": "string"
  }
}
```

<h3 id="sqldatabasespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|database|path|string|true|Name of the database to be updated in the instance.|
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
|body|body|[Database](#schemadatabase)|false|none|
|» charset|body|string|false|The Cloud SQL charset value.|
|» collation|body|string|false|The Cloud SQL collation value.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API.|
|» instance|body|string|false|The name of the Cloud SQL instance. This does not include the project ID.|
|» kind|body|string|false|This is always `sql#database`.|
|» name|body|string|false|The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.|
|» project|body|string|false|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.|
|» selfLink|body|string|false|The URI of this resource.|
|» sqlserverDatabaseDetails|body|[SqlServerDatabaseDetails](#schemasqlserverdatabasedetails)|false|Represents a Sql Server database on the Cloud SQL instance.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqldatabasespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-flags">flags</h1>

## sql.flags.list

<a id="opIdsql.flags.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/flags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/flags`

Lists all available database flags for Cloud SQL instances.

<h3 id="sqlflagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseVersion|query|string|false|Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.|
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
  "items": [
    {
      "allowedIntValues": [
        "string"
      ],
      "allowedStringValues": [
        "string"
      ],
      "appliesTo": [
        "SQL_DATABASE_VERSION_UNSPECIFIED"
      ],
      "inBeta": true,
      "kind": "string",
      "maxValue": "string",
      "minValue": "string",
      "name": "string",
      "requiresRestart": true,
      "type": "SQL_FLAG_TYPE_UNSPECIFIED"
    }
  ],
  "kind": "string"
}
```

<h3 id="sqlflagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FlagsListResponse](#schemaflagslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-instances">instances</h1>

## sql.instances.list

<a id="opIdsql.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances`

Lists instances under a given project.

<h3 id="sqlinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project for which to list Cloud SQL instances.|
|filter|query|string|false|A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.|
|maxResults|query|integer|false|The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
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
  "items": [
    {
      "availableMaintenanceVersions": [
        "string"
      ],
      "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
      "connectionName": "string",
      "createTime": "string",
      "currentDiskSize": "string",
      "databaseInstalledVersion": "string",
      "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
      "diskEncryptionConfiguration": {
        "kind": "string",
        "kmsKeyName": "string"
      },
      "diskEncryptionStatus": {
        "kind": "string",
        "kmsKeyVersionName": "string"
      },
      "etag": "string",
      "failoverReplica": {
        "available": true,
        "name": "string"
      },
      "gceZone": "string",
      "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
      "ipAddresses": [
        {
          "ipAddress": "string",
          "timeToRetire": "string",
          "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
        }
      ],
      "ipv6Address": "string",
      "kind": "string",
      "maintenanceVersion": "string",
      "masterInstanceName": "string",
      "maxDiskSize": "string",
      "name": "string",
      "onPremisesConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "dumpFilePath": "string",
        "hostPort": "string",
        "kind": "string",
        "password": "string",
        "sourceInstance": {
          "name": "string",
          "project": "string",
          "region": "string"
        },
        "username": "string"
      },
      "outOfDiskReport": {
        "sqlMinRecommendedIncreaseSizeGb": 0,
        "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
      },
      "project": "string",
      "region": "string",
      "replicaConfiguration": {
        "failoverTarget": true,
        "kind": "string",
        "mysqlReplicaConfiguration": {
          "caCertificate": "string",
          "clientCertificate": "string",
          "clientKey": "string",
          "connectRetryInterval": 0,
          "dumpFilePath": "string",
          "kind": "string",
          "masterHeartbeatPeriod": "string",
          "password": "string",
          "sslCipher": "string",
          "username": "string",
          "verifyServerCertificate": true
        }
      },
      "replicaNames": [
        "string"
      ],
      "rootPassword": "string",
      "satisfiesPzs": true,
      "scheduledMaintenance": {
        "canDefer": true,
        "canReschedule": true,
        "scheduleDeadlineTime": "string",
        "startTime": "string"
      },
      "secondaryGceZone": "string",
      "selfLink": "string",
      "serverCaCert": {
        "cert": "string",
        "certSerialNumber": "string",
        "commonName": "string",
        "createTime": "string",
        "expirationTime": "string",
        "instance": "string",
        "kind": "string",
        "selfLink": "string",
        "sha1Fingerprint": "string"
      },
      "serviceAccountEmailAddress": "string",
      "settings": {
        "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
        "activeDirectoryConfig": {
          "domain": "string",
          "kind": "string"
        },
        "advancedMachineFeatures": {
          "threadsPerCore": 0
        },
        "authorizedGaeApplications": [
          "string"
        ],
        "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
        "backupConfiguration": {
          "backupRetentionSettings": {
            "retainedBackups": 0,
            "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
          },
          "binaryLogEnabled": true,
          "enabled": true,
          "kind": "string",
          "location": "string",
          "pointInTimeRecoveryEnabled": true,
          "replicationLogArchivingEnabled": true,
          "startTime": "string",
          "transactionLogRetentionDays": 0
        },
        "collation": "string",
        "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
        "crashSafeReplicationEnabled": true,
        "dataDiskSizeGb": "string",
        "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
        "databaseFlags": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "databaseReplicationEnabled": true,
        "deletionProtectionEnabled": true,
        "denyMaintenancePeriods": [
          {
            "endDate": "string",
            "startDate": "string",
            "time": "string"
          }
        ],
        "insightsConfig": {
          "queryInsightsEnabled": true,
          "queryPlansPerMinute": 0,
          "queryStringLength": 0,
          "recordApplicationTags": true,
          "recordClientAddress": true
        },
        "ipConfiguration": {
          "allocatedIpRange": "string",
          "authorizedNetworks": [
            {
              "expirationTime": "string",
              "kind": "string",
              "name": "string",
              "value": "string"
            }
          ],
          "enablePrivatePathForGoogleCloudServices": true,
          "ipv4Enabled": true,
          "privateNetwork": "string",
          "requireSsl": true
        },
        "kind": "string",
        "locationPreference": {
          "followGaeApplication": "string",
          "kind": "string",
          "secondaryZone": "string",
          "zone": "string"
        },
        "maintenanceWindow": {
          "day": 0,
          "hour": 0,
          "kind": "string",
          "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
        },
        "passwordValidationPolicy": {
          "complexity": "COMPLEXITY_UNSPECIFIED",
          "disallowUsernameSubstring": true,
          "enablePasswordPolicy": true,
          "minLength": 0,
          "passwordChangeInterval": "string",
          "reuseInterval": 0
        },
        "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
        "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
        "settingsVersion": "string",
        "sqlServerAuditConfig": {
          "bucket": "string",
          "kind": "string",
          "retentionInterval": "string",
          "uploadInterval": "string"
        },
        "storageAutoResize": true,
        "storageAutoResizeLimit": "string",
        "tier": "string",
        "timeZone": "string",
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
      "suspensionReason": [
        "SQL_SUSPENSION_REASON_UNSPECIFIED"
      ]
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "warnings": [
    {
      "code": "SQL_API_WARNING_CODE_UNSPECIFIED",
      "message": "string",
      "region": "string"
    }
  ]
}
```

<h3 id="sqlinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InstancesListResponse](#schemainstanceslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.insert

<a id="opIdsql.instances.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
    "connectionName": "string",
    "currentDiskSize": "string",
    "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
    "diskEncryptionConfiguration": {
      "kind": "string",
      "kmsKeyName": "string"
    },
    "diskEncryptionStatus": {
      "kind": "string",
      "kmsKeyVersionName": "string"
    },
    "etag": "string",
    "failoverReplica": {
      "available": true,
      "name": "string"
    },
    "gceZone": "string",
    "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
    "ipAddresses": [
      {
        "ipAddress": "string",
        "timeToRetire": "string",
        "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
      }
    ],
    "ipv6Address": "string",
    "kind": "string",
    "maintenanceVersion": "string",
    "masterInstanceName": "string",
    "maxDiskSize": "string",
    "name": "string",
    "onPremisesConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "dumpFilePath": "string",
      "hostPort": "string",
      "kind": "string",
      "password": "string",
      "sourceInstance": {
        "name": "string",
        "project": "string",
        "region": "string"
      },
      "username": "string"
    },
    "outOfDiskReport": {
      "sqlMinRecommendedIncreaseSizeGb": 0,
      "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
    },
    "project": "string",
    "region": "string",
    "replicaConfiguration": {
      "failoverTarget": true,
      "kind": "string",
      "mysqlReplicaConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "connectRetryInterval": 0,
        "dumpFilePath": "string",
        "kind": "string",
        "masterHeartbeatPeriod": "string",
        "password": "string",
        "sslCipher": "string",
        "username": "string",
        "verifyServerCertificate": true
      }
    },
    "replicaNames": [
      "string"
    ],
    "rootPassword": "string",
    "satisfiesPzs": true,
    "scheduledMaintenance": {
      "canDefer": true,
      "canReschedule": true,
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    },
    "secondaryGceZone": "string",
    "selfLink": "string",
    "serverCaCert": {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    },
    "serviceAccountEmailAddress": "string",
    "settings": {
      "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
      "activeDirectoryConfig": {
        "domain": "string",
        "kind": "string"
      },
      "advancedMachineFeatures": {
        "threadsPerCore": 0
      },
      "authorizedGaeApplications": [
        "string"
      ],
      "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
      "backupConfiguration": {
        "backupRetentionSettings": {
          "retainedBackups": 0,
          "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
        },
        "binaryLogEnabled": true,
        "enabled": true,
        "kind": "string",
        "location": "string",
        "pointInTimeRecoveryEnabled": true,
        "replicationLogArchivingEnabled": true,
        "startTime": "string",
        "transactionLogRetentionDays": 0
      },
      "collation": "string",
      "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
      "crashSafeReplicationEnabled": true,
      "dataDiskSizeGb": "string",
      "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
      "databaseFlags": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "databaseReplicationEnabled": true,
      "deletionProtectionEnabled": true,
      "denyMaintenancePeriods": [
        {
          "endDate": "string",
          "startDate": "string",
          "time": "string"
        }
      ],
      "insightsConfig": {
        "queryInsightsEnabled": true,
        "queryPlansPerMinute": 0,
        "queryStringLength": 0,
        "recordApplicationTags": true,
        "recordClientAddress": true
      },
      "ipConfiguration": {
        "allocatedIpRange": "string",
        "authorizedNetworks": [
          {
            "expirationTime": "string",
            "kind": "string",
            "name": "string",
            "value": "string"
          }
        ],
        "enablePrivatePathForGoogleCloudServices": true,
        "ipv4Enabled": true,
        "privateNetwork": "string",
        "requireSsl": true
      },
      "kind": "string",
      "locationPreference": {
        "followGaeApplication": "string",
        "kind": "string",
        "secondaryZone": "string",
        "zone": "string"
      },
      "maintenanceWindow": {
        "day": 0,
        "hour": 0,
        "kind": "string",
        "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
      },
      "passwordValidationPolicy": {
        "complexity": "COMPLEXITY_UNSPECIFIED",
        "disallowUsernameSubstring": true,
        "enablePasswordPolicy": true,
        "minLength": 0,
        "passwordChangeInterval": "string",
        "reuseInterval": 0
      },
      "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
      "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
      "settingsVersion": "string",
      "sqlServerAuditConfig": {
        "bucket": "string",
        "kind": "string",
        "retentionInterval": "string",
        "uploadInterval": "string"
      },
      "storageAutoResize": true,
      "storageAutoResizeLimit": "string",
      "tier": "string",
      "timeZone": "string",
      "userLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
    "suspensionReason": [
      "SQL_SUSPENSION_REASON_UNSPECIFIED"
    ]
  }'
```

`POST /sql/v1beta4/projects/{project}/instances`

Creates a new Cloud SQL instance.

> Body parameter

```json
{
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "connectionName": "string",
  "currentDiskSize": "string",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "etag": "string",
  "failoverReplica": {
    "available": true,
    "name": "string"
  },
  "gceZone": "string",
  "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "ipv6Address": "string",
  "kind": "string",
  "maintenanceVersion": "string",
  "masterInstanceName": "string",
  "maxDiskSize": "string",
  "name": "string",
  "onPremisesConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "dumpFilePath": "string",
    "hostPort": "string",
    "kind": "string",
    "password": "string",
    "sourceInstance": {
      "name": "string",
      "project": "string",
      "region": "string"
    },
    "username": "string"
  },
  "outOfDiskReport": {
    "sqlMinRecommendedIncreaseSizeGb": 0,
    "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
  },
  "project": "string",
  "region": "string",
  "replicaConfiguration": {
    "failoverTarget": true,
    "kind": "string",
    "mysqlReplicaConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "connectRetryInterval": 0,
      "dumpFilePath": "string",
      "kind": "string",
      "masterHeartbeatPeriod": "string",
      "password": "string",
      "sslCipher": "string",
      "username": "string",
      "verifyServerCertificate": true
    }
  },
  "replicaNames": [
    "string"
  ],
  "rootPassword": "string",
  "satisfiesPzs": true,
  "scheduledMaintenance": {
    "canDefer": true,
    "canReschedule": true,
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "secondaryGceZone": "string",
  "selfLink": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  },
  "serviceAccountEmailAddress": "string",
  "settings": {
    "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    "activeDirectoryConfig": {
      "domain": "string",
      "kind": "string"
    },
    "advancedMachineFeatures": {
      "threadsPerCore": 0
    },
    "authorizedGaeApplications": [
      "string"
    ],
    "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    "backupConfiguration": {
      "backupRetentionSettings": {
        "retainedBackups": 0,
        "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
      },
      "binaryLogEnabled": true,
      "enabled": true,
      "kind": "string",
      "location": "string",
      "pointInTimeRecoveryEnabled": true,
      "replicationLogArchivingEnabled": true,
      "startTime": "string",
      "transactionLogRetentionDays": 0
    },
    "collation": "string",
    "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    "crashSafeReplicationEnabled": true,
    "dataDiskSizeGb": "string",
    "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    "databaseFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "databaseReplicationEnabled": true,
    "deletionProtectionEnabled": true,
    "denyMaintenancePeriods": [
      {
        "endDate": "string",
        "startDate": "string",
        "time": "string"
      }
    ],
    "insightsConfig": {
      "queryInsightsEnabled": true,
      "queryPlansPerMinute": 0,
      "queryStringLength": 0,
      "recordApplicationTags": true,
      "recordClientAddress": true
    },
    "ipConfiguration": {
      "allocatedIpRange": "string",
      "authorizedNetworks": [
        {
          "expirationTime": "string",
          "kind": "string",
          "name": "string",
          "value": "string"
        }
      ],
      "enablePrivatePathForGoogleCloudServices": true,
      "ipv4Enabled": true,
      "privateNetwork": "string",
      "requireSsl": true
    },
    "kind": "string",
    "locationPreference": {
      "followGaeApplication": "string",
      "kind": "string",
      "secondaryZone": "string",
      "zone": "string"
    },
    "maintenanceWindow": {
      "day": 0,
      "hour": 0,
      "kind": "string",
      "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
    },
    "passwordValidationPolicy": {
      "complexity": "COMPLEXITY_UNSPECIFIED",
      "disallowUsernameSubstring": true,
      "enablePasswordPolicy": true,
      "minLength": 0,
      "passwordChangeInterval": "string",
      "reuseInterval": 0
    },
    "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
    "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
    "settingsVersion": "string",
    "sqlServerAuditConfig": {
      "bucket": "string",
      "kind": "string",
      "retentionInterval": "string",
      "uploadInterval": "string"
    },
    "storageAutoResize": true,
    "storageAutoResizeLimit": "string",
    "tier": "string",
    "timeZone": "string",
    "userLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
  "suspensionReason": [
    "SQL_SUSPENSION_REASON_UNSPECIFIED"
  ]
}
```

<h3 id="sqlinstancesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project to which the newly created Cloud SQL instances should belong.|
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
|body|body|[DatabaseInstance](#schemadatabaseinstance)|false|none|
|» backendType|body|string|false|The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.|
|» connectionName|body|string|false|Connection name of the Cloud SQL instance used in connection strings.|
|» currentDiskSize|body|string(int64)|false|The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.|
|» databaseVersion|body|string|false|The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.|
|» diskEncryptionConfiguration|body|[DiskEncryptionConfiguration](#schemadiskencryptionconfiguration)|false|Disk encryption configuration specific to an instance.|
|» diskEncryptionStatus|body|[DiskEncryptionStatus](#schemadiskencryptionstatus)|false|Disk encryption status specific to an instance.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.|
|» failoverReplica|body|object|false|The name and status of the failover replica.|
|» » available|body|boolean|false|The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.|
|» » name|body|string|false|The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID.|
|» gceZone|body|string|false|The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.|
|» instanceType|body|string|false|The instance type.|
|» ipAddresses|body|[[IpMapping](#schemaipmapping)]|false|The assigned IP addresses for the instance.|
|» ipv6Address|body|string|false|The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.|
|» kind|body|string|false|This is always `sql#instance`.|
|» maintenanceVersion|body|string|false|The current software version on the instance.|
|» masterInstanceName|body|string|false|The name of the instance which will act as primary in the replication setup.|
|» maxDiskSize|body|string(int64)|false|The maximum disk size of the instance in bytes.|
|» name|body|string|false|Name of the Cloud SQL instance. This does not include the project ID.|
|» onPremisesConfiguration|body|[OnPremisesConfiguration](#schemaonpremisesconfiguration)|false|Configuration specific to on-premises instances.|
|» outOfDiskReport|body|[SqlOutOfDiskReport](#schemasqloutofdiskreport)|false|This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job|
|» project|body|string|false|The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.|
|» region|body|string|false|The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.|
|» replicaConfiguration|body|[ReplicaConfiguration](#schemareplicaconfiguration)|false|Configuration specific to failover replicas and read replicas.|
|» replicaNames|body|[string]|false|The replicas of the instance.|
|» rootPassword|body|string|false|Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.|
|» satisfiesPzs|body|boolean|false|The status indicating if instance satisfiesPzs. Reserved for future use.|
|» scheduledMaintenance|body|[SqlScheduledMaintenance](#schemasqlscheduledmaintenance)|false|The start time of any upcoming scheduled maintenance for this instance.|
|» secondaryGceZone|body|string|false|The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.|
|» selfLink|body|string|false|The URI of this resource.|
|» serverCaCert|body|[SslCert](#schemasslcert)|false|SSL configuration.|
|» serviceAccountEmailAddress|body|string|false|The service account email address assigned to the instance. \This property is read-only.|
|» settings|body|[Settings](#schemasettings)|false|The user settings.|
|» state|body|string|false|The current serving state of the Cloud SQL instance.|
|» suspensionReason|body|[string]|false|If the instance state is SUSPENDED, the reason for the suspension.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» backendType|SQL_BACKEND_TYPE_UNSPECIFIED|
|» backendType|FIRST_GEN|
|» backendType|SECOND_GEN|
|» backendType|EXTERNAL|
|» databaseVersion|SQL_DATABASE_VERSION_UNSPECIFIED|
|» databaseVersion|MYSQL_5_1|
|» databaseVersion|MYSQL_5_5|
|» databaseVersion|MYSQL_5_6|
|» databaseVersion|MYSQL_5_7|
|» databaseVersion|SQLSERVER_2017_STANDARD|
|» databaseVersion|SQLSERVER_2017_ENTERPRISE|
|» databaseVersion|SQLSERVER_2017_EXPRESS|
|» databaseVersion|SQLSERVER_2017_WEB|
|» databaseVersion|POSTGRES_9_6|
|» databaseVersion|POSTGRES_10|
|» databaseVersion|POSTGRES_11|
|» databaseVersion|POSTGRES_12|
|» databaseVersion|POSTGRES_13|
|» databaseVersion|POSTGRES_14|
|» databaseVersion|MYSQL_8_0|
|» databaseVersion|MYSQL_8_0_18|
|» databaseVersion|MYSQL_8_0_26|
|» databaseVersion|MYSQL_8_0_27|
|» databaseVersion|MYSQL_8_0_28|
|» databaseVersion|MYSQL_8_0_29|
|» databaseVersion|MYSQL_8_0_30|
|» databaseVersion|MYSQL_8_0_31|
|» databaseVersion|MYSQL_8_0_32|
|» databaseVersion|MYSQL_8_0_33|
|» databaseVersion|MYSQL_8_0_34|
|» databaseVersion|MYSQL_8_0_35|
|» databaseVersion|MYSQL_8_0_36|
|» databaseVersion|SQLSERVER_2019_STANDARD|
|» databaseVersion|SQLSERVER_2019_ENTERPRISE|
|» databaseVersion|SQLSERVER_2019_EXPRESS|
|» databaseVersion|SQLSERVER_2019_WEB|
|» instanceType|SQL_INSTANCE_TYPE_UNSPECIFIED|
|» instanceType|CLOUD_SQL_INSTANCE|
|» instanceType|ON_PREMISES_INSTANCE|
|» instanceType|READ_REPLICA_INSTANCE|
|» state|SQL_INSTANCE_STATE_UNSPECIFIED|
|» state|RUNNABLE|
|» state|SUSPENDED|
|» state|PENDING_DELETE|
|» state|PENDING_CREATE|
|» state|MAINTENANCE|
|» state|FAILED|
|» state|ONLINE_MAINTENANCE|
|» suspensionReason|SQL_SUSPENSION_REASON_UNSPECIFIED|
|» suspensionReason|BILLING_ISSUE|
|» suspensionReason|LEGAL_ISSUE|
|» suspensionReason|OPERATIONAL_ISSUE|
|» suspensionReason|KMS_KEY_ISSUE|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.get

<a id="opIdsql.instances.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}`

Retrieves a resource containing information about a Cloud SQL instance.

<h3 id="sqlinstancesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
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
  "availableMaintenanceVersions": [
    "string"
  ],
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "connectionName": "string",
  "createTime": "string",
  "currentDiskSize": "string",
  "databaseInstalledVersion": "string",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "etag": "string",
  "failoverReplica": {
    "available": true,
    "name": "string"
  },
  "gceZone": "string",
  "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "ipv6Address": "string",
  "kind": "string",
  "maintenanceVersion": "string",
  "masterInstanceName": "string",
  "maxDiskSize": "string",
  "name": "string",
  "onPremisesConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "dumpFilePath": "string",
    "hostPort": "string",
    "kind": "string",
    "password": "string",
    "sourceInstance": {
      "name": "string",
      "project": "string",
      "region": "string"
    },
    "username": "string"
  },
  "outOfDiskReport": {
    "sqlMinRecommendedIncreaseSizeGb": 0,
    "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
  },
  "project": "string",
  "region": "string",
  "replicaConfiguration": {
    "failoverTarget": true,
    "kind": "string",
    "mysqlReplicaConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "connectRetryInterval": 0,
      "dumpFilePath": "string",
      "kind": "string",
      "masterHeartbeatPeriod": "string",
      "password": "string",
      "sslCipher": "string",
      "username": "string",
      "verifyServerCertificate": true
    }
  },
  "replicaNames": [
    "string"
  ],
  "rootPassword": "string",
  "satisfiesPzs": true,
  "scheduledMaintenance": {
    "canDefer": true,
    "canReschedule": true,
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "secondaryGceZone": "string",
  "selfLink": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  },
  "serviceAccountEmailAddress": "string",
  "settings": {
    "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    "activeDirectoryConfig": {
      "domain": "string",
      "kind": "string"
    },
    "advancedMachineFeatures": {
      "threadsPerCore": 0
    },
    "authorizedGaeApplications": [
      "string"
    ],
    "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    "backupConfiguration": {
      "backupRetentionSettings": {
        "retainedBackups": 0,
        "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
      },
      "binaryLogEnabled": true,
      "enabled": true,
      "kind": "string",
      "location": "string",
      "pointInTimeRecoveryEnabled": true,
      "replicationLogArchivingEnabled": true,
      "startTime": "string",
      "transactionLogRetentionDays": 0
    },
    "collation": "string",
    "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    "crashSafeReplicationEnabled": true,
    "dataDiskSizeGb": "string",
    "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    "databaseFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "databaseReplicationEnabled": true,
    "deletionProtectionEnabled": true,
    "denyMaintenancePeriods": [
      {
        "endDate": "string",
        "startDate": "string",
        "time": "string"
      }
    ],
    "insightsConfig": {
      "queryInsightsEnabled": true,
      "queryPlansPerMinute": 0,
      "queryStringLength": 0,
      "recordApplicationTags": true,
      "recordClientAddress": true
    },
    "ipConfiguration": {
      "allocatedIpRange": "string",
      "authorizedNetworks": [
        {
          "expirationTime": "string",
          "kind": "string",
          "name": "string",
          "value": "string"
        }
      ],
      "enablePrivatePathForGoogleCloudServices": true,
      "ipv4Enabled": true,
      "privateNetwork": "string",
      "requireSsl": true
    },
    "kind": "string",
    "locationPreference": {
      "followGaeApplication": "string",
      "kind": "string",
      "secondaryZone": "string",
      "zone": "string"
    },
    "maintenanceWindow": {
      "day": 0,
      "hour": 0,
      "kind": "string",
      "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
    },
    "passwordValidationPolicy": {
      "complexity": "COMPLEXITY_UNSPECIFIED",
      "disallowUsernameSubstring": true,
      "enablePasswordPolicy": true,
      "minLength": 0,
      "passwordChangeInterval": "string",
      "reuseInterval": 0
    },
    "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
    "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
    "settingsVersion": "string",
    "sqlServerAuditConfig": {
      "bucket": "string",
      "kind": "string",
      "retentionInterval": "string",
      "uploadInterval": "string"
    },
    "storageAutoResize": true,
    "storageAutoResizeLimit": "string",
    "tier": "string",
    "timeZone": "string",
    "userLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
  "suspensionReason": [
    "SQL_SUSPENSION_REASON_UNSPECIFIED"
  ]
}
```

<h3 id="sqlinstancesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.update

<a id="opIdsql.instances.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
    "connectionName": "string",
    "currentDiskSize": "string",
    "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
    "diskEncryptionConfiguration": {
      "kind": "string",
      "kmsKeyName": "string"
    },
    "diskEncryptionStatus": {
      "kind": "string",
      "kmsKeyVersionName": "string"
    },
    "etag": "string",
    "failoverReplica": {
      "available": true,
      "name": "string"
    },
    "gceZone": "string",
    "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
    "ipAddresses": [
      {
        "ipAddress": "string",
        "timeToRetire": "string",
        "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
      }
    ],
    "ipv6Address": "string",
    "kind": "string",
    "maintenanceVersion": "string",
    "masterInstanceName": "string",
    "maxDiskSize": "string",
    "name": "string",
    "onPremisesConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "dumpFilePath": "string",
      "hostPort": "string",
      "kind": "string",
      "password": "string",
      "sourceInstance": {
        "name": "string",
        "project": "string",
        "region": "string"
      },
      "username": "string"
    },
    "outOfDiskReport": {
      "sqlMinRecommendedIncreaseSizeGb": 0,
      "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
    },
    "project": "string",
    "region": "string",
    "replicaConfiguration": {
      "failoverTarget": true,
      "kind": "string",
      "mysqlReplicaConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "connectRetryInterval": 0,
        "dumpFilePath": "string",
        "kind": "string",
        "masterHeartbeatPeriod": "string",
        "password": "string",
        "sslCipher": "string",
        "username": "string",
        "verifyServerCertificate": true
      }
    },
    "replicaNames": [
      "string"
    ],
    "rootPassword": "string",
    "satisfiesPzs": true,
    "scheduledMaintenance": {
      "canDefer": true,
      "canReschedule": true,
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    },
    "secondaryGceZone": "string",
    "selfLink": "string",
    "serverCaCert": {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    },
    "serviceAccountEmailAddress": "string",
    "settings": {
      "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
      "activeDirectoryConfig": {
        "domain": "string",
        "kind": "string"
      },
      "advancedMachineFeatures": {
        "threadsPerCore": 0
      },
      "authorizedGaeApplications": [
        "string"
      ],
      "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
      "backupConfiguration": {
        "backupRetentionSettings": {
          "retainedBackups": 0,
          "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
        },
        "binaryLogEnabled": true,
        "enabled": true,
        "kind": "string",
        "location": "string",
        "pointInTimeRecoveryEnabled": true,
        "replicationLogArchivingEnabled": true,
        "startTime": "string",
        "transactionLogRetentionDays": 0
      },
      "collation": "string",
      "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
      "crashSafeReplicationEnabled": true,
      "dataDiskSizeGb": "string",
      "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
      "databaseFlags": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "databaseReplicationEnabled": true,
      "deletionProtectionEnabled": true,
      "denyMaintenancePeriods": [
        {
          "endDate": "string",
          "startDate": "string",
          "time": "string"
        }
      ],
      "insightsConfig": {
        "queryInsightsEnabled": true,
        "queryPlansPerMinute": 0,
        "queryStringLength": 0,
        "recordApplicationTags": true,
        "recordClientAddress": true
      },
      "ipConfiguration": {
        "allocatedIpRange": "string",
        "authorizedNetworks": [
          {
            "expirationTime": "string",
            "kind": "string",
            "name": "string",
            "value": "string"
          }
        ],
        "enablePrivatePathForGoogleCloudServices": true,
        "ipv4Enabled": true,
        "privateNetwork": "string",
        "requireSsl": true
      },
      "kind": "string",
      "locationPreference": {
        "followGaeApplication": "string",
        "kind": "string",
        "secondaryZone": "string",
        "zone": "string"
      },
      "maintenanceWindow": {
        "day": 0,
        "hour": 0,
        "kind": "string",
        "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
      },
      "passwordValidationPolicy": {
        "complexity": "COMPLEXITY_UNSPECIFIED",
        "disallowUsernameSubstring": true,
        "enablePasswordPolicy": true,
        "minLength": 0,
        "passwordChangeInterval": "string",
        "reuseInterval": 0
      },
      "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
      "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
      "settingsVersion": "string",
      "sqlServerAuditConfig": {
        "bucket": "string",
        "kind": "string",
        "retentionInterval": "string",
        "uploadInterval": "string"
      },
      "storageAutoResize": true,
      "storageAutoResizeLimit": "string",
      "tier": "string",
      "timeZone": "string",
      "userLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
    "suspensionReason": [
      "SQL_SUSPENSION_REASON_UNSPECIFIED"
    ]
  }'
```

`PUT /sql/v1beta4/projects/{project}/instances/{instance}`

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

> Body parameter

```json
{
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "connectionName": "string",
  "currentDiskSize": "string",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "etag": "string",
  "failoverReplica": {
    "available": true,
    "name": "string"
  },
  "gceZone": "string",
  "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "ipv6Address": "string",
  "kind": "string",
  "maintenanceVersion": "string",
  "masterInstanceName": "string",
  "maxDiskSize": "string",
  "name": "string",
  "onPremisesConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "dumpFilePath": "string",
    "hostPort": "string",
    "kind": "string",
    "password": "string",
    "sourceInstance": {
      "name": "string",
      "project": "string",
      "region": "string"
    },
    "username": "string"
  },
  "outOfDiskReport": {
    "sqlMinRecommendedIncreaseSizeGb": 0,
    "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
  },
  "project": "string",
  "region": "string",
  "replicaConfiguration": {
    "failoverTarget": true,
    "kind": "string",
    "mysqlReplicaConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "connectRetryInterval": 0,
      "dumpFilePath": "string",
      "kind": "string",
      "masterHeartbeatPeriod": "string",
      "password": "string",
      "sslCipher": "string",
      "username": "string",
      "verifyServerCertificate": true
    }
  },
  "replicaNames": [
    "string"
  ],
  "rootPassword": "string",
  "satisfiesPzs": true,
  "scheduledMaintenance": {
    "canDefer": true,
    "canReschedule": true,
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "secondaryGceZone": "string",
  "selfLink": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  },
  "serviceAccountEmailAddress": "string",
  "settings": {
    "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    "activeDirectoryConfig": {
      "domain": "string",
      "kind": "string"
    },
    "advancedMachineFeatures": {
      "threadsPerCore": 0
    },
    "authorizedGaeApplications": [
      "string"
    ],
    "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    "backupConfiguration": {
      "backupRetentionSettings": {
        "retainedBackups": 0,
        "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
      },
      "binaryLogEnabled": true,
      "enabled": true,
      "kind": "string",
      "location": "string",
      "pointInTimeRecoveryEnabled": true,
      "replicationLogArchivingEnabled": true,
      "startTime": "string",
      "transactionLogRetentionDays": 0
    },
    "collation": "string",
    "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    "crashSafeReplicationEnabled": true,
    "dataDiskSizeGb": "string",
    "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    "databaseFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "databaseReplicationEnabled": true,
    "deletionProtectionEnabled": true,
    "denyMaintenancePeriods": [
      {
        "endDate": "string",
        "startDate": "string",
        "time": "string"
      }
    ],
    "insightsConfig": {
      "queryInsightsEnabled": true,
      "queryPlansPerMinute": 0,
      "queryStringLength": 0,
      "recordApplicationTags": true,
      "recordClientAddress": true
    },
    "ipConfiguration": {
      "allocatedIpRange": "string",
      "authorizedNetworks": [
        {
          "expirationTime": "string",
          "kind": "string",
          "name": "string",
          "value": "string"
        }
      ],
      "enablePrivatePathForGoogleCloudServices": true,
      "ipv4Enabled": true,
      "privateNetwork": "string",
      "requireSsl": true
    },
    "kind": "string",
    "locationPreference": {
      "followGaeApplication": "string",
      "kind": "string",
      "secondaryZone": "string",
      "zone": "string"
    },
    "maintenanceWindow": {
      "day": 0,
      "hour": 0,
      "kind": "string",
      "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
    },
    "passwordValidationPolicy": {
      "complexity": "COMPLEXITY_UNSPECIFIED",
      "disallowUsernameSubstring": true,
      "enablePasswordPolicy": true,
      "minLength": 0,
      "passwordChangeInterval": "string",
      "reuseInterval": 0
    },
    "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
    "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
    "settingsVersion": "string",
    "sqlServerAuditConfig": {
      "bucket": "string",
      "kind": "string",
      "retentionInterval": "string",
      "uploadInterval": "string"
    },
    "storageAutoResize": true,
    "storageAutoResizeLimit": "string",
    "tier": "string",
    "timeZone": "string",
    "userLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
  "suspensionReason": [
    "SQL_SUSPENSION_REASON_UNSPECIFIED"
  ]
}
```

<h3 id="sqlinstancesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[DatabaseInstance](#schemadatabaseinstance)|false|none|
|» backendType|body|string|false|The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.|
|» connectionName|body|string|false|Connection name of the Cloud SQL instance used in connection strings.|
|» currentDiskSize|body|string(int64)|false|The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.|
|» databaseVersion|body|string|false|The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.|
|» diskEncryptionConfiguration|body|[DiskEncryptionConfiguration](#schemadiskencryptionconfiguration)|false|Disk encryption configuration specific to an instance.|
|» diskEncryptionStatus|body|[DiskEncryptionStatus](#schemadiskencryptionstatus)|false|Disk encryption status specific to an instance.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.|
|» failoverReplica|body|object|false|The name and status of the failover replica.|
|» » available|body|boolean|false|The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.|
|» » name|body|string|false|The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID.|
|» gceZone|body|string|false|The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.|
|» instanceType|body|string|false|The instance type.|
|» ipAddresses|body|[[IpMapping](#schemaipmapping)]|false|The assigned IP addresses for the instance.|
|» ipv6Address|body|string|false|The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.|
|» kind|body|string|false|This is always `sql#instance`.|
|» maintenanceVersion|body|string|false|The current software version on the instance.|
|» masterInstanceName|body|string|false|The name of the instance which will act as primary in the replication setup.|
|» maxDiskSize|body|string(int64)|false|The maximum disk size of the instance in bytes.|
|» name|body|string|false|Name of the Cloud SQL instance. This does not include the project ID.|
|» onPremisesConfiguration|body|[OnPremisesConfiguration](#schemaonpremisesconfiguration)|false|Configuration specific to on-premises instances.|
|» outOfDiskReport|body|[SqlOutOfDiskReport](#schemasqloutofdiskreport)|false|This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job|
|» project|body|string|false|The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.|
|» region|body|string|false|The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.|
|» replicaConfiguration|body|[ReplicaConfiguration](#schemareplicaconfiguration)|false|Configuration specific to failover replicas and read replicas.|
|» replicaNames|body|[string]|false|The replicas of the instance.|
|» rootPassword|body|string|false|Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.|
|» satisfiesPzs|body|boolean|false|The status indicating if instance satisfiesPzs. Reserved for future use.|
|» scheduledMaintenance|body|[SqlScheduledMaintenance](#schemasqlscheduledmaintenance)|false|The start time of any upcoming scheduled maintenance for this instance.|
|» secondaryGceZone|body|string|false|The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.|
|» selfLink|body|string|false|The URI of this resource.|
|» serverCaCert|body|[SslCert](#schemasslcert)|false|SSL configuration.|
|» serviceAccountEmailAddress|body|string|false|The service account email address assigned to the instance. \This property is read-only.|
|» settings|body|[Settings](#schemasettings)|false|The user settings.|
|» state|body|string|false|The current serving state of the Cloud SQL instance.|
|» suspensionReason|body|[string]|false|If the instance state is SUSPENDED, the reason for the suspension.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» backendType|SQL_BACKEND_TYPE_UNSPECIFIED|
|» backendType|FIRST_GEN|
|» backendType|SECOND_GEN|
|» backendType|EXTERNAL|
|» databaseVersion|SQL_DATABASE_VERSION_UNSPECIFIED|
|» databaseVersion|MYSQL_5_1|
|» databaseVersion|MYSQL_5_5|
|» databaseVersion|MYSQL_5_6|
|» databaseVersion|MYSQL_5_7|
|» databaseVersion|SQLSERVER_2017_STANDARD|
|» databaseVersion|SQLSERVER_2017_ENTERPRISE|
|» databaseVersion|SQLSERVER_2017_EXPRESS|
|» databaseVersion|SQLSERVER_2017_WEB|
|» databaseVersion|POSTGRES_9_6|
|» databaseVersion|POSTGRES_10|
|» databaseVersion|POSTGRES_11|
|» databaseVersion|POSTGRES_12|
|» databaseVersion|POSTGRES_13|
|» databaseVersion|POSTGRES_14|
|» databaseVersion|MYSQL_8_0|
|» databaseVersion|MYSQL_8_0_18|
|» databaseVersion|MYSQL_8_0_26|
|» databaseVersion|MYSQL_8_0_27|
|» databaseVersion|MYSQL_8_0_28|
|» databaseVersion|MYSQL_8_0_29|
|» databaseVersion|MYSQL_8_0_30|
|» databaseVersion|MYSQL_8_0_31|
|» databaseVersion|MYSQL_8_0_32|
|» databaseVersion|MYSQL_8_0_33|
|» databaseVersion|MYSQL_8_0_34|
|» databaseVersion|MYSQL_8_0_35|
|» databaseVersion|MYSQL_8_0_36|
|» databaseVersion|SQLSERVER_2019_STANDARD|
|» databaseVersion|SQLSERVER_2019_ENTERPRISE|
|» databaseVersion|SQLSERVER_2019_EXPRESS|
|» databaseVersion|SQLSERVER_2019_WEB|
|» instanceType|SQL_INSTANCE_TYPE_UNSPECIFIED|
|» instanceType|CLOUD_SQL_INSTANCE|
|» instanceType|ON_PREMISES_INSTANCE|
|» instanceType|READ_REPLICA_INSTANCE|
|» state|SQL_INSTANCE_STATE_UNSPECIFIED|
|» state|RUNNABLE|
|» state|SUSPENDED|
|» state|PENDING_DELETE|
|» state|PENDING_CREATE|
|» state|MAINTENANCE|
|» state|FAILED|
|» state|ONLINE_MAINTENANCE|
|» suspensionReason|SQL_SUSPENSION_REASON_UNSPECIFIED|
|» suspensionReason|BILLING_ISSUE|
|» suspensionReason|LEGAL_ISSUE|
|» suspensionReason|OPERATIONAL_ISSUE|
|» suspensionReason|KMS_KEY_ISSUE|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.delete

<a id="opIdsql.instances.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sql/v1beta4/projects/{project}/instances/{instance}`

Deletes a Cloud SQL instance.

<h3 id="sqlinstancesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance to be deleted.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.patch

<a id="opIdsql.instances.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
    "connectionName": "string",
    "currentDiskSize": "string",
    "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
    "diskEncryptionConfiguration": {
      "kind": "string",
      "kmsKeyName": "string"
    },
    "diskEncryptionStatus": {
      "kind": "string",
      "kmsKeyVersionName": "string"
    },
    "etag": "string",
    "failoverReplica": {
      "available": true,
      "name": "string"
    },
    "gceZone": "string",
    "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
    "ipAddresses": [
      {
        "ipAddress": "string",
        "timeToRetire": "string",
        "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
      }
    ],
    "ipv6Address": "string",
    "kind": "string",
    "maintenanceVersion": "string",
    "masterInstanceName": "string",
    "maxDiskSize": "string",
    "name": "string",
    "onPremisesConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "dumpFilePath": "string",
      "hostPort": "string",
      "kind": "string",
      "password": "string",
      "sourceInstance": {
        "name": "string",
        "project": "string",
        "region": "string"
      },
      "username": "string"
    },
    "outOfDiskReport": {
      "sqlMinRecommendedIncreaseSizeGb": 0,
      "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
    },
    "project": "string",
    "region": "string",
    "replicaConfiguration": {
      "failoverTarget": true,
      "kind": "string",
      "mysqlReplicaConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "connectRetryInterval": 0,
        "dumpFilePath": "string",
        "kind": "string",
        "masterHeartbeatPeriod": "string",
        "password": "string",
        "sslCipher": "string",
        "username": "string",
        "verifyServerCertificate": true
      }
    },
    "replicaNames": [
      "string"
    ],
    "rootPassword": "string",
    "satisfiesPzs": true,
    "scheduledMaintenance": {
      "canDefer": true,
      "canReschedule": true,
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    },
    "secondaryGceZone": "string",
    "selfLink": "string",
    "serverCaCert": {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    },
    "serviceAccountEmailAddress": "string",
    "settings": {
      "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
      "activeDirectoryConfig": {
        "domain": "string",
        "kind": "string"
      },
      "advancedMachineFeatures": {
        "threadsPerCore": 0
      },
      "authorizedGaeApplications": [
        "string"
      ],
      "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
      "backupConfiguration": {
        "backupRetentionSettings": {
          "retainedBackups": 0,
          "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
        },
        "binaryLogEnabled": true,
        "enabled": true,
        "kind": "string",
        "location": "string",
        "pointInTimeRecoveryEnabled": true,
        "replicationLogArchivingEnabled": true,
        "startTime": "string",
        "transactionLogRetentionDays": 0
      },
      "collation": "string",
      "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
      "crashSafeReplicationEnabled": true,
      "dataDiskSizeGb": "string",
      "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
      "databaseFlags": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "databaseReplicationEnabled": true,
      "deletionProtectionEnabled": true,
      "denyMaintenancePeriods": [
        {
          "endDate": "string",
          "startDate": "string",
          "time": "string"
        }
      ],
      "insightsConfig": {
        "queryInsightsEnabled": true,
        "queryPlansPerMinute": 0,
        "queryStringLength": 0,
        "recordApplicationTags": true,
        "recordClientAddress": true
      },
      "ipConfiguration": {
        "allocatedIpRange": "string",
        "authorizedNetworks": [
          {
            "expirationTime": "string",
            "kind": "string",
            "name": "string",
            "value": "string"
          }
        ],
        "enablePrivatePathForGoogleCloudServices": true,
        "ipv4Enabled": true,
        "privateNetwork": "string",
        "requireSsl": true
      },
      "kind": "string",
      "locationPreference": {
        "followGaeApplication": "string",
        "kind": "string",
        "secondaryZone": "string",
        "zone": "string"
      },
      "maintenanceWindow": {
        "day": 0,
        "hour": 0,
        "kind": "string",
        "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
      },
      "passwordValidationPolicy": {
        "complexity": "COMPLEXITY_UNSPECIFIED",
        "disallowUsernameSubstring": true,
        "enablePasswordPolicy": true,
        "minLength": 0,
        "passwordChangeInterval": "string",
        "reuseInterval": 0
      },
      "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
      "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
      "settingsVersion": "string",
      "sqlServerAuditConfig": {
        "bucket": "string",
        "kind": "string",
        "retentionInterval": "string",
        "uploadInterval": "string"
      },
      "storageAutoResize": true,
      "storageAutoResizeLimit": "string",
      "tier": "string",
      "timeZone": "string",
      "userLabels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
    "suspensionReason": [
      "SQL_SUSPENSION_REASON_UNSPECIFIED"
    ]
  }'
```

`PATCH /sql/v1beta4/projects/{project}/instances/{instance}`

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

> Body parameter

```json
{
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "connectionName": "string",
  "currentDiskSize": "string",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "etag": "string",
  "failoverReplica": {
    "available": true,
    "name": "string"
  },
  "gceZone": "string",
  "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "ipv6Address": "string",
  "kind": "string",
  "maintenanceVersion": "string",
  "masterInstanceName": "string",
  "maxDiskSize": "string",
  "name": "string",
  "onPremisesConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "dumpFilePath": "string",
    "hostPort": "string",
    "kind": "string",
    "password": "string",
    "sourceInstance": {
      "name": "string",
      "project": "string",
      "region": "string"
    },
    "username": "string"
  },
  "outOfDiskReport": {
    "sqlMinRecommendedIncreaseSizeGb": 0,
    "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
  },
  "project": "string",
  "region": "string",
  "replicaConfiguration": {
    "failoverTarget": true,
    "kind": "string",
    "mysqlReplicaConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "connectRetryInterval": 0,
      "dumpFilePath": "string",
      "kind": "string",
      "masterHeartbeatPeriod": "string",
      "password": "string",
      "sslCipher": "string",
      "username": "string",
      "verifyServerCertificate": true
    }
  },
  "replicaNames": [
    "string"
  ],
  "rootPassword": "string",
  "satisfiesPzs": true,
  "scheduledMaintenance": {
    "canDefer": true,
    "canReschedule": true,
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "secondaryGceZone": "string",
  "selfLink": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  },
  "serviceAccountEmailAddress": "string",
  "settings": {
    "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    "activeDirectoryConfig": {
      "domain": "string",
      "kind": "string"
    },
    "advancedMachineFeatures": {
      "threadsPerCore": 0
    },
    "authorizedGaeApplications": [
      "string"
    ],
    "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    "backupConfiguration": {
      "backupRetentionSettings": {
        "retainedBackups": 0,
        "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
      },
      "binaryLogEnabled": true,
      "enabled": true,
      "kind": "string",
      "location": "string",
      "pointInTimeRecoveryEnabled": true,
      "replicationLogArchivingEnabled": true,
      "startTime": "string",
      "transactionLogRetentionDays": 0
    },
    "collation": "string",
    "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    "crashSafeReplicationEnabled": true,
    "dataDiskSizeGb": "string",
    "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    "databaseFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "databaseReplicationEnabled": true,
    "deletionProtectionEnabled": true,
    "denyMaintenancePeriods": [
      {
        "endDate": "string",
        "startDate": "string",
        "time": "string"
      }
    ],
    "insightsConfig": {
      "queryInsightsEnabled": true,
      "queryPlansPerMinute": 0,
      "queryStringLength": 0,
      "recordApplicationTags": true,
      "recordClientAddress": true
    },
    "ipConfiguration": {
      "allocatedIpRange": "string",
      "authorizedNetworks": [
        {
          "expirationTime": "string",
          "kind": "string",
          "name": "string",
          "value": "string"
        }
      ],
      "enablePrivatePathForGoogleCloudServices": true,
      "ipv4Enabled": true,
      "privateNetwork": "string",
      "requireSsl": true
    },
    "kind": "string",
    "locationPreference": {
      "followGaeApplication": "string",
      "kind": "string",
      "secondaryZone": "string",
      "zone": "string"
    },
    "maintenanceWindow": {
      "day": 0,
      "hour": 0,
      "kind": "string",
      "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
    },
    "passwordValidationPolicy": {
      "complexity": "COMPLEXITY_UNSPECIFIED",
      "disallowUsernameSubstring": true,
      "enablePasswordPolicy": true,
      "minLength": 0,
      "passwordChangeInterval": "string",
      "reuseInterval": 0
    },
    "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
    "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
    "settingsVersion": "string",
    "sqlServerAuditConfig": {
      "bucket": "string",
      "kind": "string",
      "retentionInterval": "string",
      "uploadInterval": "string"
    },
    "storageAutoResize": true,
    "storageAutoResizeLimit": "string",
    "tier": "string",
    "timeZone": "string",
    "userLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
  "suspensionReason": [
    "SQL_SUSPENSION_REASON_UNSPECIFIED"
  ]
}
```

<h3 id="sqlinstancespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[DatabaseInstance](#schemadatabaseinstance)|false|none|
|» backendType|body|string|false|The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.|
|» connectionName|body|string|false|Connection name of the Cloud SQL instance used in connection strings.|
|» currentDiskSize|body|string(int64)|false|The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.|
|» databaseVersion|body|string|false|The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.|
|» diskEncryptionConfiguration|body|[DiskEncryptionConfiguration](#schemadiskencryptionconfiguration)|false|Disk encryption configuration specific to an instance.|
|» diskEncryptionStatus|body|[DiskEncryptionStatus](#schemadiskencryptionstatus)|false|Disk encryption status specific to an instance.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.|
|» failoverReplica|body|object|false|The name and status of the failover replica.|
|» » available|body|boolean|false|The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.|
|» » name|body|string|false|The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID.|
|» gceZone|body|string|false|The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.|
|» instanceType|body|string|false|The instance type.|
|» ipAddresses|body|[[IpMapping](#schemaipmapping)]|false|The assigned IP addresses for the instance.|
|» ipv6Address|body|string|false|The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.|
|» kind|body|string|false|This is always `sql#instance`.|
|» maintenanceVersion|body|string|false|The current software version on the instance.|
|» masterInstanceName|body|string|false|The name of the instance which will act as primary in the replication setup.|
|» maxDiskSize|body|string(int64)|false|The maximum disk size of the instance in bytes.|
|» name|body|string|false|Name of the Cloud SQL instance. This does not include the project ID.|
|» onPremisesConfiguration|body|[OnPremisesConfiguration](#schemaonpremisesconfiguration)|false|Configuration specific to on-premises instances.|
|» outOfDiskReport|body|[SqlOutOfDiskReport](#schemasqloutofdiskreport)|false|This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job|
|» project|body|string|false|The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.|
|» region|body|string|false|The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.|
|» replicaConfiguration|body|[ReplicaConfiguration](#schemareplicaconfiguration)|false|Configuration specific to failover replicas and read replicas.|
|» replicaNames|body|[string]|false|The replicas of the instance.|
|» rootPassword|body|string|false|Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.|
|» satisfiesPzs|body|boolean|false|The status indicating if instance satisfiesPzs. Reserved for future use.|
|» scheduledMaintenance|body|[SqlScheduledMaintenance](#schemasqlscheduledmaintenance)|false|The start time of any upcoming scheduled maintenance for this instance.|
|» secondaryGceZone|body|string|false|The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.|
|» selfLink|body|string|false|The URI of this resource.|
|» serverCaCert|body|[SslCert](#schemasslcert)|false|SSL configuration.|
|» serviceAccountEmailAddress|body|string|false|The service account email address assigned to the instance. \This property is read-only.|
|» settings|body|[Settings](#schemasettings)|false|The user settings.|
|» state|body|string|false|The current serving state of the Cloud SQL instance.|
|» suspensionReason|body|[string]|false|If the instance state is SUSPENDED, the reason for the suspension.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» backendType|SQL_BACKEND_TYPE_UNSPECIFIED|
|» backendType|FIRST_GEN|
|» backendType|SECOND_GEN|
|» backendType|EXTERNAL|
|» databaseVersion|SQL_DATABASE_VERSION_UNSPECIFIED|
|» databaseVersion|MYSQL_5_1|
|» databaseVersion|MYSQL_5_5|
|» databaseVersion|MYSQL_5_6|
|» databaseVersion|MYSQL_5_7|
|» databaseVersion|SQLSERVER_2017_STANDARD|
|» databaseVersion|SQLSERVER_2017_ENTERPRISE|
|» databaseVersion|SQLSERVER_2017_EXPRESS|
|» databaseVersion|SQLSERVER_2017_WEB|
|» databaseVersion|POSTGRES_9_6|
|» databaseVersion|POSTGRES_10|
|» databaseVersion|POSTGRES_11|
|» databaseVersion|POSTGRES_12|
|» databaseVersion|POSTGRES_13|
|» databaseVersion|POSTGRES_14|
|» databaseVersion|MYSQL_8_0|
|» databaseVersion|MYSQL_8_0_18|
|» databaseVersion|MYSQL_8_0_26|
|» databaseVersion|MYSQL_8_0_27|
|» databaseVersion|MYSQL_8_0_28|
|» databaseVersion|MYSQL_8_0_29|
|» databaseVersion|MYSQL_8_0_30|
|» databaseVersion|MYSQL_8_0_31|
|» databaseVersion|MYSQL_8_0_32|
|» databaseVersion|MYSQL_8_0_33|
|» databaseVersion|MYSQL_8_0_34|
|» databaseVersion|MYSQL_8_0_35|
|» databaseVersion|MYSQL_8_0_36|
|» databaseVersion|SQLSERVER_2019_STANDARD|
|» databaseVersion|SQLSERVER_2019_ENTERPRISE|
|» databaseVersion|SQLSERVER_2019_EXPRESS|
|» databaseVersion|SQLSERVER_2019_WEB|
|» instanceType|SQL_INSTANCE_TYPE_UNSPECIFIED|
|» instanceType|CLOUD_SQL_INSTANCE|
|» instanceType|ON_PREMISES_INSTANCE|
|» instanceType|READ_REPLICA_INSTANCE|
|» state|SQL_INSTANCE_STATE_UNSPECIFIED|
|» state|RUNNABLE|
|» state|SUSPENDED|
|» state|PENDING_DELETE|
|» state|PENDING_CREATE|
|» state|MAINTENANCE|
|» state|FAILED|
|» state|ONLINE_MAINTENANCE|
|» suspensionReason|SQL_SUSPENSION_REASON_UNSPECIFIED|
|» suspensionReason|BILLING_ISSUE|
|» suspensionReason|LEGAL_ISSUE|
|» suspensionReason|OPERATIONAL_ISSUE|
|» suspensionReason|KMS_KEY_ISSUE|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.addServerCa

<a id="opIdsql.instances.addServerCa"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/addServerCa \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa`

Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.

<h3 id="sqlinstancesaddserverca-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesaddserverca-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.clone

<a id="opIdsql.instances.clone"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloneContext": {
      "allocatedIpRange": "string",
      "binLogCoordinates": {
        "binLogFileName": "string",
        "binLogPosition": "string",
        "kind": "string"
      },
      "databaseNames": [
        "string"
      ],
      "destinationInstanceName": "string",
      "kind": "string",
      "pitrTimestampMs": "string",
      "pointInTime": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/clone`

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

> Body parameter

```json
{
  "cloneContext": {
    "allocatedIpRange": "string",
    "binLogCoordinates": {
      "binLogFileName": "string",
      "binLogPosition": "string",
      "kind": "string"
    },
    "databaseNames": [
      "string"
    ],
    "destinationInstanceName": "string",
    "kind": "string",
    "pitrTimestampMs": "string",
    "pointInTime": "string"
  }
}
```

<h3 id="sqlinstancesclone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the source as well as the clone Cloud SQL instance.|
|instance|path|string|true|The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.|
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
|body|body|[InstancesCloneRequest](#schemainstancesclonerequest)|false|none|
|» cloneContext|body|[CloneContext](#schemaclonecontext)|false|Contains details about the clone operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesclone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.demoteMaster

<a id="opIdsql.instances.demoteMaster"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/demoteMaster \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "demoteMasterContext": {
      "kind": "string",
      "masterInstanceName": "string",
      "replicaConfiguration": {
        "kind": "string",
        "mysqlReplicaConfiguration": {
          "caCertificate": "string",
          "clientCertificate": "string",
          "clientKey": "string",
          "kind": "string",
          "password": "string",
          "username": "string"
        }
      },
      "skipReplicationSetup": true,
      "verifyGtidConsistency": true
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster`

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

> Body parameter

```json
{
  "demoteMasterContext": {
    "kind": "string",
    "masterInstanceName": "string",
    "replicaConfiguration": {
      "kind": "string",
      "mysqlReplicaConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "kind": "string",
        "password": "string",
        "username": "string"
      }
    },
    "skipReplicationSetup": true,
    "verifyGtidConsistency": true
  }
}
```

<h3 id="sqlinstancesdemotemaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance name.|
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
|body|body|[InstancesDemoteMasterRequest](#schemainstancesdemotemasterrequest)|false|none|
|» demoteMasterContext|body|[DemoteMasterContext](#schemademotemastercontext)|false|Contains details about the demoteMaster operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesdemotemaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.export

<a id="opIdsql.instances.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "exportContext": {
      "bakExportOptions": {
        "stripeCount": 0,
        "striped": true
      },
      "csvExportOptions": {
        "escapeCharacter": "string",
        "fieldsTerminatedBy": "string",
        "linesTerminatedBy": "string",
        "quoteCharacter": "string",
        "selectQuery": "string"
      },
      "databases": [
        "string"
      ],
      "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
      "kind": "string",
      "offload": true,
      "sqlExportOptions": {
        "mysqlExportOptions": {
          "masterData": 0
        },
        "schemaOnly": true,
        "tables": [
          "string"
        ]
      },
      "uri": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/export`

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

> Body parameter

```json
{
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  }
}
```

<h3 id="sqlinstancesexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance to be exported.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[InstancesExportRequest](#schemainstancesexportrequest)|false|none|
|» exportContext|body|[ExportContext](#schemaexportcontext)|false|Contains details about the export operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## sql.instances.failover

<a id="opIdsql.instances.failover"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/failover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "failoverContext": {
      "kind": "string",
      "settingsVersion": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/failover`

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

> Body parameter

```json
{
  "failoverContext": {
    "kind": "string",
    "settingsVersion": "string"
  }
}
```

<h3 id="sqlinstancesfailover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the read replica.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[InstancesFailoverRequest](#schemainstancesfailoverrequest)|false|none|
|» failoverContext|body|[FailoverContext](#schemafailovercontext)|false|Failover Context.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesfailover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.import

<a id="opIdsql.instances.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "importContext": {
      "bakImportOptions": {
        "encryptionOptions": {
          "certPath": "string",
          "pvkPassword": "string",
          "pvkPath": "string"
        },
        "striped": true
      },
      "csvImportOptions": {
        "columns": [
          "string"
        ],
        "escapeCharacter": "string",
        "fieldsTerminatedBy": "string",
        "linesTerminatedBy": "string",
        "quoteCharacter": "string",
        "table": "string"
      },
      "database": "string",
      "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
      "importUser": "string",
      "kind": "string",
      "uri": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/import`

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

> Body parameter

```json
{
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  }
}
```

<h3 id="sqlinstancesimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[InstancesImportRequest](#schemainstancesimportrequest)|false|none|
|» importContext|body|[ImportContext](#schemaimportcontext)|false|Contains details about the import operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## sql.instances.listServerCas

<a id="opIdsql.instances.listServerCas"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/listServerCas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas`

Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

<h3 id="sqlinstanceslistservercas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "activeVersion": "string",
  "certs": [
    {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="sqlinstanceslistservercas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InstancesListServerCasResponse](#schemainstanceslistservercasresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.promoteReplica

<a id="opIdsql.instances.promoteReplica"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/promoteReplica \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica`

Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.

<h3 id="sqlinstancespromotereplica-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the read replica.|
|instance|path|string|true|Cloud SQL read replica instance name.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancespromotereplica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.resetSslConfig

<a id="opIdsql.instances.resetSslConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/resetSslConfig \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig`

Deletes all client certificates and generates a new server SSL certificate for the instance.

<h3 id="sqlinstancesresetsslconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesresetsslconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.restart

<a id="opIdsql.instances.restart"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/restart`

Restarts a Cloud SQL instance.

<h3 id="sqlinstancesrestart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance to be restarted.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.restoreBackup

<a id="opIdsql.instances.restoreBackup"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/restoreBackup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "restoreBackupContext": {
      "backupRunId": "string",
      "instanceId": "string",
      "kind": "string",
      "project": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup`

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

> Body parameter

```json
{
  "restoreBackupContext": {
    "backupRunId": "string",
    "instanceId": "string",
    "kind": "string",
    "project": "string"
  }
}
```

<h3 id="sqlinstancesrestorebackup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[InstancesRestoreBackupRequest](#schemainstancesrestorebackuprequest)|false|none|
|» restoreBackupContext|body|[RestoreBackupContext](#schemarestorebackupcontext)|false|Parameters required to perform the restore backup operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesrestorebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.rotateServerCa

<a id="opIdsql.instances.rotateServerCa"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/rotateServerCa \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rotateServerCaContext": {
      "kind": "string",
      "nextVersion": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa`

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.

> Body parameter

```json
{
  "rotateServerCaContext": {
    "kind": "string",
    "nextVersion": "string"
  }
}
```

<h3 id="sqlinstancesrotateserverca-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[InstancesRotateServerCaRequest](#schemainstancesrotateservercarequest)|false|none|
|» rotateServerCaContext|body|[RotateServerCaContext](#schemarotateservercacontext)|false|Contains details about the rotate server CA operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesrotateserverca-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.startReplica

<a id="opIdsql.instances.startReplica"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/startReplica \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica`

Starts the replication in the read replica instance.

<h3 id="sqlinstancesstartreplica-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the read replica.|
|instance|path|string|true|Cloud SQL read replica instance name.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesstartreplica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.stopReplica

<a id="opIdsql.instances.stopReplica"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/stopReplica \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica`

Stops the replication in the read replica instance.

<h3 id="sqlinstancesstopreplica-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the read replica.|
|instance|path|string|true|Cloud SQL read replica instance name.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancesstopreplica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.instances.truncateLog

<a id="opIdsql.instances.truncateLog"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/truncateLog \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "truncateLogContext": {
      "kind": "string",
      "logType": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog`

Truncate MySQL general and slow query log tables MySQL only.

> Body parameter

```json
{
  "truncateLogContext": {
    "kind": "string",
    "logType": "string"
  }
}
```

<h3 id="sqlinstancestruncatelog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the Cloud SQL project.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[InstancesTruncateLogRequest](#schemainstancestruncatelogrequest)|false|none|
|» truncateLogContext|body|[TruncateLogContext](#schematruncatelogcontext)|false|Contains details about the truncate log operation.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlinstancestruncatelog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-operations">operations</h1>

## sql.operations.list

<a id="opIdsql.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/operations`

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

<h3 id="sqloperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|query|string|false|Cloud SQL instance ID. This does not include the project ID.|
|maxResults|query|integer|false|Maximum number of operations per response.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
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
  "items": [
    {
      "backupContext": {
        "backupId": "string",
        "kind": "string"
      },
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "kind": "string",
            "message": "string"
          }
        ],
        "kind": "string"
      },
      "exportContext": {
        "bakExportOptions": {
          "stripeCount": 0,
          "striped": true
        },
        "csvExportOptions": {
          "escapeCharacter": "string",
          "fieldsTerminatedBy": "string",
          "linesTerminatedBy": "string",
          "quoteCharacter": "string",
          "selectQuery": "string"
        },
        "databases": [
          "string"
        ],
        "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
        "kind": "string",
        "offload": true,
        "sqlExportOptions": {
          "mysqlExportOptions": {
            "masterData": 0
          },
          "schemaOnly": true,
          "tables": [
            "string"
          ]
        },
        "uri": "string"
      },
      "importContext": {
        "bakImportOptions": {
          "encryptionOptions": {
            "certPath": "string",
            "pvkPassword": "string",
            "pvkPath": "string"
          },
          "striped": true
        },
        "csvImportOptions": {
          "columns": [
            "string"
          ],
          "escapeCharacter": "string",
          "fieldsTerminatedBy": "string",
          "linesTerminatedBy": "string",
          "quoteCharacter": "string",
          "table": "string"
        },
        "database": "string",
        "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
        "importUser": "string",
        "kind": "string",
        "uri": "string"
      },
      "insertTime": "string",
      "kind": "string",
      "name": "string",
      "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
      "selfLink": "string",
      "startTime": "string",
      "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
      "targetId": "string",
      "targetLink": "string",
      "targetProject": "string",
      "user": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="sqloperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OperationsListResponse](#schemaoperationslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.operations.get

<a id="opIdsql.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/operations/{operation}`

Retrieves an instance operation that has been performed on an instance.

<h3 id="sqloperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|operation|path|string|true|Instance operation ID.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqloperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-projects">projects</h1>

## sql.projects.instances.getDiskShrinkConfig

<a id="opIdsql.projects.instances.getDiskShrinkConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/getDiskShrinkConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig`

Get Disk Shrink Config for a given instance.

<h3 id="sqlprojectsinstancesgetdiskshrinkconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "minimalTargetSizeGb": "string"
}
```

<h3 id="sqlprojectsinstancesgetdiskshrinkconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SqlInstancesGetDiskShrinkConfigResponse](#schemasqlinstancesgetdiskshrinkconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.projects.instances.performDiskShrink

<a id="opIdsql.projects.instances.performDiskShrink"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/performDiskShrink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "targetSizeGb": "string"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink`

Perform Disk Shrink on primary instance.

> Body parameter

```json
{
  "targetSizeGb": "string"
}
```

<h3 id="sqlprojectsinstancesperformdiskshrink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[PerformDiskShrinkContext](#schemaperformdiskshrinkcontext)|false|none|
|» targetSizeGb|body|string(int64)|false|The target disk shrink size in GigaBytes.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlprojectsinstancesperformdiskshrink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.projects.instances.rescheduleMaintenance

<a id="opIdsql.projects.instances.rescheduleMaintenance"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/rescheduleMaintenance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reschedule": {
      "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
      "scheduleTime": "string"
    }
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance`

Reschedules the maintenance on the given instance.

> Body parameter

```json
{
  "reschedule": {
    "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
    "scheduleTime": "string"
  }
}
```

<h3 id="sqlprojectsinstancesreschedulemaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[SqlInstancesRescheduleMaintenanceRequestBody](#schemasqlinstancesreschedulemaintenancerequestbody)|false|none|
|» reschedule|body|[Reschedule](#schemareschedule)|false|Required. The type of the reschedule the user wants.|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlprojectsinstancesreschedulemaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.projects.instances.resetReplicaSize

<a id="opIdsql.projects.instances.resetReplicaSize"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/resetReplicaSize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/resetReplicaSize`

Reset Replica Size to primary instance disk size.

> Body parameter

```json
{}
```

<h3 id="sqlprojectsinstancesresetreplicasize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the read replica.|
|instance|path|string|true|Cloud SQL read replica instance name.|
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
|body|body|[SqlInstancesResetReplicaSizeRequest](#schemasqlinstancesresetreplicasizerequest)|false|none|

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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlprojectsinstancesresetreplicasize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.projects.instances.startExternalSync

<a id="opIdsql.projects.instances.startExternalSync"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/startExternalSync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mysqlSyncConfig": {
      "initialSyncFlags": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    },
    "skipVerification": true,
    "syncMode": "EXTERNAL_SYNC_MODE_UNSPECIFIED"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync`

Start External primary instance migration.

> Body parameter

```json
{
  "mysqlSyncConfig": {
    "initialSyncFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "skipVerification": true,
  "syncMode": "EXTERNAL_SYNC_MODE_UNSPECIFIED"
}
```

<h3 id="sqlprojectsinstancesstartexternalsync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[SqlInstancesStartExternalSyncRequest](#schemasqlinstancesstartexternalsyncrequest)|false|none|
|» mysqlSyncConfig|body|[MySqlSyncConfig](#schemamysqlsyncconfig)|false|MySQL-specific settings for start external sync.|
|» skipVerification|body|boolean|false|Whether to skip the verification step (VESS).|
|» syncMode|body|string|false|External sync mode.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» syncMode|EXTERNAL_SYNC_MODE_UNSPECIFIED|
|» syncMode|ONLINE|
|» syncMode|OFFLINE|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlprojectsinstancesstartexternalsync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.projects.instances.verifyExternalSyncSettings

<a id="opIdsql.projects.instances.verifyExternalSyncSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/verifyExternalSyncSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mysqlSyncConfig": {
      "initialSyncFlags": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    },
    "syncMode": "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    "verifyConnectionOnly": true,
    "verifyReplicationOnly": true
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings`

Verify External primary instance external sync settings.

> Body parameter

```json
{
  "mysqlSyncConfig": {
    "initialSyncFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "syncMode": "EXTERNAL_SYNC_MODE_UNSPECIFIED",
  "verifyConnectionOnly": true,
  "verifyReplicationOnly": true
}
```

<h3 id="sqlprojectsinstancesverifyexternalsyncsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[SqlInstancesVerifyExternalSyncSettingsRequest](#schemasqlinstancesverifyexternalsyncsettingsrequest)|false|none|
|» mysqlSyncConfig|body|[MySqlSyncConfig](#schemamysqlsyncconfig)|false|Optional. MySQL-specific settings for start external sync.|
|» syncMode|body|string|false|External sync mode|
|» verifyConnectionOnly|body|boolean|false|Flag to enable verifying connection only|
|» verifyReplicationOnly|body|boolean|false|Optional. Flag to verify settings required by replication setup only|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» syncMode|EXTERNAL_SYNC_MODE_UNSPECIFIED|
|» syncMode|ONLINE|
|» syncMode|OFFLINE|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "detail": "string",
      "kind": "string",
      "type": "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "warnings": [
    {
      "detail": "string",
      "kind": "string",
      "type": "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="sqlprojectsinstancesverifyexternalsyncsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SqlInstancesVerifyExternalSyncSettingsResponse](#schemasqlinstancesverifyexternalsyncsettingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-sslcerts">sslCerts</h1>

## sql.sslCerts.createEphemeral

<a id="opIdsql.sslCerts.createEphemeral"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/createEphemeral \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access_token": "string",
    "public_key": "string"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral`

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

> Body parameter

```json
{
  "access_token": "string",
  "public_key": "string"
}
```

<h3 id="sqlsslcertscreateephemeral-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the Cloud SQL project.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[SslCertsCreateEphemeralRequest](#schemasslcertscreateephemeralrequest)|false|none|
|» access_token|body|string|false|Access token to include in the signed certificate.|
|» public_key|body|string|false|PEM encoded public key to include in the signed certificate.|

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
  "cert": "string",
  "certSerialNumber": "string",
  "commonName": "string",
  "createTime": "string",
  "expirationTime": "string",
  "instance": "string",
  "kind": "string",
  "selfLink": "string",
  "sha1Fingerprint": "string"
}
```

<h3 id="sqlsslcertscreateephemeral-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SslCert](#schemasslcert)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.sslCerts.list

<a id="opIdsql.sslCerts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/sslCerts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts`

Lists all of the current SSL certificates for the instance.

<h3 id="sqlsslcertslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
  "items": [
    {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="sqlsslcertslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SslCertsListResponse](#schemasslcertslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.sslCerts.insert

<a id="opIdsql.sslCerts.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/sslCerts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "commonName": "string"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts`

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

> Body parameter

```json
{
  "commonName": "string"
}
```

<h3 id="sqlsslcertsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
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
|body|body|[SslCertsInsertRequest](#schemasslcertsinsertrequest)|false|none|
|» commonName|body|string|false|User supplied name. Must be a distinct name from the other certificates for this instance.|

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
  "clientCert": {
    "certInfo": {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    },
    "certPrivateKey": "string"
  },
  "kind": "string",
  "operation": {
    "backupContext": {
      "backupId": "string",
      "kind": "string"
    },
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "kind": "string",
          "message": "string"
        }
      ],
      "kind": "string"
    },
    "exportContext": {
      "bakExportOptions": {
        "stripeCount": 0,
        "striped": true
      },
      "csvExportOptions": {
        "escapeCharacter": "string",
        "fieldsTerminatedBy": "string",
        "linesTerminatedBy": "string",
        "quoteCharacter": "string",
        "selectQuery": "string"
      },
      "databases": [
        "string"
      ],
      "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
      "kind": "string",
      "offload": true,
      "sqlExportOptions": {
        "mysqlExportOptions": {
          "masterData": 0
        },
        "schemaOnly": true,
        "tables": [
          "string"
        ]
      },
      "uri": "string"
    },
    "importContext": {
      "bakImportOptions": {
        "encryptionOptions": {
          "certPath": "string",
          "pvkPassword": "string",
          "pvkPath": "string"
        },
        "striped": true
      },
      "csvImportOptions": {
        "columns": [
          "string"
        ],
        "escapeCharacter": "string",
        "fieldsTerminatedBy": "string",
        "linesTerminatedBy": "string",
        "quoteCharacter": "string",
        "table": "string"
      },
      "database": "string",
      "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
      "importUser": "string",
      "kind": "string",
      "uri": "string"
    },
    "insertTime": "string",
    "kind": "string",
    "name": "string",
    "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
    "selfLink": "string",
    "startTime": "string",
    "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
    "targetId": "string",
    "targetLink": "string",
    "targetProject": "string",
    "user": "string"
  },
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  }
}
```

<h3 id="sqlsslcertsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SslCertsInsertResponse](#schemasslcertsinsertresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.sslCerts.get

<a id="opIdsql.sslCerts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/sslCerts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}`

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

<h3 id="sqlsslcertsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
|sha1Fingerprint|path|string|true|Sha1 FingerPrint.|
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
  "cert": "string",
  "certSerialNumber": "string",
  "commonName": "string",
  "createTime": "string",
  "expirationTime": "string",
  "instance": "string",
  "kind": "string",
  "selfLink": "string",
  "sha1Fingerprint": "string"
}
```

<h3 id="sqlsslcertsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SslCert](#schemasslcert)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.sslCerts.delete

<a id="opIdsql.sslCerts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/sslCerts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}`

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

<h3 id="sqlsslcertsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Cloud SQL instance ID. This does not include the project ID.|
|sha1Fingerprint|path|string|true|Sha1 FingerPrint.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlsslcertsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-tiers">tiers</h1>

## sql.tiers.list

<a id="opIdsql.tiers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/tiers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/tiers`

Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

<h3 id="sqltierslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project for which to list tiers.|
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
  "items": [
    {
      "DiskQuota": "string",
      "RAM": "string",
      "kind": "string",
      "region": [
        "string"
      ],
      "tier": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="sqltierslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TiersListResponse](#schematierslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

<h1 id="cloud-sql-admin-api-users">users</h1>

## sql.users.list

<a id="opIdsql.users.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/users`

Lists users in the specified Cloud SQL instance.

<h3 id="sqluserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
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
  "items": [
    {
      "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
      "etag": "string",
      "host": "string",
      "instance": "string",
      "kind": "string",
      "name": "string",
      "password": "string",
      "passwordPolicy": {
        "allowedFailedAttempts": 0,
        "enableFailedAttemptsCheck": true,
        "enablePasswordVerification": true,
        "passwordExpirationDuration": "string",
        "status": {
          "locked": true,
          "passwordExpirationTime": "string"
        }
      },
      "project": "string",
      "sqlserverUserDetails": {
        "disabled": true,
        "serverRoles": [
          "string"
        ]
      },
      "type": "BUILT_IN"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="sqluserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UsersListResponse](#schemauserslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.users.update

<a id="opIdsql.users.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/users \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
    "etag": "string",
    "host": "string",
    "instance": "string",
    "kind": "string",
    "name": "string",
    "password": "string",
    "passwordPolicy": {
      "allowedFailedAttempts": 0,
      "enableFailedAttemptsCheck": true,
      "enablePasswordVerification": true,
      "passwordExpirationDuration": "string"
    },
    "project": "string",
    "sqlserverUserDetails": {
      "disabled": true,
      "serverRoles": [
        "string"
      ]
    },
    "type": "BUILT_IN"
  }'
```

`PUT /sql/v1beta4/projects/{project}/instances/{instance}/users`

Updates an existing user in a Cloud SQL instance.

> Body parameter

```json
{
  "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
  "etag": "string",
  "host": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "password": "string",
  "passwordPolicy": {
    "allowedFailedAttempts": 0,
    "enableFailedAttemptsCheck": true,
    "enablePasswordVerification": true,
    "passwordExpirationDuration": "string"
  },
  "project": "string",
  "sqlserverUserDetails": {
    "disabled": true,
    "serverRoles": [
      "string"
    ]
  },
  "type": "BUILT_IN"
}
```

<h3 id="sqlusersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|host|query|string|false|Optional. Host of the user in the instance.|
|name|query|string|false|Name of the user in the instance.|
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
|body|body|[User](#schemauser)|false|none|
|» dualPasswordType|body|string|false|Dual password status for the user.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API.|
|» host|body|string|false|Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.|
|» instance|body|string|false|The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL.|
|» kind|body|string|false|This is always `sql#user`.|
|» name|body|string|false|The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.|
|» password|body|string|false|The password for the user.|
|» passwordPolicy|body|[UserPasswordValidationPolicy](#schemauserpasswordvalidationpolicy)|false|User level password validation policy.|
|» project|body|string|false|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL.|
|» sqlserverUserDetails|body|[SqlServerUserDetails](#schemasqlserveruserdetails)|false|Represents a Sql Server user on the Cloud SQL instance.|
|» type|body|string|false|The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dualPasswordType|DUAL_PASSWORD_TYPE_UNSPECIFIED|
|» dualPasswordType|NO_MODIFY_DUAL_PASSWORD|
|» dualPasswordType|NO_DUAL_PASSWORD|
|» dualPasswordType|DUAL_PASSWORD|
|» type|BUILT_IN|
|» type|CLOUD_IAM_USER|
|» type|CLOUD_IAM_SERVICE_ACCOUNT|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlusersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.users.insert

<a id="opIdsql.users.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
    "etag": "string",
    "host": "string",
    "instance": "string",
    "kind": "string",
    "name": "string",
    "password": "string",
    "passwordPolicy": {
      "allowedFailedAttempts": 0,
      "enableFailedAttemptsCheck": true,
      "enablePasswordVerification": true,
      "passwordExpirationDuration": "string"
    },
    "project": "string",
    "sqlserverUserDetails": {
      "disabled": true,
      "serverRoles": [
        "string"
      ]
    },
    "type": "BUILT_IN"
  }'
```

`POST /sql/v1beta4/projects/{project}/instances/{instance}/users`

Creates a new user in a Cloud SQL instance.

> Body parameter

```json
{
  "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
  "etag": "string",
  "host": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "password": "string",
  "passwordPolicy": {
    "allowedFailedAttempts": 0,
    "enableFailedAttemptsCheck": true,
    "enablePasswordVerification": true,
    "passwordExpirationDuration": "string"
  },
  "project": "string",
  "sqlserverUserDetails": {
    "disabled": true,
    "serverRoles": [
      "string"
    ]
  },
  "type": "BUILT_IN"
}
```

<h3 id="sqlusersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
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
|body|body|[User](#schemauser)|false|none|
|» dualPasswordType|body|string|false|Dual password status for the user.|
|» etag|body|string|false|This field is deprecated and will be removed from a future version of the API.|
|» host|body|string|false|Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.|
|» instance|body|string|false|The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL.|
|» kind|body|string|false|This is always `sql#user`.|
|» name|body|string|false|The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.|
|» password|body|string|false|The password for the user.|
|» passwordPolicy|body|[UserPasswordValidationPolicy](#schemauserpasswordvalidationpolicy)|false|User level password validation policy.|
|» project|body|string|false|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL.|
|» sqlserverUserDetails|body|[SqlServerUserDetails](#schemasqlserveruserdetails)|false|Represents a Sql Server user on the Cloud SQL instance.|
|» type|body|string|false|The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dualPasswordType|DUAL_PASSWORD_TYPE_UNSPECIFIED|
|» dualPasswordType|NO_MODIFY_DUAL_PASSWORD|
|» dualPasswordType|NO_DUAL_PASSWORD|
|» dualPasswordType|DUAL_PASSWORD|
|» type|BUILT_IN|
|» type|CLOUD_IAM_USER|
|» type|CLOUD_IAM_SERVICE_ACCOUNT|

> Example responses

> 200 Response

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlusersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.users.delete

<a id="opIdsql.users.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/users \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sql/v1beta4/projects/{project}/instances/{instance}/users`

Deletes a user from a Cloud SQL instance.

<h3 id="sqlusersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|host|query|string|false|Host of the user in the instance.|
|name|query|string|false|Name of the user in the instance.|
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
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

<h3 id="sqlusersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

## sql.users.get

<a id="opIdsql.users.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/sql/v1beta4/projects/string/instances/string/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sql/v1beta4/projects/{project}/instances/{instance}/users/{name}`

Retrieves a resource containing information about a user.

<h3 id="sqlusersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID of the project that contains the instance.|
|instance|path|string|true|Database instance ID. This does not include the project ID.|
|name|path|string|true|User of the instance.|
|host|query|string|false|Host of a user of the instance.|
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
  "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
  "etag": "string",
  "host": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "password": "string",
  "passwordPolicy": {
    "allowedFailedAttempts": 0,
    "enableFailedAttemptsCheck": true,
    "enablePasswordVerification": true,
    "passwordExpirationDuration": "string",
    "status": {
      "locked": true,
      "passwordExpirationTime": "string"
    }
  },
  "project": "string",
  "sqlserverUserDetails": {
    "disabled": true,
    "serverRoles": [
      "string"
    ]
  },
  "type": "BUILT_IN"
}
```

<h3 id="sqlusersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sqlservice.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sqlservice.admin )
</aside>

# Schemas

<h2 id="tocS_AclEntry">AclEntry</h2>
<!-- backwards compatibility -->
<a id="schemaaclentry"></a>
<a id="schema_AclEntry"></a>
<a id="tocSaclentry"></a>
<a id="tocsaclentry"></a>

```json
{
  "expirationTime": "string",
  "kind": "string",
  "name": "string",
  "value": "string"
}
```

An entry for an Access Control list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationTime|string(google-datetime)|false|none|The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|kind|string|false|none|This is always `sql#aclEntry`.|
|name|string|false|none|Optional. A label to identify this entry.|
|value|string|false|none|The allowlisted value for the access control list.|

<h2 id="tocS_AdvancedMachineFeatures">AdvancedMachineFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedmachinefeatures"></a>
<a id="schema_AdvancedMachineFeatures"></a>
<a id="tocSadvancedmachinefeatures"></a>
<a id="tocsadvancedmachinefeatures"></a>

```json
{
  "threadsPerCore": 0
}
```

Specifies options for controlling advanced machine features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threadsPerCore|integer(int32)|false|none|The number of threads per physical core.|

<h2 id="tocS_ApiWarning">ApiWarning</h2>
<!-- backwards compatibility -->
<a id="schemaapiwarning"></a>
<a id="schema_ApiWarning"></a>
<a id="tocSapiwarning"></a>
<a id="tocsapiwarning"></a>

```json
{
  "code": "SQL_API_WARNING_CODE_UNSPECIFIED",
  "message": "string",
  "region": "string"
}
```

An Admin API warning message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code to uniquely identify the warning type.|
|message|string|false|none|The warning message.|
|region|string|false|none|The region name for REGION_UNREACHABLE warning.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|SQL_API_WARNING_CODE_UNSPECIFIED|
|code|REGION_UNREACHABLE|
|code|MAX_RESULTS_EXCEEDS_LIMIT|

<h2 id="tocS_BackupConfiguration">BackupConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabackupconfiguration"></a>
<a id="schema_BackupConfiguration"></a>
<a id="tocSbackupconfiguration"></a>
<a id="tocsbackupconfiguration"></a>

```json
{
  "backupRetentionSettings": {
    "retainedBackups": 0,
    "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
  },
  "binaryLogEnabled": true,
  "enabled": true,
  "kind": "string",
  "location": "string",
  "pointInTimeRecoveryEnabled": true,
  "replicationLogArchivingEnabled": true,
  "startTime": "string",
  "transactionLogRetentionDays": 0
}
```

Database instance backup configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupRetentionSettings|[BackupRetentionSettings](#schemabackupretentionsettings)|false|none|Backup retention settings.|
|binaryLogEnabled|boolean|false|none|(MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well.|
|enabled|boolean|false|none|Whether this configuration is enabled.|
|kind|string|false|none|This is always `sql#backupConfiguration`.|
|location|string|false|none|Location of the backup|
|pointInTimeRecoveryEnabled|boolean|false|none|(Postgres only) Whether point in time recovery is enabled.|
|replicationLogArchivingEnabled|boolean|false|none|Reserved for future use.|
|startTime|string|false|none|Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`.|
|transactionLogRetentionDays|integer(int32)|false|none|The number of days of transaction logs we retain for point in time restore, from 1-7.|

<h2 id="tocS_BackupContext">BackupContext</h2>
<!-- backwards compatibility -->
<a id="schemabackupcontext"></a>
<a id="schema_BackupContext"></a>
<a id="tocSbackupcontext"></a>
<a id="tocsbackupcontext"></a>

```json
{
  "backupId": "string",
  "kind": "string"
}
```

Backup context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupId|string(int64)|false|none|The identifier of the backup.|
|kind|string|false|none|This is always `sql#backupContext`.|

<h2 id="tocS_BackupRetentionSettings">BackupRetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemabackupretentionsettings"></a>
<a id="schema_BackupRetentionSettings"></a>
<a id="tocSbackupretentionsettings"></a>
<a id="tocsbackupretentionsettings"></a>

```json
{
  "retainedBackups": 0,
  "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
}
```

We currently only support backup retention by specifying the number of backups we will retain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retainedBackups|integer(int32)|false|none|Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups.|
|retentionUnit|string|false|none|The unit that 'retained_backups' represents.|

#### Enumerated Values

|Property|Value|
|---|---|
|retentionUnit|RETENTION_UNIT_UNSPECIFIED|
|retentionUnit|COUNT|

<h2 id="tocS_BackupRun">BackupRun</h2>
<!-- backwards compatibility -->
<a id="schemabackuprun"></a>
<a id="schema_BackupRun"></a>
<a id="tocSbackuprun"></a>
<a id="tocsbackuprun"></a>

```json
{
  "backupKind": "SQL_BACKUP_KIND_UNSPECIFIED",
  "description": "string",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "endTime": "string",
  "enqueuedTime": "string",
  "error": {
    "code": "string",
    "kind": "string",
    "message": "string"
  },
  "id": "string",
  "instance": "string",
  "kind": "string",
  "location": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
  "timeZone": "string",
  "type": "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
  "windowStartTime": "string"
}
```

A BackupRun resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupKind|string|false|none|Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.|
|description|string|false|none|The description of this run, only applicable to on-demand backups.|
|diskEncryptionConfiguration|[DiskEncryptionConfiguration](#schemadiskencryptionconfiguration)|false|none|Encryption configuration specific to a backup.|
|diskEncryptionStatus|[DiskEncryptionStatus](#schemadiskencryptionstatus)|false|none|Encryption status specific to a backup.|
|endTime|string(google-datetime)|false|none|The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|enqueuedTime|string(google-datetime)|false|none|The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|error|[OperationError](#schemaoperationerror)|false|none|Information about why the backup operation failed. This is only present if the run has the FAILED status.|
|id|string(int64)|false|none|The identifier for this backup run. Unique only for a specific Cloud SQL instance.|
|instance|string|false|none|Name of the database instance.|
|kind|string|false|none|This is always `sql#backupRun`.|
|location|string|false|none|Location of the backups.|
|selfLink|string|false|none|The URI of this resource.|
|startTime|string(google-datetime)|false|none|The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|status|string|false|none|The status of this run.|
|timeZone|string|false|none|Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.|
|type|string|false|none|The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.|
|windowStartTime|string(google-datetime)|false|none|The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|

#### Enumerated Values

|Property|Value|
|---|---|
|backupKind|SQL_BACKUP_KIND_UNSPECIFIED|
|backupKind|SNAPSHOT|
|backupKind|PHYSICAL|
|status|SQL_BACKUP_RUN_STATUS_UNSPECIFIED|
|status|ENQUEUED|
|status|OVERDUE|
|status|RUNNING|
|status|FAILED|
|status|SUCCESSFUL|
|status|SKIPPED|
|status|DELETION_PENDING|
|status|DELETION_FAILED|
|status|DELETED|
|type|SQL_BACKUP_RUN_TYPE_UNSPECIFIED|
|type|AUTOMATED|
|type|ON_DEMAND|

<h2 id="tocS_BackupRunsListResponse">BackupRunsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackuprunslistresponse"></a>
<a id="schema_BackupRunsListResponse"></a>
<a id="tocSbackuprunslistresponse"></a>
<a id="tocsbackuprunslistresponse"></a>

```json
{
  "items": [
    {
      "backupKind": "SQL_BACKUP_KIND_UNSPECIFIED",
      "description": "string",
      "diskEncryptionConfiguration": {
        "kind": "string",
        "kmsKeyName": "string"
      },
      "diskEncryptionStatus": {
        "kind": "string",
        "kmsKeyVersionName": "string"
      },
      "endTime": "string",
      "enqueuedTime": "string",
      "error": {
        "code": "string",
        "kind": "string",
        "message": "string"
      },
      "id": "string",
      "instance": "string",
      "kind": "string",
      "location": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "SQL_BACKUP_RUN_STATUS_UNSPECIFIED",
      "timeZone": "string",
      "type": "SQL_BACKUP_RUN_TYPE_UNSPECIFIED",
      "windowStartTime": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

Backup run list results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BackupRun](#schemabackuprun)]|false|none|A list of backup runs in reverse chronological order of the enqueued time.|
|kind|string|false|none|This is always `sql#backupRunsList`.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_BinLogCoordinates">BinLogCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemabinlogcoordinates"></a>
<a id="schema_BinLogCoordinates"></a>
<a id="tocSbinlogcoordinates"></a>
<a id="tocsbinlogcoordinates"></a>

```json
{
  "binLogFileName": "string",
  "binLogPosition": "string",
  "kind": "string"
}
```

Binary log coordinates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binLogFileName|string|false|none|Name of the binary log file for a Cloud SQL instance.|
|binLogPosition|string(int64)|false|none|Position (offset) within the binary log file.|
|kind|string|false|none|This is always `sql#binLogCoordinates`.|

<h2 id="tocS_CloneContext">CloneContext</h2>
<!-- backwards compatibility -->
<a id="schemaclonecontext"></a>
<a id="schema_CloneContext"></a>
<a id="tocSclonecontext"></a>
<a id="tocsclonecontext"></a>

```json
{
  "allocatedIpRange": "string",
  "binLogCoordinates": {
    "binLogFileName": "string",
    "binLogPosition": "string",
    "kind": "string"
  },
  "databaseNames": [
    "string"
  ],
  "destinationInstanceName": "string",
  "kind": "string",
  "pitrTimestampMs": "string",
  "pointInTime": "string"
}
```

Database instance clone context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatedIpRange|string|false|none|The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use.|
|binLogCoordinates|[BinLogCoordinates](#schemabinlogcoordinates)|false|none|Binary log coordinates, if specified, identify the position up to which the source instance is cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates.|
|databaseNames|[string]|false|none|(SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty.|
|destinationInstanceName|string|false|none|Name of the Cloud SQL instance to be created as a clone.|
|kind|string|false|none|This is always `sql#cloneContext`.|
|pitrTimestampMs|string(int64)|false|none|Reserved for future use.|
|pointInTime|string(google-datetime)|false|none|Timestamp, if specified, identifies the time to which the source instance is cloned.|

<h2 id="tocS_ConnectSettings">ConnectSettings</h2>
<!-- backwards compatibility -->
<a id="schemaconnectsettings"></a>
<a id="schema_ConnectSettings"></a>
<a id="tocSconnectsettings"></a>
<a id="tocsconnectsettings"></a>

```json
{
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "region": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  }
}
```

Connect settings retrieval response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendType|string|false|none|`SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.|
|databaseVersion|string|false|none|The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`.|
|ipAddresses|[[IpMapping](#schemaipmapping)]|false|none|The assigned IP addresses for the instance.|
|kind|string|false|none|This is always `sql#connectSettings`.|
|region|string|false|none|The cloud region for the instance. e.g. `us-central1`, `europe-west1`. The region cannot be changed after instance creation.|
|serverCaCert|[SslCert](#schemasslcert)|false|none|SSL configuration.|

#### Enumerated Values

|Property|Value|
|---|---|
|backendType|SQL_BACKEND_TYPE_UNSPECIFIED|
|backendType|FIRST_GEN|
|backendType|SECOND_GEN|
|backendType|EXTERNAL|
|databaseVersion|SQL_DATABASE_VERSION_UNSPECIFIED|
|databaseVersion|MYSQL_5_1|
|databaseVersion|MYSQL_5_5|
|databaseVersion|MYSQL_5_6|
|databaseVersion|MYSQL_5_7|
|databaseVersion|SQLSERVER_2017_STANDARD|
|databaseVersion|SQLSERVER_2017_ENTERPRISE|
|databaseVersion|SQLSERVER_2017_EXPRESS|
|databaseVersion|SQLSERVER_2017_WEB|
|databaseVersion|POSTGRES_9_6|
|databaseVersion|POSTGRES_10|
|databaseVersion|POSTGRES_11|
|databaseVersion|POSTGRES_12|
|databaseVersion|POSTGRES_13|
|databaseVersion|POSTGRES_14|
|databaseVersion|MYSQL_8_0|
|databaseVersion|MYSQL_8_0_18|
|databaseVersion|MYSQL_8_0_26|
|databaseVersion|MYSQL_8_0_27|
|databaseVersion|MYSQL_8_0_28|
|databaseVersion|MYSQL_8_0_29|
|databaseVersion|MYSQL_8_0_30|
|databaseVersion|MYSQL_8_0_31|
|databaseVersion|MYSQL_8_0_32|
|databaseVersion|MYSQL_8_0_33|
|databaseVersion|MYSQL_8_0_34|
|databaseVersion|MYSQL_8_0_35|
|databaseVersion|MYSQL_8_0_36|
|databaseVersion|SQLSERVER_2019_STANDARD|
|databaseVersion|SQLSERVER_2019_ENTERPRISE|
|databaseVersion|SQLSERVER_2019_EXPRESS|
|databaseVersion|SQLSERVER_2019_WEB|

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "charset": "string",
  "collation": "string",
  "etag": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "project": "string",
  "selfLink": "string",
  "sqlserverDatabaseDetails": {
    "compatibilityLevel": 0,
    "recoveryModel": "string"
  }
}
```

Represents a SQL database on the Cloud SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charset|string|false|none|The Cloud SQL charset value.|
|collation|string|false|none|The Cloud SQL collation value.|
|etag|string|false|none|This field is deprecated and will be removed from a future version of the API.|
|instance|string|false|none|The name of the Cloud SQL instance. This does not include the project ID.|
|kind|string|false|none|This is always `sql#database`.|
|name|string|false|none|The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.|
|project|string|false|none|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.|
|selfLink|string|false|none|The URI of this resource.|
|sqlserverDatabaseDetails|[SqlServerDatabaseDetails](#schemasqlserverdatabasedetails)|false|none|Represents a Sql Server database on the Cloud SQL instance.|

<h2 id="tocS_DatabaseFlags">DatabaseFlags</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseflags"></a>
<a id="schema_DatabaseFlags"></a>
<a id="tocSdatabaseflags"></a>
<a id="tocsdatabaseflags"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Database flags for Cloud SQL instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation.|
|value|string|false|none|The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value.|

<h2 id="tocS_DatabaseInstance">DatabaseInstance</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseinstance"></a>
<a id="schema_DatabaseInstance"></a>
<a id="tocSdatabaseinstance"></a>
<a id="tocsdatabaseinstance"></a>

```json
{
  "availableMaintenanceVersions": [
    "string"
  ],
  "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
  "connectionName": "string",
  "createTime": "string",
  "currentDiskSize": "string",
  "databaseInstalledVersion": "string",
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "diskEncryptionConfiguration": {
    "kind": "string",
    "kmsKeyName": "string"
  },
  "diskEncryptionStatus": {
    "kind": "string",
    "kmsKeyVersionName": "string"
  },
  "etag": "string",
  "failoverReplica": {
    "available": true,
    "name": "string"
  },
  "gceZone": "string",
  "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
  "ipAddresses": [
    {
      "ipAddress": "string",
      "timeToRetire": "string",
      "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    }
  ],
  "ipv6Address": "string",
  "kind": "string",
  "maintenanceVersion": "string",
  "masterInstanceName": "string",
  "maxDiskSize": "string",
  "name": "string",
  "onPremisesConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "dumpFilePath": "string",
    "hostPort": "string",
    "kind": "string",
    "password": "string",
    "sourceInstance": {
      "name": "string",
      "project": "string",
      "region": "string"
    },
    "username": "string"
  },
  "outOfDiskReport": {
    "sqlMinRecommendedIncreaseSizeGb": 0,
    "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
  },
  "project": "string",
  "region": "string",
  "replicaConfiguration": {
    "failoverTarget": true,
    "kind": "string",
    "mysqlReplicaConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "connectRetryInterval": 0,
      "dumpFilePath": "string",
      "kind": "string",
      "masterHeartbeatPeriod": "string",
      "password": "string",
      "sslCipher": "string",
      "username": "string",
      "verifyServerCertificate": true
    }
  },
  "replicaNames": [
    "string"
  ],
  "rootPassword": "string",
  "satisfiesPzs": true,
  "scheduledMaintenance": {
    "canDefer": true,
    "canReschedule": true,
    "scheduleDeadlineTime": "string",
    "startTime": "string"
  },
  "secondaryGceZone": "string",
  "selfLink": "string",
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  },
  "serviceAccountEmailAddress": "string",
  "settings": {
    "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    "activeDirectoryConfig": {
      "domain": "string",
      "kind": "string"
    },
    "advancedMachineFeatures": {
      "threadsPerCore": 0
    },
    "authorizedGaeApplications": [
      "string"
    ],
    "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    "backupConfiguration": {
      "backupRetentionSettings": {
        "retainedBackups": 0,
        "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
      },
      "binaryLogEnabled": true,
      "enabled": true,
      "kind": "string",
      "location": "string",
      "pointInTimeRecoveryEnabled": true,
      "replicationLogArchivingEnabled": true,
      "startTime": "string",
      "transactionLogRetentionDays": 0
    },
    "collation": "string",
    "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    "crashSafeReplicationEnabled": true,
    "dataDiskSizeGb": "string",
    "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    "databaseFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "databaseReplicationEnabled": true,
    "deletionProtectionEnabled": true,
    "denyMaintenancePeriods": [
      {
        "endDate": "string",
        "startDate": "string",
        "time": "string"
      }
    ],
    "insightsConfig": {
      "queryInsightsEnabled": true,
      "queryPlansPerMinute": 0,
      "queryStringLength": 0,
      "recordApplicationTags": true,
      "recordClientAddress": true
    },
    "ipConfiguration": {
      "allocatedIpRange": "string",
      "authorizedNetworks": [
        {
          "expirationTime": "string",
          "kind": "string",
          "name": "string",
          "value": "string"
        }
      ],
      "enablePrivatePathForGoogleCloudServices": true,
      "ipv4Enabled": true,
      "privateNetwork": "string",
      "requireSsl": true
    },
    "kind": "string",
    "locationPreference": {
      "followGaeApplication": "string",
      "kind": "string",
      "secondaryZone": "string",
      "zone": "string"
    },
    "maintenanceWindow": {
      "day": 0,
      "hour": 0,
      "kind": "string",
      "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
    },
    "passwordValidationPolicy": {
      "complexity": "COMPLEXITY_UNSPECIFIED",
      "disallowUsernameSubstring": true,
      "enablePasswordPolicy": true,
      "minLength": 0,
      "passwordChangeInterval": "string",
      "reuseInterval": 0
    },
    "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
    "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
    "settingsVersion": "string",
    "sqlServerAuditConfig": {
      "bucket": "string",
      "kind": "string",
      "retentionInterval": "string",
      "uploadInterval": "string"
    },
    "storageAutoResize": true,
    "storageAutoResizeLimit": "string",
    "tier": "string",
    "timeZone": "string",
    "userLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
  "suspensionReason": [
    "SQL_SUSPENSION_REASON_UNSPECIFIED"
  ]
}
```

A Cloud SQL instance resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableMaintenanceVersions|[string]|false|read-only|Output only. List all maintenance versions applicable on the instance|
|backendType|string|false|none|The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.|
|connectionName|string|false|none|Connection name of the Cloud SQL instance used in connection strings.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|currentDiskSize|string(int64)|false|none|The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.|
|databaseInstalledVersion|string|false|read-only|Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`.|
|databaseVersion|string|false|none|The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.|
|diskEncryptionConfiguration|[DiskEncryptionConfiguration](#schemadiskencryptionconfiguration)|false|none|Disk encryption configuration specific to an instance.|
|diskEncryptionStatus|[DiskEncryptionStatus](#schemadiskencryptionstatus)|false|none|Disk encryption status specific to an instance.|
|etag|string|false|none|This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.|
|failoverReplica|object|false|none|The name and status of the failover replica.|
|gceZone|string|false|none|The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.|
|instanceType|string|false|none|The instance type.|
|ipAddresses|[[IpMapping](#schemaipmapping)]|false|none|The assigned IP addresses for the instance.|
|ipv6Address|string|false|none|The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.|
|kind|string|false|none|This is always `sql#instance`.|
|maintenanceVersion|string|false|none|The current software version on the instance.|
|masterInstanceName|string|false|none|The name of the instance which will act as primary in the replication setup.|
|maxDiskSize|string(int64)|false|none|The maximum disk size of the instance in bytes.|
|name|string|false|none|Name of the Cloud SQL instance. This does not include the project ID.|
|onPremisesConfiguration|[OnPremisesConfiguration](#schemaonpremisesconfiguration)|false|none|Configuration specific to on-premises instances.|
|outOfDiskReport|[SqlOutOfDiskReport](#schemasqloutofdiskreport)|false|none|This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job|
|project|string|false|none|The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.|
|region|string|false|none|The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.|
|replicaConfiguration|[ReplicaConfiguration](#schemareplicaconfiguration)|false|none|Configuration specific to failover replicas and read replicas.|
|replicaNames|[string]|false|none|The replicas of the instance.|
|rootPassword|string|false|none|Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.|
|satisfiesPzs|boolean|false|none|The status indicating if instance satisfiesPzs. Reserved for future use.|
|scheduledMaintenance|[SqlScheduledMaintenance](#schemasqlscheduledmaintenance)|false|none|The start time of any upcoming scheduled maintenance for this instance.|
|secondaryGceZone|string|false|none|The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.|
|selfLink|string|false|none|The URI of this resource.|
|serverCaCert|[SslCert](#schemasslcert)|false|none|SSL configuration.|
|serviceAccountEmailAddress|string|false|none|The service account email address assigned to the instance. \This property is read-only.|
|settings|[Settings](#schemasettings)|false|none|The user settings.|
|state|string|false|none|The current serving state of the Cloud SQL instance.|
|suspensionReason|[string]|false|none|If the instance state is SUSPENDED, the reason for the suspension.|

#### Enumerated Values

|Property|Value|
|---|---|
|backendType|SQL_BACKEND_TYPE_UNSPECIFIED|
|backendType|FIRST_GEN|
|backendType|SECOND_GEN|
|backendType|EXTERNAL|
|databaseVersion|SQL_DATABASE_VERSION_UNSPECIFIED|
|databaseVersion|MYSQL_5_1|
|databaseVersion|MYSQL_5_5|
|databaseVersion|MYSQL_5_6|
|databaseVersion|MYSQL_5_7|
|databaseVersion|SQLSERVER_2017_STANDARD|
|databaseVersion|SQLSERVER_2017_ENTERPRISE|
|databaseVersion|SQLSERVER_2017_EXPRESS|
|databaseVersion|SQLSERVER_2017_WEB|
|databaseVersion|POSTGRES_9_6|
|databaseVersion|POSTGRES_10|
|databaseVersion|POSTGRES_11|
|databaseVersion|POSTGRES_12|
|databaseVersion|POSTGRES_13|
|databaseVersion|POSTGRES_14|
|databaseVersion|MYSQL_8_0|
|databaseVersion|MYSQL_8_0_18|
|databaseVersion|MYSQL_8_0_26|
|databaseVersion|MYSQL_8_0_27|
|databaseVersion|MYSQL_8_0_28|
|databaseVersion|MYSQL_8_0_29|
|databaseVersion|MYSQL_8_0_30|
|databaseVersion|MYSQL_8_0_31|
|databaseVersion|MYSQL_8_0_32|
|databaseVersion|MYSQL_8_0_33|
|databaseVersion|MYSQL_8_0_34|
|databaseVersion|MYSQL_8_0_35|
|databaseVersion|MYSQL_8_0_36|
|databaseVersion|SQLSERVER_2019_STANDARD|
|databaseVersion|SQLSERVER_2019_ENTERPRISE|
|databaseVersion|SQLSERVER_2019_EXPRESS|
|databaseVersion|SQLSERVER_2019_WEB|
|instanceType|SQL_INSTANCE_TYPE_UNSPECIFIED|
|instanceType|CLOUD_SQL_INSTANCE|
|instanceType|ON_PREMISES_INSTANCE|
|instanceType|READ_REPLICA_INSTANCE|
|state|SQL_INSTANCE_STATE_UNSPECIFIED|
|state|RUNNABLE|
|state|SUSPENDED|
|state|PENDING_DELETE|
|state|PENDING_CREATE|
|state|MAINTENANCE|
|state|FAILED|
|state|ONLINE_MAINTENANCE|
|suspensionReason|SQL_SUSPENSION_REASON_UNSPECIFIED|
|suspensionReason|BILLING_ISSUE|
|suspensionReason|LEGAL_ISSUE|
|suspensionReason|OPERATIONAL_ISSUE|
|suspensionReason|KMS_KEY_ISSUE|

<h2 id="tocS_DatabasesListResponse">DatabasesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseslistresponse"></a>
<a id="schema_DatabasesListResponse"></a>
<a id="tocSdatabaseslistresponse"></a>
<a id="tocsdatabaseslistresponse"></a>

```json
{
  "items": [
    {
      "charset": "string",
      "collation": "string",
      "etag": "string",
      "instance": "string",
      "kind": "string",
      "name": "string",
      "project": "string",
      "selfLink": "string",
      "sqlserverDatabaseDetails": {
        "compatibilityLevel": 0,
        "recoveryModel": "string"
      }
    }
  ],
  "kind": "string"
}
```

Database list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Database](#schemadatabase)]|false|none|List of database resources in the instance.|
|kind|string|false|none|This is always `sql#databasesList`.|

<h2 id="tocS_DemoteMasterConfiguration">DemoteMasterConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemademotemasterconfiguration"></a>
<a id="schema_DemoteMasterConfiguration"></a>
<a id="tocSdemotemasterconfiguration"></a>
<a id="tocsdemotemasterconfiguration"></a>

```json
{
  "kind": "string",
  "mysqlReplicaConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "kind": "string",
    "password": "string",
    "username": "string"
  }
}
```

Read-replica configuration for connecting to the on-premises primary instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#demoteMasterConfiguration`.|
|mysqlReplicaConfiguration|[DemoteMasterMySqlReplicaConfiguration](#schemademotemastermysqlreplicaconfiguration)|false|none|MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory.|

<h2 id="tocS_DemoteMasterContext">DemoteMasterContext</h2>
<!-- backwards compatibility -->
<a id="schemademotemastercontext"></a>
<a id="schema_DemoteMasterContext"></a>
<a id="tocSdemotemastercontext"></a>
<a id="tocsdemotemastercontext"></a>

```json
{
  "kind": "string",
  "masterInstanceName": "string",
  "replicaConfiguration": {
    "kind": "string",
    "mysqlReplicaConfiguration": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "kind": "string",
      "password": "string",
      "username": "string"
    }
  },
  "skipReplicationSetup": true,
  "verifyGtidConsistency": true
}
```

Database instance demote primary instance context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#demoteMasterContext`.|
|masterInstanceName|string|false|none|The name of the instance which will act as on-premises primary instance in the replication setup.|
|replicaConfiguration|[DemoteMasterConfiguration](#schemademotemasterconfiguration)|false|none|Configuration specific to read-replicas replicating from the on-premises primary instance.|
|skipReplicationSetup|boolean|false|none|Flag to skip replication setup on the instance.|
|verifyGtidConsistency|boolean|false|none|Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues.|

<h2 id="tocS_DemoteMasterMySqlReplicaConfiguration">DemoteMasterMySqlReplicaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemademotemastermysqlreplicaconfiguration"></a>
<a id="schema_DemoteMasterMySqlReplicaConfiguration"></a>
<a id="tocSdemotemastermysqlreplicaconfiguration"></a>
<a id="tocsdemotemastermysqlreplicaconfiguration"></a>

```json
{
  "caCertificate": "string",
  "clientCertificate": "string",
  "clientKey": "string",
  "kind": "string",
  "password": "string",
  "username": "string"
}
```

Read-replica configuration specific to MySQL databases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertificate|string|false|none|PEM representation of the trusted CA's x509 certificate.|
|clientCertificate|string|false|none|PEM representation of the replica's x509 certificate.|
|clientKey|string|false|none|PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.|
|kind|string|false|none|This is always `sql#demoteMasterMysqlReplicaConfiguration`.|
|password|string|false|none|The password for the replication connection.|
|username|string|false|none|The username for the replication connection.|

<h2 id="tocS_DenyMaintenancePeriod">DenyMaintenancePeriod</h2>
<!-- backwards compatibility -->
<a id="schemadenymaintenanceperiod"></a>
<a id="schema_DenyMaintenancePeriod"></a>
<a id="tocSdenymaintenanceperiod"></a>
<a id="tocsdenymaintenanceperiod"></a>

```json
{
  "endDate": "string",
  "startDate": "string",
  "time": "string"
}
```

Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string|false|none|"deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01|
|startDate|string|false|none|"deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01|
|time|string|false|none|Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00|

<h2 id="tocS_DiskEncryptionConfiguration">DiskEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadiskencryptionconfiguration"></a>
<a id="schema_DiskEncryptionConfiguration"></a>
<a id="tocSdiskencryptionconfiguration"></a>
<a id="tocsdiskencryptionconfiguration"></a>

```json
{
  "kind": "string",
  "kmsKeyName": "string"
}
```

Disk encryption configuration for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#diskEncryptionConfiguration`.|
|kmsKeyName|string|false|none|Resource name of KMS key for disk encryption|

<h2 id="tocS_DiskEncryptionStatus">DiskEncryptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemadiskencryptionstatus"></a>
<a id="schema_DiskEncryptionStatus"></a>
<a id="tocSdiskencryptionstatus"></a>
<a id="tocsdiskencryptionstatus"></a>

```json
{
  "kind": "string",
  "kmsKeyVersionName": "string"
}
```

Disk encryption status for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#diskEncryptionStatus`.|
|kmsKeyVersionName|string|false|none|KMS key version used to encrypt the Cloud SQL instance resource|

<h2 id="tocS_ExportContext">ExportContext</h2>
<!-- backwards compatibility -->
<a id="schemaexportcontext"></a>
<a id="schema_ExportContext"></a>
<a id="tocSexportcontext"></a>
<a id="tocsexportcontext"></a>

```json
{
  "bakExportOptions": {
    "stripeCount": 0,
    "striped": true
  },
  "csvExportOptions": {
    "escapeCharacter": "string",
    "fieldsTerminatedBy": "string",
    "linesTerminatedBy": "string",
    "quoteCharacter": "string",
    "selectQuery": "string"
  },
  "databases": [
    "string"
  ],
  "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
  "kind": "string",
  "offload": true,
  "sqlExportOptions": {
    "mysqlExportOptions": {
      "masterData": 0
    },
    "schemaOnly": true,
    "tables": [
      "string"
    ]
  },
  "uri": "string"
}
```

Database instance export context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bakExportOptions|object|false|none|Options for exporting BAK files (SQL Server-only)|
|csvExportOptions|object|false|none|Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.|
|databases|[string]|false|none|Databases to be exported. `MySQL instances:` If `fileType` is `SQL` and no database is specified, all databases are exported, except for the `mysql` system database. If `fileType` is `CSV`, you can specify one database, either by using this property or by using the `csvExportOptions.selectQuery` property, which takes precedence over this property. `PostgreSQL instances:` You must specify one database to be exported. If `fileType` is `CSV`, this database must match the one specified in the `csvExportOptions.selectQuery` property. `SQL Server instances:` You must specify one database to be exported, and the `fileType` must be `BAK`.|
|fileType|string|false|none|The file type for the specified uri.|
|kind|string|false|none|This is always `sql#exportContext`.|
|offload|boolean|false|none|Option for export offload.|
|sqlExportOptions|object|false|none|Options for exporting data as SQL statements.|
|uri|string|false|none|The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed.|

#### Enumerated Values

|Property|Value|
|---|---|
|fileType|SQL_FILE_TYPE_UNSPECIFIED|
|fileType|SQL|
|fileType|CSV|
|fileType|BAK|

<h2 id="tocS_FailoverContext">FailoverContext</h2>
<!-- backwards compatibility -->
<a id="schemafailovercontext"></a>
<a id="schema_FailoverContext"></a>
<a id="tocSfailovercontext"></a>
<a id="tocsfailovercontext"></a>

```json
{
  "kind": "string",
  "settingsVersion": "string"
}
```

Database instance failover context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#failoverContext`.|
|settingsVersion|string(int64)|false|none|The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.|

<h2 id="tocS_Flag">Flag</h2>
<!-- backwards compatibility -->
<a id="schemaflag"></a>
<a id="schema_Flag"></a>
<a id="tocSflag"></a>
<a id="tocsflag"></a>

```json
{
  "allowedIntValues": [
    "string"
  ],
  "allowedStringValues": [
    "string"
  ],
  "appliesTo": [
    "SQL_DATABASE_VERSION_UNSPECIFIED"
  ],
  "inBeta": true,
  "kind": "string",
  "maxValue": "string",
  "minValue": "string",
  "name": "string",
  "requiresRestart": true,
  "type": "SQL_FLAG_TYPE_UNSPECIFIED"
}
```

A flag resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedIntValues|[string(int64)]|false|none|Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values.|
|allowedStringValues|[string]|false|none|For `STRING` flags, a list of strings that the value can be set to.|
|appliesTo|[string]|false|none|The database version this flag applies to. Can be MySQL instances: `MYSQL_8_0`, `MYSQL_8_0_18`, `MYSQL_8_0_26`, `MYSQL_5_7`, or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12`. SQL Server instances: `SQLSERVER_2017_STANDARD`, `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).|
|inBeta|boolean|false|none|Whether or not the flag is considered in beta.|
|kind|string|false|none|This is always `sql#flag`.|
|maxValue|string(int64)|false|none|For `INTEGER` flags, the maximum allowed value.|
|minValue|string(int64)|false|none|For `INTEGER` flags, the minimum allowed value.|
|name|string|false|none|This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet`|
|requiresRestart|boolean|false|none|Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.|
|type|string|false|none|The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags which do not take a value, such as `skip_grant_tables`.|

#### Enumerated Values

|Property|Value|
|---|---|
|appliesTo|SQL_DATABASE_VERSION_UNSPECIFIED|
|appliesTo|MYSQL_5_1|
|appliesTo|MYSQL_5_5|
|appliesTo|MYSQL_5_6|
|appliesTo|MYSQL_5_7|
|appliesTo|SQLSERVER_2017_STANDARD|
|appliesTo|SQLSERVER_2017_ENTERPRISE|
|appliesTo|SQLSERVER_2017_EXPRESS|
|appliesTo|SQLSERVER_2017_WEB|
|appliesTo|POSTGRES_9_6|
|appliesTo|POSTGRES_10|
|appliesTo|POSTGRES_11|
|appliesTo|POSTGRES_12|
|appliesTo|POSTGRES_13|
|appliesTo|POSTGRES_14|
|appliesTo|MYSQL_8_0|
|appliesTo|MYSQL_8_0_18|
|appliesTo|MYSQL_8_0_26|
|appliesTo|MYSQL_8_0_27|
|appliesTo|MYSQL_8_0_28|
|appliesTo|MYSQL_8_0_29|
|appliesTo|MYSQL_8_0_30|
|appliesTo|MYSQL_8_0_31|
|appliesTo|MYSQL_8_0_32|
|appliesTo|MYSQL_8_0_33|
|appliesTo|MYSQL_8_0_34|
|appliesTo|MYSQL_8_0_35|
|appliesTo|MYSQL_8_0_36|
|appliesTo|SQLSERVER_2019_STANDARD|
|appliesTo|SQLSERVER_2019_ENTERPRISE|
|appliesTo|SQLSERVER_2019_EXPRESS|
|appliesTo|SQLSERVER_2019_WEB|
|type|SQL_FLAG_TYPE_UNSPECIFIED|
|type|BOOLEAN|
|type|STRING|
|type|INTEGER|
|type|NONE|
|type|MYSQL_TIMEZONE_OFFSET|
|type|FLOAT|
|type|REPEATED_STRING|

<h2 id="tocS_FlagsListResponse">FlagsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaflagslistresponse"></a>
<a id="schema_FlagsListResponse"></a>
<a id="tocSflagslistresponse"></a>
<a id="tocsflagslistresponse"></a>

```json
{
  "items": [
    {
      "allowedIntValues": [
        "string"
      ],
      "allowedStringValues": [
        "string"
      ],
      "appliesTo": [
        "SQL_DATABASE_VERSION_UNSPECIFIED"
      ],
      "inBeta": true,
      "kind": "string",
      "maxValue": "string",
      "minValue": "string",
      "name": "string",
      "requiresRestart": true,
      "type": "SQL_FLAG_TYPE_UNSPECIFIED"
    }
  ],
  "kind": "string"
}
```

Flags list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Flag](#schemaflag)]|false|none|List of flags.|
|kind|string|false|none|This is always `sql#flagsList`.|

<h2 id="tocS_GenerateEphemeralCertRequest">GenerateEphemeralCertRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateephemeralcertrequest"></a>
<a id="schema_GenerateEphemeralCertRequest"></a>
<a id="tocSgenerateephemeralcertrequest"></a>
<a id="tocsgenerateephemeralcertrequest"></a>

```json
{
  "access_token": "string",
  "public_key": "string",
  "readTime": "string",
  "validDuration": "string"
}
```

Ephemeral certificate creation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|Optional. Access token to include in the signed certificate.|
|public_key|string|false|none|PEM encoded public key to include in the signed certificate.|
|readTime|string(google-datetime)|false|none|Optional. Optional snapshot read timestamp to trade freshness for performance.|
|validDuration|string(google-duration)|false|none|Optional. If set, it will contain the cert valid duration.|

<h2 id="tocS_GenerateEphemeralCertResponse">GenerateEphemeralCertResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateephemeralcertresponse"></a>
<a id="schema_GenerateEphemeralCertResponse"></a>
<a id="tocSgenerateephemeralcertresponse"></a>
<a id="tocsgenerateephemeralcertresponse"></a>

```json
{
  "ephemeralCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  }
}
```

Ephemeral certificate creation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ephemeralCert|[SslCert](#schemasslcert)|false|none|Generated cert|

<h2 id="tocS_ImportContext">ImportContext</h2>
<!-- backwards compatibility -->
<a id="schemaimportcontext"></a>
<a id="schema_ImportContext"></a>
<a id="tocSimportcontext"></a>
<a id="tocsimportcontext"></a>

```json
{
  "bakImportOptions": {
    "encryptionOptions": {
      "certPath": "string",
      "pvkPassword": "string",
      "pvkPath": "string"
    },
    "striped": true
  },
  "csvImportOptions": {
    "columns": [
      "string"
    ],
    "escapeCharacter": "string",
    "fieldsTerminatedBy": "string",
    "linesTerminatedBy": "string",
    "quoteCharacter": "string",
    "table": "string"
  },
  "database": "string",
  "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
  "importUser": "string",
  "kind": "string",
  "uri": "string"
}
```

Database instance import context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bakImportOptions|object|false|none|Import parameters specific to SQL Server .BAK files|
|csvImportOptions|object|false|none|Options for importing data as CSV.|
|database|string|false|none|The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If `fileType` is `CSV`, one database must be specified.|
|fileType|string|false|none|The file type for the specified uri. * `SQL`: The file contains SQL statements. * `CSV`: The file contains CSV data. * `BAK`: The file contains backup data for a SQL Server instance.|
|importUser|string|false|none|The PostgreSQL user for this import operation. PostgreSQL instances only.|
|kind|string|false|none|This is always `sql#importContext`.|
|uri|string|false|none|Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file.|

#### Enumerated Values

|Property|Value|
|---|---|
|fileType|SQL_FILE_TYPE_UNSPECIFIED|
|fileType|SQL|
|fileType|CSV|
|fileType|BAK|

<h2 id="tocS_InsightsConfig">InsightsConfig</h2>
<!-- backwards compatibility -->
<a id="schemainsightsconfig"></a>
<a id="schema_InsightsConfig"></a>
<a id="tocSinsightsconfig"></a>
<a id="tocsinsightsconfig"></a>

```json
{
  "queryInsightsEnabled": true,
  "queryPlansPerMinute": 0,
  "queryStringLength": 0,
  "recordApplicationTags": true,
  "recordClientAddress": true
}
```

Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryInsightsEnabled|boolean|false|none|Whether Query Insights feature is enabled.|
|queryPlansPerMinute|integer(int32)|false|none|Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.|
|queryStringLength|integer(int32)|false|none|Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.|
|recordApplicationTags|boolean|false|none|Whether Query Insights will record application tags from query when enabled.|
|recordClientAddress|boolean|false|none|Whether Query Insights will record client address when enabled.|

<h2 id="tocS_InstanceReference">InstanceReference</h2>
<!-- backwards compatibility -->
<a id="schemainstancereference"></a>
<a id="schema_InstanceReference"></a>
<a id="tocSinstancereference"></a>
<a id="tocsinstancereference"></a>

```json
{
  "name": "string",
  "project": "string",
  "region": "string"
}
```

Reference to another Cloud SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the Cloud SQL instance being referenced. This does not include the project ID.|
|project|string|false|none|The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it.|
|region|string|false|none|The region of the Cloud SQL instance being referenced.|

<h2 id="tocS_InstancesCloneRequest">InstancesCloneRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesclonerequest"></a>
<a id="schema_InstancesCloneRequest"></a>
<a id="tocSinstancesclonerequest"></a>
<a id="tocsinstancesclonerequest"></a>

```json
{
  "cloneContext": {
    "allocatedIpRange": "string",
    "binLogCoordinates": {
      "binLogFileName": "string",
      "binLogPosition": "string",
      "kind": "string"
    },
    "databaseNames": [
      "string"
    ],
    "destinationInstanceName": "string",
    "kind": "string",
    "pitrTimestampMs": "string",
    "pointInTime": "string"
  }
}
```

Database instance clone request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloneContext|[CloneContext](#schemaclonecontext)|false|none|Contains details about the clone operation.|

<h2 id="tocS_InstancesDemoteMasterRequest">InstancesDemoteMasterRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesdemotemasterrequest"></a>
<a id="schema_InstancesDemoteMasterRequest"></a>
<a id="tocSinstancesdemotemasterrequest"></a>
<a id="tocsinstancesdemotemasterrequest"></a>

```json
{
  "demoteMasterContext": {
    "kind": "string",
    "masterInstanceName": "string",
    "replicaConfiguration": {
      "kind": "string",
      "mysqlReplicaConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "kind": "string",
        "password": "string",
        "username": "string"
      }
    },
    "skipReplicationSetup": true,
    "verifyGtidConsistency": true
  }
}
```

Database demote primary instance request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demoteMasterContext|[DemoteMasterContext](#schemademotemastercontext)|false|none|Contains details about the demoteMaster operation.|

<h2 id="tocS_InstancesExportRequest">InstancesExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesexportrequest"></a>
<a id="schema_InstancesExportRequest"></a>
<a id="tocSinstancesexportrequest"></a>
<a id="tocsinstancesexportrequest"></a>

```json
{
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  }
}
```

Database instance export request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportContext|[ExportContext](#schemaexportcontext)|false|none|Contains details about the export operation.|

<h2 id="tocS_InstancesFailoverRequest">InstancesFailoverRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesfailoverrequest"></a>
<a id="schema_InstancesFailoverRequest"></a>
<a id="tocSinstancesfailoverrequest"></a>
<a id="tocsinstancesfailoverrequest"></a>

```json
{
  "failoverContext": {
    "kind": "string",
    "settingsVersion": "string"
  }
}
```

Instance failover request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failoverContext|[FailoverContext](#schemafailovercontext)|false|none|Failover Context.|

<h2 id="tocS_InstancesImportRequest">InstancesImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesimportrequest"></a>
<a id="schema_InstancesImportRequest"></a>
<a id="tocSinstancesimportrequest"></a>
<a id="tocsinstancesimportrequest"></a>

```json
{
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  }
}
```

Database instance import request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importContext|[ImportContext](#schemaimportcontext)|false|none|Contains details about the import operation.|

<h2 id="tocS_InstancesListResponse">InstancesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemainstanceslistresponse"></a>
<a id="schema_InstancesListResponse"></a>
<a id="tocSinstanceslistresponse"></a>
<a id="tocsinstanceslistresponse"></a>

```json
{
  "items": [
    {
      "availableMaintenanceVersions": [
        "string"
      ],
      "backendType": "SQL_BACKEND_TYPE_UNSPECIFIED",
      "connectionName": "string",
      "createTime": "string",
      "currentDiskSize": "string",
      "databaseInstalledVersion": "string",
      "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
      "diskEncryptionConfiguration": {
        "kind": "string",
        "kmsKeyName": "string"
      },
      "diskEncryptionStatus": {
        "kind": "string",
        "kmsKeyVersionName": "string"
      },
      "etag": "string",
      "failoverReplica": {
        "available": true,
        "name": "string"
      },
      "gceZone": "string",
      "instanceType": "SQL_INSTANCE_TYPE_UNSPECIFIED",
      "ipAddresses": [
        {
          "ipAddress": "string",
          "timeToRetire": "string",
          "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
        }
      ],
      "ipv6Address": "string",
      "kind": "string",
      "maintenanceVersion": "string",
      "masterInstanceName": "string",
      "maxDiskSize": "string",
      "name": "string",
      "onPremisesConfiguration": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string",
        "dumpFilePath": "string",
        "hostPort": "string",
        "kind": "string",
        "password": "string",
        "sourceInstance": {
          "name": "string",
          "project": "string",
          "region": "string"
        },
        "username": "string"
      },
      "outOfDiskReport": {
        "sqlMinRecommendedIncreaseSizeGb": 0,
        "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
      },
      "project": "string",
      "region": "string",
      "replicaConfiguration": {
        "failoverTarget": true,
        "kind": "string",
        "mysqlReplicaConfiguration": {
          "caCertificate": "string",
          "clientCertificate": "string",
          "clientKey": "string",
          "connectRetryInterval": 0,
          "dumpFilePath": "string",
          "kind": "string",
          "masterHeartbeatPeriod": "string",
          "password": "string",
          "sslCipher": "string",
          "username": "string",
          "verifyServerCertificate": true
        }
      },
      "replicaNames": [
        "string"
      ],
      "rootPassword": "string",
      "satisfiesPzs": true,
      "scheduledMaintenance": {
        "canDefer": true,
        "canReschedule": true,
        "scheduleDeadlineTime": "string",
        "startTime": "string"
      },
      "secondaryGceZone": "string",
      "selfLink": "string",
      "serverCaCert": {
        "cert": "string",
        "certSerialNumber": "string",
        "commonName": "string",
        "createTime": "string",
        "expirationTime": "string",
        "instance": "string",
        "kind": "string",
        "selfLink": "string",
        "sha1Fingerprint": "string"
      },
      "serviceAccountEmailAddress": "string",
      "settings": {
        "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
        "activeDirectoryConfig": {
          "domain": "string",
          "kind": "string"
        },
        "advancedMachineFeatures": {
          "threadsPerCore": 0
        },
        "authorizedGaeApplications": [
          "string"
        ],
        "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
        "backupConfiguration": {
          "backupRetentionSettings": {
            "retainedBackups": 0,
            "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
          },
          "binaryLogEnabled": true,
          "enabled": true,
          "kind": "string",
          "location": "string",
          "pointInTimeRecoveryEnabled": true,
          "replicationLogArchivingEnabled": true,
          "startTime": "string",
          "transactionLogRetentionDays": 0
        },
        "collation": "string",
        "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
        "crashSafeReplicationEnabled": true,
        "dataDiskSizeGb": "string",
        "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
        "databaseFlags": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "databaseReplicationEnabled": true,
        "deletionProtectionEnabled": true,
        "denyMaintenancePeriods": [
          {
            "endDate": "string",
            "startDate": "string",
            "time": "string"
          }
        ],
        "insightsConfig": {
          "queryInsightsEnabled": true,
          "queryPlansPerMinute": 0,
          "queryStringLength": 0,
          "recordApplicationTags": true,
          "recordClientAddress": true
        },
        "ipConfiguration": {
          "allocatedIpRange": "string",
          "authorizedNetworks": [
            {
              "expirationTime": "string",
              "kind": "string",
              "name": "string",
              "value": "string"
            }
          ],
          "enablePrivatePathForGoogleCloudServices": true,
          "ipv4Enabled": true,
          "privateNetwork": "string",
          "requireSsl": true
        },
        "kind": "string",
        "locationPreference": {
          "followGaeApplication": "string",
          "kind": "string",
          "secondaryZone": "string",
          "zone": "string"
        },
        "maintenanceWindow": {
          "day": 0,
          "hour": 0,
          "kind": "string",
          "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
        },
        "passwordValidationPolicy": {
          "complexity": "COMPLEXITY_UNSPECIFIED",
          "disallowUsernameSubstring": true,
          "enablePasswordPolicy": true,
          "minLength": 0,
          "passwordChangeInterval": "string",
          "reuseInterval": 0
        },
        "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
        "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
        "settingsVersion": "string",
        "sqlServerAuditConfig": {
          "bucket": "string",
          "kind": "string",
          "retentionInterval": "string",
          "uploadInterval": "string"
        },
        "storageAutoResize": true,
        "storageAutoResizeLimit": "string",
        "tier": "string",
        "timeZone": "string",
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "state": "SQL_INSTANCE_STATE_UNSPECIFIED",
      "suspensionReason": [
        "SQL_SUSPENSION_REASON_UNSPECIFIED"
      ]
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "warnings": [
    {
      "code": "SQL_API_WARNING_CODE_UNSPECIFIED",
      "message": "string",
      "region": "string"
    }
  ]
}
```

Database instances list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[DatabaseInstance](#schemadatabaseinstance)]|false|none|List of database instance resources.|
|kind|string|false|none|This is always `sql#instancesList`.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|
|warnings|[[ApiWarning](#schemaapiwarning)]|false|none|List of warnings that occurred while handling the request.|

<h2 id="tocS_InstancesListServerCasResponse">InstancesListServerCasResponse</h2>
<!-- backwards compatibility -->
<a id="schemainstanceslistservercasresponse"></a>
<a id="schema_InstancesListServerCasResponse"></a>
<a id="tocSinstanceslistservercasresponse"></a>
<a id="tocsinstanceslistservercasresponse"></a>

```json
{
  "activeVersion": "string",
  "certs": [
    {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    }
  ],
  "kind": "string"
}
```

Instances ListServerCas response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeVersion|string|false|none|none|
|certs|[[SslCert](#schemasslcert)]|false|none|List of server CA certificates for the instance.|
|kind|string|false|none|This is always `sql#instancesListServerCas`.|

<h2 id="tocS_InstancesRestoreBackupRequest">InstancesRestoreBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesrestorebackuprequest"></a>
<a id="schema_InstancesRestoreBackupRequest"></a>
<a id="tocSinstancesrestorebackuprequest"></a>
<a id="tocsinstancesrestorebackuprequest"></a>

```json
{
  "restoreBackupContext": {
    "backupRunId": "string",
    "instanceId": "string",
    "kind": "string",
    "project": "string"
  }
}
```

Database instance restore backup request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restoreBackupContext|[RestoreBackupContext](#schemarestorebackupcontext)|false|none|Parameters required to perform the restore backup operation.|

<h2 id="tocS_InstancesRotateServerCaRequest">InstancesRotateServerCaRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancesrotateservercarequest"></a>
<a id="schema_InstancesRotateServerCaRequest"></a>
<a id="tocSinstancesrotateservercarequest"></a>
<a id="tocsinstancesrotateservercarequest"></a>

```json
{
  "rotateServerCaContext": {
    "kind": "string",
    "nextVersion": "string"
  }
}
```

Rotate Server CA request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rotateServerCaContext|[RotateServerCaContext](#schemarotateservercacontext)|false|none|Contains details about the rotate server CA operation.|

<h2 id="tocS_InstancesTruncateLogRequest">InstancesTruncateLogRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstancestruncatelogrequest"></a>
<a id="schema_InstancesTruncateLogRequest"></a>
<a id="tocSinstancestruncatelogrequest"></a>
<a id="tocsinstancestruncatelogrequest"></a>

```json
{
  "truncateLogContext": {
    "kind": "string",
    "logType": "string"
  }
}
```

Instance truncate log request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|truncateLogContext|[TruncateLogContext](#schematruncatelogcontext)|false|none|Contains details about the truncate log operation.|

<h2 id="tocS_IpConfiguration">IpConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaipconfiguration"></a>
<a id="schema_IpConfiguration"></a>
<a id="tocSipconfiguration"></a>
<a id="tocsipconfiguration"></a>

```json
{
  "allocatedIpRange": "string",
  "authorizedNetworks": [
    {
      "expirationTime": "string",
      "kind": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "enablePrivatePathForGoogleCloudServices": true,
  "ipv4Enabled": true,
  "privateNetwork": "string",
  "requireSsl": true
}
```

IP Management configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatedIpRange|string|false|none|The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.`|
|authorizedNetworks|[[AclEntry](#schemaaclentry)]|false|none|The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: `157.197.200.0/24`).|
|enablePrivatePathForGoogleCloudServices|boolean|false|none|Controls connectivity to private IP instances from Google services, such as BigQuery.|
|ipv4Enabled|boolean|false|none|Whether the instance is assigned a public IP address or not.|
|privateNetwork|string|false|none|The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.|
|requireSsl|boolean|false|none|Whether SSL connections over IP are enforced or not.|

<h2 id="tocS_IpMapping">IpMapping</h2>
<!-- backwards compatibility -->
<a id="schemaipmapping"></a>
<a id="schema_IpMapping"></a>
<a id="tocSipmapping"></a>
<a id="tocsipmapping"></a>

```json
{
  "ipAddress": "string",
  "timeToRetire": "string",
  "type": "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
}
```

Database instance IP Mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|false|none|The IP address assigned.|
|timeToRetire|string(google-datetime)|false|none|The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired.|
|type|string|false|none|The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SQL_IP_ADDRESS_TYPE_UNSPECIFIED|
|type|PRIMARY|
|type|OUTGOING|
|type|PRIVATE|
|type|MIGRATED_1ST_GEN|

<h2 id="tocS_LocationPreference">LocationPreference</h2>
<!-- backwards compatibility -->
<a id="schemalocationpreference"></a>
<a id="schema_LocationPreference"></a>
<a id="tocSlocationpreference"></a>
<a id="tocslocationpreference"></a>

```json
{
  "followGaeApplication": "string",
  "kind": "string",
  "secondaryZone": "string",
  "zone": "string"
}
```

Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|followGaeApplication|string|false|none|The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance.|
|kind|string|false|none|This is always `sql#locationPreference`.|
|secondaryZone|string|false|none|The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.).|
|zone|string|false|none|The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance.|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "day": 0,
  "hour": 0,
  "kind": "string",
  "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
}
```

Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|day of week (1-7), starting on Monday.|
|hour|integer(int32)|false|none|hour of day - 0 to 23.|
|kind|string|false|none|This is always `sql#maintenanceWindow`.|
|updateTrack|string|false|none|Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen).|

#### Enumerated Values

|Property|Value|
|---|---|
|updateTrack|SQL_UPDATE_TRACK_UNSPECIFIED|
|updateTrack|canary|
|updateTrack|stable|

<h2 id="tocS_MySqlReplicaConfiguration">MySqlReplicaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamysqlreplicaconfiguration"></a>
<a id="schema_MySqlReplicaConfiguration"></a>
<a id="tocSmysqlreplicaconfiguration"></a>
<a id="tocsmysqlreplicaconfiguration"></a>

```json
{
  "caCertificate": "string",
  "clientCertificate": "string",
  "clientKey": "string",
  "connectRetryInterval": 0,
  "dumpFilePath": "string",
  "kind": "string",
  "masterHeartbeatPeriod": "string",
  "password": "string",
  "sslCipher": "string",
  "username": "string",
  "verifyServerCertificate": true
}
```

Read-replica configuration specific to MySQL databases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertificate|string|false|none|PEM representation of the trusted CA's x509 certificate.|
|clientCertificate|string|false|none|PEM representation of the replica's x509 certificate.|
|clientKey|string|false|none|PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.|
|connectRetryInterval|integer(int32)|false|none|Seconds to wait between connect retries. MySQL's default is 60 seconds.|
|dumpFilePath|string|false|none|Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump.|
|kind|string|false|none|This is always `sql#mysqlReplicaConfiguration`.|
|masterHeartbeatPeriod|string(int64)|false|none|Interval in milliseconds between replication heartbeats.|
|password|string|false|none|The password for the replication connection.|
|sslCipher|string|false|none|A list of permissible ciphers to use for SSL encryption.|
|username|string|false|none|The username for the replication connection.|
|verifyServerCertificate|boolean|false|none|Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake.|

<h2 id="tocS_MySqlSyncConfig">MySqlSyncConfig</h2>
<!-- backwards compatibility -->
<a id="schemamysqlsyncconfig"></a>
<a id="schema_MySqlSyncConfig"></a>
<a id="tocSmysqlsyncconfig"></a>
<a id="tocsmysqlsyncconfig"></a>

```json
{
  "initialSyncFlags": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

MySQL-specific external server sync settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initialSyncFlags|[[SyncFlags](#schemasyncflags)]|false|none|Flags to use for the initial dump.|

<h2 id="tocS_OnPremisesConfiguration">OnPremisesConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaonpremisesconfiguration"></a>
<a id="schema_OnPremisesConfiguration"></a>
<a id="tocSonpremisesconfiguration"></a>
<a id="tocsonpremisesconfiguration"></a>

```json
{
  "caCertificate": "string",
  "clientCertificate": "string",
  "clientKey": "string",
  "dumpFilePath": "string",
  "hostPort": "string",
  "kind": "string",
  "password": "string",
  "sourceInstance": {
    "name": "string",
    "project": "string",
    "region": "string"
  },
  "username": "string"
}
```

On-premises instance configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertificate|string|false|none|PEM representation of the trusted CA's x509 certificate.|
|clientCertificate|string|false|none|PEM representation of the replica's x509 certificate.|
|clientKey|string|false|none|PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.|
|dumpFilePath|string|false|none|The dump file to create the Cloud SQL replica.|
|hostPort|string|false|none|The host and port of the on-premises instance in host:port format|
|kind|string|false|none|This is always `sql#onPremisesConfiguration`.|
|password|string|false|none|The password for connecting to on-premises instance.|
|sourceInstance|[InstanceReference](#schemainstancereference)|false|none|The reference to Cloud SQL instance if the source is Cloud SQL.|
|username|string|false|none|The username for connecting to on-premises instance.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "backupContext": {
    "backupId": "string",
    "kind": "string"
  },
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "kind": "string",
        "message": "string"
      }
    ],
    "kind": "string"
  },
  "exportContext": {
    "bakExportOptions": {
      "stripeCount": 0,
      "striped": true
    },
    "csvExportOptions": {
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "selectQuery": "string"
    },
    "databases": [
      "string"
    ],
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "kind": "string",
    "offload": true,
    "sqlExportOptions": {
      "mysqlExportOptions": {
        "masterData": 0
      },
      "schemaOnly": true,
      "tables": [
        "string"
      ]
    },
    "uri": "string"
  },
  "importContext": {
    "bakImportOptions": {
      "encryptionOptions": {
        "certPath": "string",
        "pvkPassword": "string",
        "pvkPath": "string"
      },
      "striped": true
    },
    "csvImportOptions": {
      "columns": [
        "string"
      ],
      "escapeCharacter": "string",
      "fieldsTerminatedBy": "string",
      "linesTerminatedBy": "string",
      "quoteCharacter": "string",
      "table": "string"
    },
    "database": "string",
    "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
    "importUser": "string",
    "kind": "string",
    "uri": "string"
  },
  "insertTime": "string",
  "kind": "string",
  "name": "string",
  "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
  "selfLink": "string",
  "startTime": "string",
  "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
  "targetId": "string",
  "targetLink": "string",
  "targetProject": "string",
  "user": "string"
}
```

An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupContext|[BackupContext](#schemabackupcontext)|false|none|The context for backup operation, if applicable.|
|endTime|string(google-datetime)|false|none|The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|error|[OperationErrors](#schemaoperationerrors)|false|none|If errors occurred during processing of this operation, this field will be populated.|
|exportContext|[ExportContext](#schemaexportcontext)|false|none|The context for export operation, if applicable.|
|importContext|[ImportContext](#schemaimportcontext)|false|none|The context for import operation, if applicable.|
|insertTime|string(google-datetime)|false|none|The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|kind|string|false|none|This is always `sql#operation`.|
|name|string|false|none|An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.|
|operationType|string|false|none|The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE`|
|selfLink|string|false|none|The URI of this resource.|
|startTime|string(google-datetime)|false|none|The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|status|string|false|none|The status of an operation.|
|targetId|string|false|none|Name of the database instance related to this operation.|
|targetLink|string|false|none|none|
|targetProject|string|false|none|The project ID of the target instance related to this operation.|
|user|string|false|none|The email address of the user who initiated this operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|SQL_OPERATION_TYPE_UNSPECIFIED|
|operationType|IMPORT|
|operationType|EXPORT|
|operationType|CREATE|
|operationType|UPDATE|
|operationType|DELETE|
|operationType|RESTART|
|operationType|BACKUP|
|operationType|SNAPSHOT|
|operationType|BACKUP_VOLUME|
|operationType|DELETE_VOLUME|
|operationType|RESTORE_VOLUME|
|operationType|INJECT_USER|
|operationType|CLONE|
|operationType|STOP_REPLICA|
|operationType|START_REPLICA|
|operationType|PROMOTE_REPLICA|
|operationType|CREATE_REPLICA|
|operationType|CREATE_USER|
|operationType|DELETE_USER|
|operationType|UPDATE_USER|
|operationType|CREATE_DATABASE|
|operationType|DELETE_DATABASE|
|operationType|UPDATE_DATABASE|
|operationType|FAILOVER|
|operationType|DELETE_BACKUP|
|operationType|RECREATE_REPLICA|
|operationType|TRUNCATE_LOG|
|operationType|DEMOTE_MASTER|
|operationType|MAINTENANCE|
|operationType|ENABLE_PRIVATE_IP|
|operationType|DEFER_MAINTENANCE|
|operationType|CREATE_CLONE|
|operationType|RESCHEDULE_MAINTENANCE|
|operationType|START_EXTERNAL_SYNC|
|operationType|LOG_CLEANUP|
|operationType|AUTO_RESTART|
|operationType|REENCRYPT|
|status|SQL_OPERATION_STATUS_UNSPECIFIED|
|status|PENDING|
|status|RUNNING|
|status|DONE|

<h2 id="tocS_OperationError">OperationError</h2>
<!-- backwards compatibility -->
<a id="schemaoperationerror"></a>
<a id="schema_OperationError"></a>
<a id="tocSoperationerror"></a>
<a id="tocsoperationerror"></a>

```json
{
  "code": "string",
  "kind": "string",
  "message": "string"
}
```

Database instance operation error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Identifies the specific error that occurred.|
|kind|string|false|none|This is always `sql#operationError`.|
|message|string|false|none|Additional information about the error encountered.|

<h2 id="tocS_OperationErrors">OperationErrors</h2>
<!-- backwards compatibility -->
<a id="schemaoperationerrors"></a>
<a id="schema_OperationErrors"></a>
<a id="tocSoperationerrors"></a>
<a id="tocsoperationerrors"></a>

```json
{
  "errors": [
    {
      "code": "string",
      "kind": "string",
      "message": "string"
    }
  ],
  "kind": "string"
}
```

Database instance operation errors list wrapper.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[OperationError](#schemaoperationerror)]|false|none|The list of errors encountered while processing this operation.|
|kind|string|false|none|This is always `sql#operationErrors`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|cancelRequested|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|statusDetail|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_OperationsListResponse">OperationsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoperationslistresponse"></a>
<a id="schema_OperationsListResponse"></a>
<a id="tocSoperationslistresponse"></a>
<a id="tocsoperationslistresponse"></a>

```json
{
  "items": [
    {
      "backupContext": {
        "backupId": "string",
        "kind": "string"
      },
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "kind": "string",
            "message": "string"
          }
        ],
        "kind": "string"
      },
      "exportContext": {
        "bakExportOptions": {
          "stripeCount": 0,
          "striped": true
        },
        "csvExportOptions": {
          "escapeCharacter": "string",
          "fieldsTerminatedBy": "string",
          "linesTerminatedBy": "string",
          "quoteCharacter": "string",
          "selectQuery": "string"
        },
        "databases": [
          "string"
        ],
        "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
        "kind": "string",
        "offload": true,
        "sqlExportOptions": {
          "mysqlExportOptions": {
            "masterData": 0
          },
          "schemaOnly": true,
          "tables": [
            "string"
          ]
        },
        "uri": "string"
      },
      "importContext": {
        "bakImportOptions": {
          "encryptionOptions": {
            "certPath": "string",
            "pvkPassword": "string",
            "pvkPath": "string"
          },
          "striped": true
        },
        "csvImportOptions": {
          "columns": [
            "string"
          ],
          "escapeCharacter": "string",
          "fieldsTerminatedBy": "string",
          "linesTerminatedBy": "string",
          "quoteCharacter": "string",
          "table": "string"
        },
        "database": "string",
        "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
        "importUser": "string",
        "kind": "string",
        "uri": "string"
      },
      "insertTime": "string",
      "kind": "string",
      "name": "string",
      "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
      "selfLink": "string",
      "startTime": "string",
      "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
      "targetId": "string",
      "targetLink": "string",
      "targetProject": "string",
      "user": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

Operations list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Operation](#schemaoperation)]|false|none|List of operation resources.|
|kind|string|false|none|This is always `sql#operationsList`.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_PasswordStatus">PasswordStatus</h2>
<!-- backwards compatibility -->
<a id="schemapasswordstatus"></a>
<a id="schema_PasswordStatus"></a>
<a id="tocSpasswordstatus"></a>
<a id="tocspasswordstatus"></a>

```json
{
  "locked": true,
  "passwordExpirationTime": "string"
}
```

Read-only password status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locked|boolean|false|none|If true, user does not have login privileges.|
|passwordExpirationTime|string(google-datetime)|false|none|The expiration time of the current password.|

<h2 id="tocS_PasswordValidationPolicy">PasswordValidationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemapasswordvalidationpolicy"></a>
<a id="schema_PasswordValidationPolicy"></a>
<a id="tocSpasswordvalidationpolicy"></a>
<a id="tocspasswordvalidationpolicy"></a>

```json
{
  "complexity": "COMPLEXITY_UNSPECIFIED",
  "disallowUsernameSubstring": true,
  "enablePasswordPolicy": true,
  "minLength": 0,
  "passwordChangeInterval": "string",
  "reuseInterval": 0
}
```

Database instance local user password validation policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complexity|string|false|none|The complexity of the password.|
|disallowUsernameSubstring|boolean|false|none|Disallow username as a part of the password.|
|enablePasswordPolicy|boolean|false|none|Whether the password policy is enabled or not.|
|minLength|integer(int32)|false|none|Minimum number of characters allowed.|
|passwordChangeInterval|string(google-duration)|false|none|Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL.|
|reuseInterval|integer(int32)|false|none|Number of previous passwords that cannot be reused.|

#### Enumerated Values

|Property|Value|
|---|---|
|complexity|COMPLEXITY_UNSPECIFIED|
|complexity|COMPLEXITY_DEFAULT|

<h2 id="tocS_PerformDiskShrinkContext">PerformDiskShrinkContext</h2>
<!-- backwards compatibility -->
<a id="schemaperformdiskshrinkcontext"></a>
<a id="schema_PerformDiskShrinkContext"></a>
<a id="tocSperformdiskshrinkcontext"></a>
<a id="tocsperformdiskshrinkcontext"></a>

```json
{
  "targetSizeGb": "string"
}
```

Perform disk shrink context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetSizeGb|string(int64)|false|none|The target disk shrink size in GigaBytes.|

<h2 id="tocS_ReplicaConfiguration">ReplicaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareplicaconfiguration"></a>
<a id="schema_ReplicaConfiguration"></a>
<a id="tocSreplicaconfiguration"></a>
<a id="tocsreplicaconfiguration"></a>

```json
{
  "failoverTarget": true,
  "kind": "string",
  "mysqlReplicaConfiguration": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "connectRetryInterval": 0,
    "dumpFilePath": "string",
    "kind": "string",
    "masterHeartbeatPeriod": "string",
    "password": "string",
    "sslCipher": "string",
    "username": "string",
    "verifyServerCertificate": true
  }
}
```

Read-replica configuration for connecting to the primary instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failoverTarget|boolean|false|none|Specifies if the replica is the failover target. If the field is set to `true` the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance.|
|kind|string|false|none|This is always `sql#replicaConfiguration`.|
|mysqlReplicaConfiguration|[MySqlReplicaConfiguration](#schemamysqlreplicaconfiguration)|false|none|MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory.|

<h2 id="tocS_Reschedule">Reschedule</h2>
<!-- backwards compatibility -->
<a id="schemareschedule"></a>
<a id="schema_Reschedule"></a>
<a id="tocSreschedule"></a>
<a id="tocsreschedule"></a>

```json
{
  "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
  "scheduleTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rescheduleType|string|false|none|Required. The type of the reschedule.|
|scheduleTime|string(google-datetime)|false|none|Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|

#### Enumerated Values

|Property|Value|
|---|---|
|rescheduleType|RESCHEDULE_TYPE_UNSPECIFIED|
|rescheduleType|IMMEDIATE|
|rescheduleType|NEXT_AVAILABLE_WINDOW|
|rescheduleType|SPECIFIC_TIME|

<h2 id="tocS_RestoreBackupContext">RestoreBackupContext</h2>
<!-- backwards compatibility -->
<a id="schemarestorebackupcontext"></a>
<a id="schema_RestoreBackupContext"></a>
<a id="tocSrestorebackupcontext"></a>
<a id="tocsrestorebackupcontext"></a>

```json
{
  "backupRunId": "string",
  "instanceId": "string",
  "kind": "string",
  "project": "string"
}
```

Database instance restore from backup context. Backup context contains source instance id and project id.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupRunId|string(int64)|false|none|The ID of the backup run to restore from.|
|instanceId|string|false|none|The ID of the instance that the backup was taken from.|
|kind|string|false|none|This is always `sql#restoreBackupContext`.|
|project|string|false|none|The full project ID of the source instance.|

<h2 id="tocS_RotateServerCaContext">RotateServerCaContext</h2>
<!-- backwards compatibility -->
<a id="schemarotateservercacontext"></a>
<a id="schema_RotateServerCaContext"></a>
<a id="tocSrotateservercacontext"></a>
<a id="tocsrotateservercacontext"></a>

```json
{
  "kind": "string",
  "nextVersion": "string"
}
```

Instance rotate server CA context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#rotateServerCaContext`.|
|nextVersion|string|false|none|The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version.|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
  "activeDirectoryConfig": {
    "domain": "string",
    "kind": "string"
  },
  "advancedMachineFeatures": {
    "threadsPerCore": 0
  },
  "authorizedGaeApplications": [
    "string"
  ],
  "availabilityType": "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
  "backupConfiguration": {
    "backupRetentionSettings": {
      "retainedBackups": 0,
      "retentionUnit": "RETENTION_UNIT_UNSPECIFIED"
    },
    "binaryLogEnabled": true,
    "enabled": true,
    "kind": "string",
    "location": "string",
    "pointInTimeRecoveryEnabled": true,
    "replicationLogArchivingEnabled": true,
    "startTime": "string",
    "transactionLogRetentionDays": 0
  },
  "collation": "string",
  "connectorEnforcement": "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
  "crashSafeReplicationEnabled": true,
  "dataDiskSizeGb": "string",
  "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
  "databaseFlags": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "databaseReplicationEnabled": true,
  "deletionProtectionEnabled": true,
  "denyMaintenancePeriods": [
    {
      "endDate": "string",
      "startDate": "string",
      "time": "string"
    }
  ],
  "insightsConfig": {
    "queryInsightsEnabled": true,
    "queryPlansPerMinute": 0,
    "queryStringLength": 0,
    "recordApplicationTags": true,
    "recordClientAddress": true
  },
  "ipConfiguration": {
    "allocatedIpRange": "string",
    "authorizedNetworks": [
      {
        "expirationTime": "string",
        "kind": "string",
        "name": "string",
        "value": "string"
      }
    ],
    "enablePrivatePathForGoogleCloudServices": true,
    "ipv4Enabled": true,
    "privateNetwork": "string",
    "requireSsl": true
  },
  "kind": "string",
  "locationPreference": {
    "followGaeApplication": "string",
    "kind": "string",
    "secondaryZone": "string",
    "zone": "string"
  },
  "maintenanceWindow": {
    "day": 0,
    "hour": 0,
    "kind": "string",
    "updateTrack": "SQL_UPDATE_TRACK_UNSPECIFIED"
  },
  "passwordValidationPolicy": {
    "complexity": "COMPLEXITY_UNSPECIFIED",
    "disallowUsernameSubstring": true,
    "enablePasswordPolicy": true,
    "minLength": 0,
    "passwordChangeInterval": "string",
    "reuseInterval": 0
  },
  "pricingPlan": "SQL_PRICING_PLAN_UNSPECIFIED",
  "replicationType": "SQL_REPLICATION_TYPE_UNSPECIFIED",
  "settingsVersion": "string",
  "sqlServerAuditConfig": {
    "bucket": "string",
    "kind": "string",
    "retentionInterval": "string",
    "uploadInterval": "string"
  },
  "storageAutoResize": true,
  "storageAutoResizeLimit": "string",
  "tier": "string",
  "timeZone": "string",
  "userLabels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Database instance settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activationPolicy|string|false|none|The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives.|
|activeDirectoryConfig|[SqlActiveDirectoryConfig](#schemasqlactivedirectoryconfig)|false|none|Active Directory configuration, relevant only for Cloud SQL for SQL Server.|
|advancedMachineFeatures|[AdvancedMachineFeatures](#schemaadvancedmachinefeatures)|false|none|Specifies advance machine configuration for the instance relevant only for SQL Server.|
|authorizedGaeApplications|[string]|false|none|The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only.|
|availabilityType|string|false|none|Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability).|
|backupConfiguration|[BackupConfiguration](#schemabackupconfiguration)|false|none|The daily backup configuration for the instance.|
|collation|string|false|none|The name of server Instance collation.|
|connectorEnforcement|string|false|none|Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors) Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance.|
|crashSafeReplicationEnabled|boolean|false|none|Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances.|
|dataDiskSizeGb|string(int64)|false|none|The size of data disk, in GB. The data disk size minimum is 10GB.|
|dataDiskType|string|false|none|The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances.|
|databaseFlags|[[DatabaseFlags](#schemadatabaseflags)]|false|none|The database flags passed to the instance at startup.|
|databaseReplicationEnabled|boolean|false|none|Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance.|
|deletionProtectionEnabled|boolean|false|none|Configuration to protect against accidental instance deletion.|
|denyMaintenancePeriods|[[DenyMaintenancePeriod](#schemadenymaintenanceperiod)]|false|none|Deny maintenance periods|
|insightsConfig|[InsightsConfig](#schemainsightsconfig)|false|none|Insights configuration, for now relevant only for Postgres.|
|ipConfiguration|[IpConfiguration](#schemaipconfiguration)|false|none|The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled for Second Generation instances.|
|kind|string|false|none|This is always `sql#settings`.|
|locationPreference|[LocationPreference](#schemalocationpreference)|false|none|The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or Compute Engine zone for better performance. App Engine co-location was only applicable to First Generation instances.|
|maintenanceWindow|[MaintenanceWindow](#schemamaintenancewindow)|false|none|The maintenance window for this instance. This specifies when the instance can be restarted for maintenance purposes.|
|passwordValidationPolicy|[PasswordValidationPolicy](#schemapasswordvalidationpolicy)|false|none|The local user password validation policy of the instance.|
|pricingPlan|string|false|none|The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances.|
|replicationType|string|false|none|The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances.|
|settingsVersion|string(int64)|false|none|The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.|
|sqlServerAuditConfig|[SqlServerAuditConfig](#schemasqlserverauditconfig)|false|none|SQL Server specific audit configuration.|
|storageAutoResize|boolean|false|none|Configuration to increase storage size automatically. The default value is true.|
|storageAutoResizeLimit|string(int64)|false|none|The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.|
|tier|string|false|none|The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance.|
|timeZone|string|false|none|Server timezone, relevant only for Cloud SQL for SQL Server.|
|userLabels|object|false|none|User-provided labels, represented as a dictionary where each label is a single key value pair.|

#### Enumerated Values

|Property|Value|
|---|---|
|activationPolicy|SQL_ACTIVATION_POLICY_UNSPECIFIED|
|activationPolicy|ALWAYS|
|activationPolicy|NEVER|
|activationPolicy|ON_DEMAND|
|availabilityType|SQL_AVAILABILITY_TYPE_UNSPECIFIED|
|availabilityType|ZONAL|
|availabilityType|REGIONAL|
|connectorEnforcement|CONNECTOR_ENFORCEMENT_UNSPECIFIED|
|connectorEnforcement|NOT_REQUIRED|
|connectorEnforcement|REQUIRED|
|dataDiskType|SQL_DATA_DISK_TYPE_UNSPECIFIED|
|dataDiskType|PD_SSD|
|dataDiskType|PD_HDD|
|dataDiskType|OBSOLETE_LOCAL_SSD|
|pricingPlan|SQL_PRICING_PLAN_UNSPECIFIED|
|pricingPlan|PACKAGE|
|pricingPlan|PER_USE|
|replicationType|SQL_REPLICATION_TYPE_UNSPECIFIED|
|replicationType|SYNCHRONOUS|
|replicationType|ASYNCHRONOUS|

<h2 id="tocS_SqlActiveDirectoryConfig">SqlActiveDirectoryConfig</h2>
<!-- backwards compatibility -->
<a id="schemasqlactivedirectoryconfig"></a>
<a id="schema_SqlActiveDirectoryConfig"></a>
<a id="tocSsqlactivedirectoryconfig"></a>
<a id="tocssqlactivedirectoryconfig"></a>

```json
{
  "domain": "string",
  "kind": "string"
}
```

Active Directory configuration, relevant only for Cloud SQL for SQL Server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|The name of the domain (e.g., mydomain.com).|
|kind|string|false|none|This is always sql#activeDirectoryConfig.|

<h2 id="tocS_SqlExternalSyncSettingError">SqlExternalSyncSettingError</h2>
<!-- backwards compatibility -->
<a id="schemasqlexternalsyncsettingerror"></a>
<a id="schema_SqlExternalSyncSettingError"></a>
<a id="tocSsqlexternalsyncsettingerror"></a>
<a id="tocssqlexternalsyncsettingerror"></a>

```json
{
  "detail": "string",
  "kind": "string",
  "type": "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
}
```

External primary instance migration setting error/warning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Additional information about the error encountered.|
|kind|string|false|none|Can be `sql#externalSyncSettingError` or `sql#externalSyncSettingWarning`.|
|type|string|false|none|Identifies the specific error that occurred.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED|
|type|CONNECTION_FAILURE|
|type|BINLOG_NOT_ENABLED|
|type|INCOMPATIBLE_DATABASE_VERSION|
|type|REPLICA_ALREADY_SETUP|
|type|INSUFFICIENT_PRIVILEGE|
|type|UNSUPPORTED_MIGRATION_TYPE|
|type|NO_PGLOGICAL_INSTALLED|
|type|PGLOGICAL_NODE_ALREADY_EXISTS|
|type|INVALID_WAL_LEVEL|
|type|INVALID_SHARED_PRELOAD_LIBRARY|
|type|INSUFFICIENT_MAX_REPLICATION_SLOTS|
|type|INSUFFICIENT_MAX_WAL_SENDERS|
|type|INSUFFICIENT_MAX_WORKER_PROCESSES|
|type|UNSUPPORTED_EXTENSIONS|
|type|INVALID_RDS_LOGICAL_REPLICATION|
|type|INVALID_LOGGING_SETUP|
|type|INVALID_DB_PARAM|
|type|UNSUPPORTED_GTID_MODE|
|type|SQLSERVER_AGENT_NOT_RUNNING|
|type|UNSUPPORTED_TABLE_DEFINITION|
|type|UNSUPPORTED_DEFINER|
|type|SQLSERVER_SERVERNAME_MISMATCH|
|type|PRIMARY_ALREADY_SETUP|
|type|UNSUPPORTED_BINLOG_FORMAT|
|type|BINLOG_RETENTION_SETTING|
|type|UNSUPPORTED_STORAGE_ENGINE|
|type|LIMITED_SUPPORT_TABLES|
|type|EXISTING_DATA_IN_REPLICA|

<h2 id="tocS_SqlInstancesGetDiskShrinkConfigResponse">SqlInstancesGetDiskShrinkConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemasqlinstancesgetdiskshrinkconfigresponse"></a>
<a id="schema_SqlInstancesGetDiskShrinkConfigResponse"></a>
<a id="tocSsqlinstancesgetdiskshrinkconfigresponse"></a>
<a id="tocssqlinstancesgetdiskshrinkconfigresponse"></a>

```json
{
  "kind": "string",
  "minimalTargetSizeGb": "string"
}
```

Instance get disk shrink config response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#getDiskShrinkConfig`.|
|minimalTargetSizeGb|string(int64)|false|none|The minimum size to which a disk can be shrunk in GigaBytes.|

<h2 id="tocS_SqlInstancesRescheduleMaintenanceRequestBody">SqlInstancesRescheduleMaintenanceRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasqlinstancesreschedulemaintenancerequestbody"></a>
<a id="schema_SqlInstancesRescheduleMaintenanceRequestBody"></a>
<a id="tocSsqlinstancesreschedulemaintenancerequestbody"></a>
<a id="tocssqlinstancesreschedulemaintenancerequestbody"></a>

```json
{
  "reschedule": {
    "rescheduleType": "RESCHEDULE_TYPE_UNSPECIFIED",
    "scheduleTime": "string"
  }
}
```

Reschedule options for maintenance windows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reschedule|[Reschedule](#schemareschedule)|false|none|Required. The type of the reschedule the user wants.|

<h2 id="tocS_SqlInstancesResetReplicaSizeRequest">SqlInstancesResetReplicaSizeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasqlinstancesresetreplicasizerequest"></a>
<a id="schema_SqlInstancesResetReplicaSizeRequest"></a>
<a id="tocSsqlinstancesresetreplicasizerequest"></a>
<a id="tocssqlinstancesresetreplicasizerequest"></a>

```json
{}
```

Instance reset replica size request.

<h2 id="tocS_SqlInstancesStartExternalSyncRequest">SqlInstancesStartExternalSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemasqlinstancesstartexternalsyncrequest"></a>
<a id="schema_SqlInstancesStartExternalSyncRequest"></a>
<a id="tocSsqlinstancesstartexternalsyncrequest"></a>
<a id="tocssqlinstancesstartexternalsyncrequest"></a>

```json
{
  "mysqlSyncConfig": {
    "initialSyncFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "skipVerification": true,
  "syncMode": "EXTERNAL_SYNC_MODE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlSyncConfig|[MySqlSyncConfig](#schemamysqlsyncconfig)|false|none|MySQL-specific settings for start external sync.|
|skipVerification|boolean|false|none|Whether to skip the verification step (VESS).|
|syncMode|string|false|none|External sync mode.|

#### Enumerated Values

|Property|Value|
|---|---|
|syncMode|EXTERNAL_SYNC_MODE_UNSPECIFIED|
|syncMode|ONLINE|
|syncMode|OFFLINE|

<h2 id="tocS_SqlInstancesVerifyExternalSyncSettingsRequest">SqlInstancesVerifyExternalSyncSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasqlinstancesverifyexternalsyncsettingsrequest"></a>
<a id="schema_SqlInstancesVerifyExternalSyncSettingsRequest"></a>
<a id="tocSsqlinstancesverifyexternalsyncsettingsrequest"></a>
<a id="tocssqlinstancesverifyexternalsyncsettingsrequest"></a>

```json
{
  "mysqlSyncConfig": {
    "initialSyncFlags": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "syncMode": "EXTERNAL_SYNC_MODE_UNSPECIFIED",
  "verifyConnectionOnly": true,
  "verifyReplicationOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlSyncConfig|[MySqlSyncConfig](#schemamysqlsyncconfig)|false|none|Optional. MySQL-specific settings for start external sync.|
|syncMode|string|false|none|External sync mode|
|verifyConnectionOnly|boolean|false|none|Flag to enable verifying connection only|
|verifyReplicationOnly|boolean|false|none|Optional. Flag to verify settings required by replication setup only|

#### Enumerated Values

|Property|Value|
|---|---|
|syncMode|EXTERNAL_SYNC_MODE_UNSPECIFIED|
|syncMode|ONLINE|
|syncMode|OFFLINE|

<h2 id="tocS_SqlInstancesVerifyExternalSyncSettingsResponse">SqlInstancesVerifyExternalSyncSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasqlinstancesverifyexternalsyncsettingsresponse"></a>
<a id="schema_SqlInstancesVerifyExternalSyncSettingsResponse"></a>
<a id="tocSsqlinstancesverifyexternalsyncsettingsresponse"></a>
<a id="tocssqlinstancesverifyexternalsyncsettingsresponse"></a>

```json
{
  "errors": [
    {
      "detail": "string",
      "kind": "string",
      "type": "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "warnings": [
    {
      "detail": "string",
      "kind": "string",
      "type": "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
    }
  ]
}
```

Instance verify external sync settings response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[SqlExternalSyncSettingError](#schemasqlexternalsyncsettingerror)]|false|none|List of migration violations.|
|kind|string|false|none|This is always `sql#migrationSettingErrorList`.|
|warnings|[[SqlExternalSyncSettingError](#schemasqlexternalsyncsettingerror)]|false|none|List of migration warnings.|

<h2 id="tocS_SqlOutOfDiskReport">SqlOutOfDiskReport</h2>
<!-- backwards compatibility -->
<a id="schemasqloutofdiskreport"></a>
<a id="schema_SqlOutOfDiskReport"></a>
<a id="tocSsqloutofdiskreport"></a>
<a id="tocssqloutofdiskreport"></a>

```json
{
  "sqlMinRecommendedIncreaseSizeGb": 0,
  "sqlOutOfDiskState": "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
}
```

This message wraps up the information written by out-of-disk detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlMinRecommendedIncreaseSizeGb|integer(int32)|false|none|The minimum recommended increase size in GigaBytes This field is consumed by the frontend * Writers: * the proactive database wellness job for OOD. * Readers:|
|sqlOutOfDiskState|string|false|none|This field represents the state generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job|

#### Enumerated Values

|Property|Value|
|---|---|
|sqlOutOfDiskState|SQL_OUT_OF_DISK_STATE_UNSPECIFIED|
|sqlOutOfDiskState|NORMAL|
|sqlOutOfDiskState|SOFT_SHUTDOWN|

<h2 id="tocS_SqlScheduledMaintenance">SqlScheduledMaintenance</h2>
<!-- backwards compatibility -->
<a id="schemasqlscheduledmaintenance"></a>
<a id="schema_SqlScheduledMaintenance"></a>
<a id="tocSsqlscheduledmaintenance"></a>
<a id="tocssqlscheduledmaintenance"></a>

```json
{
  "canDefer": true,
  "canReschedule": true,
  "scheduleDeadlineTime": "string",
  "startTime": "string"
}
```

Any scheduled maintenance for this instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canDefer|boolean|false|none|none|
|canReschedule|boolean|false|none|If the scheduled maintenance can be rescheduled.|
|scheduleDeadlineTime|string(google-datetime)|false|none|Maintenance cannot be rescheduled to start beyond this deadline.|
|startTime|string(google-datetime)|false|none|The start time of any upcoming scheduled maintenance for this instance.|

<h2 id="tocS_SqlServerAuditConfig">SqlServerAuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemasqlserverauditconfig"></a>
<a id="schema_SqlServerAuditConfig"></a>
<a id="tocSsqlserverauditconfig"></a>
<a id="tocssqlserverauditconfig"></a>

```json
{
  "bucket": "string",
  "kind": "string",
  "retentionInterval": "string",
  "uploadInterval": "string"
}
```

SQL Server specific audit configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|The name of the destination bucket (e.g., gs://mybucket).|
|kind|string|false|none|This is always sql#sqlServerAuditConfig|
|retentionInterval|string(google-duration)|false|none|How long to keep generated audit files.|
|uploadInterval|string(google-duration)|false|none|How often to upload generated audit files.|

<h2 id="tocS_SqlServerDatabaseDetails">SqlServerDatabaseDetails</h2>
<!-- backwards compatibility -->
<a id="schemasqlserverdatabasedetails"></a>
<a id="schema_SqlServerDatabaseDetails"></a>
<a id="tocSsqlserverdatabasedetails"></a>
<a id="tocssqlserverdatabasedetails"></a>

```json
{
  "compatibilityLevel": 0,
  "recoveryModel": "string"
}
```

Represents a Sql Server database on the Cloud SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compatibilityLevel|integer(int32)|false|none|The version of SQL Server with which the database is to be made compatible|
|recoveryModel|string|false|none|The recovery model of a SQL Server database|

<h2 id="tocS_SqlServerUserDetails">SqlServerUserDetails</h2>
<!-- backwards compatibility -->
<a id="schemasqlserveruserdetails"></a>
<a id="schema_SqlServerUserDetails"></a>
<a id="tocSsqlserveruserdetails"></a>
<a id="tocssqlserveruserdetails"></a>

```json
{
  "disabled": true,
  "serverRoles": [
    "string"
  ]
}
```

Represents a Sql Server user on the Cloud SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|If the user has been disabled|
|serverRoles|[string]|false|none|The server roles for this user|

<h2 id="tocS_SslCert">SslCert</h2>
<!-- backwards compatibility -->
<a id="schemasslcert"></a>
<a id="schema_SslCert"></a>
<a id="tocSsslcert"></a>
<a id="tocssslcert"></a>

```json
{
  "cert": "string",
  "certSerialNumber": "string",
  "commonName": "string",
  "createTime": "string",
  "expirationTime": "string",
  "instance": "string",
  "kind": "string",
  "selfLink": "string",
  "sha1Fingerprint": "string"
}
```

SslCerts Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cert|string|false|none|PEM representation.|
|certSerialNumber|string|false|none|Serial number, as extracted from the certificate.|
|commonName|string|false|none|User supplied name. Constrained to [a-zA-Z.-_ ]+.|
|createTime|string(google-datetime)|false|none|The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|expirationTime|string(google-datetime)|false|none|The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.|
|instance|string|false|none|Name of the database instance.|
|kind|string|false|none|This is always `sql#sslCert`.|
|selfLink|string|false|none|The URI of this resource.|
|sha1Fingerprint|string|false|none|Sha1 Fingerprint.|

<h2 id="tocS_SslCertDetail">SslCertDetail</h2>
<!-- backwards compatibility -->
<a id="schemasslcertdetail"></a>
<a id="schema_SslCertDetail"></a>
<a id="tocSsslcertdetail"></a>
<a id="tocssslcertdetail"></a>

```json
{
  "certInfo": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  },
  "certPrivateKey": "string"
}
```

SslCertDetail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certInfo|[SslCert](#schemasslcert)|false|none|The public information about the cert.|
|certPrivateKey|string|false|none|The private key for the client cert, in pem format. Keep private in order to protect your security.|

<h2 id="tocS_SslCertsCreateEphemeralRequest">SslCertsCreateEphemeralRequest</h2>
<!-- backwards compatibility -->
<a id="schemasslcertscreateephemeralrequest"></a>
<a id="schema_SslCertsCreateEphemeralRequest"></a>
<a id="tocSsslcertscreateephemeralrequest"></a>
<a id="tocssslcertscreateephemeralrequest"></a>

```json
{
  "access_token": "string",
  "public_key": "string"
}
```

SslCerts create ephemeral certificate request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|Access token to include in the signed certificate.|
|public_key|string|false|none|PEM encoded public key to include in the signed certificate.|

<h2 id="tocS_SslCertsInsertRequest">SslCertsInsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemasslcertsinsertrequest"></a>
<a id="schema_SslCertsInsertRequest"></a>
<a id="tocSsslcertsinsertrequest"></a>
<a id="tocssslcertsinsertrequest"></a>

```json
{
  "commonName": "string"
}
```

SslCerts insert request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonName|string|false|none|User supplied name. Must be a distinct name from the other certificates for this instance.|

<h2 id="tocS_SslCertsInsertResponse">SslCertsInsertResponse</h2>
<!-- backwards compatibility -->
<a id="schemasslcertsinsertresponse"></a>
<a id="schema_SslCertsInsertResponse"></a>
<a id="tocSsslcertsinsertresponse"></a>
<a id="tocssslcertsinsertresponse"></a>

```json
{
  "clientCert": {
    "certInfo": {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    },
    "certPrivateKey": "string"
  },
  "kind": "string",
  "operation": {
    "backupContext": {
      "backupId": "string",
      "kind": "string"
    },
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "kind": "string",
          "message": "string"
        }
      ],
      "kind": "string"
    },
    "exportContext": {
      "bakExportOptions": {
        "stripeCount": 0,
        "striped": true
      },
      "csvExportOptions": {
        "escapeCharacter": "string",
        "fieldsTerminatedBy": "string",
        "linesTerminatedBy": "string",
        "quoteCharacter": "string",
        "selectQuery": "string"
      },
      "databases": [
        "string"
      ],
      "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
      "kind": "string",
      "offload": true,
      "sqlExportOptions": {
        "mysqlExportOptions": {
          "masterData": 0
        },
        "schemaOnly": true,
        "tables": [
          "string"
        ]
      },
      "uri": "string"
    },
    "importContext": {
      "bakImportOptions": {
        "encryptionOptions": {
          "certPath": "string",
          "pvkPassword": "string",
          "pvkPath": "string"
        },
        "striped": true
      },
      "csvImportOptions": {
        "columns": [
          "string"
        ],
        "escapeCharacter": "string",
        "fieldsTerminatedBy": "string",
        "linesTerminatedBy": "string",
        "quoteCharacter": "string",
        "table": "string"
      },
      "database": "string",
      "fileType": "SQL_FILE_TYPE_UNSPECIFIED",
      "importUser": "string",
      "kind": "string",
      "uri": "string"
    },
    "insertTime": "string",
    "kind": "string",
    "name": "string",
    "operationType": "SQL_OPERATION_TYPE_UNSPECIFIED",
    "selfLink": "string",
    "startTime": "string",
    "status": "SQL_OPERATION_STATUS_UNSPECIFIED",
    "targetId": "string",
    "targetLink": "string",
    "targetProject": "string",
    "user": "string"
  },
  "serverCaCert": {
    "cert": "string",
    "certSerialNumber": "string",
    "commonName": "string",
    "createTime": "string",
    "expirationTime": "string",
    "instance": "string",
    "kind": "string",
    "selfLink": "string",
    "sha1Fingerprint": "string"
  }
}
```

SslCert insert response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientCert|[SslCertDetail](#schemasslcertdetail)|false|none|The new client certificate and private key.|
|kind|string|false|none|This is always `sql#sslCertsInsert`.|
|operation|[Operation](#schemaoperation)|false|none|The operation to track the ssl certs insert request.|
|serverCaCert|[SslCert](#schemasslcert)|false|none|The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource.|

<h2 id="tocS_SslCertsListResponse">SslCertsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasslcertslistresponse"></a>
<a id="schema_SslCertsListResponse"></a>
<a id="tocSsslcertslistresponse"></a>
<a id="tocssslcertslistresponse"></a>

```json
{
  "items": [
    {
      "cert": "string",
      "certSerialNumber": "string",
      "commonName": "string",
      "createTime": "string",
      "expirationTime": "string",
      "instance": "string",
      "kind": "string",
      "selfLink": "string",
      "sha1Fingerprint": "string"
    }
  ],
  "kind": "string"
}
```

SslCerts list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SslCert](#schemasslcert)]|false|none|List of client certificates for the instance.|
|kind|string|false|none|This is always `sql#sslCertsList`.|

<h2 id="tocS_SyncFlags">SyncFlags</h2>
<!-- backwards compatibility -->
<a id="schemasyncflags"></a>
<a id="schema_SyncFlags"></a>
<a id="tocSsyncflags"></a>
<a id="tocssyncflags"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the flag.|
|value|string|false|none|The value of the flag. This field must be omitted if the flag doesn't take a value.|

<h2 id="tocS_Tier">Tier</h2>
<!-- backwards compatibility -->
<a id="schematier"></a>
<a id="schema_Tier"></a>
<a id="tocStier"></a>
<a id="tocstier"></a>

```json
{
  "DiskQuota": "string",
  "RAM": "string",
  "kind": "string",
  "region": [
    "string"
  ],
  "tier": "string"
}
```

A Google Cloud SQL service tier resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiskQuota|string(int64)|false|none|The maximum disk size of this tier in bytes.|
|RAM|string(int64)|false|none|The maximum RAM usage of this tier in bytes.|
|kind|string|false|none|This is always `sql#tier`.|
|region|[string]|false|none|The applicable regions for this tier.|
|tier|string|false|none|An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).|

<h2 id="tocS_TiersListResponse">TiersListResponse</h2>
<!-- backwards compatibility -->
<a id="schematierslistresponse"></a>
<a id="schema_TiersListResponse"></a>
<a id="tocStierslistresponse"></a>
<a id="tocstierslistresponse"></a>

```json
{
  "items": [
    {
      "DiskQuota": "string",
      "RAM": "string",
      "kind": "string",
      "region": [
        "string"
      ],
      "tier": "string"
    }
  ],
  "kind": "string"
}
```

Tiers list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Tier](#schematier)]|false|none|List of tiers.|
|kind|string|false|none|This is always `sql#tiersList`.|

<h2 id="tocS_TruncateLogContext">TruncateLogContext</h2>
<!-- backwards compatibility -->
<a id="schematruncatelogcontext"></a>
<a id="schema_TruncateLogContext"></a>
<a id="tocStruncatelogcontext"></a>
<a id="tocstruncatelogcontext"></a>

```json
{
  "kind": "string",
  "logType": "string"
}
```

Database Instance truncate log context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always `sql#truncateLogContext`.|
|logType|string|false|none|The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
  "etag": "string",
  "host": "string",
  "instance": "string",
  "kind": "string",
  "name": "string",
  "password": "string",
  "passwordPolicy": {
    "allowedFailedAttempts": 0,
    "enableFailedAttemptsCheck": true,
    "enablePasswordVerification": true,
    "passwordExpirationDuration": "string",
    "status": {
      "locked": true,
      "passwordExpirationTime": "string"
    }
  },
  "project": "string",
  "sqlserverUserDetails": {
    "disabled": true,
    "serverRoles": [
      "string"
    ]
  },
  "type": "BUILT_IN"
}
```

A Cloud SQL user resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dualPasswordType|string|false|none|Dual password status for the user.|
|etag|string|false|none|This field is deprecated and will be removed from a future version of the API.|
|host|string|false|none|Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.|
|instance|string|false|none|The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL.|
|kind|string|false|none|This is always `sql#user`.|
|name|string|false|none|The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.|
|password|string|false|none|The password for the user.|
|passwordPolicy|[UserPasswordValidationPolicy](#schemauserpasswordvalidationpolicy)|false|none|User level password validation policy.|
|project|string|false|none|The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL.|
|sqlserverUserDetails|[SqlServerUserDetails](#schemasqlserveruserdetails)|false|none|Represents a Sql Server user on the Cloud SQL instance.|
|type|string|false|none|The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.|

#### Enumerated Values

|Property|Value|
|---|---|
|dualPasswordType|DUAL_PASSWORD_TYPE_UNSPECIFIED|
|dualPasswordType|NO_MODIFY_DUAL_PASSWORD|
|dualPasswordType|NO_DUAL_PASSWORD|
|dualPasswordType|DUAL_PASSWORD|
|type|BUILT_IN|
|type|CLOUD_IAM_USER|
|type|CLOUD_IAM_SERVICE_ACCOUNT|

<h2 id="tocS_UserPasswordValidationPolicy">UserPasswordValidationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemauserpasswordvalidationpolicy"></a>
<a id="schema_UserPasswordValidationPolicy"></a>
<a id="tocSuserpasswordvalidationpolicy"></a>
<a id="tocsuserpasswordvalidationpolicy"></a>

```json
{
  "allowedFailedAttempts": 0,
  "enableFailedAttemptsCheck": true,
  "enablePasswordVerification": true,
  "passwordExpirationDuration": "string",
  "status": {
    "locked": true,
    "passwordExpirationTime": "string"
  }
}
```

User level password validation policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedFailedAttempts|integer(int32)|false|none|Number of failed login attempts allowed before user get locked.|
|enableFailedAttemptsCheck|boolean|false|none|If true, failed login attempts check will be enabled.|
|enablePasswordVerification|boolean|false|none|If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.|
|passwordExpirationDuration|string(google-duration)|false|none|Expiration duration after password is updated.|
|status|[PasswordStatus](#schemapasswordstatus)|false|none|Output only. Read-only password status.|

<h2 id="tocS_UsersListResponse">UsersListResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserslistresponse"></a>
<a id="schema_UsersListResponse"></a>
<a id="tocSuserslistresponse"></a>
<a id="tocsuserslistresponse"></a>

```json
{
  "items": [
    {
      "dualPasswordType": "DUAL_PASSWORD_TYPE_UNSPECIFIED",
      "etag": "string",
      "host": "string",
      "instance": "string",
      "kind": "string",
      "name": "string",
      "password": "string",
      "passwordPolicy": {
        "allowedFailedAttempts": 0,
        "enableFailedAttemptsCheck": true,
        "enablePasswordVerification": true,
        "passwordExpirationDuration": "string",
        "status": {
          "locked": true,
          "passwordExpirationTime": "string"
        }
      },
      "project": "string",
      "sqlserverUserDetails": {
        "disabled": true,
        "serverRoles": [
          "string"
        ]
      },
      "type": "BUILT_IN"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

User list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[User](#schemauser)]|false|none|List of user resources in the instance.|
|kind|string|false|none|This is always *sql#usersList*.|
|nextPageToken|string|false|none|Unused.|
