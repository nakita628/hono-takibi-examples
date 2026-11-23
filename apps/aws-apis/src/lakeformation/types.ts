type LFTagPair = { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} }
type AddLFTagsToResourceResponse = { Failures?: {} | undefined }
type AssumeDecoratedRoleWithSAMLResponse = {
  AccessKeyId?: {} | undefined
  SecretAccessKey?: {} | undefined
  SessionToken?: {} | undefined
  Expiration?: {} | undefined
}
type BatchPermissionsRequestEntry = {
  Id: {}
  Principal?: { DataLakePrincipalIdentifier?: {} | undefined } | undefined
  Resource?:
    | {
        Catalog?: {} | undefined
        Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
        Table?:
          | {
              CatalogId?: {} | undefined
              DatabaseName: {}
              Name?: {} | undefined
              TableWildcard?: {} | undefined
            }
          | undefined
        TableWithColumns?:
          | {
              CatalogId?: {} | undefined
              DatabaseName: {}
              Name: {}
              ColumnNames?: {} | undefined
              ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
            }
          | undefined
        DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
        DataCellsFilter?:
          | {
              TableCatalogId?: {} | undefined
              DatabaseName?: {} | undefined
              TableName?: {} | undefined
              Name?: {} | undefined
            }
          | undefined
        LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
        LFTagPolicy?: { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} } | undefined
      }
    | undefined
  Permissions?: {} | undefined
  PermissionsWithGrantOption?: {} | undefined
}
type BatchGrantPermissionsResponse = { Failures?: {} | undefined }
type BatchRevokePermissionsResponse = { Failures?: {} | undefined }
type CancelTransactionResponse = { [x: string]: unknown }
type CommitTransactionResponse = { TransactionStatus?: {} | undefined }
type CreateDataCellsFilterResponse = { [x: string]: unknown }
type LFTagValue = string
type CreateLFTagResponse = { [x: string]: unknown }
type DeleteDataCellsFilterResponse = { [x: string]: unknown }
type DeleteLFTagResponse = { [x: string]: unknown }
type VirtualObject = { Uri: {}; ETag?: {} | undefined }
type DeleteObjectsOnCancelResponse = { [x: string]: unknown }
type DeregisterResourceResponse = { [x: string]: unknown }
type DescribeResourceResponse = {
  ResourceInfo?:
    | {
        ResourceArn?: {} | undefined
        RoleArn?: {} | undefined
        LastModified?: {} | undefined
        WithFederation?: {} | undefined
      }
    | undefined
}
type DescribeTransactionResponse = {
  TransactionDescription?:
    | {
        TransactionId?: {} | undefined
        TransactionStatus?: {} | undefined
        TransactionStartTime?: {} | undefined
        TransactionEndTime?: {} | undefined
      }
    | undefined
}
type ExtendTransactionResponse = { [x: string]: unknown }
type GetDataCellsFilterResponse = {
  DataCellsFilter?:
    | {
        TableCatalogId: {}
        DatabaseName: {}
        TableName: {}
        Name: {}
        RowFilter?:
          | { FilterExpression?: {} | undefined; AllRowsWildcard?: {} | undefined }
          | undefined
        ColumnNames?: {} | undefined
        ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
        VersionId?: {} | undefined
      }
    | undefined
}
type GetDataLakeSettingsResponse = {
  DataLakeSettings?:
    | {
        DataLakeAdmins?: {} | undefined
        CreateDatabaseDefaultPermissions?: {} | undefined
        CreateTableDefaultPermissions?: {} | undefined
        Parameters?: {} | undefined
        TrustedResourceOwners?: {} | undefined
        AllowExternalDataFiltering?: {} | undefined
        ExternalDataFilteringAllowList?: {} | undefined
        AuthorizedSessionTagValueList?: {} | undefined
      }
    | undefined
}
type GetEffectivePermissionsForPathResponse = {
  Permissions?: {} | undefined
  NextToken?: {} | undefined
}
type GetLFTagResponse = {
  CatalogId?: {} | undefined
  TagKey?: {} | undefined
  TagValues?: {} | undefined
}
type GetQueryStateResponse = { Error?: {} | undefined; State: {} }
type GetQueryStatisticsResponse = {
  ExecutionStatistics?:
    | {
        AverageExecutionTimeMillis?: {} | undefined
        DataScannedBytes?: {} | undefined
        WorkUnitsExecutedCount?: {} | undefined
      }
    | undefined
  PlanningStatistics?:
    | {
        EstimatedDataToScanBytes?: {} | undefined
        PlanningTimeMillis?: {} | undefined
        QueueTimeMillis?: {} | undefined
        WorkUnitsGeneratedCount?: {} | undefined
      }
    | undefined
  QuerySubmissionTime?: {} | undefined
}
type GetResourceLFTagsResponse = {
  LFTagOnDatabase?: {} | undefined
  LFTagsOnTable?: {} | undefined
  LFTagsOnColumns?: {} | undefined
}
type GetTableObjectsResponse = { Objects?: {} | undefined; NextToken?: {} | undefined }
type Permission =
  | 'ALL'
  | 'SELECT'
  | 'ALTER'
  | 'DROP'
  | 'DELETE'
  | 'INSERT'
  | 'DESCRIBE'
  | 'CREATE_DATABASE'
  | 'CREATE_TABLE'
  | 'DATA_LOCATION_ACCESS'
  | 'CREATE_TAG'
  | 'ASSOCIATE'
type PermissionType = 'COLUMN_PERMISSION' | 'CELL_FILTER_PERMISSION'
type GetTemporaryGluePartitionCredentialsResponse = {
  AccessKeyId?: {} | undefined
  SecretAccessKey?: {} | undefined
  SessionToken?: {} | undefined
  Expiration?: {} | undefined
}
type GetTemporaryGlueTableCredentialsResponse = {
  AccessKeyId?: {} | undefined
  SecretAccessKey?: {} | undefined
  SessionToken?: {} | undefined
  Expiration?: {} | undefined
}
type GetWorkUnitResultsResponse = { ResultStream?: {} | undefined }
type GetWorkUnitsResponse = { NextToken?: {} | undefined; QueryId: {}; WorkUnitRanges: {} }
type GrantPermissionsResponse = { [x: string]: unknown }
type ListDataCellsFilterResponse = { DataCellsFilters?: {} | undefined; NextToken?: {} | undefined }
type ListLFTagsResponse = { LFTags?: {} | undefined; NextToken?: {} | undefined }
type ListPermissionsResponse = {
  PrincipalResourcePermissions?: {} | undefined
  NextToken?: {} | undefined
}
type FilterCondition = {
  Field?: {} | undefined
  ComparisonOperator?: {} | undefined
  StringValueList?: {} | undefined
}
type ListResourcesResponse = { ResourceInfoList?: {} | undefined; NextToken?: {} | undefined }
type ListTableStorageOptimizersResponse = {
  StorageOptimizerList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTransactionsResponse = { Transactions?: {} | undefined; NextToken?: {} | undefined }
type PutDataLakeSettingsResponse = { [x: string]: unknown }
type RegisterResourceResponse = { [x: string]: unknown }
type RemoveLFTagsFromResourceResponse = { Failures?: {} | undefined }
type RevokePermissionsResponse = { [x: string]: unknown }
type LFTag = { TagKey: {}; TagValues: {} }
type SearchDatabasesByLFTagsResponse = { NextToken?: {} | undefined; DatabaseList?: {} | undefined }
type SearchTablesByLFTagsResponse = { NextToken?: {} | undefined; TableList?: {} | undefined }
type StartQueryPlanningResponse = { QueryId: {} }
type StartTransactionResponse = { TransactionId?: {} | undefined }
type UpdateDataCellsFilterResponse = { [x: string]: unknown }
type UpdateLFTagResponse = { [x: string]: unknown }
type UpdateResourceResponse = { [x: string]: unknown }
type WriteOperation = {
  AddObject?: { Uri: {}; ETag: {}; Size: {}; PartitionValues?: {} | undefined } | undefined
  DeleteObject?: { Uri: {}; ETag?: {} | undefined; PartitionValues?: {} | undefined } | undefined
}
type UpdateTableObjectsResponse = { [x: string]: unknown }
type StorageOptimizerConfigValue = string
type StorageOptimizerConfig = { [x: string]: StorageOptimizerConfigValue }
type UpdateTableStorageOptimizerResponse = { Result?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/AddLFTagsToResource': {
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
            CatalogId?: string | undefined
            Resource: {
              Catalog?: {} | undefined
              Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
              Table?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name?: {} | undefined
                    TableWildcard?: {} | undefined
                  }
                | undefined
              TableWithColumns?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name: {}
                    ColumnNames?: {} | undefined
                    ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
                  }
                | undefined
              DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
              DataCellsFilter?:
                | {
                    TableCatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Name?: {} | undefined
                  }
                | undefined
              LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
              LFTagPolicy?:
                | { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} }
                | undefined
            }
            LFTags: LFTagPair[]
          }
        }
        output: AddLFTagsToResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/AssumeDecoratedRoleWithSAML': {
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
            SAMLAssertion: string
            RoleArn: string
            PrincipalArn: string
            DurationSeconds?: number | undefined
          }
        }
        output: AssumeDecoratedRoleWithSAMLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BatchGrantPermissions': {
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
        } & { json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] } }
        output: BatchGrantPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BatchRevokePermissions': {
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
        } & { json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] } }
        output: BatchRevokePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CancelTransaction': {
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
        } & { json: { TransactionId: string } }
        output: CancelTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CommitTransaction': {
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
        } & { json: { TransactionId: string } }
        output: CommitTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateDataCellsFilter': {
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
            TableData: {
              TableCatalogId?: {} | undefined
              DatabaseName?: {} | undefined
              TableName?: {} | undefined
              Name?: {} | undefined
              RowFilter?:
                | { FilterExpression?: {} | undefined; AllRowsWildcard?: {} | undefined }
                | undefined
              ColumnNames?: {} | undefined
              ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
              VersionId?: {} | undefined
            }
          }
        }
        output: CreateDataCellsFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateLFTag': {
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
        } & { json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] } }
        output: CreateLFTagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteDataCellsFilter': {
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
            TableCatalogId?: string | undefined
            DatabaseName?: string | undefined
            TableName?: string | undefined
            Name?: string | undefined
          }
        }
        output: DeleteDataCellsFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteLFTag': {
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
        } & { json: { CatalogId?: string | undefined; TagKey: string } }
        output: DeleteLFTagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteObjectsOnCancel': {
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
            CatalogId?: string | undefined
            DatabaseName: string
            TableName: string
            TransactionId: string
            Objects: VirtualObject[]
          }
        }
        output: DeleteObjectsOnCancelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeregisterResource': {
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
        } & { json: { ResourceArn: string } }
        output: DeregisterResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeResource': {
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
        } & { json: { ResourceArn: string } }
        output: DescribeResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeTransaction': {
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
        } & { json: { TransactionId: string } }
        output: DescribeTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ExtendTransaction': {
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
        } & { json: { TransactionId?: string | undefined } }
        output: ExtendTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetDataCellsFilter': {
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
          json: { TableCatalogId: string; DatabaseName: string; TableName: string; Name: string }
        }
        output: GetDataCellsFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetDataLakeSettings': {
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
        } & { json: { CatalogId?: string | undefined } }
        output: GetDataLakeSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetEffectivePermissionsForPath': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            CatalogId?: string | undefined
            ResourceArn: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: GetEffectivePermissionsForPathResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetLFTag': {
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
        } & { json: { CatalogId?: string | undefined; TagKey: string } }
        output: GetLFTagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetQueryState': {
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
        } & { json: { QueryId: string } }
        output: GetQueryStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetQueryStatistics': {
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
        } & { json: { QueryId: string } }
        output: GetQueryStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetResourceLFTags': {
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
            CatalogId?: string | undefined
            Resource: {
              Catalog?: {} | undefined
              Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
              Table?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name?: {} | undefined
                    TableWildcard?: {} | undefined
                  }
                | undefined
              TableWithColumns?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name: {}
                    ColumnNames?: {} | undefined
                    ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
                  }
                | undefined
              DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
              DataCellsFilter?:
                | {
                    TableCatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Name?: {} | undefined
                  }
                | undefined
              LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
              LFTagPolicy?:
                | { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} }
                | undefined
            }
            ShowAssignedLFTags?: boolean | undefined
          }
        }
        output: GetResourceLFTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetTableObjects': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            CatalogId?: string | undefined
            DatabaseName: string
            TableName: string
            TransactionId?: string | undefined
            QueryAsOfTime?: string | undefined
            PartitionPredicate?: string | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: GetTableObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetTemporaryGluePartitionCredentials': {
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
            TableArn: string
            Partition: { Values?: {} | undefined }
            Permissions?: Permission[] | undefined
            DurationSeconds?: number | undefined
            AuditContext?: { AdditionalAuditContext?: {} | undefined } | undefined
            SupportedPermissionTypes: PermissionType[]
          }
        }
        output: GetTemporaryGluePartitionCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetTemporaryGlueTableCredentials': {
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
            TableArn: string
            Permissions?: Permission[] | undefined
            DurationSeconds?: number | undefined
            AuditContext?: { AdditionalAuditContext?: {} | undefined } | undefined
            SupportedPermissionTypes: PermissionType[]
          }
        }
        output: GetTemporaryGlueTableCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetWorkUnitResults': {
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
        } & { json: { QueryId: string; WorkUnitId: number; WorkUnitToken: string } }
        output: GetWorkUnitResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetWorkUnits': {
      $post: {
        input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
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
          json: { NextToken?: string | undefined; PageSize?: number | undefined; QueryId: string }
        }
        output: GetWorkUnitsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GrantPermissions': {
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
            CatalogId?: string | undefined
            Principal: { DataLakePrincipalIdentifier?: {} | undefined }
            Resource: {
              Catalog?: {} | undefined
              Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
              Table?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name?: {} | undefined
                    TableWildcard?: {} | undefined
                  }
                | undefined
              TableWithColumns?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name: {}
                    ColumnNames?: {} | undefined
                    ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
                  }
                | undefined
              DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
              DataCellsFilter?:
                | {
                    TableCatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Name?: {} | undefined
                  }
                | undefined
              LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
              LFTagPolicy?:
                | { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} }
                | undefined
            }
            Permissions: Permission[]
            PermissionsWithGrantOption?: Permission[] | undefined
          }
        }
        output: GrantPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListDataCellsFilter': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            Table?:
              | {
                  CatalogId?: {} | undefined
                  DatabaseName?: {} | undefined
                  Name?: {} | undefined
                  TableWildcard?: {} | undefined
                }
              | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListDataCellsFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListLFTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            CatalogId?: string | undefined
            ResourceShareType?: 'FOREIGN' | 'ALL' | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListLFTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListPermissions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            CatalogId?: string | undefined
            Principal?: { DataLakePrincipalIdentifier?: {} | undefined } | undefined
            ResourceType?:
              | 'CATALOG'
              | 'DATABASE'
              | 'TABLE'
              | 'DATA_LOCATION'
              | 'LF_TAG'
              | 'LF_TAG_POLICY'
              | 'LF_TAG_POLICY_DATABASE'
              | 'LF_TAG_POLICY_TABLE'
              | undefined
            Resource?:
              | {
                  Catalog?: {} | undefined
                  Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
                  Table?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        Name?: {} | undefined
                        TableWildcard?: {} | undefined
                      }
                    | undefined
                  TableWithColumns?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        Name: {}
                        ColumnNames?: {} | undefined
                        ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
                      }
                    | undefined
                  DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
                  DataCellsFilter?:
                    | {
                        TableCatalogId?: {} | undefined
                        DatabaseName?: {} | undefined
                        TableName?: {} | undefined
                        Name?: {} | undefined
                      }
                    | undefined
                  LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
                  LFTagPolicy?:
                    | { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} }
                    | undefined
                }
              | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
            IncludeRelated?: string | undefined
          }
        }
        output: ListPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListResources': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            FilterConditionList?: FilterCondition[] | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListTableStorageOptimizers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            CatalogId?: string | undefined
            DatabaseName: string
            TableName: string
            StorageOptimizerType?: 'COMPACTION' | 'GARBAGE_COLLECTION' | 'ALL' | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListTableStorageOptimizersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListTransactions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            CatalogId?: string | undefined
            StatusFilter?: 'ALL' | 'COMPLETED' | 'ACTIVE' | 'COMMITTED' | 'ABORTED' | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutDataLakeSettings': {
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
            CatalogId?: string | undefined
            DataLakeSettings: {
              DataLakeAdmins?: {} | undefined
              CreateDatabaseDefaultPermissions?: {} | undefined
              CreateTableDefaultPermissions?: {} | undefined
              Parameters?: {} | undefined
              TrustedResourceOwners?: {} | undefined
              AllowExternalDataFiltering?: {} | undefined
              ExternalDataFilteringAllowList?: {} | undefined
              AuthorizedSessionTagValueList?: {} | undefined
            }
          }
        }
        output: PutDataLakeSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/RegisterResource': {
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
            ResourceArn: string
            UseServiceLinkedRole?: boolean | undefined
            RoleArn?: string | undefined
            WithFederation?: boolean | undefined
          }
        }
        output: RegisterResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/RemoveLFTagsFromResource': {
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
            CatalogId?: string | undefined
            Resource: {
              Catalog?: {} | undefined
              Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
              Table?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name?: {} | undefined
                    TableWildcard?: {} | undefined
                  }
                | undefined
              TableWithColumns?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name: {}
                    ColumnNames?: {} | undefined
                    ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
                  }
                | undefined
              DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
              DataCellsFilter?:
                | {
                    TableCatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Name?: {} | undefined
                  }
                | undefined
              LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
              LFTagPolicy?:
                | { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} }
                | undefined
            }
            LFTags: LFTagPair[]
          }
        }
        output: RemoveLFTagsFromResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/RevokePermissions': {
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
            CatalogId?: string | undefined
            Principal: { DataLakePrincipalIdentifier?: {} | undefined }
            Resource: {
              Catalog?: {} | undefined
              Database?: { CatalogId?: {} | undefined; Name: {} } | undefined
              Table?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name?: {} | undefined
                    TableWildcard?: {} | undefined
                  }
                | undefined
              TableWithColumns?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName: {}
                    Name: {}
                    ColumnNames?: {} | undefined
                    ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
                  }
                | undefined
              DataLocation?: { CatalogId?: {} | undefined; ResourceArn: {} } | undefined
              DataCellsFilter?:
                | {
                    TableCatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    TableName?: {} | undefined
                    Name?: {} | undefined
                  }
                | undefined
              LFTag?: { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} } | undefined
              LFTagPolicy?:
                | { CatalogId?: {} | undefined; ResourceType: {}; Expression: {} }
                | undefined
            }
            Permissions: Permission[]
            PermissionsWithGrantOption?: Permission[] | undefined
          }
        }
        output: RevokePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/SearchDatabasesByLFTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            NextToken?: string | undefined
            MaxResults?: number | undefined
            CatalogId?: string | undefined
            Expression: LFTag[]
          }
        }
        output: SearchDatabasesByLFTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/SearchTablesByLFTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            NextToken?: string | undefined
            MaxResults?: number | undefined
            CatalogId?: string | undefined
            Expression: LFTag[]
          }
        }
        output: SearchTablesByLFTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StartQueryPlanning': {
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
            QueryPlanningContext: {
              CatalogId?: {} | undefined
              DatabaseName?: {} | undefined
              QueryAsOfTime?: {} | undefined
              QueryParameters?: {} | undefined
              TransactionId?: {} | undefined
            }
            QueryString: string
          }
        }
        output: StartQueryPlanningResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StartTransaction': {
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
        } & { json: { TransactionType?: 'READ_AND_WRITE' | 'READ_ONLY' | undefined } }
        output: StartTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateDataCellsFilter': {
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
            TableData: {
              TableCatalogId?: {} | undefined
              DatabaseName?: {} | undefined
              TableName?: {} | undefined
              Name?: {} | undefined
              RowFilter?:
                | { FilterExpression?: {} | undefined; AllRowsWildcard?: {} | undefined }
                | undefined
              ColumnNames?: {} | undefined
              ColumnWildcard?: { ExcludedColumnNames?: {} | undefined } | undefined
              VersionId?: {} | undefined
            }
          }
        }
        output: UpdateDataCellsFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateLFTag': {
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
            CatalogId?: string | undefined
            TagKey: string
            TagValuesToDelete?: LFTagValue[] | undefined
            TagValuesToAdd?: LFTagValue[] | undefined
          }
        }
        output: UpdateLFTagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateResource': {
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
        } & { json: { RoleArn: string; ResourceArn: string; WithFederation?: boolean | undefined } }
        output: UpdateResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateTableObjects': {
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
            CatalogId?: string | undefined
            DatabaseName: string
            TableName: string
            TransactionId?: string | undefined
            WriteOperations: WriteOperation[]
          }
        }
        output: UpdateTableObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateTableStorageOptimizer': {
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
            CatalogId?: string | undefined
            DatabaseName: string
            TableName: string
            StorageOptimizerConfig: { [x: string]: StorageOptimizerConfig }
          }
        }
        output: UpdateTableStorageOptimizerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
