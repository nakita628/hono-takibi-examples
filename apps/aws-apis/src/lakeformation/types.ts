type LFTagPair = { CatalogId?: {} | undefined; TagKey: {}; TagValues: {} }
type AddLFTagsToResourceResponse = { Failures?: {} | undefined }
type EntityNotFoundException = { [x: string]: unknown }
type InvalidInputException = { [x: string]: unknown }
type InternalServiceException = { [x: string]: unknown }
type OperationTimeoutException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ConcurrentModificationException = { [x: string]: unknown }
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
type TransactionCommittedException = { [x: string]: unknown }
type TransactionCommitInProgressException = { [x: string]: unknown }
type CommitTransactionResponse = { TransactionStatus?: {} | undefined }
type TransactionCanceledException = { [x: string]: unknown }
type CreateDataCellsFilterResponse = { [x: string]: unknown }
type AlreadyExistsException = { [x: string]: unknown }
type ResourceNumberLimitExceededException = { [x: string]: unknown }
type LFTagValue = string
type CreateLFTagResponse = { [x: string]: unknown }
type DeleteDataCellsFilterResponse = { [x: string]: unknown }
type DeleteLFTagResponse = { [x: string]: unknown }
type VirtualObject = { Uri: {}; ETag?: {} | undefined }
type DeleteObjectsOnCancelResponse = { [x: string]: unknown }
type ResourceNotReadyException = { [x: string]: unknown }
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
type StatisticsNotReadyYetException = { [x: string]: unknown }
type ExpiredException = { [x: string]: unknown }
type ThrottledException = { [x: string]: unknown }
type GetResourceLFTagsResponse = {
  LFTagOnDatabase?: {} | undefined
  LFTagsOnTable?: {} | undefined
  LFTagsOnColumns?: {} | undefined
}
type GlueEncryptionException = { [x: string]: unknown }
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
type PermissionTypeMismatchException = { [x: string]: unknown }
type GetTemporaryGlueTableCredentialsResponse = {
  AccessKeyId?: {} | undefined
  SecretAccessKey?: {} | undefined
  SessionToken?: {} | undefined
  Expiration?: {} | undefined
}
type GetWorkUnitResultsResponse = { ResultStream?: {} | undefined }
type GetWorkUnitsResponse = { NextToken?: {} | undefined; QueryId: {}; WorkUnitRanges: {} }
type WorkUnitsNotReadyYetException = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/AssumeDecoratedRoleWithSAML': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/BatchGrantPermissions': {
      $post:
        | {
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
              json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] }
            }
            output: BatchGrantPermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/BatchRevokePermissions': {
      $post:
        | {
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
              json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] }
            }
            output: BatchRevokePermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              json: { CatalogId?: string | undefined; Entries: BatchPermissionsRequestEntry[] }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/CancelTransaction': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TransactionCommittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TransactionCommitInProgressException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/CommitTransaction': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/CreateDataCellsFilter': {
      $post:
        | {
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
        | {
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
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceNumberLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/CreateLFTag': {
      $post:
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: CreateLFTagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: ResourceNumberLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 484
          }
        | {
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
              json: { CatalogId?: string | undefined; TagKey: string; TagValues: LFTagValue[] }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/DeleteDataCellsFilter': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/DeleteLFTag': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/DeleteObjectsOnCancel': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TransactionCommittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/DeregisterResource': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/DescribeResource': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/DescribeTransaction': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/ExtendTransaction': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TransactionCommittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: TransactionCommitInProgressException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/GetDataCellsFilter': {
      $post:
        | {
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
                TableCatalogId: string
                DatabaseName: string
                TableName: string
                Name: string
              }
            }
            output: GetDataCellsFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                TableCatalogId: string
                DatabaseName: string
                TableName: string
                Name: string
              }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                TableCatalogId: string
                DatabaseName: string
                TableName: string
                Name: string
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                TableCatalogId: string
                DatabaseName: string
                TableName: string
                Name: string
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                TableCatalogId: string
                DatabaseName: string
                TableName: string
                Name: string
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                TableCatalogId: string
                DatabaseName: string
                TableName: string
                Name: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/GetDataLakeSettings': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/GetEffectivePermissionsForPath': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/GetLFTag': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/GetQueryState': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/GetQueryStatistics': {
      $post:
        | {
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
        | {
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
            output: StatisticsNotReadyYetException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ExpiredException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ThrottledException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetResourceLFTags': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: GlueEncryptionException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetTableObjects': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: TransactionCommittedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/GetTemporaryGluePartitionCredentials': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: PermissionTypeMismatchException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetTemporaryGlueTableCredentials': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: PermissionTypeMismatchException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetWorkUnitResults': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ExpiredException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ThrottledException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/GetWorkUnits': {
      $post:
        | {
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
              json: {
                NextToken?: string | undefined
                PageSize?: number | undefined
                QueryId: string
              }
            }
            output: GetWorkUnitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              json: {
                NextToken?: string | undefined
                PageSize?: number | undefined
                QueryId: string
              }
            }
            output: WorkUnitsNotReadyYetException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              json: {
                NextToken?: string | undefined
                PageSize?: number | undefined
                QueryId: string
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
              json: {
                NextToken?: string | undefined
                PageSize?: number | undefined
                QueryId: string
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
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
              json: {
                NextToken?: string | undefined
                PageSize?: number | undefined
                QueryId: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
              json: {
                NextToken?: string | undefined
                PageSize?: number | undefined
                QueryId: string
              }
            }
            output: ExpiredException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/GrantPermissions': {
      $post:
        | {
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
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ListDataCellsFilter': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/ListLFTags': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceShareType?: 'FOREIGN' | 'ALL' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceShareType?: 'FOREIGN' | 'ALL' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceShareType?: 'FOREIGN' | 'ALL' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceShareType?: 'FOREIGN' | 'ALL' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                ResourceShareType?: 'FOREIGN' | 'ALL' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/ListPermissions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ListResources': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                FilterConditionList?: FilterCondition[] | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                FilterConditionList?: FilterCondition[] | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                FilterConditionList?: FilterCondition[] | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ListTableStorageOptimizers': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/ListTransactions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                StatusFilter?: 'ALL' | 'COMPLETED' | 'ACTIVE' | 'COMMITTED' | 'ABORTED' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                StatusFilter?: 'ALL' | 'COMPLETED' | 'ACTIVE' | 'COMMITTED' | 'ABORTED' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                CatalogId?: string | undefined
                StatusFilter?: 'ALL' | 'COMPLETED' | 'ACTIVE' | 'COMMITTED' | 'ABORTED' | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/PutDataLakeSettings': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/RegisterResource': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceNumberLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/RemoveLFTagsFromResource': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: GlueEncryptionException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/RevokePermissions': {
      $post:
        | {
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
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/SearchDatabasesByLFTags': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: GlueEncryptionException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/SearchTablesByLFTags': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: GlueEncryptionException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                CatalogId?: string | undefined
                Expression: LFTag[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/StartQueryPlanning': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottledException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/StartTransaction': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/UpdateDataCellsFilter': {
      $post:
        | {
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
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/UpdateLFTag': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/UpdateResource': {
      $post:
        | {
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
              json: { RoleArn: string; ResourceArn: string; WithFederation?: boolean | undefined }
            }
            output: UpdateResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              json: { RoleArn: string; ResourceArn: string; WithFederation?: boolean | undefined }
            }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              json: { RoleArn: string; ResourceArn: string; WithFederation?: boolean | undefined }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
              json: { RoleArn: string; ResourceArn: string; WithFederation?: boolean | undefined }
            }
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
              json: { RoleArn: string; ResourceArn: string; WithFederation?: boolean | undefined }
            }
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/UpdateTableObjects': {
      $post:
        | {
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
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationTimeoutException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TransactionCommittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: TransactionCommitInProgressException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/UpdateTableStorageOptimizer': {
      $post:
        | {
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
        | {
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
            output: EntityNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
