type String1To255 = string
type AddProfileKeyResponse = { KeyName?: {} | undefined; Values?: {} | undefined }
type BadRequestException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type TagValue = string
type CreateDomainResponse = {
  DomainName: {}
  DefaultExpirationDays: {}
  DefaultEncryptionKey?: {} | undefined
  DeadLetterQueueUrl?: {} | undefined
  Matching?:
    | {
        Enabled?: {} | undefined
        JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
        AutoMerging?:
          | {
              Enabled: {}
              Consolidation?: { MatchingAttributesList: {} } | undefined
              ConflictResolution?:
                | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                | undefined
              MinAllowedConfidenceScoreForMerging?: {} | undefined
            }
          | undefined
        ExportingConfig?:
          | { S3Exporting?: { S3BucketName: {}; S3KeyName?: {} | undefined } | undefined }
          | undefined
      }
    | undefined
  CreatedAt: {}
  LastUpdatedAt: {}
  Tags?: {} | undefined
}
type DeleteDomainResponse = { Message: {} }
type GetDomainResponse = {
  DomainName: {}
  DefaultExpirationDays?: {} | undefined
  DefaultEncryptionKey?: {} | undefined
  DeadLetterQueueUrl?: {} | undefined
  Stats?:
    | {
        ProfileCount?: {} | undefined
        MeteringProfileCount?: {} | undefined
        ObjectCount?: {} | undefined
        TotalSize?: {} | undefined
      }
    | undefined
  Matching?:
    | {
        Enabled?: {} | undefined
        JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
        AutoMerging?:
          | {
              Enabled: {}
              Consolidation?: { MatchingAttributesList: {} } | undefined
              ConflictResolution?:
                | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                | undefined
              MinAllowedConfidenceScoreForMerging?: {} | undefined
            }
          | undefined
        ExportingConfig?:
          | { S3Exporting?: { S3BucketName: {}; S3KeyName?: {} | undefined } | undefined }
          | undefined
      }
    | undefined
  CreatedAt: {}
  LastUpdatedAt: {}
  Tags?: {} | undefined
}
type UpdateDomainResponse = {
  DomainName: {}
  DefaultExpirationDays?: {} | undefined
  DefaultEncryptionKey?: {} | undefined
  DeadLetterQueueUrl?: {} | undefined
  Matching?:
    | {
        Enabled?: {} | undefined
        JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
        AutoMerging?:
          | {
              Enabled: {}
              Consolidation?: { MatchingAttributesList: {} } | undefined
              ConflictResolution?:
                | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                | undefined
              MinAllowedConfidenceScoreForMerging?: {} | undefined
            }
          | undefined
        ExportingConfig?:
          | { S3Exporting?: { S3BucketName: {}; S3KeyName?: {} | undefined } | undefined }
          | undefined
      }
    | undefined
  CreatedAt: {}
  LastUpdatedAt: {}
  Tags?: {} | undefined
}
type FlowDefinition = {
  Description?: {} | undefined
  FlowName: {}
  KmsArn: {}
  SourceFlowConfig: {
    ConnectorProfileName?: {} | undefined
    ConnectorType: {}
    IncrementalPullConfig?: { DatetimeTypeFieldName?: {} | undefined } | undefined
    SourceConnectorProperties: {
      Marketo?: { Object: {} } | undefined
      S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
      Salesforce?:
        | {
            Object: {}
            EnableDynamicFieldUpdate?: {} | undefined
            IncludeDeletedRecords?: {} | undefined
          }
        | undefined
      ServiceNow?: { Object: {} } | undefined
      Zendesk?: { Object: {} } | undefined
    }
  }
  Tasks: {}
  TriggerConfig: {
    TriggerType: {}
    TriggerProperties?:
      | {
          Scheduled?:
            | {
                ScheduleExpression: {}
                DataPullMode?: {} | undefined
                ScheduleStartTime?: {} | undefined
                ScheduleEndTime?: {} | undefined
                Timezone?: {} | undefined
                ScheduleOffset?: {} | undefined
                FirstExecutionFrom?: {} | undefined
              }
            | undefined
        }
      | undefined
  }
}
type CreateIntegrationWorkflowResponse = { WorkflowId: {}; Message: {} }
type CreateProfileResponse = { ProfileId: {} }
type String0To255 = string
type UpdateProfileResponse = { ProfileId: {} }
type DeleteIntegrationResponse = { Message: {} }
type DeleteProfileResponse = { Message?: {} | undefined }
type DeleteProfileKeyResponse = { Message?: {} | undefined }
type DeleteProfileObjectResponse = { Message?: {} | undefined }
type DeleteProfileObjectTypeResponse = { Message: {} }
type GetProfileObjectTypeResponse = {
  ObjectTypeName: {}
  Description: {}
  TemplateId?: {} | undefined
  ExpirationDays?: {} | undefined
  EncryptionKey?: {} | undefined
  AllowProfileCreation?: {} | undefined
  SourceLastUpdatedTimestampFormat?: {} | undefined
  Fields?: {} | undefined
  Keys?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Tags?: {} | undefined
}
type ObjectTypeField = {
  Source?: {} | undefined
  Target?: {} | undefined
  ContentType?: {} | undefined
}
type ObjectTypeKey = { StandardIdentifiers?: {} | undefined; FieldNames?: {} | undefined }
type ObjectTypeKeyList = ObjectTypeKey[]
type PutProfileObjectTypeResponse = {
  ObjectTypeName: {}
  Description: {}
  TemplateId?: {} | undefined
  ExpirationDays?: {} | undefined
  EncryptionKey?: {} | undefined
  AllowProfileCreation?: {} | undefined
  SourceLastUpdatedTimestampFormat?: {} | undefined
  Fields?: {} | undefined
  Keys?: {} | undefined
  CreatedAt?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Tags?: {} | undefined
}
type DeleteWorkflowResponse = { [x: string]: unknown }
type GetWorkflowResponse = {
  WorkflowId?: {} | undefined
  WorkflowType?: {} | undefined
  Status?: {} | undefined
  ErrorDescription?: {} | undefined
  StartDate?: {} | undefined
  LastUpdatedAt?: {} | undefined
  Attributes?:
    | {
        AppflowIntegration?:
          | { SourceConnectorType: {}; ConnectorProfileName: {}; RoleArn?: {} | undefined }
          | undefined
      }
    | undefined
  Metrics?:
    | {
        AppflowIntegration?:
          | { RecordsProcessed: {}; StepsCompleted: {}; TotalSteps: {} }
          | undefined
      }
    | undefined
}
type GetAutoMergingPreviewResponse = {
  DomainName: {}
  NumberOfMatchesInSample?: {} | undefined
  NumberOfProfilesInSample?: {} | undefined
  NumberOfProfilesWillBeMerged?: {} | undefined
}
type GetIdentityResolutionJobResponse = {
  DomainName?: {} | undefined
  JobId?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  JobStartTime?: {} | undefined
  JobEndTime?: {} | undefined
  LastUpdatedAt?: {} | undefined
  JobExpirationTime?: {} | undefined
  AutoMerging?:
    | {
        Enabled: {}
        Consolidation?: { MatchingAttributesList: {} } | undefined
        ConflictResolution?: { ConflictResolvingModel: {}; SourceName?: {} | undefined } | undefined
        MinAllowedConfidenceScoreForMerging?: {} | undefined
      }
    | undefined
  ExportingLocation?:
    | { S3Exporting?: { S3BucketName?: {} | undefined; S3KeyName?: {} | undefined } | undefined }
    | undefined
  JobStats?:
    | {
        NumberOfProfilesReviewed?: {} | undefined
        NumberOfMatchesFound?: {} | undefined
        NumberOfMergesDone?: {} | undefined
      }
    | undefined
}
type GetIntegrationResponse = {
  DomainName: {}
  Uri: {}
  ObjectTypeName?: {} | undefined
  CreatedAt: {}
  LastUpdatedAt: {}
  Tags?: {} | undefined
  ObjectTypeNames?: {} | undefined
  WorkflowId?: {} | undefined
  IsUnstructured?: {} | undefined
}
type ListIntegrationsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type TypeName = string
type PutIntegrationResponse = {
  DomainName: {}
  Uri: {}
  ObjectTypeName?: {} | undefined
  CreatedAt: {}
  LastUpdatedAt: {}
  Tags?: {} | undefined
  ObjectTypeNames?: {} | undefined
  WorkflowId?: {} | undefined
  IsUnstructured?: {} | undefined
}
type GetMatchesResponse = {
  NextToken?: {} | undefined
  MatchGenerationDate?: {} | undefined
  PotentialMatches?: {} | undefined
  Matches?: {} | undefined
}
type GetProfileObjectTypeTemplateResponse = {
  TemplateId?: {} | undefined
  SourceName?: {} | undefined
  SourceObject?: {} | undefined
  AllowProfileCreation?: {} | undefined
  SourceLastUpdatedTimestampFormat?: {} | undefined
  Fields?: {} | undefined
  Keys?: {} | undefined
}
type GetWorkflowStepsResponse = {
  WorkflowId?: {} | undefined
  WorkflowType?: {} | undefined
  Items?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountIntegrationsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListDomainsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListIdentityResolutionJobsResponse = {
  IdentityResolutionJobsList?: {} | undefined
  NextToken?: {} | undefined
}
type ListProfileObjectTypeTemplatesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListProfileObjectTypesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListProfileObjectsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type PutProfileObjectResponse = { ProfileObjectUniqueKey?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type ListWorkflowsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type Uuid = string
type MergeProfilesResponse = { Message?: {} | undefined }
type AdditionalSearchKey = { KeyName: {}; Values: {} }
type SearchProfilesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/domains/:DomainName/profiles/keys': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: AddProfileKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays: number
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays: number
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays: number
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays: number
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays: number
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays: number
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { DomainName: string } } & {
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
            output: DeleteDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
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
            input: { param: { DomainName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
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
            status: 484
          }
      $get:
        | {
            input: { param: { DomainName: string } } & {
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
            output: GetDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
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
            input: { param: { DomainName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
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
            status: 484
          }
      $put:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays?: number | undefined
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: UpdateDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays?: number | undefined
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays?: number | undefined
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays?: number | undefined
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays?: number | undefined
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultExpirationDays?: number | undefined
                DefaultEncryptionKey?: string | undefined
                DeadLetterQueueUrl?: string | undefined
                Matching?:
                  | {
                      Enabled?: {} | undefined
                      JobSchedule?: { DayOfTheWeek: {}; Time: {} } | undefined
                      AutoMerging?:
                        | {
                            Enabled: {}
                            Consolidation?: { MatchingAttributesList: {} } | undefined
                            ConflictResolution?:
                              | { ConflictResolvingModel: {}; SourceName?: {} | undefined }
                              | undefined
                            MinAllowedConfidenceScoreForMerging?: {} | undefined
                          }
                        | undefined
                      ExportingConfig?:
                        | {
                            S3Exporting?:
                              | { S3BucketName: {}; S3KeyName?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/workflows/integrations': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WorkflowType: 'APPFLOW_INTEGRATION'
                IntegrationConfig: {
                  AppflowIntegration?:
                    | { FlowDefinition: FlowDefinition; Batches?: {} | undefined }
                    | undefined
                }
                ObjectTypeName: string
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateIntegrationWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WorkflowType: 'APPFLOW_INTEGRATION'
                IntegrationConfig: {
                  AppflowIntegration?:
                    | { FlowDefinition: FlowDefinition; Batches?: {} | undefined }
                    | undefined
                }
                ObjectTypeName: string
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WorkflowType: 'APPFLOW_INTEGRATION'
                IntegrationConfig: {
                  AppflowIntegration?:
                    | { FlowDefinition: FlowDefinition; Batches?: {} | undefined }
                    | undefined
                }
                ObjectTypeName: string
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WorkflowType: 'APPFLOW_INTEGRATION'
                IntegrationConfig: {
                  AppflowIntegration?:
                    | { FlowDefinition: FlowDefinition; Batches?: {} | undefined }
                    | undefined
                }
                ObjectTypeName: string
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WorkflowType: 'APPFLOW_INTEGRATION'
                IntegrationConfig: {
                  AppflowIntegration?:
                    | { FlowDefinition: FlowDefinition; Batches?: {} | undefined }
                    | undefined
                }
                ObjectTypeName: string
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WorkflowType: 'APPFLOW_INTEGRATION'
                IntegrationConfig: {
                  AppflowIntegration?:
                    | { FlowDefinition: FlowDefinition; Batches?: {} | undefined }
                    | undefined
                }
                ObjectTypeName: string
                RoleArn: string
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/profiles': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AccountNumber?: string | undefined
                AdditionalInformation?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String1To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: CreateProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AccountNumber?: string | undefined
                AdditionalInformation?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String1To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AccountNumber?: string | undefined
                AdditionalInformation?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String1To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AccountNumber?: string | undefined
                AdditionalInformation?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String1To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AccountNumber?: string | undefined
                AdditionalInformation?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String1To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AccountNumber?: string | undefined
                AdditionalInformation?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String1To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ProfileId: string
                AdditionalInformation?: string | undefined
                AccountNumber?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String0To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: UpdateProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ProfileId: string
                AdditionalInformation?: string | undefined
                AccountNumber?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String0To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ProfileId: string
                AdditionalInformation?: string | undefined
                AccountNumber?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String0To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ProfileId: string
                AdditionalInformation?: string | undefined
                AccountNumber?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String0To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ProfileId: string
                AdditionalInformation?: string | undefined
                AccountNumber?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String0To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ProfileId: string
                AdditionalInformation?: string | undefined
                AccountNumber?: string | undefined
                PartyType?: 'INDIVIDUAL' | 'BUSINESS' | 'OTHER' | undefined
                BusinessName?: string | undefined
                FirstName?: string | undefined
                MiddleName?: string | undefined
                LastName?: string | undefined
                BirthDate?: string | undefined
                Gender?: 'MALE' | 'FEMALE' | 'UNSPECIFIED' | undefined
                PhoneNumber?: string | undefined
                MobilePhoneNumber?: string | undefined
                HomePhoneNumber?: string | undefined
                BusinessPhoneNumber?: string | undefined
                EmailAddress?: string | undefined
                PersonalEmailAddress?: string | undefined
                BusinessEmailAddress?: string | undefined
                Address?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                ShippingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                MailingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                BillingAddress?:
                  | {
                      Address1?: {} | undefined
                      Address2?: {} | undefined
                      Address3?: {} | undefined
                      Address4?: {} | undefined
                      City?: {} | undefined
                      County?: {} | undefined
                      State?: {} | undefined
                      Province?: {} | undefined
                      Country?: {} | undefined
                      PostalCode?: {} | undefined
                    }
                  | undefined
                Attributes?: { [x: string]: String0To255 } | undefined
                PartyTypeString?: string | undefined
                GenderString?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/integrations/delete': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: DeleteIntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/profiles/delete': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string } }
            output: DeleteProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/profiles/keys/delete': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: DeleteProfileKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProfileId: string; KeyName: string; Values: String1To255[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/profiles/objects/delete': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { ProfileId: string; ProfileObjectUniqueKey: string; ObjectTypeName: string }
            }
            output: DeleteProfileObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { ProfileId: string; ProfileObjectUniqueKey: string; ObjectTypeName: string }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { ProfileId: string; ProfileObjectUniqueKey: string; ObjectTypeName: string }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { ProfileId: string; ProfileObjectUniqueKey: string; ObjectTypeName: string }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { ProfileId: string; ProfileObjectUniqueKey: string; ObjectTypeName: string }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { ProfileId: string; ProfileObjectUniqueKey: string; ObjectTypeName: string }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/object-types/:ObjectTypeName': {
      $delete:
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: DeleteProfileObjectTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            status: 484
          }
      $get:
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: GetProfileObjectTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
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
            status: 484
          }
      $put:
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Description: string
                TemplateId?: string | undefined
                ExpirationDays?: number | undefined
                EncryptionKey?: string | undefined
                AllowProfileCreation?: boolean | undefined
                SourceLastUpdatedTimestampFormat?: string | undefined
                Fields?: { [x: string]: ObjectTypeField } | undefined
                Keys?: { [x: string]: ObjectTypeKeyList } | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: PutProfileObjectTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Description: string
                TemplateId?: string | undefined
                ExpirationDays?: number | undefined
                EncryptionKey?: string | undefined
                AllowProfileCreation?: boolean | undefined
                SourceLastUpdatedTimestampFormat?: string | undefined
                Fields?: { [x: string]: ObjectTypeField } | undefined
                Keys?: { [x: string]: ObjectTypeKeyList } | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Description: string
                TemplateId?: string | undefined
                ExpirationDays?: number | undefined
                EncryptionKey?: string | undefined
                AllowProfileCreation?: boolean | undefined
                SourceLastUpdatedTimestampFormat?: string | undefined
                Fields?: { [x: string]: ObjectTypeField } | undefined
                Keys?: { [x: string]: ObjectTypeKeyList } | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Description: string
                TemplateId?: string | undefined
                ExpirationDays?: number | undefined
                EncryptionKey?: string | undefined
                AllowProfileCreation?: boolean | undefined
                SourceLastUpdatedTimestampFormat?: string | undefined
                Fields?: { [x: string]: ObjectTypeField } | undefined
                Keys?: { [x: string]: ObjectTypeKeyList } | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Description: string
                TemplateId?: string | undefined
                ExpirationDays?: number | undefined
                EncryptionKey?: string | undefined
                AllowProfileCreation?: boolean | undefined
                SourceLastUpdatedTimestampFormat?: string | undefined
                Fields?: { [x: string]: ObjectTypeField } | undefined
                Keys?: { [x: string]: ObjectTypeKeyList } | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; ObjectTypeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Description: string
                TemplateId?: string | undefined
                ExpirationDays?: number | undefined
                EncryptionKey?: string | undefined
                AllowProfileCreation?: boolean | undefined
                SourceLastUpdatedTimestampFormat?: string | undefined
                Fields?: { [x: string]: ObjectTypeField } | undefined
                Keys?: { [x: string]: ObjectTypeKeyList } | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/workflows/:WorkflowId': {
      $delete:
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: DeleteWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            status: 484
          }
      $get:
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: GetWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
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
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/identity-resolution-jobs/auto-merging-preview': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Consolidation: { MatchingAttributesList?: {} | undefined }
                ConflictResolution: {
                  ConflictResolvingModel?: {} | undefined
                  SourceName?: {} | undefined
                }
                MinAllowedConfidenceScoreForMerging?: number | undefined
              }
            }
            output: GetAutoMergingPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Consolidation: { MatchingAttributesList?: {} | undefined }
                ConflictResolution: {
                  ConflictResolvingModel?: {} | undefined
                  SourceName?: {} | undefined
                }
                MinAllowedConfidenceScoreForMerging?: number | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Consolidation: { MatchingAttributesList?: {} | undefined }
                ConflictResolution: {
                  ConflictResolvingModel?: {} | undefined
                  SourceName?: {} | undefined
                }
                MinAllowedConfidenceScoreForMerging?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Consolidation: { MatchingAttributesList?: {} | undefined }
                ConflictResolution: {
                  ConflictResolvingModel?: {} | undefined
                  SourceName?: {} | undefined
                }
                MinAllowedConfidenceScoreForMerging?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Consolidation: { MatchingAttributesList?: {} | undefined }
                ConflictResolution: {
                  ConflictResolvingModel?: {} | undefined
                  SourceName?: {} | undefined
                }
                MinAllowedConfidenceScoreForMerging?: number | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Consolidation: { MatchingAttributesList?: {} | undefined }
                ConflictResolution: {
                  ConflictResolvingModel?: {} | undefined
                  SourceName?: {} | undefined
                }
                MinAllowedConfidenceScoreForMerging?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/identity-resolution-jobs/:JobId': {
      $get:
        | {
            input: { param: { DomainName: string; JobId: string } } & {
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
            output: GetIdentityResolutionJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; JobId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; JobId: string } } & {
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
            input: { param: { DomainName: string; JobId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; JobId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; JobId: string } } & {
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
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/integrations': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: GetIntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Uri: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { DomainName: string } } & {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            output: ListIntegrationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Uri?: string | undefined
                ObjectTypeName?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                FlowDefinition?:
                  | {
                      Description?: {} | undefined
                      FlowName?: {} | undefined
                      KmsArn?: {} | undefined
                      SourceFlowConfig?:
                        | {
                            ConnectorProfileName?: {} | undefined
                            ConnectorType: {}
                            IncrementalPullConfig?:
                              | { DatetimeTypeFieldName?: {} | undefined }
                              | undefined
                            SourceConnectorProperties: {
                              Marketo?: { Object: {} } | undefined
                              S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
                              Salesforce?:
                                | {
                                    Object: {}
                                    EnableDynamicFieldUpdate?: {} | undefined
                                    IncludeDeletedRecords?: {} | undefined
                                  }
                                | undefined
                              ServiceNow?: { Object: {} } | undefined
                              Zendesk?: { Object: {} } | undefined
                            }
                          }
                        | undefined
                      Tasks?: {} | undefined
                      TriggerConfig?:
                        | {
                            TriggerType: {}
                            TriggerProperties?:
                              | {
                                  Scheduled?:
                                    | {
                                        ScheduleExpression: {}
                                        DataPullMode?: {} | undefined
                                        ScheduleStartTime?: {} | undefined
                                        ScheduleEndTime?: {} | undefined
                                        Timezone?: {} | undefined
                                        ScheduleOffset?: {} | undefined
                                        FirstExecutionFrom?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ObjectTypeNames?: { [x: string]: TypeName } | undefined
              }
            }
            output: PutIntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Uri?: string | undefined
                ObjectTypeName?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                FlowDefinition?:
                  | {
                      Description?: {} | undefined
                      FlowName?: {} | undefined
                      KmsArn?: {} | undefined
                      SourceFlowConfig?:
                        | {
                            ConnectorProfileName?: {} | undefined
                            ConnectorType: {}
                            IncrementalPullConfig?:
                              | { DatetimeTypeFieldName?: {} | undefined }
                              | undefined
                            SourceConnectorProperties: {
                              Marketo?: { Object: {} } | undefined
                              S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
                              Salesforce?:
                                | {
                                    Object: {}
                                    EnableDynamicFieldUpdate?: {} | undefined
                                    IncludeDeletedRecords?: {} | undefined
                                  }
                                | undefined
                              ServiceNow?: { Object: {} } | undefined
                              Zendesk?: { Object: {} } | undefined
                            }
                          }
                        | undefined
                      Tasks?: {} | undefined
                      TriggerConfig?:
                        | {
                            TriggerType: {}
                            TriggerProperties?:
                              | {
                                  Scheduled?:
                                    | {
                                        ScheduleExpression: {}
                                        DataPullMode?: {} | undefined
                                        ScheduleStartTime?: {} | undefined
                                        ScheduleEndTime?: {} | undefined
                                        Timezone?: {} | undefined
                                        ScheduleOffset?: {} | undefined
                                        FirstExecutionFrom?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ObjectTypeNames?: { [x: string]: TypeName } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Uri?: string | undefined
                ObjectTypeName?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                FlowDefinition?:
                  | {
                      Description?: {} | undefined
                      FlowName?: {} | undefined
                      KmsArn?: {} | undefined
                      SourceFlowConfig?:
                        | {
                            ConnectorProfileName?: {} | undefined
                            ConnectorType: {}
                            IncrementalPullConfig?:
                              | { DatetimeTypeFieldName?: {} | undefined }
                              | undefined
                            SourceConnectorProperties: {
                              Marketo?: { Object: {} } | undefined
                              S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
                              Salesforce?:
                                | {
                                    Object: {}
                                    EnableDynamicFieldUpdate?: {} | undefined
                                    IncludeDeletedRecords?: {} | undefined
                                  }
                                | undefined
                              ServiceNow?: { Object: {} } | undefined
                              Zendesk?: { Object: {} } | undefined
                            }
                          }
                        | undefined
                      Tasks?: {} | undefined
                      TriggerConfig?:
                        | {
                            TriggerType: {}
                            TriggerProperties?:
                              | {
                                  Scheduled?:
                                    | {
                                        ScheduleExpression: {}
                                        DataPullMode?: {} | undefined
                                        ScheduleStartTime?: {} | undefined
                                        ScheduleEndTime?: {} | undefined
                                        Timezone?: {} | undefined
                                        ScheduleOffset?: {} | undefined
                                        FirstExecutionFrom?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ObjectTypeNames?: { [x: string]: TypeName } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Uri?: string | undefined
                ObjectTypeName?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                FlowDefinition?:
                  | {
                      Description?: {} | undefined
                      FlowName?: {} | undefined
                      KmsArn?: {} | undefined
                      SourceFlowConfig?:
                        | {
                            ConnectorProfileName?: {} | undefined
                            ConnectorType: {}
                            IncrementalPullConfig?:
                              | { DatetimeTypeFieldName?: {} | undefined }
                              | undefined
                            SourceConnectorProperties: {
                              Marketo?: { Object: {} } | undefined
                              S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
                              Salesforce?:
                                | {
                                    Object: {}
                                    EnableDynamicFieldUpdate?: {} | undefined
                                    IncludeDeletedRecords?: {} | undefined
                                  }
                                | undefined
                              ServiceNow?: { Object: {} } | undefined
                              Zendesk?: { Object: {} } | undefined
                            }
                          }
                        | undefined
                      Tasks?: {} | undefined
                      TriggerConfig?:
                        | {
                            TriggerType: {}
                            TriggerProperties?:
                              | {
                                  Scheduled?:
                                    | {
                                        ScheduleExpression: {}
                                        DataPullMode?: {} | undefined
                                        ScheduleStartTime?: {} | undefined
                                        ScheduleEndTime?: {} | undefined
                                        Timezone?: {} | undefined
                                        ScheduleOffset?: {} | undefined
                                        FirstExecutionFrom?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ObjectTypeNames?: { [x: string]: TypeName } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Uri?: string | undefined
                ObjectTypeName?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                FlowDefinition?:
                  | {
                      Description?: {} | undefined
                      FlowName?: {} | undefined
                      KmsArn?: {} | undefined
                      SourceFlowConfig?:
                        | {
                            ConnectorProfileName?: {} | undefined
                            ConnectorType: {}
                            IncrementalPullConfig?:
                              | { DatetimeTypeFieldName?: {} | undefined }
                              | undefined
                            SourceConnectorProperties: {
                              Marketo?: { Object: {} } | undefined
                              S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
                              Salesforce?:
                                | {
                                    Object: {}
                                    EnableDynamicFieldUpdate?: {} | undefined
                                    IncludeDeletedRecords?: {} | undefined
                                  }
                                | undefined
                              ServiceNow?: { Object: {} } | undefined
                              Zendesk?: { Object: {} } | undefined
                            }
                          }
                        | undefined
                      Tasks?: {} | undefined
                      TriggerConfig?:
                        | {
                            TriggerType: {}
                            TriggerProperties?:
                              | {
                                  Scheduled?:
                                    | {
                                        ScheduleExpression: {}
                                        DataPullMode?: {} | undefined
                                        ScheduleStartTime?: {} | undefined
                                        ScheduleEndTime?: {} | undefined
                                        Timezone?: {} | undefined
                                        ScheduleOffset?: {} | undefined
                                        FirstExecutionFrom?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ObjectTypeNames?: { [x: string]: TypeName } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Uri?: string | undefined
                ObjectTypeName?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                FlowDefinition?:
                  | {
                      Description?: {} | undefined
                      FlowName?: {} | undefined
                      KmsArn?: {} | undefined
                      SourceFlowConfig?:
                        | {
                            ConnectorProfileName?: {} | undefined
                            ConnectorType: {}
                            IncrementalPullConfig?:
                              | { DatetimeTypeFieldName?: {} | undefined }
                              | undefined
                            SourceConnectorProperties: {
                              Marketo?: { Object: {} } | undefined
                              S3?: { BucketName: {}; BucketPrefix?: {} | undefined } | undefined
                              Salesforce?:
                                | {
                                    Object: {}
                                    EnableDynamicFieldUpdate?: {} | undefined
                                    IncludeDeletedRecords?: {} | undefined
                                  }
                                | undefined
                              ServiceNow?: { Object: {} } | undefined
                              Zendesk?: { Object: {} } | undefined
                            }
                          }
                        | undefined
                      Tasks?: {} | undefined
                      TriggerConfig?:
                        | {
                            TriggerType: {}
                            TriggerProperties?:
                              | {
                                  Scheduled?:
                                    | {
                                        ScheduleExpression: {}
                                        DataPullMode?: {} | undefined
                                        ScheduleStartTime?: {} | undefined
                                        ScheduleEndTime?: {} | undefined
                                        Timezone?: {} | undefined
                                        ScheduleOffset?: {} | undefined
                                        FirstExecutionFrom?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ObjectTypeNames?: { [x: string]: TypeName } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/matches': {
      $get:
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: GetMatchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/templates/:TemplateId': {
      $get:
        | {
            input: { param: { TemplateId: string } } & {
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
            output: GetProfileObjectTypeTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TemplateId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TemplateId: string } } & {
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
            input: { param: { TemplateId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TemplateId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TemplateId: string } } & {
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
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/workflows/:WorkflowId/steps': {
      $get:
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: GetWorkflowStepsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            status: 481
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string; WorkflowId: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/integrations': {
      $post:
        | {
            input: {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            } & { json: { Uri: string } }
            output: ListAccountIntegrationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            } & { json: { Uri: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            } & { json: { Uri: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            } & { json: { Uri: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            } & { json: { Uri: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                'next-token'?: string | undefined
                'max-results'?: number | undefined
                'include-hidden'?: boolean | undefined
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
            } & { json: { Uri: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains': {
      $get:
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ListDomainsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            status: 481
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/identity-resolution-jobs': {
      $get:
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ListIdentityResolutionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/templates': {
      $get:
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ListProfileObjectTypeTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            status: 481
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/object-types': {
      $get:
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ListProfileObjectTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/profiles/objects': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                ObjectTypeName: string
                ProfileId: string
                ObjectFilter?: { KeyName?: {} | undefined; Values?: {} | undefined } | undefined
              }
            }
            output: ListProfileObjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                ObjectTypeName: string
                ProfileId: string
                ObjectFilter?: { KeyName?: {} | undefined; Values?: {} | undefined } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                ObjectTypeName: string
                ProfileId: string
                ObjectFilter?: { KeyName?: {} | undefined; Values?: {} | undefined } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                ObjectTypeName: string
                ProfileId: string
                ObjectFilter?: { KeyName?: {} | undefined; Values?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                ObjectTypeName: string
                ProfileId: string
                ObjectFilter?: { KeyName?: {} | undefined; Values?: {} | undefined } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                ObjectTypeName: string
                ProfileId: string
                ObjectFilter?: { KeyName?: {} | undefined; Values?: {} | undefined } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectTypeName: string; Object: string } }
            output: PutProfileObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectTypeName: string; Object: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectTypeName: string; Object: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectTypeName: string; Object: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectTypeName: string; Object: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectTypeName: string; Object: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tags/:resourceArn': {
      $get:
        | {
            input: { param: { resourceArn: string } } & {
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
            input: { param: { resourceArn: string } } & {
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
            input: { param: { resourceArn: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
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
            status: 482
          }
      $post:
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/domains/:DomainName/workflows': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                WorkflowType?: 'APPFLOW_INTEGRATION' | undefined
                Status?:
                  | 'NOT_STARTED'
                  | 'IN_PROGRESS'
                  | 'COMPLETE'
                  | 'FAILED'
                  | 'SPLIT'
                  | 'RETRY'
                  | 'CANCELLED'
                  | undefined
                QueryStartDate?: string | undefined
                QueryEndDate?: string | undefined
              }
            }
            output: ListWorkflowsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                WorkflowType?: 'APPFLOW_INTEGRATION' | undefined
                Status?:
                  | 'NOT_STARTED'
                  | 'IN_PROGRESS'
                  | 'COMPLETE'
                  | 'FAILED'
                  | 'SPLIT'
                  | 'RETRY'
                  | 'CANCELLED'
                  | undefined
                QueryStartDate?: string | undefined
                QueryEndDate?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                WorkflowType?: 'APPFLOW_INTEGRATION' | undefined
                Status?:
                  | 'NOT_STARTED'
                  | 'IN_PROGRESS'
                  | 'COMPLETE'
                  | 'FAILED'
                  | 'SPLIT'
                  | 'RETRY'
                  | 'CANCELLED'
                  | undefined
                QueryStartDate?: string | undefined
                QueryEndDate?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                WorkflowType?: 'APPFLOW_INTEGRATION' | undefined
                Status?:
                  | 'NOT_STARTED'
                  | 'IN_PROGRESS'
                  | 'COMPLETE'
                  | 'FAILED'
                  | 'SPLIT'
                  | 'RETRY'
                  | 'CANCELLED'
                  | undefined
                QueryStartDate?: string | undefined
                QueryEndDate?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                WorkflowType?: 'APPFLOW_INTEGRATION' | undefined
                Status?:
                  | 'NOT_STARTED'
                  | 'IN_PROGRESS'
                  | 'COMPLETE'
                  | 'FAILED'
                  | 'SPLIT'
                  | 'RETRY'
                  | 'CANCELLED'
                  | undefined
                QueryStartDate?: string | undefined
                QueryEndDate?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                WorkflowType?: 'APPFLOW_INTEGRATION' | undefined
                Status?:
                  | 'NOT_STARTED'
                  | 'IN_PROGRESS'
                  | 'COMPLETE'
                  | 'FAILED'
                  | 'SPLIT'
                  | 'RETRY'
                  | 'CANCELLED'
                  | undefined
                QueryStartDate?: string | undefined
                QueryEndDate?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/domains/:DomainName/profiles/objects/merge': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                MainProfileId: string
                ProfileIdsToBeMerged: Uuid[]
                FieldSourceProfileIds?:
                  | {
                      AccountNumber?: {} | undefined
                      AdditionalInformation?: {} | undefined
                      PartyType?: {} | undefined
                      BusinessName?: {} | undefined
                      FirstName?: {} | undefined
                      MiddleName?: {} | undefined
                      LastName?: {} | undefined
                      BirthDate?: {} | undefined
                      Gender?: {} | undefined
                      PhoneNumber?: {} | undefined
                      MobilePhoneNumber?: {} | undefined
                      HomePhoneNumber?: {} | undefined
                      BusinessPhoneNumber?: {} | undefined
                      EmailAddress?: {} | undefined
                      PersonalEmailAddress?: {} | undefined
                      BusinessEmailAddress?: {} | undefined
                      Address?: {} | undefined
                      ShippingAddress?: {} | undefined
                      MailingAddress?: {} | undefined
                      BillingAddress?: {} | undefined
                      Attributes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: MergeProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                MainProfileId: string
                ProfileIdsToBeMerged: Uuid[]
                FieldSourceProfileIds?:
                  | {
                      AccountNumber?: {} | undefined
                      AdditionalInformation?: {} | undefined
                      PartyType?: {} | undefined
                      BusinessName?: {} | undefined
                      FirstName?: {} | undefined
                      MiddleName?: {} | undefined
                      LastName?: {} | undefined
                      BirthDate?: {} | undefined
                      Gender?: {} | undefined
                      PhoneNumber?: {} | undefined
                      MobilePhoneNumber?: {} | undefined
                      HomePhoneNumber?: {} | undefined
                      BusinessPhoneNumber?: {} | undefined
                      EmailAddress?: {} | undefined
                      PersonalEmailAddress?: {} | undefined
                      BusinessEmailAddress?: {} | undefined
                      Address?: {} | undefined
                      ShippingAddress?: {} | undefined
                      MailingAddress?: {} | undefined
                      BillingAddress?: {} | undefined
                      Attributes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                MainProfileId: string
                ProfileIdsToBeMerged: Uuid[]
                FieldSourceProfileIds?:
                  | {
                      AccountNumber?: {} | undefined
                      AdditionalInformation?: {} | undefined
                      PartyType?: {} | undefined
                      BusinessName?: {} | undefined
                      FirstName?: {} | undefined
                      MiddleName?: {} | undefined
                      LastName?: {} | undefined
                      BirthDate?: {} | undefined
                      Gender?: {} | undefined
                      PhoneNumber?: {} | undefined
                      MobilePhoneNumber?: {} | undefined
                      HomePhoneNumber?: {} | undefined
                      BusinessPhoneNumber?: {} | undefined
                      EmailAddress?: {} | undefined
                      PersonalEmailAddress?: {} | undefined
                      BusinessEmailAddress?: {} | undefined
                      Address?: {} | undefined
                      ShippingAddress?: {} | undefined
                      MailingAddress?: {} | undefined
                      BillingAddress?: {} | undefined
                      Attributes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                MainProfileId: string
                ProfileIdsToBeMerged: Uuid[]
                FieldSourceProfileIds?:
                  | {
                      AccountNumber?: {} | undefined
                      AdditionalInformation?: {} | undefined
                      PartyType?: {} | undefined
                      BusinessName?: {} | undefined
                      FirstName?: {} | undefined
                      MiddleName?: {} | undefined
                      LastName?: {} | undefined
                      BirthDate?: {} | undefined
                      Gender?: {} | undefined
                      PhoneNumber?: {} | undefined
                      MobilePhoneNumber?: {} | undefined
                      HomePhoneNumber?: {} | undefined
                      BusinessPhoneNumber?: {} | undefined
                      EmailAddress?: {} | undefined
                      PersonalEmailAddress?: {} | undefined
                      BusinessEmailAddress?: {} | undefined
                      Address?: {} | undefined
                      ShippingAddress?: {} | undefined
                      MailingAddress?: {} | undefined
                      BillingAddress?: {} | undefined
                      Attributes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                MainProfileId: string
                ProfileIdsToBeMerged: Uuid[]
                FieldSourceProfileIds?:
                  | {
                      AccountNumber?: {} | undefined
                      AdditionalInformation?: {} | undefined
                      PartyType?: {} | undefined
                      BusinessName?: {} | undefined
                      FirstName?: {} | undefined
                      MiddleName?: {} | undefined
                      LastName?: {} | undefined
                      BirthDate?: {} | undefined
                      Gender?: {} | undefined
                      PhoneNumber?: {} | undefined
                      MobilePhoneNumber?: {} | undefined
                      HomePhoneNumber?: {} | undefined
                      BusinessPhoneNumber?: {} | undefined
                      EmailAddress?: {} | undefined
                      PersonalEmailAddress?: {} | undefined
                      BusinessEmailAddress?: {} | undefined
                      Address?: {} | undefined
                      ShippingAddress?: {} | undefined
                      MailingAddress?: {} | undefined
                      BillingAddress?: {} | undefined
                      Attributes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/domains/:DomainName/profiles/search': {
      $post:
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                KeyName: string
                Values: String1To255[]
                AdditionalSearchKeys?: AdditionalSearchKey[] | undefined
                LogicalOperator?: 'AND' | 'OR' | undefined
              }
            }
            output: SearchProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                KeyName: string
                Values: String1To255[]
                AdditionalSearchKeys?: AdditionalSearchKey[] | undefined
                LogicalOperator?: 'AND' | 'OR' | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                KeyName: string
                Values: String1To255[]
                AdditionalSearchKeys?: AdditionalSearchKey[] | undefined
                LogicalOperator?: 'AND' | 'OR' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                KeyName: string
                Values: String1To255[]
                AdditionalSearchKeys?: AdditionalSearchKey[] | undefined
                LogicalOperator?: 'AND' | 'OR' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                KeyName: string
                Values: String1To255[]
                AdditionalSearchKeys?: AdditionalSearchKey[] | undefined
                LogicalOperator?: 'AND' | 'OR' | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DomainName: string } } & {
              query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
                KeyName: string
                Values: String1To255[]
                AdditionalSearchKeys?: AdditionalSearchKey[] | undefined
                LogicalOperator?: 'AND' | 'OR' | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            status: 482
          }
    }
  },
  '/'
>
export default routes
