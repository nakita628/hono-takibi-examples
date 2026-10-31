<h1 id="datastream-api">Datastream API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://datastream.googleapis.com/">https://datastream.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/datastream/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="datastream-api-projects">projects</h1>

## datastream.projects.locations.streams.objects.get

<a id="opIddatastream.projects.locations.streams.objects.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Use this method to get details about a stream object.

<h3 id="datastreamprojectslocationsstreamsobjectsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the stream object resource to get.|
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
  "backfillJob": {
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "lastEndTime": "string",
    "lastStartTime": "string",
    "state": "STATE_UNSPECIFIED",
    "trigger": "TRIGGER_UNSPECIFIED"
  },
  "createTime": "string",
  "displayName": "string",
  "errors": [
    {
      "details": {
        "property1": "string",
        "property2": "string"
      },
      "errorTime": "string",
      "errorUuid": "string",
      "message": "string",
      "reason": "string"
    }
  ],
  "name": "string",
  "sourceObject": {
    "mysqlIdentifier": {
      "database": "string",
      "table": "string"
    },
    "oracleIdentifier": {
      "schema": "string",
      "table": "string"
    },
    "postgresqlIdentifier": {
      "schema": "string",
      "table": "string"
    }
  },
  "updateTime": "string"
}
```

<h3 id="datastreamprojectslocationsstreamsobjectsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StreamObject](#schemastreamobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.delete

<a id="opIddatastream.projects.locations.streams.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Use this method to delete a stream.

<h3 id="datastreamprojectslocationsstreamsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the stream resource to delete.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastreamprojectslocationsstreamsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.patch

<a id="opIddatastream.projects.locations.streams.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backfillAll": {
      "mysqlExcludedObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "oracleExcludedObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "postgresqlExcludedObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      }
    },
    "backfillNone": {},
    "customerManagedEncryptionKey": "string",
    "destinationConfig": {
      "bigqueryDestinationConfig": {
        "dataFreshness": "string",
        "singleTargetDataset": {
          "datasetId": "string"
        },
        "sourceHierarchyDatasets": {
          "datasetTemplate": {
            "datasetIdPrefix": "string",
            "kmsKeyName": "string",
            "location": "string"
          }
        }
      },
      "destinationConnectionProfile": "string",
      "gcsDestinationConfig": {
        "avroFileFormat": {},
        "fileRotationInterval": "string",
        "fileRotationMb": 0,
        "jsonFileFormat": {
          "compression": "JSON_COMPRESSION_UNSPECIFIED",
          "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
        },
        "path": "string"
      }
    },
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "sourceConfig": {
      "mysqlSourceConfig": {
        "excludeObjects": {
          "mysqlDatabases": [
            {
              "database": "string",
              "mysqlTables": [
                {
                  "mysqlColumns": [
                    {
                      "collation": "string",
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "primaryKey": true
                    }
                  ],
                  "table": "string"
                }
              ]
            }
          ]
        },
        "includeObjects": {
          "mysqlDatabases": [
            {
              "database": "string",
              "mysqlTables": [
                {
                  "mysqlColumns": [
                    {
                      "collation": "string",
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "primaryKey": true
                    }
                  ],
                  "table": "string"
                }
              ]
            }
          ]
        },
        "maxConcurrentBackfillTasks": 0,
        "maxConcurrentCdcTasks": 0
      },
      "oracleSourceConfig": {
        "dropLargeObjects": {},
        "excludeObjects": {
          "oracleSchemas": [
            {
              "oracleTables": [
                {
                  "oracleColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "encoding": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "includeObjects": {
          "oracleSchemas": [
            {
              "oracleTables": [
                {
                  "oracleColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "encoding": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "maxConcurrentBackfillTasks": 0,
        "maxConcurrentCdcTasks": 0,
        "streamLargeObjects": {}
      },
      "postgresqlSourceConfig": {
        "excludeObjects": {
          "postgresqlSchemas": [
            {
              "postgresqlTables": [
                {
                  "postgresqlColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "includeObjects": {
          "postgresqlSchemas": [
            {
              "postgresqlTables": [
                {
                  "postgresqlColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "maxConcurrentBackfillTasks": 0,
        "publication": "string",
        "replicationSlot": "string"
      },
      "sourceConnectionProfile": "string"
    },
    "state": "STATE_UNSPECIFIED"
  }'
```

`PATCH /v1/{name}`

Use this method to update the configuration of a stream.

> Body parameter

```json
{
  "backfillAll": {
    "mysqlExcludedObjects": {
      "mysqlDatabases": [
        {
          "database": "string",
          "mysqlTables": [
            {
              "mysqlColumns": [
                {
                  "collation": "string",
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "primaryKey": true
                }
              ],
              "table": "string"
            }
          ]
        }
      ]
    },
    "oracleExcludedObjects": {
      "oracleSchemas": [
        {
          "oracleTables": [
            {
              "oracleColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "encoding": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "postgresqlExcludedObjects": {
      "postgresqlSchemas": [
        {
          "postgresqlTables": [
            {
              "postgresqlColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "backfillNone": {},
  "customerManagedEncryptionKey": "string",
  "destinationConfig": {
    "bigqueryDestinationConfig": {
      "dataFreshness": "string",
      "singleTargetDataset": {
        "datasetId": "string"
      },
      "sourceHierarchyDatasets": {
        "datasetTemplate": {
          "datasetIdPrefix": "string",
          "kmsKeyName": "string",
          "location": "string"
        }
      }
    },
    "destinationConnectionProfile": "string",
    "gcsDestinationConfig": {
      "avroFileFormat": {},
      "fileRotationInterval": "string",
      "fileRotationMb": 0,
      "jsonFileFormat": {
        "compression": "JSON_COMPRESSION_UNSPECIFIED",
        "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
      },
      "path": "string"
    }
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "sourceConfig": {
    "mysqlSourceConfig": {
      "excludeObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "includeObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "maxConcurrentCdcTasks": 0
    },
    "oracleSourceConfig": {
      "dropLargeObjects": {},
      "excludeObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "includeObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "maxConcurrentCdcTasks": 0,
      "streamLargeObjects": {}
    },
    "postgresqlSourceConfig": {
      "excludeObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "includeObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "publication": "string",
      "replicationSlot": "string"
    },
    "sourceConnectionProfile": "string"
  },
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="datastreamprojectslocationsstreamspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The stream's name.|
|force|query|boolean|false|Optional. Update the stream without validating it.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.|
|validateOnly|query|boolean|false|Optional. Only validate the stream with the changes, without actually updating it. The default is false.|
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
|body|body|[Stream](#schemastream)|false|none|
|» backfillAll|body|[BackfillAllStrategy](#schemabackfillallstrategy)|false|Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.|
|» backfillNone|body|[BackfillNoneStrategy](#schemabackfillnonestrategy)|false|Do not automatically backfill any objects.|
|» customerManagedEncryptionKey|body|string|false|Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.|
|» destinationConfig|body|[DestinationConfig](#schemadestinationconfig)|false|Required. Destination connection profile configuration.|
|» displayName|body|string|false|Required. Display name.|
|» labels|body|object|false|Labels.|
|» » **additionalProperties**|body|string|false|none|
|» sourceConfig|body|[SourceConfig](#schemasourceconfig)|false|Required. Source connection profile configuration.|
|» state|body|string|false|The state of the stream.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|NOT_STARTED|
|» state|RUNNING|
|» state|PAUSED|
|» state|MAINTENANCE|
|» state|FAILED|
|» state|FAILED_PERMANENTLY|
|» state|STARTING|
|» state|DRAINING|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastreamprojectslocationsstreamspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.list

<a id="opIddatastream.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="datastreamprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datastreamprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.operations.list

<a id="opIddatastream.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="datastreamprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="datastreamprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.operations.cancel

<a id="opIddatastream.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="datastreamprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
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
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

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
{}
```

<h3 id="datastreamprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.fetchStaticIps

<a id="opIddatastream.projects.locations.fetchStaticIps"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:fetchStaticIps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:fetchStaticIps`

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

<h3 id="datastreamprojectslocationsfetchstaticips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/*/locations/*`.|
|pageSize|query|integer|false|Maximum number of Ips to return, will likely not be specified.|
|pageToken|query|string|false|A page token, received from a previous `ListStaticIps` call. will likely not be specified.|
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
  "nextPageToken": "string",
  "staticIps": [
    "string"
  ]
}
```

<h3 id="datastreamprojectslocationsfetchstaticips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchStaticIpsResponse](#schemafetchstaticipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.objects.startBackfillJob

<a id="opIddatastream.projects.locations.streams.objects.startBackfillJob"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:startBackfillJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{object}:startBackfillJob`

Use this method to start a backfill job for the specified stream object.

> Body parameter

```json
{}
```

<h3 id="datastreamprojectslocationsstreamsobjectsstartbackfilljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object|path|string|true|Required. The name of the stream object resource to start a backfill job for.|
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
|body|body|[StartBackfillJobRequest](#schemastartbackfilljobrequest)|false|none|

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
  "object": {
    "backfillJob": {
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "lastEndTime": "string",
      "lastStartTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trigger": "TRIGGER_UNSPECIFIED"
    },
    "createTime": "string",
    "displayName": "string",
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "name": "string",
    "sourceObject": {
      "mysqlIdentifier": {
        "database": "string",
        "table": "string"
      },
      "oracleIdentifier": {
        "schema": "string",
        "table": "string"
      },
      "postgresqlIdentifier": {
        "schema": "string",
        "table": "string"
      }
    },
    "updateTime": "string"
  }
}
```

<h3 id="datastreamprojectslocationsstreamsobjectsstartbackfilljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StartBackfillJobResponse](#schemastartbackfilljobresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.objects.stopBackfillJob

<a id="opIddatastream.projects.locations.streams.objects.stopBackfillJob"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:stopBackfillJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{object}:stopBackfillJob`

Use this method to stop a backfill job for the specified stream object.

> Body parameter

```json
{}
```

<h3 id="datastreamprojectslocationsstreamsobjectsstopbackfilljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object|path|string|true|Required. The name of the stream object resource to stop the backfill job for.|
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
|body|body|[StopBackfillJobRequest](#schemastopbackfilljobrequest)|false|none|

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
  "object": {
    "backfillJob": {
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "lastEndTime": "string",
      "lastStartTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trigger": "TRIGGER_UNSPECIFIED"
    },
    "createTime": "string",
    "displayName": "string",
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "name": "string",
    "sourceObject": {
      "mysqlIdentifier": {
        "database": "string",
        "table": "string"
      },
      "oracleIdentifier": {
        "schema": "string",
        "table": "string"
      },
      "postgresqlIdentifier": {
        "schema": "string",
        "table": "string"
      }
    },
    "updateTime": "string"
  }
}
```

<h3 id="datastreamprojectslocationsstreamsobjectsstopbackfilljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StopBackfillJobResponse](#schemastopbackfilljobresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.connectionProfiles.list

<a id="opIddatastream.projects.locations.connectionProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/connectionProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/connectionProfiles`

Use this method to list connection profiles created in a project and location.

<h3 id="datastreamprojectslocationsconnectionprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of connection profiles.|
|filter|query|string|false|Filter request.|
|orderBy|query|string|false|Order by fields for the result.|
|pageSize|query|integer|false|Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.|
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
  "connectionProfiles": [
    {
      "bigqueryProfile": {},
      "createTime": "string",
      "displayName": "string",
      "forwardSshConnectivity": {
        "hostname": "string",
        "password": "string",
        "port": 0,
        "privateKey": "string",
        "username": "string"
      },
      "gcsProfile": {
        "bucket": "string",
        "rootPath": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mysqlProfile": {
        "hostname": "string",
        "password": "string",
        "port": 0,
        "sslConfig": {
          "caCertificate": "string",
          "caCertificateSet": true,
          "clientCertificate": "string",
          "clientCertificateSet": true,
          "clientKey": "string",
          "clientKeySet": true
        },
        "username": "string"
      },
      "name": "string",
      "oracleProfile": {
        "connectionAttributes": {
          "property1": "string",
          "property2": "string"
        },
        "databaseService": "string",
        "hostname": "string",
        "password": "string",
        "port": 0,
        "username": "string"
      },
      "postgresqlProfile": {
        "database": "string",
        "hostname": "string",
        "password": "string",
        "port": 0,
        "username": "string"
      },
      "privateConnectivity": {
        "privateConnection": "string"
      },
      "staticServiceIpConnectivity": {},
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datastreamprojectslocationsconnectionprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConnectionProfilesResponse](#schemalistconnectionprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.connectionProfiles.create

<a id="opIddatastream.projects.locations.connectionProfiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/connectionProfiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryProfile": {},
    "displayName": "string",
    "forwardSshConnectivity": {
      "hostname": "string",
      "password": "string",
      "port": 0,
      "privateKey": "string",
      "username": "string"
    },
    "gcsProfile": {
      "bucket": "string",
      "rootPath": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mysqlProfile": {
      "hostname": "string",
      "password": "string",
      "port": 0,
      "sslConfig": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string"
      },
      "username": "string"
    },
    "oracleProfile": {
      "connectionAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "databaseService": "string",
      "hostname": "string",
      "password": "string",
      "port": 0,
      "username": "string"
    },
    "postgresqlProfile": {
      "database": "string",
      "hostname": "string",
      "password": "string",
      "port": 0,
      "username": "string"
    },
    "privateConnectivity": {
      "privateConnection": "string"
    },
    "staticServiceIpConnectivity": {}
  }'
```

`POST /v1/{parent}/connectionProfiles`

Use this method to create a connection profile in a project and location.

> Body parameter

```json
{
  "bigqueryProfile": {},
  "displayName": "string",
  "forwardSshConnectivity": {
    "hostname": "string",
    "password": "string",
    "port": 0,
    "privateKey": "string",
    "username": "string"
  },
  "gcsProfile": {
    "bucket": "string",
    "rootPath": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mysqlProfile": {
    "hostname": "string",
    "password": "string",
    "port": 0,
    "sslConfig": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string"
    },
    "username": "string"
  },
  "oracleProfile": {
    "connectionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "databaseService": "string",
    "hostname": "string",
    "password": "string",
    "port": 0,
    "username": "string"
  },
  "postgresqlProfile": {
    "database": "string",
    "hostname": "string",
    "password": "string",
    "port": 0,
    "username": "string"
  },
  "privateConnectivity": {
    "privateConnection": "string"
  },
  "staticServiceIpConnectivity": {}
}
```

<h3 id="datastreamprojectslocationsconnectionprofilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of ConnectionProfiles.|
|connectionProfileId|query|string|false|Required. The connection profile identifier.|
|force|query|boolean|false|Optional. Create the connection profile without validating it.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. Only validate the connection profile, but don't create any resources. The default is false.|
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
|body|body|[ConnectionProfile](#schemaconnectionprofile)|false|none|
|» bigqueryProfile|body|[BigQueryProfile](#schemabigqueryprofile)|false|BigQuery Connection Profile configuration.|
|» displayName|body|string|false|Required. Display name.|
|» forwardSshConnectivity|body|[ForwardSshTunnelConnectivity](#schemaforwardsshtunnelconnectivity)|false|Forward SSH tunnel connectivity.|
|» gcsProfile|body|[GcsProfile](#schemagcsprofile)|false|Cloud Storage ConnectionProfile configuration.|
|» labels|body|object|false|Labels.|
|» » **additionalProperties**|body|string|false|none|
|» mysqlProfile|body|[MysqlProfile](#schemamysqlprofile)|false|MySQL ConnectionProfile configuration.|
|» oracleProfile|body|[OracleProfile](#schemaoracleprofile)|false|Oracle ConnectionProfile configuration.|
|» postgresqlProfile|body|[PostgresqlProfile](#schemapostgresqlprofile)|false|PostgreSQL Connection Profile configuration.|
|» privateConnectivity|body|[PrivateConnectivity](#schemaprivateconnectivity)|false|Private connectivity.|
|» staticServiceIpConnectivity|body|[StaticServiceIpConnectivity](#schemastaticserviceipconnectivity)|false|Static Service IP connectivity.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastreamprojectslocationsconnectionprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.connectionProfiles.discover

<a id="opIddatastream.projects.locations.connectionProfiles.discover"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/connectionProfiles:discover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connectionProfile": {
      "bigqueryProfile": {},
      "displayName": "string",
      "forwardSshConnectivity": {
        "hostname": "string",
        "password": "string",
        "port": 0,
        "privateKey": "string",
        "username": "string"
      },
      "gcsProfile": {
        "bucket": "string",
        "rootPath": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mysqlProfile": {
        "hostname": "string",
        "password": "string",
        "port": 0,
        "sslConfig": {
          "caCertificate": "string",
          "clientCertificate": "string",
          "clientKey": "string"
        },
        "username": "string"
      },
      "oracleProfile": {
        "connectionAttributes": {
          "property1": "string",
          "property2": "string"
        },
        "databaseService": "string",
        "hostname": "string",
        "password": "string",
        "port": 0,
        "username": "string"
      },
      "postgresqlProfile": {
        "database": "string",
        "hostname": "string",
        "password": "string",
        "port": 0,
        "username": "string"
      },
      "privateConnectivity": {
        "privateConnection": "string"
      },
      "staticServiceIpConnectivity": {}
    },
    "connectionProfileName": "string",
    "fullHierarchy": true,
    "hierarchyDepth": 0,
    "mysqlRdbms": {
      "mysqlDatabases": [
        {
          "database": "string",
          "mysqlTables": [
            {
              "mysqlColumns": [
                {
                  "collation": "string",
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "primaryKey": true
                }
              ],
              "table": "string"
            }
          ]
        }
      ]
    },
    "oracleRdbms": {
      "oracleSchemas": [
        {
          "oracleTables": [
            {
              "oracleColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "encoding": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "postgresqlRdbms": {
      "postgresqlSchemas": [
        {
          "postgresqlTables": [
            {
              "postgresqlColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    }
  }'
```

`POST /v1/{parent}/connectionProfiles:discover`

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

> Body parameter

```json
{
  "connectionProfile": {
    "bigqueryProfile": {},
    "displayName": "string",
    "forwardSshConnectivity": {
      "hostname": "string",
      "password": "string",
      "port": 0,
      "privateKey": "string",
      "username": "string"
    },
    "gcsProfile": {
      "bucket": "string",
      "rootPath": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mysqlProfile": {
      "hostname": "string",
      "password": "string",
      "port": 0,
      "sslConfig": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string"
      },
      "username": "string"
    },
    "oracleProfile": {
      "connectionAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "databaseService": "string",
      "hostname": "string",
      "password": "string",
      "port": 0,
      "username": "string"
    },
    "postgresqlProfile": {
      "database": "string",
      "hostname": "string",
      "password": "string",
      "port": 0,
      "username": "string"
    },
    "privateConnectivity": {
      "privateConnection": "string"
    },
    "staticServiceIpConnectivity": {}
  },
  "connectionProfileName": "string",
  "fullHierarchy": true,
  "hierarchyDepth": 0,
  "mysqlRdbms": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "oracleRdbms": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "postgresqlRdbms": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  }
}
```

<h3 id="datastreamprojectslocationsconnectionprofilesdiscover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the connection profile type. Must be in the format `projects/*/locations/*`.|
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
|body|body|[DiscoverConnectionProfileRequest](#schemadiscoverconnectionprofilerequest)|false|none|
|» connectionProfile|body|[ConnectionProfile](#schemaconnectionprofile)|false|An ad-hoc connection profile configuration.|
|» connectionProfileName|body|string|false|A reference to an existing connection profile.|
|» fullHierarchy|body|boolean|false|Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).|
|» hierarchyDepth|body|integer(int32)|false|The number of hierarchy levels below the current level to be retrieved.|
|» mysqlRdbms|body|[MysqlRdbms](#schemamysqlrdbms)|false|MySQL RDBMS to enrich with child data objects and metadata.|
|» oracleRdbms|body|[OracleRdbms](#schemaoraclerdbms)|false|Oracle RDBMS to enrich with child data objects and metadata.|
|» postgresqlRdbms|body|[PostgresqlRdbms](#schemapostgresqlrdbms)|false|PostgreSQL RDBMS to enrich with child data objects and metadata.|

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
  "mysqlRdbms": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "oracleRdbms": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "postgresqlRdbms": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  }
}
```

<h3 id="datastreamprojectslocationsconnectionprofilesdiscover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DiscoverConnectionProfileResponse](#schemadiscoverconnectionprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.objects.list

<a id="opIddatastream.projects.locations.streams.objects.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/objects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/objects`

Use this method to list the objects of a specific stream.

<h3 id="datastreamprojectslocationsstreamsobjectslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent stream that owns the collection of objects.|
|pageSize|query|integer|false|Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.|
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
  "nextPageToken": "string",
  "streamObjects": [
    {
      "backfillJob": {
        "errors": [
          {
            "details": {
              "property1": "string",
              "property2": "string"
            },
            "errorTime": "string",
            "errorUuid": "string",
            "message": "string",
            "reason": "string"
          }
        ],
        "lastEndTime": "string",
        "lastStartTime": "string",
        "state": "STATE_UNSPECIFIED",
        "trigger": "TRIGGER_UNSPECIFIED"
      },
      "createTime": "string",
      "displayName": "string",
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "name": "string",
      "sourceObject": {
        "mysqlIdentifier": {
          "database": "string",
          "table": "string"
        },
        "oracleIdentifier": {
          "schema": "string",
          "table": "string"
        },
        "postgresqlIdentifier": {
          "schema": "string",
          "table": "string"
        }
      },
      "updateTime": "string"
    }
  ]
}
```

<h3 id="datastreamprojectslocationsstreamsobjectslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStreamObjectsResponse](#schemaliststreamobjectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.objects.lookup

<a id="opIddatastream.projects.locations.streams.objects.lookup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/objects:lookup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sourceObjectIdentifier": {
      "mysqlIdentifier": {
        "database": "string",
        "table": "string"
      },
      "oracleIdentifier": {
        "schema": "string",
        "table": "string"
      },
      "postgresqlIdentifier": {
        "schema": "string",
        "table": "string"
      }
    }
  }'
```

`POST /v1/{parent}/objects:lookup`

Use this method to look up a stream object by its source object identifier.

> Body parameter

```json
{
  "sourceObjectIdentifier": {
    "mysqlIdentifier": {
      "database": "string",
      "table": "string"
    },
    "oracleIdentifier": {
      "schema": "string",
      "table": "string"
    },
    "postgresqlIdentifier": {
      "schema": "string",
      "table": "string"
    }
  }
}
```

<h3 id="datastreamprojectslocationsstreamsobjectslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent stream that owns the collection of objects.|
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
|body|body|[LookupStreamObjectRequest](#schemalookupstreamobjectrequest)|false|none|
|» sourceObjectIdentifier|body|[SourceObjectIdentifier](#schemasourceobjectidentifier)|false|Required. The source object identifier which maps to the stream object.|

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
  "backfillJob": {
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "lastEndTime": "string",
    "lastStartTime": "string",
    "state": "STATE_UNSPECIFIED",
    "trigger": "TRIGGER_UNSPECIFIED"
  },
  "createTime": "string",
  "displayName": "string",
  "errors": [
    {
      "details": {
        "property1": "string",
        "property2": "string"
      },
      "errorTime": "string",
      "errorUuid": "string",
      "message": "string",
      "reason": "string"
    }
  ],
  "name": "string",
  "sourceObject": {
    "mysqlIdentifier": {
      "database": "string",
      "table": "string"
    },
    "oracleIdentifier": {
      "schema": "string",
      "table": "string"
    },
    "postgresqlIdentifier": {
      "schema": "string",
      "table": "string"
    }
  },
  "updateTime": "string"
}
```

<h3 id="datastreamprojectslocationsstreamsobjectslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StreamObject](#schemastreamobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.privateConnections.list

<a id="opIddatastream.projects.locations.privateConnections.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/privateConnections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/privateConnections`

Use this method to list private connectivity configurations in a project and location.

<h3 id="datastreamprojectslocationsprivateconnectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of private connectivity configurations.|
|filter|query|string|false|Filter request.|
|orderBy|query|string|false|Order by fields for the result.|
|pageSize|query|integer|false|Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.|
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
  "nextPageToken": "string",
  "privateConnections": [
    {
      "createTime": "string",
      "displayName": "string",
      "error": {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "vpcPeeringConfig": {
        "subnet": "string",
        "vpc": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datastreamprojectslocationsprivateconnectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPrivateConnectionsResponse](#schemalistprivateconnectionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.privateConnections.create

<a id="opIddatastream.projects.locations.privateConnections.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/privateConnections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "vpcPeeringConfig": {
      "subnet": "string",
      "vpc": "string"
    }
  }'
```

`POST /v1/{parent}/privateConnections`

Use this method to create a private connectivity configuration.

> Body parameter

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "vpcPeeringConfig": {
    "subnet": "string",
    "vpc": "string"
  }
}
```

<h3 id="datastreamprojectslocationsprivateconnectionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of PrivateConnections.|
|force|query|boolean|false|Optional. If set to true, will skip validations.|
|privateConnectionId|query|string|false|Required. The private connectivity identifier.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[PrivateConnection](#schemaprivateconnection)|false|none|
|» displayName|body|string|false|Required. Display name.|
|» labels|body|object|false|Labels.|
|» » **additionalProperties**|body|string|false|none|
|» vpcPeeringConfig|body|[VpcPeeringConfig](#schemavpcpeeringconfig)|false|VPC Peering Config.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastreamprojectslocationsprivateconnectionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.privateConnections.routes.list

<a id="opIddatastream.projects.locations.privateConnections.routes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/routes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/routes`

Use this method to list routes created for a private connectivity configuration in a project and location.

<h3 id="datastreamprojectslocationsprivateconnectionsrouteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of Routess.|
|filter|query|string|false|Filter request.|
|orderBy|query|string|false|Order by fields for the result.|
|pageSize|query|integer|false|Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.|
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
  "nextPageToken": "string",
  "routes": [
    {
      "createTime": "string",
      "destinationAddress": "string",
      "destinationPort": 0,
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datastreamprojectslocationsprivateconnectionsrouteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRoutesResponse](#schemalistroutesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.privateConnections.routes.create

<a id="opIddatastream.projects.locations.privateConnections.routes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destinationAddress": "string",
    "destinationPort": 0,
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/{parent}/routes`

Use this method to create a route for a private connectivity configuration in a project and location.

> Body parameter

```json
{
  "destinationAddress": "string",
  "destinationPort": 0,
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="datastreamprojectslocationsprivateconnectionsroutescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of Routes.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|routeId|query|string|false|Required. The Route identifier.|
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
|body|body|[Route](#schemaroute)|false|none|
|» destinationAddress|body|string|false|Required. Destination address for connection|
|» destinationPort|body|integer(int32)|false|Destination port for connection|
|» displayName|body|string|false|Required. Display name.|
|» labels|body|object|false|Labels.|
|» » **additionalProperties**|body|string|false|none|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastreamprojectslocationsprivateconnectionsroutescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.list

<a id="opIddatastream.projects.locations.streams.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/streams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/streams`

Use this method to list streams in a project and location.

<h3 id="datastreamprojectslocationsstreamslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of streams.|
|filter|query|string|false|Filter request.|
|orderBy|query|string|false|Order by fields for the result.|
|pageSize|query|integer|false|Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.|
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
  "nextPageToken": "string",
  "streams": [
    {
      "backfillAll": {
        "mysqlExcludedObjects": {
          "mysqlDatabases": [
            {
              "database": "string",
              "mysqlTables": [
                {
                  "mysqlColumns": [
                    {
                      "collation": "string",
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "primaryKey": true
                    }
                  ],
                  "table": "string"
                }
              ]
            }
          ]
        },
        "oracleExcludedObjects": {
          "oracleSchemas": [
            {
              "oracleTables": [
                {
                  "oracleColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "encoding": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "postgresqlExcludedObjects": {
          "postgresqlSchemas": [
            {
              "postgresqlTables": [
                {
                  "postgresqlColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        }
      },
      "backfillNone": {},
      "createTime": "string",
      "customerManagedEncryptionKey": "string",
      "destinationConfig": {
        "bigqueryDestinationConfig": {
          "dataFreshness": "string",
          "singleTargetDataset": {
            "datasetId": "string"
          },
          "sourceHierarchyDatasets": {
            "datasetTemplate": {
              "datasetIdPrefix": "string",
              "kmsKeyName": "string",
              "location": "string"
            }
          }
        },
        "destinationConnectionProfile": "string",
        "gcsDestinationConfig": {
          "avroFileFormat": {},
          "fileRotationInterval": "string",
          "fileRotationMb": 0,
          "jsonFileFormat": {
            "compression": "JSON_COMPRESSION_UNSPECIFIED",
            "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
          },
          "path": "string"
        }
      },
      "displayName": "string",
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "sourceConfig": {
        "mysqlSourceConfig": {
          "excludeObjects": {
            "mysqlDatabases": [
              {
                "database": "string",
                "mysqlTables": [
                  {
                    "mysqlColumns": [
                      {
                        "collation": "string",
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "primaryKey": true
                      }
                    ],
                    "table": "string"
                  }
                ]
              }
            ]
          },
          "includeObjects": {
            "mysqlDatabases": [
              {
                "database": "string",
                "mysqlTables": [
                  {
                    "mysqlColumns": [
                      {
                        "collation": "string",
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "primaryKey": true
                      }
                    ],
                    "table": "string"
                  }
                ]
              }
            ]
          },
          "maxConcurrentBackfillTasks": 0,
          "maxConcurrentCdcTasks": 0
        },
        "oracleSourceConfig": {
          "dropLargeObjects": {},
          "excludeObjects": {
            "oracleSchemas": [
              {
                "oracleTables": [
                  {
                    "oracleColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "encoding": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "includeObjects": {
            "oracleSchemas": [
              {
                "oracleTables": [
                  {
                    "oracleColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "encoding": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "maxConcurrentBackfillTasks": 0,
          "maxConcurrentCdcTasks": 0,
          "streamLargeObjects": {}
        },
        "postgresqlSourceConfig": {
          "excludeObjects": {
            "postgresqlSchemas": [
              {
                "postgresqlTables": [
                  {
                    "postgresqlColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "includeObjects": {
            "postgresqlSchemas": [
              {
                "postgresqlTables": [
                  {
                    "postgresqlColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "maxConcurrentBackfillTasks": 0,
          "publication": "string",
          "replicationSlot": "string"
        },
        "sourceConnectionProfile": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datastreamprojectslocationsstreamslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListStreamsResponse](#schemaliststreamsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datastream.projects.locations.streams.create

<a id="opIddatastream.projects.locations.streams.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/streams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backfillAll": {
      "mysqlExcludedObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "oracleExcludedObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "postgresqlExcludedObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      }
    },
    "backfillNone": {},
    "customerManagedEncryptionKey": "string",
    "destinationConfig": {
      "bigqueryDestinationConfig": {
        "dataFreshness": "string",
        "singleTargetDataset": {
          "datasetId": "string"
        },
        "sourceHierarchyDatasets": {
          "datasetTemplate": {
            "datasetIdPrefix": "string",
            "kmsKeyName": "string",
            "location": "string"
          }
        }
      },
      "destinationConnectionProfile": "string",
      "gcsDestinationConfig": {
        "avroFileFormat": {},
        "fileRotationInterval": "string",
        "fileRotationMb": 0,
        "jsonFileFormat": {
          "compression": "JSON_COMPRESSION_UNSPECIFIED",
          "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
        },
        "path": "string"
      }
    },
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "sourceConfig": {
      "mysqlSourceConfig": {
        "excludeObjects": {
          "mysqlDatabases": [
            {
              "database": "string",
              "mysqlTables": [
                {
                  "mysqlColumns": [
                    {
                      "collation": "string",
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "primaryKey": true
                    }
                  ],
                  "table": "string"
                }
              ]
            }
          ]
        },
        "includeObjects": {
          "mysqlDatabases": [
            {
              "database": "string",
              "mysqlTables": [
                {
                  "mysqlColumns": [
                    {
                      "collation": "string",
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "primaryKey": true
                    }
                  ],
                  "table": "string"
                }
              ]
            }
          ]
        },
        "maxConcurrentBackfillTasks": 0,
        "maxConcurrentCdcTasks": 0
      },
      "oracleSourceConfig": {
        "dropLargeObjects": {},
        "excludeObjects": {
          "oracleSchemas": [
            {
              "oracleTables": [
                {
                  "oracleColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "encoding": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "includeObjects": {
          "oracleSchemas": [
            {
              "oracleTables": [
                {
                  "oracleColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "encoding": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "maxConcurrentBackfillTasks": 0,
        "maxConcurrentCdcTasks": 0,
        "streamLargeObjects": {}
      },
      "postgresqlSourceConfig": {
        "excludeObjects": {
          "postgresqlSchemas": [
            {
              "postgresqlTables": [
                {
                  "postgresqlColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "includeObjects": {
          "postgresqlSchemas": [
            {
              "postgresqlTables": [
                {
                  "postgresqlColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "maxConcurrentBackfillTasks": 0,
        "publication": "string",
        "replicationSlot": "string"
      },
      "sourceConnectionProfile": "string"
    },
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/streams`

Use this method to create a stream.

> Body parameter

```json
{
  "backfillAll": {
    "mysqlExcludedObjects": {
      "mysqlDatabases": [
        {
          "database": "string",
          "mysqlTables": [
            {
              "mysqlColumns": [
                {
                  "collation": "string",
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "primaryKey": true
                }
              ],
              "table": "string"
            }
          ]
        }
      ]
    },
    "oracleExcludedObjects": {
      "oracleSchemas": [
        {
          "oracleTables": [
            {
              "oracleColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "encoding": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "postgresqlExcludedObjects": {
      "postgresqlSchemas": [
        {
          "postgresqlTables": [
            {
              "postgresqlColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "backfillNone": {},
  "customerManagedEncryptionKey": "string",
  "destinationConfig": {
    "bigqueryDestinationConfig": {
      "dataFreshness": "string",
      "singleTargetDataset": {
        "datasetId": "string"
      },
      "sourceHierarchyDatasets": {
        "datasetTemplate": {
          "datasetIdPrefix": "string",
          "kmsKeyName": "string",
          "location": "string"
        }
      }
    },
    "destinationConnectionProfile": "string",
    "gcsDestinationConfig": {
      "avroFileFormat": {},
      "fileRotationInterval": "string",
      "fileRotationMb": 0,
      "jsonFileFormat": {
        "compression": "JSON_COMPRESSION_UNSPECIFIED",
        "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
      },
      "path": "string"
    }
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "sourceConfig": {
    "mysqlSourceConfig": {
      "excludeObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "includeObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "maxConcurrentCdcTasks": 0
    },
    "oracleSourceConfig": {
      "dropLargeObjects": {},
      "excludeObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "includeObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "maxConcurrentCdcTasks": 0,
      "streamLargeObjects": {}
    },
    "postgresqlSourceConfig": {
      "excludeObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "includeObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "publication": "string",
      "replicationSlot": "string"
    },
    "sourceConnectionProfile": "string"
  },
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="datastreamprojectslocationsstreamscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent that owns the collection of streams.|
|force|query|boolean|false|Optional. Create the stream without validating it.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|streamId|query|string|false|Required. The stream identifier.|
|validateOnly|query|boolean|false|Optional. Only validate the stream, but don't create any resources. The default is false.|
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
|body|body|[Stream](#schemastream)|false|none|
|» backfillAll|body|[BackfillAllStrategy](#schemabackfillallstrategy)|false|Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.|
|» backfillNone|body|[BackfillNoneStrategy](#schemabackfillnonestrategy)|false|Do not automatically backfill any objects.|
|» customerManagedEncryptionKey|body|string|false|Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.|
|» destinationConfig|body|[DestinationConfig](#schemadestinationconfig)|false|Required. Destination connection profile configuration.|
|» displayName|body|string|false|Required. Display name.|
|» labels|body|object|false|Labels.|
|» » **additionalProperties**|body|string|false|none|
|» sourceConfig|body|[SourceConfig](#schemasourceconfig)|false|Required. Source connection profile configuration.|
|» state|body|string|false|The state of the stream.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|NOT_STARTED|
|» state|RUNNING|
|» state|PAUSED|
|» state|MAINTENANCE|
|» state|FAILED|
|» state|FAILED_PERMANENTLY|
|» state|STARTING|
|» state|DRAINING|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastreamprojectslocationsstreamscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AvroFileFormat">AvroFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemaavrofileformat"></a>
<a id="schema_AvroFileFormat"></a>
<a id="tocSavrofileformat"></a>
<a id="tocsavrofileformat"></a>

```json
{}
```

AVRO file format configuration.

<h2 id="tocS_BackfillAllStrategy">BackfillAllStrategy</h2>
<!-- backwards compatibility -->
<a id="schemabackfillallstrategy"></a>
<a id="schema_BackfillAllStrategy"></a>
<a id="tocSbackfillallstrategy"></a>
<a id="tocsbackfillallstrategy"></a>

```json
{
  "mysqlExcludedObjects": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "oracleExcludedObjects": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "postgresqlExcludedObjects": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  }
}
```

Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlExcludedObjects|[MysqlRdbms](#schemamysqlrdbms)|false|none|MySQL data source objects to avoid backfilling.|
|oracleExcludedObjects|[OracleRdbms](#schemaoraclerdbms)|false|none|Oracle data source objects to avoid backfilling.|
|postgresqlExcludedObjects|[PostgresqlRdbms](#schemapostgresqlrdbms)|false|none|PostgreSQL data source objects to avoid backfilling.|

<h2 id="tocS_BackfillJob">BackfillJob</h2>
<!-- backwards compatibility -->
<a id="schemabackfilljob"></a>
<a id="schema_BackfillJob"></a>
<a id="tocSbackfilljob"></a>
<a id="tocsbackfilljob"></a>

```json
{
  "errors": [
    {
      "details": {
        "property1": "string",
        "property2": "string"
      },
      "errorTime": "string",
      "errorUuid": "string",
      "message": "string",
      "reason": "string"
    }
  ],
  "lastEndTime": "string",
  "lastStartTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trigger": "TRIGGER_UNSPECIFIED"
}
```

Represents a backfill job on a specific stream object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|read-only|Output only. Errors which caused the backfill job to fail.|
|lastEndTime|string(google-datetime)|false|read-only|Output only. Backfill job's end time.|
|lastStartTime|string(google-datetime)|false|read-only|Output only. Backfill job's start time.|
|state|string|false|none|Backfill job state.|
|trigger|string|false|none|Backfill job's triggering reason.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|PENDING|
|state|ACTIVE|
|state|STOPPED|
|state|FAILED|
|state|COMPLETED|
|state|UNSUPPORTED|
|trigger|TRIGGER_UNSPECIFIED|
|trigger|AUTOMATIC|
|trigger|MANUAL|

<h2 id="tocS_BackfillNoneStrategy">BackfillNoneStrategy</h2>
<!-- backwards compatibility -->
<a id="schemabackfillnonestrategy"></a>
<a id="schema_BackfillNoneStrategy"></a>
<a id="tocSbackfillnonestrategy"></a>
<a id="tocsbackfillnonestrategy"></a>

```json
{}
```

Backfill strategy to disable automatic backfill for the Stream's objects.

<h2 id="tocS_BigQueryDestinationConfig">BigQueryDestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemabigquerydestinationconfig"></a>
<a id="schema_BigQueryDestinationConfig"></a>
<a id="tocSbigquerydestinationconfig"></a>
<a id="tocsbigquerydestinationconfig"></a>

```json
{
  "dataFreshness": "string",
  "singleTargetDataset": {
    "datasetId": "string"
  },
  "sourceHierarchyDatasets": {
    "datasetTemplate": {
      "datasetIdPrefix": "string",
      "kmsKeyName": "string",
      "location": "string"
    }
  }
}
```

BigQuery destination configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataFreshness|string(google-duration)|false|none|The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.|
|singleTargetDataset|[SingleTargetDataset](#schemasingletargetdataset)|false|none|Single destination dataset.|
|sourceHierarchyDatasets|[SourceHierarchyDatasets](#schemasourcehierarchydatasets)|false|none|Source hierarchy datasets.|

<h2 id="tocS_BigQueryProfile">BigQueryProfile</h2>
<!-- backwards compatibility -->
<a id="schemabigqueryprofile"></a>
<a id="schema_BigQueryProfile"></a>
<a id="tocSbigqueryprofile"></a>
<a id="tocsbigqueryprofile"></a>

```json
{}
```

BigQuery warehouse profile.

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_ConnectionProfile">ConnectionProfile</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionprofile"></a>
<a id="schema_ConnectionProfile"></a>
<a id="tocSconnectionprofile"></a>
<a id="tocsconnectionprofile"></a>

```json
{
  "bigqueryProfile": {},
  "createTime": "string",
  "displayName": "string",
  "forwardSshConnectivity": {
    "hostname": "string",
    "password": "string",
    "port": 0,
    "privateKey": "string",
    "username": "string"
  },
  "gcsProfile": {
    "bucket": "string",
    "rootPath": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mysqlProfile": {
    "hostname": "string",
    "password": "string",
    "port": 0,
    "sslConfig": {
      "caCertificate": "string",
      "caCertificateSet": true,
      "clientCertificate": "string",
      "clientCertificateSet": true,
      "clientKey": "string",
      "clientKeySet": true
    },
    "username": "string"
  },
  "name": "string",
  "oracleProfile": {
    "connectionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "databaseService": "string",
    "hostname": "string",
    "password": "string",
    "port": 0,
    "username": "string"
  },
  "postgresqlProfile": {
    "database": "string",
    "hostname": "string",
    "password": "string",
    "port": 0,
    "username": "string"
  },
  "privateConnectivity": {
    "privateConnection": "string"
  },
  "staticServiceIpConnectivity": {},
  "updateTime": "string"
}
```

A set of reusable connection configurations to be used as a source or destination for a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryProfile|[BigQueryProfile](#schemabigqueryprofile)|false|none|BigQuery Connection Profile configuration.|
|createTime|string(google-datetime)|false|read-only|Output only. The create time of the resource.|
|displayName|string|false|none|Required. Display name.|
|forwardSshConnectivity|[ForwardSshTunnelConnectivity](#schemaforwardsshtunnelconnectivity)|false|none|Forward SSH tunnel connectivity.|
|gcsProfile|[GcsProfile](#schemagcsprofile)|false|none|Cloud Storage ConnectionProfile configuration.|
|labels|object|false|none|Labels.|
|mysqlProfile|[MysqlProfile](#schemamysqlprofile)|false|none|MySQL ConnectionProfile configuration.|
|name|string|false|read-only|Output only. The resource's name.|
|oracleProfile|[OracleProfile](#schemaoracleprofile)|false|none|Oracle ConnectionProfile configuration.|
|postgresqlProfile|[PostgresqlProfile](#schemapostgresqlprofile)|false|none|PostgreSQL Connection Profile configuration.|
|privateConnectivity|[PrivateConnectivity](#schemaprivateconnectivity)|false|none|Private connectivity.|
|staticServiceIpConnectivity|[StaticServiceIpConnectivity](#schemastaticserviceipconnectivity)|false|none|Static Service IP connectivity.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update time of the resource.|

<h2 id="tocS_DatasetTemplate">DatasetTemplate</h2>
<!-- backwards compatibility -->
<a id="schemadatasettemplate"></a>
<a id="schema_DatasetTemplate"></a>
<a id="tocSdatasettemplate"></a>
<a id="tocsdatasettemplate"></a>

```json
{
  "datasetIdPrefix": "string",
  "kmsKeyName": "string",
  "location": "string"
}
```

Dataset template used for dynamic dataset creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetIdPrefix|string|false|none|If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _.|
|kmsKeyName|string|false|none|Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.|
|location|string|false|none|Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.|

<h2 id="tocS_DestinationConfig">DestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfig"></a>
<a id="schema_DestinationConfig"></a>
<a id="tocSdestinationconfig"></a>
<a id="tocsdestinationconfig"></a>

```json
{
  "bigqueryDestinationConfig": {
    "dataFreshness": "string",
    "singleTargetDataset": {
      "datasetId": "string"
    },
    "sourceHierarchyDatasets": {
      "datasetTemplate": {
        "datasetIdPrefix": "string",
        "kmsKeyName": "string",
        "location": "string"
      }
    }
  },
  "destinationConnectionProfile": "string",
  "gcsDestinationConfig": {
    "avroFileFormat": {},
    "fileRotationInterval": "string",
    "fileRotationMb": 0,
    "jsonFileFormat": {
      "compression": "JSON_COMPRESSION_UNSPECIFIED",
      "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
    },
    "path": "string"
  }
}
```

The configuration of the stream destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestinationConfig|[BigQueryDestinationConfig](#schemabigquerydestinationconfig)|false|none|BigQuery destination configuration.|
|destinationConnectionProfile|string|false|none|Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}`|
|gcsDestinationConfig|[GcsDestinationConfig](#schemagcsdestinationconfig)|false|none|A configuration for how data should be loaded to Cloud Storage.|

<h2 id="tocS_DiscoverConnectionProfileRequest">DiscoverConnectionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverconnectionprofilerequest"></a>
<a id="schema_DiscoverConnectionProfileRequest"></a>
<a id="tocSdiscoverconnectionprofilerequest"></a>
<a id="tocsdiscoverconnectionprofilerequest"></a>

```json
{
  "connectionProfile": {
    "bigqueryProfile": {},
    "createTime": "string",
    "displayName": "string",
    "forwardSshConnectivity": {
      "hostname": "string",
      "password": "string",
      "port": 0,
      "privateKey": "string",
      "username": "string"
    },
    "gcsProfile": {
      "bucket": "string",
      "rootPath": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mysqlProfile": {
      "hostname": "string",
      "password": "string",
      "port": 0,
      "sslConfig": {
        "caCertificate": "string",
        "caCertificateSet": true,
        "clientCertificate": "string",
        "clientCertificateSet": true,
        "clientKey": "string",
        "clientKeySet": true
      },
      "username": "string"
    },
    "name": "string",
    "oracleProfile": {
      "connectionAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "databaseService": "string",
      "hostname": "string",
      "password": "string",
      "port": 0,
      "username": "string"
    },
    "postgresqlProfile": {
      "database": "string",
      "hostname": "string",
      "password": "string",
      "port": 0,
      "username": "string"
    },
    "privateConnectivity": {
      "privateConnection": "string"
    },
    "staticServiceIpConnectivity": {},
    "updateTime": "string"
  },
  "connectionProfileName": "string",
  "fullHierarchy": true,
  "hierarchyDepth": 0,
  "mysqlRdbms": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "oracleRdbms": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "postgresqlRdbms": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  }
}
```

Request message for 'discover' ConnectionProfile request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionProfile|[ConnectionProfile](#schemaconnectionprofile)|false|none|An ad-hoc connection profile configuration.|
|connectionProfileName|string|false|none|A reference to an existing connection profile.|
|fullHierarchy|boolean|false|none|Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).|
|hierarchyDepth|integer(int32)|false|none|The number of hierarchy levels below the current level to be retrieved.|
|mysqlRdbms|[MysqlRdbms](#schemamysqlrdbms)|false|none|MySQL RDBMS to enrich with child data objects and metadata.|
|oracleRdbms|[OracleRdbms](#schemaoraclerdbms)|false|none|Oracle RDBMS to enrich with child data objects and metadata.|
|postgresqlRdbms|[PostgresqlRdbms](#schemapostgresqlrdbms)|false|none|PostgreSQL RDBMS to enrich with child data objects and metadata.|

<h2 id="tocS_DiscoverConnectionProfileResponse">DiscoverConnectionProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverconnectionprofileresponse"></a>
<a id="schema_DiscoverConnectionProfileResponse"></a>
<a id="tocSdiscoverconnectionprofileresponse"></a>
<a id="tocsdiscoverconnectionprofileresponse"></a>

```json
{
  "mysqlRdbms": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "oracleRdbms": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "postgresqlRdbms": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  }
}
```

Response from a discover request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlRdbms|[MysqlRdbms](#schemamysqlrdbms)|false|none|Enriched MySQL RDBMS object.|
|oracleRdbms|[OracleRdbms](#schemaoraclerdbms)|false|none|Enriched Oracle RDBMS object.|
|postgresqlRdbms|[PostgresqlRdbms](#schemapostgresqlrdbms)|false|none|Enriched PostgreSQL RDBMS object.|

<h2 id="tocS_DropLargeObjects">DropLargeObjects</h2>
<!-- backwards compatibility -->
<a id="schemadroplargeobjects"></a>
<a id="schema_DropLargeObjects"></a>
<a id="tocSdroplargeobjects"></a>
<a id="tocsdroplargeobjects"></a>

```json
{}
```

Configuration to drop large object values.

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "details": {
    "property1": "string",
    "property2": "string"
  },
  "errorTime": "string",
  "errorUuid": "string",
  "message": "string",
  "reason": "string"
}
```

Represent a user-facing Error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|Additional information about the error.|
|errorTime|string(google-datetime)|false|none|The time when the error occurred.|
|errorUuid|string|false|none|A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses.|
|message|string|false|none|A message containing more information about the error that occurred.|
|reason|string|false|none|A title that explains the reason for the error.|

<h2 id="tocS_FetchStaticIpsResponse">FetchStaticIpsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchstaticipsresponse"></a>
<a id="schema_FetchStaticIpsResponse"></a>
<a id="tocSfetchstaticipsresponse"></a>
<a id="tocsfetchstaticipsresponse"></a>

```json
{
  "nextPageToken": "string",
  "staticIps": [
    "string"
  ]
}
```

Response message for a 'FetchStaticIps' response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|staticIps|[string]|false|none|list of static ips by account|

<h2 id="tocS_ForwardSshTunnelConnectivity">ForwardSshTunnelConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemaforwardsshtunnelconnectivity"></a>
<a id="schema_ForwardSshTunnelConnectivity"></a>
<a id="tocSforwardsshtunnelconnectivity"></a>
<a id="tocsforwardsshtunnelconnectivity"></a>

```json
{
  "hostname": "string",
  "password": "string",
  "port": 0,
  "privateKey": "string",
  "username": "string"
}
```

Forward SSH Tunnel connectivity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|Required. Hostname for the SSH tunnel.|
|password|string|false|none|Input only. SSH password.|
|port|integer(int32)|false|none|Port for the SSH tunnel, default value is 22.|
|privateKey|string|false|none|Input only. SSH private key.|
|username|string|false|none|Required. Username for the SSH tunnel.|

<h2 id="tocS_GcsDestinationConfig">GcsDestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagcsdestinationconfig"></a>
<a id="schema_GcsDestinationConfig"></a>
<a id="tocSgcsdestinationconfig"></a>
<a id="tocsgcsdestinationconfig"></a>

```json
{
  "avroFileFormat": {},
  "fileRotationInterval": "string",
  "fileRotationMb": 0,
  "jsonFileFormat": {
    "compression": "JSON_COMPRESSION_UNSPECIFIED",
    "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
  },
  "path": "string"
}
```

Google Cloud Storage destination configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avroFileFormat|[AvroFileFormat](#schemaavrofileformat)|false|none|AVRO file format configuration.|
|fileRotationInterval|string(google-duration)|false|none|The maximum duration for which new events are added before a file is closed and a new file is created.|
|fileRotationMb|integer(int32)|false|none|The maximum file size to be saved in the bucket.|
|jsonFileFormat|[JsonFileFormat](#schemajsonfileformat)|false|none|JSON file format configuration.|
|path|string|false|none|Path inside the Cloud Storage bucket to write data to.|

<h2 id="tocS_GcsProfile">GcsProfile</h2>
<!-- backwards compatibility -->
<a id="schemagcsprofile"></a>
<a id="schema_GcsProfile"></a>
<a id="tocSgcsprofile"></a>
<a id="tocsgcsprofile"></a>

```json
{
  "bucket": "string",
  "rootPath": "string"
}
```

Cloud Storage bucket profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Required. The Cloud Storage bucket name.|
|rootPath|string|false|none|The root path inside the Cloud Storage bucket.|

<h2 id="tocS_JsonFileFormat">JsonFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemajsonfileformat"></a>
<a id="schema_JsonFileFormat"></a>
<a id="tocSjsonfileformat"></a>
<a id="tocsjsonfileformat"></a>

```json
{
  "compression": "JSON_COMPRESSION_UNSPECIFIED",
  "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
}
```

JSON file format configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compression|string|false|none|Compression of the loaded JSON file.|
|schemaFileFormat|string|false|none|The schema file format along JSON data files.|

#### Enumerated Values

|Property|Value|
|---|---|
|compression|JSON_COMPRESSION_UNSPECIFIED|
|compression|NO_COMPRESSION|
|compression|GZIP|
|schemaFileFormat|SCHEMA_FILE_FORMAT_UNSPECIFIED|
|schemaFileFormat|NO_SCHEMA_FILE|
|schemaFileFormat|AVRO_SCHEMA_FILE|

<h2 id="tocS_ListConnectionProfilesResponse">ListConnectionProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionprofilesresponse"></a>
<a id="schema_ListConnectionProfilesResponse"></a>
<a id="tocSlistconnectionprofilesresponse"></a>
<a id="tocslistconnectionprofilesresponse"></a>

```json
{
  "connectionProfiles": [
    {
      "bigqueryProfile": {},
      "createTime": "string",
      "displayName": "string",
      "forwardSshConnectivity": {
        "hostname": "string",
        "password": "string",
        "port": 0,
        "privateKey": "string",
        "username": "string"
      },
      "gcsProfile": {
        "bucket": "string",
        "rootPath": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mysqlProfile": {
        "hostname": "string",
        "password": "string",
        "port": 0,
        "sslConfig": {
          "caCertificate": "string",
          "caCertificateSet": true,
          "clientCertificate": "string",
          "clientCertificateSet": true,
          "clientKey": "string",
          "clientKeySet": true
        },
        "username": "string"
      },
      "name": "string",
      "oracleProfile": {
        "connectionAttributes": {
          "property1": "string",
          "property2": "string"
        },
        "databaseService": "string",
        "hostname": "string",
        "password": "string",
        "port": 0,
        "username": "string"
      },
      "postgresqlProfile": {
        "database": "string",
        "hostname": "string",
        "password": "string",
        "port": 0,
        "username": "string"
      },
      "privateConnectivity": {
        "privateConnection": "string"
      },
      "staticServiceIpConnectivity": {},
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for listing connection profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionProfiles|[[ConnectionProfile](#schemaconnectionprofile)]|false|none|List of connection profiles.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListPrivateConnectionsResponse">ListPrivateConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprivateconnectionsresponse"></a>
<a id="schema_ListPrivateConnectionsResponse"></a>
<a id="tocSlistprivateconnectionsresponse"></a>
<a id="tocslistprivateconnectionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "privateConnections": [
    {
      "createTime": "string",
      "displayName": "string",
      "error": {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "vpcPeeringConfig": {
        "subnet": "string",
        "vpc": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response containing a list of private connection configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|privateConnections|[[PrivateConnection](#schemaprivateconnection)]|false|none|List of private connectivity configurations.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListRoutesResponse">ListRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistroutesresponse"></a>
<a id="schema_ListRoutesResponse"></a>
<a id="tocSlistroutesresponse"></a>
<a id="tocslistroutesresponse"></a>

```json
{
  "nextPageToken": "string",
  "routes": [
    {
      "createTime": "string",
      "destinationAddress": "string",
      "destinationPort": 0,
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Route list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|routes|[[Route](#schemaroute)]|false|none|List of Routes.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListStreamObjectsResponse">ListStreamObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamobjectsresponse"></a>
<a id="schema_ListStreamObjectsResponse"></a>
<a id="tocSliststreamobjectsresponse"></a>
<a id="tocsliststreamobjectsresponse"></a>

```json
{
  "nextPageToken": "string",
  "streamObjects": [
    {
      "backfillJob": {
        "errors": [
          {
            "details": {
              "property1": "string",
              "property2": "string"
            },
            "errorTime": "string",
            "errorUuid": "string",
            "message": "string",
            "reason": "string"
          }
        ],
        "lastEndTime": "string",
        "lastStartTime": "string",
        "state": "STATE_UNSPECIFIED",
        "trigger": "TRIGGER_UNSPECIFIED"
      },
      "createTime": "string",
      "displayName": "string",
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "name": "string",
      "sourceObject": {
        "mysqlIdentifier": {
          "database": "string",
          "table": "string"
        },
        "oracleIdentifier": {
          "schema": "string",
          "table": "string"
        },
        "postgresqlIdentifier": {
          "schema": "string",
          "table": "string"
        }
      },
      "updateTime": "string"
    }
  ]
}
```

Response containing the objects for a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page.|
|streamObjects|[[StreamObject](#schemastreamobject)]|false|none|List of stream objects.|

<h2 id="tocS_ListStreamsResponse">ListStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsresponse"></a>
<a id="schema_ListStreamsResponse"></a>
<a id="tocSliststreamsresponse"></a>
<a id="tocsliststreamsresponse"></a>

```json
{
  "nextPageToken": "string",
  "streams": [
    {
      "backfillAll": {
        "mysqlExcludedObjects": {
          "mysqlDatabases": [
            {
              "database": "string",
              "mysqlTables": [
                {
                  "mysqlColumns": [
                    {
                      "collation": "string",
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "primaryKey": true
                    }
                  ],
                  "table": "string"
                }
              ]
            }
          ]
        },
        "oracleExcludedObjects": {
          "oracleSchemas": [
            {
              "oracleTables": [
                {
                  "oracleColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "encoding": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        },
        "postgresqlExcludedObjects": {
          "postgresqlSchemas": [
            {
              "postgresqlTables": [
                {
                  "postgresqlColumns": [
                    {
                      "column": "string",
                      "dataType": "string",
                      "length": 0,
                      "nullable": true,
                      "ordinalPosition": 0,
                      "precision": 0,
                      "primaryKey": true,
                      "scale": 0
                    }
                  ],
                  "table": "string"
                }
              ],
              "schema": "string"
            }
          ]
        }
      },
      "backfillNone": {},
      "createTime": "string",
      "customerManagedEncryptionKey": "string",
      "destinationConfig": {
        "bigqueryDestinationConfig": {
          "dataFreshness": "string",
          "singleTargetDataset": {
            "datasetId": "string"
          },
          "sourceHierarchyDatasets": {
            "datasetTemplate": {
              "datasetIdPrefix": "string",
              "kmsKeyName": "string",
              "location": "string"
            }
          }
        },
        "destinationConnectionProfile": "string",
        "gcsDestinationConfig": {
          "avroFileFormat": {},
          "fileRotationInterval": "string",
          "fileRotationMb": 0,
          "jsonFileFormat": {
            "compression": "JSON_COMPRESSION_UNSPECIFIED",
            "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
          },
          "path": "string"
        }
      },
      "displayName": "string",
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "sourceConfig": {
        "mysqlSourceConfig": {
          "excludeObjects": {
            "mysqlDatabases": [
              {
                "database": "string",
                "mysqlTables": [
                  {
                    "mysqlColumns": [
                      {
                        "collation": "string",
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "primaryKey": true
                      }
                    ],
                    "table": "string"
                  }
                ]
              }
            ]
          },
          "includeObjects": {
            "mysqlDatabases": [
              {
                "database": "string",
                "mysqlTables": [
                  {
                    "mysqlColumns": [
                      {
                        "collation": "string",
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "primaryKey": true
                      }
                    ],
                    "table": "string"
                  }
                ]
              }
            ]
          },
          "maxConcurrentBackfillTasks": 0,
          "maxConcurrentCdcTasks": 0
        },
        "oracleSourceConfig": {
          "dropLargeObjects": {},
          "excludeObjects": {
            "oracleSchemas": [
              {
                "oracleTables": [
                  {
                    "oracleColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "encoding": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "includeObjects": {
            "oracleSchemas": [
              {
                "oracleTables": [
                  {
                    "oracleColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "encoding": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "maxConcurrentBackfillTasks": 0,
          "maxConcurrentCdcTasks": 0,
          "streamLargeObjects": {}
        },
        "postgresqlSourceConfig": {
          "excludeObjects": {
            "postgresqlSchemas": [
              {
                "postgresqlTables": [
                  {
                    "postgresqlColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "includeObjects": {
            "postgresqlSchemas": [
              {
                "postgresqlTables": [
                  {
                    "postgresqlColumns": [
                      {
                        "column": "string",
                        "dataType": "string",
                        "length": 0,
                        "nullable": true,
                        "ordinalPosition": 0,
                        "precision": 0,
                        "primaryKey": true,
                        "scale": 0
                      }
                    ],
                    "table": "string"
                  }
                ],
                "schema": "string"
              }
            ]
          },
          "maxConcurrentBackfillTasks": 0,
          "publication": "string",
          "replicationSlot": "string"
        },
        "sourceConnectionProfile": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for listing streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|streams|[[Stream](#schemastream)]|false|none|List of streams|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_LookupStreamObjectRequest">LookupStreamObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemalookupstreamobjectrequest"></a>
<a id="schema_LookupStreamObjectRequest"></a>
<a id="tocSlookupstreamobjectrequest"></a>
<a id="tocslookupstreamobjectrequest"></a>

```json
{
  "sourceObjectIdentifier": {
    "mysqlIdentifier": {
      "database": "string",
      "table": "string"
    },
    "oracleIdentifier": {
      "schema": "string",
      "table": "string"
    },
    "postgresqlIdentifier": {
      "schema": "string",
      "table": "string"
    }
  }
}
```

Request for looking up a specific stream object by its source object identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceObjectIdentifier|[SourceObjectIdentifier](#schemasourceobjectidentifier)|false|none|Required. The source object identifier which maps to the stream object.|

<h2 id="tocS_MysqlColumn">MysqlColumn</h2>
<!-- backwards compatibility -->
<a id="schemamysqlcolumn"></a>
<a id="schema_MysqlColumn"></a>
<a id="tocSmysqlcolumn"></a>
<a id="tocsmysqlcolumn"></a>

```json
{
  "collation": "string",
  "column": "string",
  "dataType": "string",
  "length": 0,
  "nullable": true,
  "ordinalPosition": 0,
  "primaryKey": true
}
```

MySQL Column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collation|string|false|none|Column collation.|
|column|string|false|none|Column name.|
|dataType|string|false|none|The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html|
|length|integer(int32)|false|none|Column length.|
|nullable|boolean|false|none|Whether or not the column can accept a null value.|
|ordinalPosition|integer(int32)|false|none|The ordinal position of the column in the table.|
|primaryKey|boolean|false|none|Whether or not the column represents a primary key.|

<h2 id="tocS_MysqlDatabase">MysqlDatabase</h2>
<!-- backwards compatibility -->
<a id="schemamysqldatabase"></a>
<a id="schema_MysqlDatabase"></a>
<a id="tocSmysqldatabase"></a>
<a id="tocsmysqldatabase"></a>

```json
{
  "database": "string",
  "mysqlTables": [
    {
      "mysqlColumns": [
        {
          "collation": "string",
          "column": "string",
          "dataType": "string",
          "length": 0,
          "nullable": true,
          "ordinalPosition": 0,
          "primaryKey": true
        }
      ],
      "table": "string"
    }
  ]
}
```

MySQL database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|Database name.|
|mysqlTables|[[MysqlTable](#schemamysqltable)]|false|none|Tables in the database.|

<h2 id="tocS_MysqlObjectIdentifier">MysqlObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemamysqlobjectidentifier"></a>
<a id="schema_MysqlObjectIdentifier"></a>
<a id="tocSmysqlobjectidentifier"></a>
<a id="tocsmysqlobjectidentifier"></a>

```json
{
  "database": "string",
  "table": "string"
}
```

Mysql data source object identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|Required. The database name.|
|table|string|false|none|Required. The table name.|

<h2 id="tocS_MysqlProfile">MysqlProfile</h2>
<!-- backwards compatibility -->
<a id="schemamysqlprofile"></a>
<a id="schema_MysqlProfile"></a>
<a id="tocSmysqlprofile"></a>
<a id="tocsmysqlprofile"></a>

```json
{
  "hostname": "string",
  "password": "string",
  "port": 0,
  "sslConfig": {
    "caCertificate": "string",
    "caCertificateSet": true,
    "clientCertificate": "string",
    "clientCertificateSet": true,
    "clientKey": "string",
    "clientKeySet": true
  },
  "username": "string"
}
```

MySQL database profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|Required. Hostname for the MySQL connection.|
|password|string|false|none|Required. Input only. Password for the MySQL connection.|
|port|integer(int32)|false|none|Port for the MySQL connection, default value is 3306.|
|sslConfig|[MysqlSslConfig](#schemamysqlsslconfig)|false|none|SSL configuration for the MySQL connection.|
|username|string|false|none|Required. Username for the MySQL connection.|

<h2 id="tocS_MysqlRdbms">MysqlRdbms</h2>
<!-- backwards compatibility -->
<a id="schemamysqlrdbms"></a>
<a id="schema_MysqlRdbms"></a>
<a id="tocSmysqlrdbms"></a>
<a id="tocsmysqlrdbms"></a>

```json
{
  "mysqlDatabases": [
    {
      "database": "string",
      "mysqlTables": [
        {
          "mysqlColumns": [
            {
              "collation": "string",
              "column": "string",
              "dataType": "string",
              "length": 0,
              "nullable": true,
              "ordinalPosition": 0,
              "primaryKey": true
            }
          ],
          "table": "string"
        }
      ]
    }
  ]
}
```

MySQL database structure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlDatabases|[[MysqlDatabase](#schemamysqldatabase)]|false|none|Mysql databases on the server|

<h2 id="tocS_MysqlSourceConfig">MysqlSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemamysqlsourceconfig"></a>
<a id="schema_MysqlSourceConfig"></a>
<a id="tocSmysqlsourceconfig"></a>
<a id="tocsmysqlsourceconfig"></a>

```json
{
  "excludeObjects": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "includeObjects": {
    "mysqlDatabases": [
      {
        "database": "string",
        "mysqlTables": [
          {
            "mysqlColumns": [
              {
                "collation": "string",
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "primaryKey": true
              }
            ],
            "table": "string"
          }
        ]
      }
    ]
  },
  "maxConcurrentBackfillTasks": 0,
  "maxConcurrentCdcTasks": 0
}
```

MySQL source configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludeObjects|[MysqlRdbms](#schemamysqlrdbms)|false|none|MySQL objects to exclude from the stream.|
|includeObjects|[MysqlRdbms](#schemamysqlrdbms)|false|none|MySQL objects to retrieve from the source.|
|maxConcurrentBackfillTasks|integer(int32)|false|none|Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.|
|maxConcurrentCdcTasks|integer(int32)|false|none|Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.|

<h2 id="tocS_MysqlSslConfig">MysqlSslConfig</h2>
<!-- backwards compatibility -->
<a id="schemamysqlsslconfig"></a>
<a id="schema_MysqlSslConfig"></a>
<a id="tocSmysqlsslconfig"></a>
<a id="tocsmysqlsslconfig"></a>

```json
{
  "caCertificate": "string",
  "caCertificateSet": true,
  "clientCertificate": "string",
  "clientCertificateSet": true,
  "clientKey": "string",
  "clientKeySet": true
}
```

MySQL SSL configuration information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertificate|string|false|none|Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.|
|caCertificateSet|boolean|false|read-only|Output only. Indicates whether the ca_certificate field is set.|
|clientCertificate|string|false|none|Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.|
|clientCertificateSet|boolean|false|read-only|Output only. Indicates whether the client_certificate field is set.|
|clientKey|string|false|none|Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.|
|clientKeySet|boolean|false|read-only|Output only. Indicates whether the client_key field is set.|

<h2 id="tocS_MysqlTable">MysqlTable</h2>
<!-- backwards compatibility -->
<a id="schemamysqltable"></a>
<a id="schema_MysqlTable"></a>
<a id="tocSmysqltable"></a>
<a id="tocsmysqltable"></a>

```json
{
  "mysqlColumns": [
    {
      "collation": "string",
      "column": "string",
      "dataType": "string",
      "length": 0,
      "nullable": true,
      "ordinalPosition": 0,
      "primaryKey": true
    }
  ],
  "table": "string"
}
```

MySQL table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlColumns|[[MysqlColumn](#schemamysqlcolumn)]|false|none|MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything.|
|table|string|false|none|Table name.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "statusMessage": "string",
  "target": "string",
  "validationResult": {
    "validations": [
      {
        "code": "string",
        "description": "string",
        "message": [
          {
            "code": "string",
            "level": "LEVEL_UNSPECIFIED",
            "message": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "state": "STATE_UNSPECIFIED"
      }
    ]
  },
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|validationResult|[ValidationResult](#schemavalidationresult)|false|none|Output only. Results of executed validations if there are any.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_OracleColumn">OracleColumn</h2>
<!-- backwards compatibility -->
<a id="schemaoraclecolumn"></a>
<a id="schema_OracleColumn"></a>
<a id="tocSoraclecolumn"></a>
<a id="tocsoraclecolumn"></a>

```json
{
  "column": "string",
  "dataType": "string",
  "encoding": "string",
  "length": 0,
  "nullable": true,
  "ordinalPosition": 0,
  "precision": 0,
  "primaryKey": true,
  "scale": 0
}
```

Oracle Column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Column name.|
|dataType|string|false|none|The Oracle data type.|
|encoding|string|false|none|Column encoding.|
|length|integer(int32)|false|none|Column length.|
|nullable|boolean|false|none|Whether or not the column can accept a null value.|
|ordinalPosition|integer(int32)|false|none|The ordinal position of the column in the table.|
|precision|integer(int32)|false|none|Column precision.|
|primaryKey|boolean|false|none|Whether or not the column represents a primary key.|
|scale|integer(int32)|false|none|Column scale.|

<h2 id="tocS_OracleObjectIdentifier">OracleObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaoracleobjectidentifier"></a>
<a id="schema_OracleObjectIdentifier"></a>
<a id="tocSoracleobjectidentifier"></a>
<a id="tocsoracleobjectidentifier"></a>

```json
{
  "schema": "string",
  "table": "string"
}
```

Oracle data source object identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|string|false|none|Required. The schema name.|
|table|string|false|none|Required. The table name.|

<h2 id="tocS_OracleProfile">OracleProfile</h2>
<!-- backwards compatibility -->
<a id="schemaoracleprofile"></a>
<a id="schema_OracleProfile"></a>
<a id="tocSoracleprofile"></a>
<a id="tocsoracleprofile"></a>

```json
{
  "connectionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "databaseService": "string",
  "hostname": "string",
  "password": "string",
  "port": 0,
  "username": "string"
}
```

Oracle database profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionAttributes|object|false|none|Connection string attributes|
|databaseService|string|false|none|Required. Database for the Oracle connection.|
|hostname|string|false|none|Required. Hostname for the Oracle connection.|
|password|string|false|none|Required. Password for the Oracle connection.|
|port|integer(int32)|false|none|Port for the Oracle connection, default value is 1521.|
|username|string|false|none|Required. Username for the Oracle connection.|

<h2 id="tocS_OracleRdbms">OracleRdbms</h2>
<!-- backwards compatibility -->
<a id="schemaoraclerdbms"></a>
<a id="schema_OracleRdbms"></a>
<a id="tocSoraclerdbms"></a>
<a id="tocsoraclerdbms"></a>

```json
{
  "oracleSchemas": [
    {
      "oracleTables": [
        {
          "oracleColumns": [
            {
              "column": "string",
              "dataType": "string",
              "encoding": "string",
              "length": 0,
              "nullable": true,
              "ordinalPosition": 0,
              "precision": 0,
              "primaryKey": true,
              "scale": 0
            }
          ],
          "table": "string"
        }
      ],
      "schema": "string"
    }
  ]
}
```

Oracle database structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oracleSchemas|[[OracleSchema](#schemaoracleschema)]|false|none|Oracle schemas/databases in the database server.|

<h2 id="tocS_OracleSchema">OracleSchema</h2>
<!-- backwards compatibility -->
<a id="schemaoracleschema"></a>
<a id="schema_OracleSchema"></a>
<a id="tocSoracleschema"></a>
<a id="tocsoracleschema"></a>

```json
{
  "oracleTables": [
    {
      "oracleColumns": [
        {
          "column": "string",
          "dataType": "string",
          "encoding": "string",
          "length": 0,
          "nullable": true,
          "ordinalPosition": 0,
          "precision": 0,
          "primaryKey": true,
          "scale": 0
        }
      ],
      "table": "string"
    }
  ],
  "schema": "string"
}
```

Oracle schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oracleTables|[[OracleTable](#schemaoracletable)]|false|none|Tables in the schema.|
|schema|string|false|none|Schema name.|

<h2 id="tocS_OracleSourceConfig">OracleSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoraclesourceconfig"></a>
<a id="schema_OracleSourceConfig"></a>
<a id="tocSoraclesourceconfig"></a>
<a id="tocsoraclesourceconfig"></a>

```json
{
  "dropLargeObjects": {},
  "excludeObjects": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "includeObjects": {
    "oracleSchemas": [
      {
        "oracleTables": [
          {
            "oracleColumns": [
              {
                "column": "string",
                "dataType": "string",
                "encoding": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "maxConcurrentBackfillTasks": 0,
  "maxConcurrentCdcTasks": 0,
  "streamLargeObjects": {}
}
```

Oracle data source configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dropLargeObjects|[DropLargeObjects](#schemadroplargeobjects)|false|none|Drop large object values.|
|excludeObjects|[OracleRdbms](#schemaoraclerdbms)|false|none|Oracle objects to exclude from the stream.|
|includeObjects|[OracleRdbms](#schemaoraclerdbms)|false|none|Oracle objects to include in the stream.|
|maxConcurrentBackfillTasks|integer(int32)|false|none|Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.|
|maxConcurrentCdcTasks|integer(int32)|false|none|Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.|
|streamLargeObjects|[StreamLargeObjects](#schemastreamlargeobjects)|false|none|Stream large object values. NOTE: This feature is currently experimental.|

<h2 id="tocS_OracleTable">OracleTable</h2>
<!-- backwards compatibility -->
<a id="schemaoracletable"></a>
<a id="schema_OracleTable"></a>
<a id="tocSoracletable"></a>
<a id="tocsoracletable"></a>

```json
{
  "oracleColumns": [
    {
      "column": "string",
      "dataType": "string",
      "encoding": "string",
      "length": 0,
      "nullable": true,
      "ordinalPosition": 0,
      "precision": 0,
      "primaryKey": true,
      "scale": 0
    }
  ],
  "table": "string"
}
```

Oracle table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oracleColumns|[[OracleColumn](#schemaoraclecolumn)]|false|none|Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.|
|table|string|false|none|Table name.|

<h2 id="tocS_PostgresqlColumn">PostgresqlColumn</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlcolumn"></a>
<a id="schema_PostgresqlColumn"></a>
<a id="tocSpostgresqlcolumn"></a>
<a id="tocspostgresqlcolumn"></a>

```json
{
  "column": "string",
  "dataType": "string",
  "length": 0,
  "nullable": true,
  "ordinalPosition": 0,
  "precision": 0,
  "primaryKey": true,
  "scale": 0
}
```

PostgreSQL Column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Column name.|
|dataType|string|false|none|The PostgreSQL data type.|
|length|integer(int32)|false|none|Column length.|
|nullable|boolean|false|none|Whether or not the column can accept a null value.|
|ordinalPosition|integer(int32)|false|none|The ordinal position of the column in the table.|
|precision|integer(int32)|false|none|Column precision.|
|primaryKey|boolean|false|none|Whether or not the column represents a primary key.|
|scale|integer(int32)|false|none|Column scale.|

<h2 id="tocS_PostgresqlObjectIdentifier">PostgresqlObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlobjectidentifier"></a>
<a id="schema_PostgresqlObjectIdentifier"></a>
<a id="tocSpostgresqlobjectidentifier"></a>
<a id="tocspostgresqlobjectidentifier"></a>

```json
{
  "schema": "string",
  "table": "string"
}
```

PostgreSQL data source object identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|string|false|none|Required. The schema name.|
|table|string|false|none|Required. The table name.|

<h2 id="tocS_PostgresqlProfile">PostgresqlProfile</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlprofile"></a>
<a id="schema_PostgresqlProfile"></a>
<a id="tocSpostgresqlprofile"></a>
<a id="tocspostgresqlprofile"></a>

```json
{
  "database": "string",
  "hostname": "string",
  "password": "string",
  "port": 0,
  "username": "string"
}
```

PostgreSQL database profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|Required. Database for the PostgreSQL connection.|
|hostname|string|false|none|Required. Hostname for the PostgreSQL connection.|
|password|string|false|none|Required. Password for the PostgreSQL connection.|
|port|integer(int32)|false|none|Port for the PostgreSQL connection, default value is 5432.|
|username|string|false|none|Required. Username for the PostgreSQL connection.|

<h2 id="tocS_PostgresqlRdbms">PostgresqlRdbms</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlrdbms"></a>
<a id="schema_PostgresqlRdbms"></a>
<a id="tocSpostgresqlrdbms"></a>
<a id="tocspostgresqlrdbms"></a>

```json
{
  "postgresqlSchemas": [
    {
      "postgresqlTables": [
        {
          "postgresqlColumns": [
            {
              "column": "string",
              "dataType": "string",
              "length": 0,
              "nullable": true,
              "ordinalPosition": 0,
              "precision": 0,
              "primaryKey": true,
              "scale": 0
            }
          ],
          "table": "string"
        }
      ],
      "schema": "string"
    }
  ]
}
```

PostgreSQL database structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postgresqlSchemas|[[PostgresqlSchema](#schemapostgresqlschema)]|false|none|PostgreSQL schemas in the database server.|

<h2 id="tocS_PostgresqlSchema">PostgresqlSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlschema"></a>
<a id="schema_PostgresqlSchema"></a>
<a id="tocSpostgresqlschema"></a>
<a id="tocspostgresqlschema"></a>

```json
{
  "postgresqlTables": [
    {
      "postgresqlColumns": [
        {
          "column": "string",
          "dataType": "string",
          "length": 0,
          "nullable": true,
          "ordinalPosition": 0,
          "precision": 0,
          "primaryKey": true,
          "scale": 0
        }
      ],
      "table": "string"
    }
  ],
  "schema": "string"
}
```

PostgreSQL schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postgresqlTables|[[PostgresqlTable](#schemapostgresqltable)]|false|none|Tables in the schema.|
|schema|string|false|none|Schema name.|

<h2 id="tocS_PostgresqlSourceConfig">PostgresqlSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlsourceconfig"></a>
<a id="schema_PostgresqlSourceConfig"></a>
<a id="tocSpostgresqlsourceconfig"></a>
<a id="tocspostgresqlsourceconfig"></a>

```json
{
  "excludeObjects": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "includeObjects": {
    "postgresqlSchemas": [
      {
        "postgresqlTables": [
          {
            "postgresqlColumns": [
              {
                "column": "string",
                "dataType": "string",
                "length": 0,
                "nullable": true,
                "ordinalPosition": 0,
                "precision": 0,
                "primaryKey": true,
                "scale": 0
              }
            ],
            "table": "string"
          }
        ],
        "schema": "string"
      }
    ]
  },
  "maxConcurrentBackfillTasks": 0,
  "publication": "string",
  "replicationSlot": "string"
}
```

PostgreSQL data source configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludeObjects|[PostgresqlRdbms](#schemapostgresqlrdbms)|false|none|PostgreSQL objects to exclude from the stream.|
|includeObjects|[PostgresqlRdbms](#schemapostgresqlrdbms)|false|none|PostgreSQL objects to include in the stream.|
|maxConcurrentBackfillTasks|integer(int32)|false|none|Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.|
|publication|string|false|none|Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.|
|replicationSlot|string|false|none|Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.|

<h2 id="tocS_PostgresqlTable">PostgresqlTable</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqltable"></a>
<a id="schema_PostgresqlTable"></a>
<a id="tocSpostgresqltable"></a>
<a id="tocspostgresqltable"></a>

```json
{
  "postgresqlColumns": [
    {
      "column": "string",
      "dataType": "string",
      "length": 0,
      "nullable": true,
      "ordinalPosition": 0,
      "precision": 0,
      "primaryKey": true,
      "scale": 0
    }
  ],
  "table": "string"
}
```

PostgreSQL table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postgresqlColumns|[[PostgresqlColumn](#schemapostgresqlcolumn)]|false|none|PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.|
|table|string|false|none|Table name.|

<h2 id="tocS_PrivateConnection">PrivateConnection</h2>
<!-- backwards compatibility -->
<a id="schemaprivateconnection"></a>
<a id="schema_PrivateConnection"></a>
<a id="tocSprivateconnection"></a>
<a id="tocsprivateconnection"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "error": {
    "details": {
      "property1": "string",
      "property2": "string"
    },
    "errorTime": "string",
    "errorUuid": "string",
    "message": "string",
    "reason": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "vpcPeeringConfig": {
    "subnet": "string",
    "vpc": "string"
  }
}
```

The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The create time of the resource.|
|displayName|string|false|none|Required. Display name.|
|error|[Error](#schemaerror)|false|none|Output only. In case of error, the details of the error in a user-friendly format.|
|labels|object|false|none|Labels.|
|name|string|false|read-only|Output only. The resource's name.|
|state|string|false|read-only|Output only. The state of the Private Connection.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update time of the resource.|
|vpcPeeringConfig|[VpcPeeringConfig](#schemavpcpeeringconfig)|false|none|VPC Peering Config.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|CREATED|
|state|FAILED|
|state|DELETING|
|state|FAILED_TO_DELETE|

<h2 id="tocS_PrivateConnectivity">PrivateConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemaprivateconnectivity"></a>
<a id="schema_PrivateConnectivity"></a>
<a id="tocSprivateconnectivity"></a>
<a id="tocsprivateconnectivity"></a>

```json
{
  "privateConnection": "string"
}
```

Private Connectivity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateConnection|string|false|none|Required. A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}`|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "createTime": "string",
  "destinationAddress": "string",
  "destinationPort": 0,
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "updateTime": "string"
}
```

The route resource is the child of the private connection resource, used for defining a route for a private connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The create time of the resource.|
|destinationAddress|string|false|none|Required. Destination address for connection|
|destinationPort|integer(int32)|false|none|Destination port for connection|
|displayName|string|false|none|Required. Display name.|
|labels|object|false|none|Labels.|
|name|string|false|read-only|Output only. The resource's name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update time of the resource.|

<h2 id="tocS_SingleTargetDataset">SingleTargetDataset</h2>
<!-- backwards compatibility -->
<a id="schemasingletargetdataset"></a>
<a id="schema_SingleTargetDataset"></a>
<a id="tocSsingletargetdataset"></a>
<a id="tocssingletargetdataset"></a>

```json
{
  "datasetId": "string"
}
```

A single target dataset to which all data will be streamed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|The dataset ID of the target dataset.|

<h2 id="tocS_SourceConfig">SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfig"></a>
<a id="schema_SourceConfig"></a>
<a id="tocSsourceconfig"></a>
<a id="tocssourceconfig"></a>

```json
{
  "mysqlSourceConfig": {
    "excludeObjects": {
      "mysqlDatabases": [
        {
          "database": "string",
          "mysqlTables": [
            {
              "mysqlColumns": [
                {
                  "collation": "string",
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "primaryKey": true
                }
              ],
              "table": "string"
            }
          ]
        }
      ]
    },
    "includeObjects": {
      "mysqlDatabases": [
        {
          "database": "string",
          "mysqlTables": [
            {
              "mysqlColumns": [
                {
                  "collation": "string",
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "primaryKey": true
                }
              ],
              "table": "string"
            }
          ]
        }
      ]
    },
    "maxConcurrentBackfillTasks": 0,
    "maxConcurrentCdcTasks": 0
  },
  "oracleSourceConfig": {
    "dropLargeObjects": {},
    "excludeObjects": {
      "oracleSchemas": [
        {
          "oracleTables": [
            {
              "oracleColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "encoding": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "includeObjects": {
      "oracleSchemas": [
        {
          "oracleTables": [
            {
              "oracleColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "encoding": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "maxConcurrentBackfillTasks": 0,
    "maxConcurrentCdcTasks": 0,
    "streamLargeObjects": {}
  },
  "postgresqlSourceConfig": {
    "excludeObjects": {
      "postgresqlSchemas": [
        {
          "postgresqlTables": [
            {
              "postgresqlColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "includeObjects": {
      "postgresqlSchemas": [
        {
          "postgresqlTables": [
            {
              "postgresqlColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "maxConcurrentBackfillTasks": 0,
    "publication": "string",
    "replicationSlot": "string"
  },
  "sourceConnectionProfile": "string"
}
```

The configuration of the stream source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlSourceConfig|[MysqlSourceConfig](#schemamysqlsourceconfig)|false|none|MySQL data source configuration.|
|oracleSourceConfig|[OracleSourceConfig](#schemaoraclesourceconfig)|false|none|Oracle data source configuration.|
|postgresqlSourceConfig|[PostgresqlSourceConfig](#schemapostgresqlsourceconfig)|false|none|PostgreSQL data source configuration.|
|sourceConnectionProfile|string|false|none|Required. Source connection profile resoource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}`|

<h2 id="tocS_SourceHierarchyDatasets">SourceHierarchyDatasets</h2>
<!-- backwards compatibility -->
<a id="schemasourcehierarchydatasets"></a>
<a id="schema_SourceHierarchyDatasets"></a>
<a id="tocSsourcehierarchydatasets"></a>
<a id="tocssourcehierarchydatasets"></a>

```json
{
  "datasetTemplate": {
    "datasetIdPrefix": "string",
    "kmsKeyName": "string",
    "location": "string"
  }
}
```

Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetTemplate|[DatasetTemplate](#schemadatasettemplate)|false|none|The dataset template to use for dynamic dataset creation.|

<h2 id="tocS_SourceObjectIdentifier">SourceObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemasourceobjectidentifier"></a>
<a id="schema_SourceObjectIdentifier"></a>
<a id="tocSsourceobjectidentifier"></a>
<a id="tocssourceobjectidentifier"></a>

```json
{
  "mysqlIdentifier": {
    "database": "string",
    "table": "string"
  },
  "oracleIdentifier": {
    "schema": "string",
    "table": "string"
  },
  "postgresqlIdentifier": {
    "schema": "string",
    "table": "string"
  }
}
```

Represents an identifier of an object in the data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mysqlIdentifier|[MysqlObjectIdentifier](#schemamysqlobjectidentifier)|false|none|Mysql data source object identifier.|
|oracleIdentifier|[OracleObjectIdentifier](#schemaoracleobjectidentifier)|false|none|Oracle data source object identifier.|
|postgresqlIdentifier|[PostgresqlObjectIdentifier](#schemapostgresqlobjectidentifier)|false|none|PostgreSQL data source object identifier.|

<h2 id="tocS_StartBackfillJobRequest">StartBackfillJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartbackfilljobrequest"></a>
<a id="schema_StartBackfillJobRequest"></a>
<a id="tocSstartbackfilljobrequest"></a>
<a id="tocsstartbackfilljobrequest"></a>

```json
{}
```

Request for manually initiating a backfill job for a specific stream object.

<h2 id="tocS_StartBackfillJobResponse">StartBackfillJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartbackfilljobresponse"></a>
<a id="schema_StartBackfillJobResponse"></a>
<a id="tocSstartbackfilljobresponse"></a>
<a id="tocsstartbackfilljobresponse"></a>

```json
{
  "object": {
    "backfillJob": {
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "lastEndTime": "string",
      "lastStartTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trigger": "TRIGGER_UNSPECIFIED"
    },
    "createTime": "string",
    "displayName": "string",
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "name": "string",
    "sourceObject": {
      "mysqlIdentifier": {
        "database": "string",
        "table": "string"
      },
      "oracleIdentifier": {
        "schema": "string",
        "table": "string"
      },
      "postgresqlIdentifier": {
        "schema": "string",
        "table": "string"
      }
    },
    "updateTime": "string"
  }
}
```

Response for manually initiating a backfill job for a specific stream object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|[StreamObject](#schemastreamobject)|false|none|The stream object resource a backfill job was started for.|

<h2 id="tocS_StaticServiceIpConnectivity">StaticServiceIpConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemastaticserviceipconnectivity"></a>
<a id="schema_StaticServiceIpConnectivity"></a>
<a id="tocSstaticserviceipconnectivity"></a>
<a id="tocsstaticserviceipconnectivity"></a>

```json
{}
```

Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_StopBackfillJobRequest">StopBackfillJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopbackfilljobrequest"></a>
<a id="schema_StopBackfillJobRequest"></a>
<a id="tocSstopbackfilljobrequest"></a>
<a id="tocsstopbackfilljobrequest"></a>

```json
{}
```

Request for manually stopping a running backfill job for a specific stream object.

<h2 id="tocS_StopBackfillJobResponse">StopBackfillJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopbackfilljobresponse"></a>
<a id="schema_StopBackfillJobResponse"></a>
<a id="tocSstopbackfilljobresponse"></a>
<a id="tocsstopbackfilljobresponse"></a>

```json
{
  "object": {
    "backfillJob": {
      "errors": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "errorTime": "string",
          "errorUuid": "string",
          "message": "string",
          "reason": "string"
        }
      ],
      "lastEndTime": "string",
      "lastStartTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trigger": "TRIGGER_UNSPECIFIED"
    },
    "createTime": "string",
    "displayName": "string",
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "name": "string",
    "sourceObject": {
      "mysqlIdentifier": {
        "database": "string",
        "table": "string"
      },
      "oracleIdentifier": {
        "schema": "string",
        "table": "string"
      },
      "postgresqlIdentifier": {
        "schema": "string",
        "table": "string"
      }
    },
    "updateTime": "string"
  }
}
```

Response for manually stop a backfill job for a specific stream object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|[StreamObject](#schemastreamobject)|false|none|The stream object resource the backfill job was stopped for.|

<h2 id="tocS_Stream">Stream</h2>
<!-- backwards compatibility -->
<a id="schemastream"></a>
<a id="schema_Stream"></a>
<a id="tocSstream"></a>
<a id="tocsstream"></a>

```json
{
  "backfillAll": {
    "mysqlExcludedObjects": {
      "mysqlDatabases": [
        {
          "database": "string",
          "mysqlTables": [
            {
              "mysqlColumns": [
                {
                  "collation": "string",
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "primaryKey": true
                }
              ],
              "table": "string"
            }
          ]
        }
      ]
    },
    "oracleExcludedObjects": {
      "oracleSchemas": [
        {
          "oracleTables": [
            {
              "oracleColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "encoding": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    },
    "postgresqlExcludedObjects": {
      "postgresqlSchemas": [
        {
          "postgresqlTables": [
            {
              "postgresqlColumns": [
                {
                  "column": "string",
                  "dataType": "string",
                  "length": 0,
                  "nullable": true,
                  "ordinalPosition": 0,
                  "precision": 0,
                  "primaryKey": true,
                  "scale": 0
                }
              ],
              "table": "string"
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "backfillNone": {},
  "createTime": "string",
  "customerManagedEncryptionKey": "string",
  "destinationConfig": {
    "bigqueryDestinationConfig": {
      "dataFreshness": "string",
      "singleTargetDataset": {
        "datasetId": "string"
      },
      "sourceHierarchyDatasets": {
        "datasetTemplate": {
          "datasetIdPrefix": "string",
          "kmsKeyName": "string",
          "location": "string"
        }
      }
    },
    "destinationConnectionProfile": "string",
    "gcsDestinationConfig": {
      "avroFileFormat": {},
      "fileRotationInterval": "string",
      "fileRotationMb": 0,
      "jsonFileFormat": {
        "compression": "JSON_COMPRESSION_UNSPECIFIED",
        "schemaFileFormat": "SCHEMA_FILE_FORMAT_UNSPECIFIED"
      },
      "path": "string"
    }
  },
  "displayName": "string",
  "errors": [
    {
      "details": {
        "property1": "string",
        "property2": "string"
      },
      "errorTime": "string",
      "errorUuid": "string",
      "message": "string",
      "reason": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "sourceConfig": {
    "mysqlSourceConfig": {
      "excludeObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "includeObjects": {
        "mysqlDatabases": [
          {
            "database": "string",
            "mysqlTables": [
              {
                "mysqlColumns": [
                  {
                    "collation": "string",
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "primaryKey": true
                  }
                ],
                "table": "string"
              }
            ]
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "maxConcurrentCdcTasks": 0
    },
    "oracleSourceConfig": {
      "dropLargeObjects": {},
      "excludeObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "includeObjects": {
        "oracleSchemas": [
          {
            "oracleTables": [
              {
                "oracleColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "encoding": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "maxConcurrentCdcTasks": 0,
      "streamLargeObjects": {}
    },
    "postgresqlSourceConfig": {
      "excludeObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "includeObjects": {
        "postgresqlSchemas": [
          {
            "postgresqlTables": [
              {
                "postgresqlColumns": [
                  {
                    "column": "string",
                    "dataType": "string",
                    "length": 0,
                    "nullable": true,
                    "ordinalPosition": 0,
                    "precision": 0,
                    "primaryKey": true,
                    "scale": 0
                  }
                ],
                "table": "string"
              }
            ],
            "schema": "string"
          }
        ]
      },
      "maxConcurrentBackfillTasks": 0,
      "publication": "string",
      "replicationSlot": "string"
    },
    "sourceConnectionProfile": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

A resource representing streaming data from a source to a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backfillAll|[BackfillAllStrategy](#schemabackfillallstrategy)|false|none|Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.|
|backfillNone|[BackfillNoneStrategy](#schemabackfillnonestrategy)|false|none|Do not automatically backfill any objects.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation time of the stream.|
|customerManagedEncryptionKey|string|false|none|Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.|
|destinationConfig|[DestinationConfig](#schemadestinationconfig)|false|none|Required. Destination connection profile configuration.|
|displayName|string|false|none|Required. Display name.|
|errors|[[Error](#schemaerror)]|false|read-only|Output only. Errors on the Stream.|
|labels|object|false|none|Labels.|
|name|string|false|read-only|Output only. The stream's name.|
|sourceConfig|[SourceConfig](#schemasourceconfig)|false|none|Required. Source connection profile configuration.|
|state|string|false|none|The state of the stream.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update time of the stream.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|RUNNING|
|state|PAUSED|
|state|MAINTENANCE|
|state|FAILED|
|state|FAILED_PERMANENTLY|
|state|STARTING|
|state|DRAINING|

<h2 id="tocS_StreamLargeObjects">StreamLargeObjects</h2>
<!-- backwards compatibility -->
<a id="schemastreamlargeobjects"></a>
<a id="schema_StreamLargeObjects"></a>
<a id="tocSstreamlargeobjects"></a>
<a id="tocsstreamlargeobjects"></a>

```json
{}
```

Configuration to stream large object values.

<h2 id="tocS_StreamObject">StreamObject</h2>
<!-- backwards compatibility -->
<a id="schemastreamobject"></a>
<a id="schema_StreamObject"></a>
<a id="tocSstreamobject"></a>
<a id="tocsstreamobject"></a>

```json
{
  "backfillJob": {
    "errors": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "errorTime": "string",
        "errorUuid": "string",
        "message": "string",
        "reason": "string"
      }
    ],
    "lastEndTime": "string",
    "lastStartTime": "string",
    "state": "STATE_UNSPECIFIED",
    "trigger": "TRIGGER_UNSPECIFIED"
  },
  "createTime": "string",
  "displayName": "string",
  "errors": [
    {
      "details": {
        "property1": "string",
        "property2": "string"
      },
      "errorTime": "string",
      "errorUuid": "string",
      "message": "string",
      "reason": "string"
    }
  ],
  "name": "string",
  "sourceObject": {
    "mysqlIdentifier": {
      "database": "string",
      "table": "string"
    },
    "oracleIdentifier": {
      "schema": "string",
      "table": "string"
    },
    "postgresqlIdentifier": {
      "schema": "string",
      "table": "string"
    }
  },
  "updateTime": "string"
}
```

A specific stream object (e.g a specific DB table).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backfillJob|[BackfillJob](#schemabackfilljob)|false|none|The latest backfill job that was initiated for the stream object.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation time of the object.|
|displayName|string|false|none|Required. Display name.|
|errors|[[Error](#schemaerror)]|false|read-only|Output only. Active errors on the object.|
|name|string|false|read-only|Output only. The object resource's name.|
|sourceObject|[SourceObjectIdentifier](#schemasourceobjectidentifier)|false|none|The object identifier in the data source.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update time of the object.|

<h2 id="tocS_Validation">Validation</h2>
<!-- backwards compatibility -->
<a id="schemavalidation"></a>
<a id="schema_Validation"></a>
<a id="tocSvalidation"></a>
<a id="tocsvalidation"></a>

```json
{
  "code": "string",
  "description": "string",
  "message": [
    {
      "code": "string",
      "level": "LEVEL_UNSPECIFIED",
      "message": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

A validation to perform on a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|A custom code identifying this validation.|
|description|string|false|none|A short description of the validation.|
|message|[[ValidationMessage](#schemavalidationmessage)]|false|none|Messages reflecting the validation results.|
|state|string|false|none|Validation execution status.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NOT_EXECUTED|
|state|FAILED|
|state|PASSED|

<h2 id="tocS_ValidationMessage">ValidationMessage</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmessage"></a>
<a id="schema_ValidationMessage"></a>
<a id="tocSvalidationmessage"></a>
<a id="tocsvalidationmessage"></a>

```json
{
  "code": "string",
  "level": "LEVEL_UNSPECIFIED",
  "message": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represent user-facing validation result message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|A custom code identifying this specific message.|
|level|string|false|none|Message severity level (warning or error).|
|message|string|false|none|The result of the validation.|
|metadata|object|false|none|Additional metadata related to the result.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|LEVEL_UNSPECIFIED|
|level|WARNING|
|level|ERROR|

<h2 id="tocS_ValidationResult">ValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_ValidationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
{
  "validations": [
    {
      "code": "string",
      "description": "string",
      "message": [
        {
          "code": "string",
          "level": "LEVEL_UNSPECIFIED",
          "message": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

Contains the current validation results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validations|[[Validation](#schemavalidation)]|false|none|A list of validations (includes both executed as well as not executed validations).|

<h2 id="tocS_VpcPeeringConfig">VpcPeeringConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringconfig"></a>
<a id="schema_VpcPeeringConfig"></a>
<a id="tocSvpcpeeringconfig"></a>
<a id="tocsvpcpeeringconfig"></a>

```json
{
  "subnet": "string",
  "vpc": "string"
}
```

The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnet|string|false|none|Required. A free subnet for peering. (CIDR of /29)|
|vpc|string|false|none|Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}`|
