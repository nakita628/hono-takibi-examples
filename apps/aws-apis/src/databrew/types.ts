type RecipeVersion = string
type BatchDeleteRecipeVersionResponse = { Name: {}; Errors?: {} | undefined }
type ConflictException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type S3Location = { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
type TagValue = string
type CreateDatasetResponse = { Name: {} }
type AccessDeniedException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type ListDatasetsResponse = { Datasets: {}; NextToken?: {} | undefined }
type ValidationConfiguration = { RulesetArn: {}; ValidationMode?: {} | undefined }
type CreateProfileJobResponse = { Name: {} }
type CreateProjectResponse = { Name: {} }
type InternalServerException = { [x: string]: unknown }
type ListProjectsResponse = { Projects: {}; NextToken?: {} | undefined }
type RecipeStep = {
  Action: { Operation: {}; Parameters?: {} | undefined }
  ConditionExpressions?: {} | undefined
}
type CreateRecipeResponse = { Name: {} }
type ListRecipesResponse = { Recipes: {}; NextToken?: {} | undefined }
type Output = {
  CompressionFormat?: {} | undefined
  Format?: {} | undefined
  PartitionColumns?: {} | undefined
  Location: { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
  Overwrite?: {} | undefined
  FormatOptions?: { Csv?: { Delimiter?: {} | undefined } | undefined } | undefined
  MaxOutputFiles?: {} | undefined
}
type DataCatalogOutput = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  S3Options?:
    | { Location: { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined } }
    | undefined
  DatabaseOptions?:
    | {
        TempDirectory?:
          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
          | undefined
        TableName: {}
      }
    | undefined
  Overwrite?: {} | undefined
}
type DatabaseOutput = {
  GlueConnectionName: {}
  DatabaseOptions: {
    TempDirectory?: { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined } | undefined
    TableName: {}
  }
  DatabaseOutputMode?: {} | undefined
}
type CreateRecipeJobResponse = { Name: {} }
type Rule = {
  Name: {}
  Disabled?: {} | undefined
  CheckExpression: {}
  SubstitutionMap?: {} | undefined
  Threshold?: { Value: {}; Type?: {} | undefined; Unit?: {} | undefined } | undefined
  ColumnSelectors?: {} | undefined
}
type CreateRulesetResponse = { Name: {} }
type ListRulesetsResponse = { Rulesets: {}; NextToken?: {} | undefined }
type JobName = string
type CreateScheduleResponse = { Name: {} }
type ListSchedulesResponse = { Schedules: {}; NextToken?: {} | undefined }
type DeleteDatasetResponse = { Name: {} }
type FormatOptions = {
  Json?: { MultiLine?: {} | undefined } | undefined
  Excel?:
    | { SheetNames?: {} | undefined; SheetIndexes?: {} | undefined; HeaderRow?: {} | undefined }
    | undefined
  Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
}
type Input = {
  S3InputDefinition?: { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined } | undefined
  DataCatalogInputDefinition?:
    | {
        CatalogId?: {} | undefined
        DatabaseName: {}
        TableName: {}
        TempDirectory?:
          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
          | undefined
      }
    | undefined
  DatabaseInputDefinition?:
    | {
        GlueConnectionName: {}
        DatabaseTableName?: {} | undefined
        TempDirectory?: S3Location | undefined
        QueryString?: {} | undefined
      }
    | undefined
  Metadata?: { SourceArn?: {} | undefined } | undefined
}
type DescribeDatasetResponse = {
  CreatedBy?: {} | undefined
  CreateDate?: {} | undefined
  Name: {}
  Format?: {} | undefined
  FormatOptions?: FormatOptions | undefined
  Input: Input
  LastModifiedDate?: {} | undefined
  LastModifiedBy?: {} | undefined
  Source?: {} | undefined
  PathOptions?:
    | {
        LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
        FilesLimit?:
          | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
          | undefined
        Parameters?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
  ResourceArn?: {} | undefined
}
type UpdateDatasetResponse = { Name: {} }
type DeleteJobResponse = { Name: {} }
type RecipeReference = { Name: {}; RecipeVersion?: {} | undefined }
type DescribeJobResponse = {
  CreateDate?: {} | undefined
  CreatedBy?: {} | undefined
  DatasetName?: {} | undefined
  EncryptionKeyArn?: {} | undefined
  EncryptionMode?: {} | undefined
  Name: {}
  Type?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  LogSubscription?: {} | undefined
  MaxCapacity?: {} | undefined
  MaxRetries?: {} | undefined
  Outputs?: {} | undefined
  DataCatalogOutputs?: {} | undefined
  DatabaseOutputs?: {} | undefined
  ProjectName?: {} | undefined
  ProfileConfiguration?:
    | {
        DatasetStatisticsConfiguration?:
          | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
          | undefined
        ProfileColumns?: {} | undefined
        ColumnStatisticsConfigurations?: {} | undefined
        EntityDetectorConfiguration?:
          | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
          | undefined
      }
    | undefined
  ValidationConfigurations?: {} | undefined
  RecipeReference?: RecipeReference | undefined
  ResourceArn?: {} | undefined
  RoleArn?: {} | undefined
  Tags?: {} | undefined
  Timeout?: {} | undefined
  JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
}
type DeleteProjectResponse = { Name: {} }
type Sample = { Size?: {} | undefined; Type: {} }
type DescribeProjectResponse = {
  CreateDate?: {} | undefined
  CreatedBy?: {} | undefined
  DatasetName?: {} | undefined
  LastModifiedDate?: {} | undefined
  LastModifiedBy?: {} | undefined
  Name: {}
  RecipeName?: {} | undefined
  ResourceArn?: {} | undefined
  Sample?: Sample | undefined
  RoleArn?: {} | undefined
  Tags?: {} | undefined
  SessionStatus?: {} | undefined
  OpenedBy?: {} | undefined
  OpenDate?: {} | undefined
}
type UpdateProjectResponse = { LastModifiedDate?: {} | undefined; Name: {} }
type DeleteRecipeVersionResponse = { Name: {}; RecipeVersion: {} }
type DeleteRulesetResponse = { Name: {} }
type DescribeRulesetResponse = {
  Name: {}
  Description?: {} | undefined
  TargetArn?: {} | undefined
  Rules?: {} | undefined
  CreateDate?: {} | undefined
  CreatedBy?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  ResourceArn?: {} | undefined
  Tags?: {} | undefined
}
type UpdateRulesetResponse = { Name: {} }
type DeleteScheduleResponse = { Name: {} }
type DescribeScheduleResponse = {
  CreateDate?: {} | undefined
  CreatedBy?: {} | undefined
  JobNames?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  ResourceArn?: {} | undefined
  CronExpression?: {} | undefined
  Tags?: {} | undefined
  Name: {}
}
type UpdateScheduleResponse = { Name: {} }
type DescribeJobRunResponse = {
  Attempt?: {} | undefined
  CompletedOn?: {} | undefined
  DatasetName?: {} | undefined
  ErrorMessage?: {} | undefined
  ExecutionTime?: {} | undefined
  JobName: {}
  ProfileConfiguration?:
    | {
        DatasetStatisticsConfiguration?:
          | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
          | undefined
        ProfileColumns?: {} | undefined
        ColumnStatisticsConfigurations?: {} | undefined
        EntityDetectorConfiguration?:
          | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
          | undefined
      }
    | undefined
  ValidationConfigurations?: {} | undefined
  RunId?: {} | undefined
  State?: {} | undefined
  LogSubscription?: {} | undefined
  LogGroupName?: {} | undefined
  Outputs?: {} | undefined
  DataCatalogOutputs?: {} | undefined
  DatabaseOutputs?: {} | undefined
  RecipeReference?: RecipeReference | undefined
  StartedBy?: {} | undefined
  StartedOn?: {} | undefined
  JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
}
type DescribeRecipeResponse = {
  CreatedBy?: {} | undefined
  CreateDate?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  ProjectName?: {} | undefined
  PublishedBy?: {} | undefined
  PublishedDate?: {} | undefined
  Description?: {} | undefined
  Name: {}
  Steps?: {} | undefined
  Tags?: {} | undefined
  ResourceArn?: {} | undefined
  RecipeVersion?: {} | undefined
}
type UpdateRecipeResponse = { Name: {} }
type ListJobRunsResponse = { JobRuns: {}; NextToken?: {} | undefined }
type ListJobsResponse = { Jobs: {}; NextToken?: {} | undefined }
type ListRecipeVersionsResponse = { NextToken?: {} | undefined; Recipes: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type PublishRecipeResponse = { Name: {} }
type SendProjectSessionActionResponse = {
  Result?: {} | undefined
  Name: {}
  ActionId?: {} | undefined
}
type StartJobRunResponse = { RunId: {} }
type StartProjectSessionResponse = { Name: {}; ClientSessionId?: {} | undefined }
type StopJobRunResponse = { RunId: {} }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateProfileJobResponse = { Name: {} }
type UpdateRecipeJobResponse = { Name: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/recipes/:name/batchDeleteRecipeVersion': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RecipeVersions: RecipeVersion[] } }
            output: BatchDeleteRecipeVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RecipeVersions: RecipeVersion[] } }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RecipeVersions: RecipeVersion[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RecipeVersions: RecipeVersion[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/datasets': {
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
                Name: string
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateDatasetResponse
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
                Name: string
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
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
                Name: string
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
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
                Name: string
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
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
                Name: string
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: {
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
            output: ListDatasetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/profileJobs': {
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
                DatasetName: string
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: CreateProfileJobResponse
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
                DatasetName: string
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: AccessDeniedException
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
                DatasetName: string
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: ConflictException
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
                DatasetName: string
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
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
                DatasetName: string
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: ServiceQuotaExceededException
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
                DatasetName: string
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/projects': {
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
                DatasetName: string
                Name: string
                RecipeName: string
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateProjectResponse
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
                DatasetName: string
                Name: string
                RecipeName: string
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
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
                DatasetName: string
                Name: string
                RecipeName: string
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
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
                DatasetName: string
                Name: string
                RecipeName: string
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
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
                DatasetName: string
                Name: string
                RecipeName: string
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ListProjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/recipes': {
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
                Description?: string | undefined
                Name: string
                Steps: RecipeStep[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateRecipeResponse
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
                Description?: string | undefined
                Name: string
                Steps: RecipeStep[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
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
                Description?: string | undefined
                Name: string
                Steps: RecipeStep[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
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
                Description?: string | undefined
                Name: string
                Steps: RecipeStep[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                recipeVersion?: string | undefined
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
            output: ListRecipesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                recipeVersion?: string | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/recipeJobs': {
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
                DatasetName?: string | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                ProjectName?: string | undefined
                RecipeReference?:
                  | { Name?: {} | undefined; RecipeVersion?: {} | undefined }
                  | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
              }
            }
            output: CreateRecipeJobResponse
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
                DatasetName?: string | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                ProjectName?: string | undefined
                RecipeReference?:
                  | { Name?: {} | undefined; RecipeVersion?: {} | undefined }
                  | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
              }
            }
            output: AccessDeniedException
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
                DatasetName?: string | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                ProjectName?: string | undefined
                RecipeReference?:
                  | { Name?: {} | undefined; RecipeVersion?: {} | undefined }
                  | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
              }
            }
            output: ConflictException
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
                DatasetName?: string | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                ProjectName?: string | undefined
                RecipeReference?:
                  | { Name?: {} | undefined; RecipeVersion?: {} | undefined }
                  | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
              }
            }
            output: ResourceNotFoundException
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
                DatasetName?: string | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                ProjectName?: string | undefined
                RecipeReference?:
                  | { Name?: {} | undefined; RecipeVersion?: {} | undefined }
                  | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
              }
            }
            output: ServiceQuotaExceededException
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
                DatasetName?: string | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                Name: string
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                ProjectName?: string | undefined
                RecipeReference?:
                  | { Name?: {} | undefined; RecipeVersion?: {} | undefined }
                  | undefined
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
                Timeout?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/rulesets': {
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
                Name: string
                Description?: string | undefined
                TargetArn: string
                Rules: Rule[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateRulesetResponse
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
                Name: string
                Description?: string | undefined
                TargetArn: string
                Rules: Rule[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
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
                Name: string
                Description?: string | undefined
                TargetArn: string
                Rules: Rule[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
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
                Name: string
                Description?: string | undefined
                TargetArn: string
                Rules: Rule[]
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: {
                targetArn?: string | undefined
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
            output: ListRulesetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                targetArn?: string | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                targetArn?: string | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/schedules': {
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
                JobNames?: JobName[] | undefined
                CronExpression: string
                Tags?: { [x: string]: TagValue } | undefined
                Name: string
              }
            }
            output: CreateScheduleResponse
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
                JobNames?: JobName[] | undefined
                CronExpression: string
                Tags?: { [x: string]: TagValue } | undefined
                Name: string
              }
            }
            output: ConflictException
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
                JobNames?: JobName[] | undefined
                CronExpression: string
                Tags?: { [x: string]: TagValue } | undefined
                Name: string
              }
            }
            output: ServiceQuotaExceededException
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
                JobNames?: JobName[] | undefined
                CronExpression: string
                Tags?: { [x: string]: TagValue } | undefined
                Name: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: {
                jobName?: string | undefined
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
            output: ListSchedulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jobName?: string | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/datasets/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            output: DeleteDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { name: string } } & {
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
            output: DescribeDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { name: string } } & {
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
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                Format?: 'CSV' | 'JSON' | 'PARQUET' | 'EXCEL' | 'ORC' | undefined
                FormatOptions?:
                  | {
                      Json?: { MultiLine?: {} | undefined } | undefined
                      Excel?:
                        | {
                            SheetNames?: {} | undefined
                            SheetIndexes?: {} | undefined
                            HeaderRow?: {} | undefined
                          }
                        | undefined
                      Csv?: { Delimiter?: {} | undefined; HeaderRow?: {} | undefined } | undefined
                    }
                  | undefined
                Input: {
                  S3InputDefinition?:
                    | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                    | undefined
                  DataCatalogInputDefinition?:
                    | {
                        CatalogId?: {} | undefined
                        DatabaseName: {}
                        TableName: {}
                        TempDirectory?:
                          | { Bucket: {}; Key?: {} | undefined; BucketOwner?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  DatabaseInputDefinition?:
                    | {
                        GlueConnectionName: {}
                        DatabaseTableName?: {} | undefined
                        TempDirectory?: S3Location | undefined
                        QueryString?: {} | undefined
                      }
                    | undefined
                  Metadata?: { SourceArn?: {} | undefined } | undefined
                }
                PathOptions?:
                  | {
                      LastModifiedDateCondition?: { Expression: {}; ValuesMap: {} } | undefined
                      FilesLimit?:
                        | { MaxFiles: {}; OrderedBy?: {} | undefined; Order?: {} | undefined }
                        | undefined
                      Parameters?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/jobs/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            output: DeleteJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { name: string } } & {
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
            output: DescribeJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/projects/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            output: DeleteProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { name: string } } & {
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
            output: DescribeProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { name: string } } & {
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
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
              }
            }
            output: UpdateProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                Sample?: { Size?: {} | undefined; Type?: {} | undefined } | undefined
                RoleArn: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/recipes/:name/recipeVersion/:recipeVersion': {
      $delete:
        | {
            input: { param: { name: string; recipeVersion: string } } & {
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
            output: DeleteRecipeVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; recipeVersion: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; recipeVersion: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; recipeVersion: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/rulesets/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            output: DeleteRulesetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { name: string } } & {
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
            output: DescribeRulesetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined; Rules: Rule[] } }
            output: UpdateRulesetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined; Rules: Rule[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined; Rules: Rule[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/schedules/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            output: DeleteScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { name: string } } & {
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
            output: DescribeScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { JobNames?: JobName[] | undefined; CronExpression: string } }
            output: UpdateScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { JobNames?: JobName[] | undefined; CronExpression: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { JobNames?: JobName[] | undefined; CronExpression: string } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { JobNames?: JobName[] | undefined; CronExpression: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/jobs/:name/jobRun/:runId': {
      $get:
        | {
            input: { param: { name: string; runId: string } } & {
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
            output: DescribeJobRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; runId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; runId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/recipes/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { recipeVersion?: string | undefined }
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
            output: DescribeRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { recipeVersion?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              query: { recipeVersion?: string | undefined }
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined; Steps?: RecipeStep[] | undefined } }
            output: UpdateRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined; Steps?: RecipeStep[] | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined; Steps?: RecipeStep[] | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/jobs/:name/jobRuns': {
      $get:
        | {
            input: { param: { name: string } } & {
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
            output: ListJobRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/jobs': {
      $get:
        | {
            input: {
              query: {
                datasetName?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                projectName?: string | undefined
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
        | {
            input: {
              query: {
                datasetName?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                projectName?: string | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/recipeVersions#name': {
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                name: string
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
            output: ListRecipeVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                name: string
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/tags/:ResourceArn': {
      $get:
        | {
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
        | {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
      $post:
        | {
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/recipes/:name/publishRecipe': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined } }
            output: PublishRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Description?: string | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/projects/:name/sendProjectSessionAction': {
      $put:
        | {
            input: { param: { name: string } } & {
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
                Preview?: boolean | undefined
                RecipeStep?:
                  | {
                      Action?: { Operation: {}; Parameters?: {} | undefined } | undefined
                      ConditionExpressions?: {} | undefined
                    }
                  | undefined
                StepIndex?: number | undefined
                ClientSessionId?: string | undefined
                ViewFrame?:
                  | {
                      StartColumnIndex?: {} | undefined
                      ColumnRange?: {} | undefined
                      HiddenColumns?: {} | undefined
                      StartRowIndex?: {} | undefined
                      RowRange?: {} | undefined
                      Analytics?: {} | undefined
                    }
                  | undefined
              }
            }
            output: SendProjectSessionActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                Preview?: boolean | undefined
                RecipeStep?:
                  | {
                      Action?: { Operation: {}; Parameters?: {} | undefined } | undefined
                      ConditionExpressions?: {} | undefined
                    }
                  | undefined
                StepIndex?: number | undefined
                ClientSessionId?: string | undefined
                ViewFrame?:
                  | {
                      StartColumnIndex?: {} | undefined
                      ColumnRange?: {} | undefined
                      HiddenColumns?: {} | undefined
                      StartRowIndex?: {} | undefined
                      RowRange?: {} | undefined
                      Analytics?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                Preview?: boolean | undefined
                RecipeStep?:
                  | {
                      Action?: { Operation: {}; Parameters?: {} | undefined } | undefined
                      ConditionExpressions?: {} | undefined
                    }
                  | undefined
                StepIndex?: number | undefined
                ClientSessionId?: string | undefined
                ViewFrame?:
                  | {
                      StartColumnIndex?: {} | undefined
                      ColumnRange?: {} | undefined
                      HiddenColumns?: {} | undefined
                      StartRowIndex?: {} | undefined
                      RowRange?: {} | undefined
                      Analytics?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                Preview?: boolean | undefined
                RecipeStep?:
                  | {
                      Action?: { Operation: {}; Parameters?: {} | undefined } | undefined
                      ConditionExpressions?: {} | undefined
                    }
                  | undefined
                StepIndex?: number | undefined
                ClientSessionId?: string | undefined
                ViewFrame?:
                  | {
                      StartColumnIndex?: {} | undefined
                      ColumnRange?: {} | undefined
                      HiddenColumns?: {} | undefined
                      StartRowIndex?: {} | undefined
                      RowRange?: {} | undefined
                      Analytics?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/jobs/:name/startJobRun': {
      $post:
        | {
            input: { param: { name: string } } & {
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
            output: StartJobRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/projects/:name/startProjectSession': {
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { AssumeControl?: boolean | undefined } }
            output: StartProjectSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { AssumeControl?: boolean | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { AssumeControl?: boolean | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { AssumeControl?: boolean | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { AssumeControl?: boolean | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/jobs/:name/jobRun/:runId/stopJobRun': {
      $post:
        | {
            input: { param: { name: string; runId: string } } & {
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
            output: StopJobRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; runId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; runId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/profileJobs/:name': {
      $put:
        | {
            input: { param: { name: string } } & {
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
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: UpdateProfileJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                Configuration?:
                  | {
                      DatasetStatisticsConfiguration?:
                        | { IncludedStatistics?: {} | undefined; Overrides?: {} | undefined }
                        | undefined
                      ProfileColumns?: {} | undefined
                      ColumnStatisticsConfigurations?: {} | undefined
                      EntityDetectorConfiguration?:
                        | { EntityTypes: {}; AllowedStatistics?: {} | undefined }
                        | undefined
                    }
                  | undefined
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                OutputLocation: {
                  Bucket?: {} | undefined
                  Key?: {} | undefined
                  BucketOwner?: {} | undefined
                }
                ValidationConfigurations?: ValidationConfiguration[] | undefined
                RoleArn: string
                Timeout?: number | undefined
                JobSample?: { Mode?: {} | undefined; Size?: {} | undefined } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/recipeJobs/:name': {
      $put:
        | {
            input: { param: { name: string } } & {
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
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                RoleArn: string
                Timeout?: number | undefined
              }
            }
            output: UpdateRecipeJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                RoleArn: string
                Timeout?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                RoleArn: string
                Timeout?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                EncryptionKeyArn?: string | undefined
                EncryptionMode?: 'SSE-KMS' | 'SSE-S3' | undefined
                LogSubscription?: 'ENABLE' | 'DISABLE' | undefined
                MaxCapacity?: number | undefined
                MaxRetries?: number | undefined
                Outputs?: Output[] | undefined
                DataCatalogOutputs?: DataCatalogOutput[] | undefined
                DatabaseOutputs?: DatabaseOutput[] | undefined
                RoleArn: string
                Timeout?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
