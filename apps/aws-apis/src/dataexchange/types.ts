type GetJobResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Details?:
    | {
        ExportAssetToSignedUrl?:
          | {
              AssetId: {}
              DataSetId: {}
              RevisionId: {}
              SignedUrl?: {} | undefined
              SignedUrlExpiresAt?: {} | undefined
            }
          | undefined
        ExportAssetsToS3?:
          | {
              AssetDestinations: {}
              DataSetId: {}
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionId: {}
            }
          | undefined
        ExportRevisionsToS3?:
          | {
              DataSetId: {}
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionDestinations: {}
              EventActionArn?: {} | undefined
            }
          | undefined
        ImportAssetFromSignedUrl?:
          | {
              AssetName: {}
              DataSetId: {}
              Md5Hash?: {} | undefined
              RevisionId: {}
              SignedUrl?: {} | undefined
              SignedUrlExpiresAt?: {} | undefined
            }
          | undefined
        ImportAssetsFromS3?: { AssetSources: {}; DataSetId: {}; RevisionId: {} } | undefined
        ImportAssetsFromRedshiftDataShares?:
          | { AssetSources: {}; DataSetId: {}; RevisionId: {} }
          | undefined
        ImportAssetFromApiGatewayApi?:
          | {
              ApiDescription?: {} | undefined
              ApiId: {}
              ApiKey?: {} | undefined
              ApiName: {}
              ApiSpecificationMd5Hash: {}
              ApiSpecificationUploadUrl: {}
              ApiSpecificationUploadUrlExpiresAt: {}
              DataSetId: {}
              ProtocolType: {}
              RevisionId: {}
              Stage: {}
            }
          | undefined
        CreateS3DataAccessFromS3Bucket?:
          | {
              AssetSource: {
                Bucket: {}
                KeyPrefixes?: {} | undefined
                Keys?: {} | undefined
                KmsKeysToGrant?: {} | undefined
              }
              DataSetId: {}
              RevisionId: {}
            }
          | undefined
        ImportAssetsFromLakeFormationTagPolicy?:
          | {
              CatalogId: {}
              Database?: { Expression: {}; Permissions: {} } | undefined
              Table?: { Expression: {}; Permissions: {} } | undefined
              RoleArn: {}
              DataSetId: {}
              RevisionId: {}
            }
          | undefined
      }
    | undefined
  Errors?: {} | undefined
  Id?: {} | undefined
  State?: {} | undefined
  Type?: {} | undefined
  UpdatedAt?: {} | undefined
}
type StartJobResponse = { [x: string]: unknown }
type String = string
type CreateDataSetResponse = {
  Arn?: {} | undefined
  AssetType?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Origin?: {} | undefined
  OriginDetails?: { ProductId: {} } | undefined
  SourceId?: {} | undefined
  Tags?: {} | undefined
  UpdatedAt?: {} | undefined
}
type ListDataSetsResponse = { DataSets?: {} | undefined; NextToken?: {} | undefined }
type CreateEventActionResponse = {
  Action?:
    | {
        ExportRevisionToS3?:
          | {
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionDestination: { Bucket: {}; KeyPattern?: {} | undefined }
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Event?: { RevisionPublished?: { DataSetId: {} } | undefined } | undefined
  Id?: {} | undefined
  UpdatedAt?: {} | undefined
}
type ListEventActionsResponse = { EventActions?: {} | undefined; NextToken?: {} | undefined }
type CreateJobResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Details?:
    | {
        ExportAssetToSignedUrl?:
          | {
              AssetId: {}
              DataSetId: {}
              RevisionId: {}
              SignedUrl?: {} | undefined
              SignedUrlExpiresAt?: {} | undefined
            }
          | undefined
        ExportAssetsToS3?:
          | {
              AssetDestinations: {}
              DataSetId: {}
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionId: {}
            }
          | undefined
        ExportRevisionsToS3?:
          | {
              DataSetId: {}
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionDestinations: {}
              EventActionArn?: {} | undefined
            }
          | undefined
        ImportAssetFromSignedUrl?:
          | {
              AssetName: {}
              DataSetId: {}
              Md5Hash?: {} | undefined
              RevisionId: {}
              SignedUrl?: {} | undefined
              SignedUrlExpiresAt?: {} | undefined
            }
          | undefined
        ImportAssetsFromS3?: { AssetSources: {}; DataSetId: {}; RevisionId: {} } | undefined
        ImportAssetsFromRedshiftDataShares?:
          | { AssetSources: {}; DataSetId: {}; RevisionId: {} }
          | undefined
        ImportAssetFromApiGatewayApi?:
          | {
              ApiDescription?: {} | undefined
              ApiId: {}
              ApiKey?: {} | undefined
              ApiName: {}
              ApiSpecificationMd5Hash: {}
              ApiSpecificationUploadUrl: {}
              ApiSpecificationUploadUrlExpiresAt: {}
              DataSetId: {}
              ProtocolType: {}
              RevisionId: {}
              Stage: {}
            }
          | undefined
        CreateS3DataAccessFromS3Bucket?:
          | {
              AssetSource: {
                Bucket: {}
                KeyPrefixes?: {} | undefined
                Keys?: {} | undefined
                KmsKeysToGrant?: {} | undefined
              }
              DataSetId: {}
              RevisionId: {}
            }
          | undefined
        ImportAssetsFromLakeFormationTagPolicy?:
          | {
              CatalogId: {}
              Database?: { Expression: {}; Permissions: {} } | undefined
              Table?: { Expression: {}; Permissions: {} } | undefined
              RoleArn: {}
              DataSetId: {}
              RevisionId: {}
            }
          | undefined
      }
    | undefined
  Errors?: {} | undefined
  Id?: {} | undefined
  State?: {} | undefined
  Type?: {} | undefined
  UpdatedAt?: {} | undefined
}
type ListJobsResponse = { Jobs?: {} | undefined; NextToken?: {} | undefined }
type CreateRevisionResponse = {
  Arn?: {} | undefined
  Comment?: {} | undefined
  CreatedAt?: {} | undefined
  DataSetId?: {} | undefined
  Finalized?: {} | undefined
  Id?: {} | undefined
  SourceId?: {} | undefined
  Tags?: {} | undefined
  UpdatedAt?: {} | undefined
  RevocationComment?: {} | undefined
  Revoked?: {} | undefined
  RevokedAt?: {} | undefined
}
type ListDataSetRevisionsResponse = { NextToken?: {} | undefined; Revisions?: {} | undefined }
type GetAssetResponse = {
  Arn?: {} | undefined
  AssetDetails?:
    | {
        S3SnapshotAsset?: { Size: {} } | undefined
        RedshiftDataShareAsset?: { Arn: {} } | undefined
        ApiGatewayApiAsset?:
          | {
              ApiDescription?: {} | undefined
              ApiEndpoint?: {} | undefined
              ApiId?: {} | undefined
              ApiKey?: {} | undefined
              ApiName?: {} | undefined
              ApiSpecificationDownloadUrl?: {} | undefined
              ApiSpecificationDownloadUrlExpiresAt?: {} | undefined
              ProtocolType?: {} | undefined
              Stage?: {} | undefined
            }
          | undefined
        S3DataAccessAsset?:
          | {
              Bucket: {}
              KeyPrefixes?: {} | undefined
              Keys?: {} | undefined
              S3AccessPointAlias?: {} | undefined
              S3AccessPointArn?: {} | undefined
              KmsKeysToGrant?: {} | undefined
            }
          | undefined
        LakeFormationDataPermissionAsset?:
          | {
              LakeFormationDataPermissionDetails: {
                LFTagPolicy?:
                  | {
                      CatalogId: {}
                      ResourceType: {}
                      ResourceDetails: {
                        Database?: { Expression: {} } | undefined
                        Table?: { Expression: {} } | undefined
                      }
                    }
                  | undefined
              }
              LakeFormationDataPermissionType: {}
              Permissions: {}
              RoleArn?: {} | undefined
            }
          | undefined
      }
    | undefined
  AssetType?: {} | undefined
  CreatedAt?: {} | undefined
  DataSetId?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  RevisionId?: {} | undefined
  SourceId?: {} | undefined
  UpdatedAt?: {} | undefined
}
type UpdateAssetResponse = {
  Arn?: {} | undefined
  AssetDetails?:
    | {
        S3SnapshotAsset?: { Size: {} } | undefined
        RedshiftDataShareAsset?: { Arn: {} } | undefined
        ApiGatewayApiAsset?:
          | {
              ApiDescription?: {} | undefined
              ApiEndpoint?: {} | undefined
              ApiId?: {} | undefined
              ApiKey?: {} | undefined
              ApiName?: {} | undefined
              ApiSpecificationDownloadUrl?: {} | undefined
              ApiSpecificationDownloadUrlExpiresAt?: {} | undefined
              ProtocolType?: {} | undefined
              Stage?: {} | undefined
            }
          | undefined
        S3DataAccessAsset?:
          | {
              Bucket: {}
              KeyPrefixes?: {} | undefined
              Keys?: {} | undefined
              S3AccessPointAlias?: {} | undefined
              S3AccessPointArn?: {} | undefined
              KmsKeysToGrant?: {} | undefined
            }
          | undefined
        LakeFormationDataPermissionAsset?:
          | {
              LakeFormationDataPermissionDetails: {
                LFTagPolicy?:
                  | {
                      CatalogId: {}
                      ResourceType: {}
                      ResourceDetails: {
                        Database?: { Expression: {} } | undefined
                        Table?: { Expression: {} } | undefined
                      }
                    }
                  | undefined
              }
              LakeFormationDataPermissionType: {}
              Permissions: {}
              RoleArn?: {} | undefined
            }
          | undefined
      }
    | undefined
  AssetType?: {} | undefined
  CreatedAt?: {} | undefined
  DataSetId?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  RevisionId?: {} | undefined
  SourceId?: {} | undefined
  UpdatedAt?: {} | undefined
}
type GetDataSetResponse = {
  Arn?: {} | undefined
  AssetType?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Origin?: {} | undefined
  OriginDetails?: { ProductId: {} } | undefined
  SourceId?: {} | undefined
  Tags?: {} | undefined
  UpdatedAt?: {} | undefined
}
type UpdateDataSetResponse = {
  Arn?: {} | undefined
  AssetType?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Origin?: {} | undefined
  OriginDetails?: { ProductId: {} } | undefined
  SourceId?: {} | undefined
  UpdatedAt?: {} | undefined
}
type GetEventActionResponse = {
  Action?:
    | {
        ExportRevisionToS3?:
          | {
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionDestination: { Bucket: {}; KeyPattern?: {} | undefined }
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Event?: { RevisionPublished?: { DataSetId: {} } | undefined } | undefined
  Id?: {} | undefined
  UpdatedAt?: {} | undefined
}
type UpdateEventActionResponse = {
  Action?:
    | {
        ExportRevisionToS3?:
          | {
              Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
              RevisionDestination: { Bucket: {}; KeyPattern?: {} | undefined }
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Event?: { RevisionPublished?: { DataSetId: {} } | undefined } | undefined
  Id?: {} | undefined
  UpdatedAt?: {} | undefined
}
type GetRevisionResponse = {
  Arn?: {} | undefined
  Comment?: {} | undefined
  CreatedAt?: {} | undefined
  DataSetId?: {} | undefined
  Finalized?: {} | undefined
  Id?: {} | undefined
  SourceId?: {} | undefined
  Tags?: {} | undefined
  UpdatedAt?: {} | undefined
  RevocationComment?: {} | undefined
  Revoked?: {} | undefined
  RevokedAt?: {} | undefined
}
type UpdateRevisionResponse = {
  Arn?: {} | undefined
  Comment?: {} | undefined
  CreatedAt?: {} | undefined
  DataSetId?: {} | undefined
  Finalized?: {} | undefined
  Id?: {} | undefined
  SourceId?: {} | undefined
  UpdatedAt?: {} | undefined
  RevocationComment?: {} | undefined
  Revoked?: {} | undefined
  RevokedAt?: {} | undefined
}
type ListRevisionAssetsResponse = { Assets?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type RevokeRevisionResponse = {
  Arn?: {} | undefined
  Comment?: {} | undefined
  CreatedAt?: {} | undefined
  DataSetId?: {} | undefined
  Finalized?: {} | undefined
  Id?: {} | undefined
  SourceId?: {} | undefined
  UpdatedAt?: {} | undefined
  RevocationComment?: {} | undefined
  Revoked?: {} | undefined
  RevokedAt?: {} | undefined
}
type SendApiAssetResponse = { Body?: {} | undefined; ResponseHeaders?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/jobs/:JobId': {
      $delete: {
        input: { param: { JobId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { JobId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetJobResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { JobId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartJobResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/data-sets': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AssetType:
              | 'S3_SNAPSHOT'
              | 'REDSHIFT_DATA_SHARE'
              | 'API_GATEWAY_API'
              | 'S3_DATA_ACCESS'
              | 'LAKE_FORMATION_DATA_PERMISSION'
            Description: string
            Name: string
            Tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateDataSetResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            origin?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDataSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/event-actions': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Action: {
              ExportRevisionToS3?:
                | {
                    Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
                    RevisionDestination: { Bucket: {}; KeyPattern?: {} | undefined }
                  }
                | undefined
            }
            Event: { RevisionPublished?: { DataSetId: {} } | undefined }
          }
        }
        output: CreateEventActionResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            eventSourceId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListEventActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Details: {
              ExportAssetToSignedUrl?: { AssetId: {}; DataSetId: {}; RevisionId: {} } | undefined
              ExportAssetsToS3?:
                | {
                    AssetDestinations: {}
                    DataSetId: {}
                    Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
                    RevisionId: {}
                  }
                | undefined
              ExportRevisionsToS3?:
                | {
                    DataSetId: {}
                    Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
                    RevisionDestinations: {}
                  }
                | undefined
              ImportAssetFromSignedUrl?:
                | { AssetName: {}; DataSetId: {}; Md5Hash: {}; RevisionId: {} }
                | undefined
              ImportAssetsFromS3?: { AssetSources: {}; DataSetId: {}; RevisionId: {} } | undefined
              ImportAssetsFromRedshiftDataShares?:
                | { AssetSources: {}; DataSetId: {}; RevisionId: {} }
                | undefined
              ImportAssetFromApiGatewayApi?:
                | {
                    ApiDescription?: {} | undefined
                    ApiId: {}
                    ApiKey?: {} | undefined
                    ApiName: {}
                    ApiSpecificationMd5Hash: {}
                    DataSetId: {}
                    ProtocolType: {}
                    RevisionId: {}
                    Stage: {}
                  }
                | undefined
              CreateS3DataAccessFromS3Bucket?:
                | {
                    AssetSource: {
                      Bucket: {}
                      KeyPrefixes?: {} | undefined
                      Keys?: {} | undefined
                      KmsKeysToGrant?: {} | undefined
                    }
                    DataSetId: {}
                    RevisionId: {}
                  }
                | undefined
              ImportAssetsFromLakeFormationTagPolicy?:
                | {
                    CatalogId: {}
                    Database?: { Expression: {}; Permissions: {} } | undefined
                    Table?: { Expression: {}; Permissions: {} } | undefined
                    RoleArn: {}
                    DataSetId: {}
                    RevisionId: {}
                  }
                | undefined
            }
            Type:
              | 'IMPORT_ASSETS_FROM_S3'
              | 'IMPORT_ASSET_FROM_SIGNED_URL'
              | 'EXPORT_ASSETS_TO_S3'
              | 'EXPORT_ASSET_TO_SIGNED_URL'
              | 'EXPORT_REVISIONS_TO_S3'
              | 'IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES'
              | 'IMPORT_ASSET_FROM_API_GATEWAY_API'
              | 'CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET'
              | 'IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY'
          }
        }
        output: CreateJobResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            dataSetId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            revisionId?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/data-sets/:DataSetId/revisions': {
      $post: {
        input: { param: { DataSetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Comment?: string | undefined; Tags?: { [x: string]: String } | undefined } }
        output: CreateRevisionResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { DataSetId: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDataSetRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId': {
      $delete: {
        input: { param: { AssetId: string; DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { AssetId: string; DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAssetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { AssetId: string; DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string } }
        output: UpdateAssetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/data-sets/:DataSetId': {
      $delete: {
        input: { param: { DataSetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { DataSetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDataSetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { DataSetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined; Name?: string | undefined } }
        output: UpdateDataSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/event-actions/:EventActionId': {
      $delete: {
        input: { param: { EventActionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { EventActionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetEventActionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { EventActionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Action?:
              | {
                  ExportRevisionToS3?:
                    | {
                        Encryption?: { KmsKeyArn?: {} | undefined; Type: {} } | undefined
                        RevisionDestination: { Bucket: {}; KeyPattern?: {} | undefined }
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: UpdateEventActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/data-sets/:DataSetId/revisions/:RevisionId': {
      $delete: {
        input: { param: { DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRevisionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Comment?: string | undefined; Finalized?: boolean | undefined } }
        output: UpdateRevisionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets': {
      $get: {
        input: { param: { DataSetId: string; RevisionId: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListRevisionAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn': {
      $get: {
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/data-sets/:DataSetId/revisions/:RevisionId/revoke': {
      $post: {
        input: { param: { DataSetId: string; RevisionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { RevocationComment: string } }
        output: RevokeRevisionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id': {
      $post: {
        input: { query: { QueryStringParameters?: { [x: string]: String } | undefined } } & {
          header: {
            'x-amzn-dataexchange-asset-id': string
            'x-amzn-dataexchange-data-set-id': string
            'x-amzn-dataexchange-http-method'?: string | undefined
            'x-amzn-dataexchange-path'?: string | undefined
            'x-amzn-dataexchange-revision-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Body?: string | undefined
            'x-amzn-dataexchange-header-'?: { [x: string]: String } | undefined
          }
        }
        output: SendApiAssetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete: {
        input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
