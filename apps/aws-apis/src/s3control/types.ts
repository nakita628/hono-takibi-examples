type CreateAccessPointResult = { AccessPointArn?: {} | undefined; Alias?: {} | undefined }
type PublicAccessBlockConfiguration = {
  BlockPublicAcls?: {} | undefined
  IgnorePublicAcls?: {} | undefined
  BlockPublicPolicy?: {} | undefined
  RestrictPublicBuckets?: {} | undefined
}
type GetAccessPointResult = {
  Name?: {} | undefined
  Bucket?: {} | undefined
  NetworkOrigin?: {} | undefined
  VpcConfiguration?: { VpcId: {} } | undefined
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined
  CreationDate?: {} | undefined
  Alias?: {} | undefined
  AccessPointArn?: {} | undefined
  Endpoints?: {} | undefined
  BucketAccountId?: {} | undefined
}
type CreateAccessPointForObjectLambdaResult = {
  ObjectLambdaAccessPointArn?: {} | undefined
  Alias?: { Value?: {} | undefined; Status?: {} | undefined } | undefined
}
type GetAccessPointForObjectLambdaResult = {
  Name?: {} | undefined
  PublicAccessBlockConfiguration?:
    | {
        BlockPublicAcls?: {} | undefined
        IgnorePublicAcls?: {} | undefined
        BlockPublicPolicy?: {} | undefined
        RestrictPublicBuckets?: {} | undefined
      }
    | undefined
  CreationDate?: {} | undefined
  Alias?: { Value?: {} | undefined; Status?: {} | undefined } | undefined
}
type CreateBucketResult = { BucketArn?: {} | undefined }
type BucketAlreadyExists = { [x: string]: unknown }
type BucketAlreadyOwnedByYou = { [x: string]: unknown }
type S3SetObjectLegalHoldOperation = { LegalHold: { Status: {} } }
type S3SetObjectRetentionOperation = {
  BypassGovernanceRetention?: {} | undefined
  Retention: { RetainUntilDate?: {} | undefined; Mode?: {} | undefined }
}
type S3Tag = { Key: {}; Value: {} }
type CreateJobResult = { JobId?: {} | undefined }
type TooManyRequestsException = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type IdempotencyException = { [x: string]: unknown }
type InternalServiceException = { [x: string]: unknown }
type JobStatus =
  | 'Active'
  | 'Cancelled'
  | 'Cancelling'
  | 'Complete'
  | 'Completing'
  | 'Failed'
  | 'Failing'
  | 'New'
  | 'Paused'
  | 'Pausing'
  | 'Preparing'
  | 'Ready'
  | 'Suspended'
type ListJobsResult = { NextToken?: {} | undefined; Jobs?: {} | undefined }
type InvalidRequestException = { [x: string]: unknown }
type InvalidNextTokenException = { [x: string]: unknown }
type CreateMultiRegionAccessPointResult = { RequestTokenARN?: {} | undefined }
type GetAccessPointPolicyResult = { Policy?: {} | undefined }
type GetAccessPointPolicyForObjectLambdaResult = { Policy?: {} | undefined }
type GetBucketResult = {
  Bucket?: {} | undefined
  PublicAccessBlockEnabled?: {} | undefined
  CreationDate?: {} | undefined
}
type GetBucketLifecycleConfigurationResult = { Rules?: {} | undefined }
type GetBucketPolicyResult = { Policy?: {} | undefined }
type GetBucketReplicationResult = { ReplicationConfiguration?: { Role: {}; Rules: {} } | undefined }
type GetBucketTaggingResult = { TagSet: {} }
type DeleteJobTaggingResult = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type GetJobTaggingResult = { Tags?: {} | undefined }
type PutJobTaggingResult = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type DeleteMultiRegionAccessPointResult = { RequestTokenARN?: {} | undefined }
type GetPublicAccessBlockOutput = {
  PublicAccessBlockConfiguration?:
    | {
        BlockPublicAcls?: {} | undefined
        IgnorePublicAcls?: {} | undefined
        BlockPublicPolicy?: {} | undefined
        RestrictPublicBuckets?: {} | undefined
      }
    | undefined
}
type NoSuchPublicAccessBlockConfiguration = { [x: string]: unknown }
type SelectionCriteria = {
  Delimiter?: {} | undefined
  MaxDepth?: {} | undefined
  MinStorageBytesPercentage?: {} | undefined
}
type GetStorageLensConfigurationResult = {
  StorageLensConfiguration?:
    | {
        Id: {}
        AccountLevel: {
          ActivityMetrics?: { IsEnabled?: {} | undefined } | undefined
          BucketLevel: {
            ActivityMetrics?: { IsEnabled?: {} | undefined } | undefined
            PrefixLevel?:
              | {
                  StorageMetrics: {
                    IsEnabled?: {} | undefined
                    SelectionCriteria?: SelectionCriteria | undefined
                  }
                }
              | undefined
            AdvancedCostOptimizationMetrics?: { IsEnabled?: {} | undefined } | undefined
            AdvancedDataProtectionMetrics?: { IsEnabled?: {} | undefined } | undefined
            DetailedStatusCodesMetrics?: { IsEnabled?: {} | undefined } | undefined
          }
          AdvancedCostOptimizationMetrics?: { IsEnabled?: {} | undefined } | undefined
          AdvancedDataProtectionMetrics?: { IsEnabled?: {} | undefined } | undefined
          DetailedStatusCodesMetrics?: { IsEnabled?: {} | undefined } | undefined
        }
        Include?: { Buckets?: {} | undefined; Regions?: {} | undefined } | undefined
        Exclude?: { Buckets?: {} | undefined; Regions?: {} | undefined } | undefined
        DataExport?:
          | {
              S3BucketDestination?:
                | {
                    Format: {}
                    OutputSchemaVersion: {}
                    AccountId: {}
                    Arn: {}
                    Prefix?: {} | undefined
                    Encryption?:
                      | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                      | undefined
                  }
                | undefined
              CloudWatchMetrics?: { IsEnabled: {} } | undefined
            }
          | undefined
        IsEnabled: {}
        AwsOrg?: { Arn: {} } | undefined
        StorageLensArn?: {} | undefined
      }
    | undefined
}
type DeleteStorageLensConfigurationTaggingResult = { [x: string]: unknown }
type GetStorageLensConfigurationTaggingResult = { Tags?: {} | undefined }
type PutStorageLensConfigurationTaggingResult = { [x: string]: unknown }
type JobManifestLocation = { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
type DescribeJobResult = {
  Job?:
    | {
        JobId?: {} | undefined
        ConfirmationRequired?: {} | undefined
        Description?: {} | undefined
        JobArn?: {} | undefined
        Status?: {} | undefined
        Manifest?:
          | {
              Spec: { Format: {}; Fields?: {} | undefined }
              Location: { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
            }
          | undefined
        Operation?:
          | {
              LambdaInvoke?: { FunctionArn?: {} | undefined } | undefined
              S3PutObjectCopy?:
                | {
                    TargetResource?: {} | undefined
                    CannedAccessControlList?: {} | undefined
                    AccessControlGrants?: {} | undefined
                    MetadataDirective?: {} | undefined
                    ModifiedSinceConstraint?: {} | undefined
                    NewObjectMetadata?:
                      | {
                          CacheControl?: {} | undefined
                          ContentDisposition?: {} | undefined
                          ContentEncoding?: {} | undefined
                          ContentLanguage?: {} | undefined
                          UserMetadata?: {} | undefined
                          ContentLength?: {} | undefined
                          ContentMD5?: {} | undefined
                          ContentType?: {} | undefined
                          HttpExpiresDate?: {} | undefined
                          RequesterCharged?: {} | undefined
                          SSEAlgorithm?: {} | undefined
                        }
                      | undefined
                    NewObjectTagging?: {} | undefined
                    RedirectLocation?: {} | undefined
                    RequesterPays?: {} | undefined
                    StorageClass?: {} | undefined
                    UnModifiedSinceConstraint?: {} | undefined
                    SSEAwsKmsKeyId?: {} | undefined
                    TargetKeyPrefix?: {} | undefined
                    ObjectLockLegalHoldStatus?: {} | undefined
                    ObjectLockMode?: {} | undefined
                    ObjectLockRetainUntilDate?: {} | undefined
                    BucketKeyEnabled?: {} | undefined
                    ChecksumAlgorithm?: {} | undefined
                  }
                | undefined
              S3PutObjectAcl?:
                | {
                    AccessControlPolicy?:
                      | {
                          AccessControlList?:
                            | {
                                Owner: { ID?: {} | undefined; DisplayName?: {} | undefined }
                                Grants?: {} | undefined
                              }
                            | undefined
                          CannedAccessControlList?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              S3PutObjectTagging?: { TagSet?: {} | undefined } | undefined
              S3DeleteObjectTagging?: {} | undefined
              S3InitiateRestoreObject?:
                | { ExpirationInDays?: {} | undefined; GlacierJobTier?: {} | undefined }
                | undefined
              S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined
              S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined
              S3ReplicateObject?: {} | undefined
            }
          | undefined
        Priority?: {} | undefined
        ProgressSummary?:
          | {
              TotalNumberOfTasks?: {} | undefined
              NumberOfTasksSucceeded?: {} | undefined
              NumberOfTasksFailed?: {} | undefined
              Timers?: { ElapsedTimeInActiveSeconds?: {} | undefined } | undefined
            }
          | undefined
        StatusUpdateReason?: {} | undefined
        FailureReasons?: {} | undefined
        Report?:
          | {
              Bucket?: {} | undefined
              Format?: {} | undefined
              Enabled: {}
              Prefix?: {} | undefined
              ReportScope?: {} | undefined
            }
          | undefined
        CreationTime?: {} | undefined
        TerminationDate?: {} | undefined
        RoleArn?: {} | undefined
        SuspendedDate?: {} | undefined
        SuspendedCause?: {} | undefined
        ManifestGenerator?:
          | {
              S3JobManifestGenerator?:
                | {
                    ExpectedBucketOwner?: {} | undefined
                    SourceBucket: {}
                    ManifestOutputLocation?:
                      | {
                          ExpectedManifestBucketOwner?: {} | undefined
                          Bucket: {}
                          ManifestPrefix?: {} | undefined
                          ManifestEncryption?:
                            | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                            | undefined
                          ManifestFormat: {}
                        }
                      | undefined
                    Filter?:
                      | {
                          EligibleForReplication?: {} | undefined
                          CreatedAfter?: {} | undefined
                          CreatedBefore?: {} | undefined
                          ObjectReplicationStatuses?: {} | undefined
                        }
                      | undefined
                    EnableManifestOutput: {}
                  }
                | undefined
            }
          | undefined
        GeneratedManifestDescriptor?:
          | { Format?: {} | undefined; Location?: JobManifestLocation | undefined }
          | undefined
      }
    | undefined
}
type DescribeMultiRegionAccessPointOperationResult = {
  AsyncOperation?:
    | {
        CreationTime?: {} | undefined
        Operation?: {} | undefined
        RequestTokenARN?: {} | undefined
        RequestParameters?:
          | {
              CreateMultiRegionAccessPointRequest?:
                | {
                    Name: {}
                    PublicAccessBlock?: PublicAccessBlockConfiguration | undefined
                    Regions: {}
                  }
                | undefined
              DeleteMultiRegionAccessPointRequest?: { Name: {} } | undefined
              PutMultiRegionAccessPointPolicyRequest?: { Name: {}; Policy: {} } | undefined
            }
          | undefined
        RequestStatus?: {} | undefined
        ResponseDetails?:
          | {
              MultiRegionAccessPointDetails?: { Regions?: {} | undefined } | undefined
              ErrorDetails?:
                | {
                    Code?: {} | undefined
                    Message?: {} | undefined
                    Resource?: {} | undefined
                    RequestId?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetAccessPointConfigurationForObjectLambdaResult = {
  Configuration?:
    | {
        SupportingAccessPoint: {}
        CloudWatchMetricsEnabled?: {} | undefined
        AllowedFeatures?: {} | undefined
        TransformationConfigurations: {}
      }
    | undefined
}
type GetAccessPointPolicyStatusResult = { PolicyStatus?: { IsPublic?: {} | undefined } | undefined }
type PolicyStatus = { IsPublic?: {} | undefined }
type GetAccessPointPolicyStatusForObjectLambdaResult = { PolicyStatus?: PolicyStatus | undefined }
type GetBucketVersioningResult = { Status?: {} | undefined; MFADelete?: {} | undefined }
type GetMultiRegionAccessPointResult = {
  AccessPoint?:
    | {
        Name?: {} | undefined
        Alias?: {} | undefined
        CreatedAt?: {} | undefined
        PublicAccessBlock?: PublicAccessBlockConfiguration | undefined
        Status?: {} | undefined
        Regions?: {} | undefined
      }
    | undefined
}
type GetMultiRegionAccessPointPolicyResult = {
  Policy?:
    | {
        Established?: { Policy?: {} | undefined } | undefined
        Proposed?: { Policy?: {} | undefined } | undefined
      }
    | undefined
}
type GetMultiRegionAccessPointPolicyStatusResult = { Established?: PolicyStatus | undefined }
type GetMultiRegionAccessPointRoutesResult = { Mrap?: {} | undefined; Routes?: {} | undefined }
type SubmitMultiRegionAccessPointRoutesResult = { [x: string]: unknown }
type ListAccessPointsResult = { AccessPointList?: {} | undefined; NextToken?: {} | undefined }
type ListAccessPointsForObjectLambdaResult = {
  ObjectLambdaAccessPointList?: {} | undefined
  NextToken?: {} | undefined
}
type ListMultiRegionAccessPointsResult = {
  AccessPoints?: {} | undefined
  NextToken?: {} | undefined
}
type ListRegionalBucketsResult = { RegionalBucketList?: {} | undefined; NextToken?: {} | undefined }
type ListStorageLensConfigurationsResult = {
  NextToken?: {} | undefined
  StorageLensConfigurationList?: {} | undefined
}
type PutMultiRegionAccessPointPolicyResult = { RequestTokenARN?: {} | undefined }
type UpdateJobPriorityResult = { JobId: {}; Priority: {} }
type UpdateJobStatusResult = {
  JobId?: {} | undefined
  Status?: {} | undefined
  StatusUpdateReason?: {} | undefined
}
type JobStatusException = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v20180820/accesspoint/:name#x-amz-account-id': {
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Bucket: string
            VpcConfiguration?: { VpcId?: {} | undefined } | undefined
            PublicAccessBlockConfiguration?:
              | {
                  BlockPublicAcls?: {} | undefined
                  IgnorePublicAcls?: {} | undefined
                  BlockPublicPolicy?: {} | undefined
                  RestrictPublicBuckets?: {} | undefined
                }
              | undefined
            BucketAccountId?: string | undefined
          }
        }
        output: CreateAccessPointResult
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id': {
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Configuration: {
              SupportingAccessPoint?: {} | undefined
              CloudWatchMetricsEnabled?: {} | undefined
              AllowedFeatures?: {} | undefined
              TransformationConfigurations?: {} | undefined
            }
          }
        }
        output: CreateAccessPointForObjectLambdaResult
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointForObjectLambdaResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name': {
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'x-amz-acl'?:
                  | 'private'
                  | 'public-read'
                  | 'public-read-write'
                  | 'authenticated-read'
                  | undefined
                'x-amz-grant-full-control'?: string | undefined
                'x-amz-grant-read'?: string | undefined
                'x-amz-grant-read-acp'?: string | undefined
                'x-amz-grant-write'?: string | undefined
                'x-amz-grant-write-acp'?: string | undefined
                'x-amz-bucket-object-lock-enabled'?: boolean | undefined
                'x-amz-outpost-id'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CreateBucketConfiguration?: { LocationConstraint?: {} | undefined } | undefined
              }
            }
            output: CreateBucketResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'x-amz-acl'?:
                  | 'private'
                  | 'public-read'
                  | 'public-read-write'
                  | 'authenticated-read'
                  | undefined
                'x-amz-grant-full-control'?: string | undefined
                'x-amz-grant-read'?: string | undefined
                'x-amz-grant-read-acp'?: string | undefined
                'x-amz-grant-write'?: string | undefined
                'x-amz-grant-write-acp'?: string | undefined
                'x-amz-bucket-object-lock-enabled'?: boolean | undefined
                'x-amz-outpost-id'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CreateBucketConfiguration?: { LocationConstraint?: {} | undefined } | undefined
              }
            }
            output: BucketAlreadyExists
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'x-amz-acl'?:
                  | 'private'
                  | 'public-read'
                  | 'public-read-write'
                  | 'authenticated-read'
                  | undefined
                'x-amz-grant-full-control'?: string | undefined
                'x-amz-grant-read'?: string | undefined
                'x-amz-grant-read-acp'?: string | undefined
                'x-amz-grant-write'?: string | undefined
                'x-amz-grant-write-acp'?: string | undefined
                'x-amz-bucket-object-lock-enabled'?: boolean | undefined
                'x-amz-outpost-id'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CreateBucketConfiguration?: { LocationConstraint?: {} | undefined } | undefined
              }
            }
            output: BucketAlreadyOwnedByYou
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/v20180820/jobs#x-amz-account-id': {
      $post:
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ConfirmationRequired?: boolean | undefined
                Operation: {
                  LambdaInvoke?: { FunctionArn?: {} | undefined } | undefined
                  S3PutObjectCopy?:
                    | {
                        TargetResource?: {} | undefined
                        CannedAccessControlList?: {} | undefined
                        AccessControlGrants?: {} | undefined
                        MetadataDirective?: {} | undefined
                        ModifiedSinceConstraint?: {} | undefined
                        NewObjectMetadata?:
                          | {
                              CacheControl?: {} | undefined
                              ContentDisposition?: {} | undefined
                              ContentEncoding?: {} | undefined
                              ContentLanguage?: {} | undefined
                              UserMetadata?: {} | undefined
                              ContentLength?: {} | undefined
                              ContentMD5?: {} | undefined
                              ContentType?: {} | undefined
                              HttpExpiresDate?: {} | undefined
                              RequesterCharged?: {} | undefined
                              SSEAlgorithm?: {} | undefined
                            }
                          | undefined
                        NewObjectTagging?: {} | undefined
                        RedirectLocation?: {} | undefined
                        RequesterPays?: {} | undefined
                        StorageClass?: {} | undefined
                        UnModifiedSinceConstraint?: {} | undefined
                        SSEAwsKmsKeyId?: {} | undefined
                        TargetKeyPrefix?: {} | undefined
                        ObjectLockLegalHoldStatus?: {} | undefined
                        ObjectLockMode?: {} | undefined
                        ObjectLockRetainUntilDate?: {} | undefined
                        BucketKeyEnabled?: {} | undefined
                        ChecksumAlgorithm?: {} | undefined
                      }
                    | undefined
                  S3PutObjectAcl?:
                    | {
                        AccessControlPolicy?:
                          | {
                              AccessControlList?:
                                | {
                                    Owner: { ID?: {} | undefined; DisplayName?: {} | undefined }
                                    Grants?: {} | undefined
                                  }
                                | undefined
                              CannedAccessControlList?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  S3PutObjectTagging?: { TagSet?: {} | undefined } | undefined
                  S3DeleteObjectTagging?: {} | undefined
                  S3InitiateRestoreObject?:
                    | { ExpirationInDays?: {} | undefined; GlacierJobTier?: {} | undefined }
                    | undefined
                  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined
                  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined
                  S3ReplicateObject?: {} | undefined
                }
                Report: {
                  Bucket?: {} | undefined
                  Format?: {} | undefined
                  Enabled?: {} | undefined
                  Prefix?: {} | undefined
                  ReportScope?: {} | undefined
                }
                ClientRequestToken: string
                Manifest?:
                  | {
                      Spec?: { Format: {}; Fields?: {} | undefined } | undefined
                      Location?:
                        | { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
                        | undefined
                    }
                  | undefined
                Description?: string | undefined
                Priority: number
                RoleArn: string
                Tags?: S3Tag[] | undefined
                ManifestGenerator?:
                  | {
                      S3JobManifestGenerator?:
                        | {
                            ExpectedBucketOwner?: {} | undefined
                            SourceBucket: {}
                            ManifestOutputLocation?:
                              | {
                                  ExpectedManifestBucketOwner?: {} | undefined
                                  Bucket: {}
                                  ManifestPrefix?: {} | undefined
                                  ManifestEncryption?:
                                    | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                                    | undefined
                                  ManifestFormat: {}
                                }
                              | undefined
                            Filter?:
                              | {
                                  EligibleForReplication?: {} | undefined
                                  CreatedAfter?: {} | undefined
                                  CreatedBefore?: {} | undefined
                                  ObjectReplicationStatuses?: {} | undefined
                                }
                              | undefined
                            EnableManifestOutput: {}
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CreateJobResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ConfirmationRequired?: boolean | undefined
                Operation: {
                  LambdaInvoke?: { FunctionArn?: {} | undefined } | undefined
                  S3PutObjectCopy?:
                    | {
                        TargetResource?: {} | undefined
                        CannedAccessControlList?: {} | undefined
                        AccessControlGrants?: {} | undefined
                        MetadataDirective?: {} | undefined
                        ModifiedSinceConstraint?: {} | undefined
                        NewObjectMetadata?:
                          | {
                              CacheControl?: {} | undefined
                              ContentDisposition?: {} | undefined
                              ContentEncoding?: {} | undefined
                              ContentLanguage?: {} | undefined
                              UserMetadata?: {} | undefined
                              ContentLength?: {} | undefined
                              ContentMD5?: {} | undefined
                              ContentType?: {} | undefined
                              HttpExpiresDate?: {} | undefined
                              RequesterCharged?: {} | undefined
                              SSEAlgorithm?: {} | undefined
                            }
                          | undefined
                        NewObjectTagging?: {} | undefined
                        RedirectLocation?: {} | undefined
                        RequesterPays?: {} | undefined
                        StorageClass?: {} | undefined
                        UnModifiedSinceConstraint?: {} | undefined
                        SSEAwsKmsKeyId?: {} | undefined
                        TargetKeyPrefix?: {} | undefined
                        ObjectLockLegalHoldStatus?: {} | undefined
                        ObjectLockMode?: {} | undefined
                        ObjectLockRetainUntilDate?: {} | undefined
                        BucketKeyEnabled?: {} | undefined
                        ChecksumAlgorithm?: {} | undefined
                      }
                    | undefined
                  S3PutObjectAcl?:
                    | {
                        AccessControlPolicy?:
                          | {
                              AccessControlList?:
                                | {
                                    Owner: { ID?: {} | undefined; DisplayName?: {} | undefined }
                                    Grants?: {} | undefined
                                  }
                                | undefined
                              CannedAccessControlList?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  S3PutObjectTagging?: { TagSet?: {} | undefined } | undefined
                  S3DeleteObjectTagging?: {} | undefined
                  S3InitiateRestoreObject?:
                    | { ExpirationInDays?: {} | undefined; GlacierJobTier?: {} | undefined }
                    | undefined
                  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined
                  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined
                  S3ReplicateObject?: {} | undefined
                }
                Report: {
                  Bucket?: {} | undefined
                  Format?: {} | undefined
                  Enabled?: {} | undefined
                  Prefix?: {} | undefined
                  ReportScope?: {} | undefined
                }
                ClientRequestToken: string
                Manifest?:
                  | {
                      Spec?: { Format: {}; Fields?: {} | undefined } | undefined
                      Location?:
                        | { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
                        | undefined
                    }
                  | undefined
                Description?: string | undefined
                Priority: number
                RoleArn: string
                Tags?: S3Tag[] | undefined
                ManifestGenerator?:
                  | {
                      S3JobManifestGenerator?:
                        | {
                            ExpectedBucketOwner?: {} | undefined
                            SourceBucket: {}
                            ManifestOutputLocation?:
                              | {
                                  ExpectedManifestBucketOwner?: {} | undefined
                                  Bucket: {}
                                  ManifestPrefix?: {} | undefined
                                  ManifestEncryption?:
                                    | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                                    | undefined
                                  ManifestFormat: {}
                                }
                              | undefined
                            Filter?:
                              | {
                                  EligibleForReplication?: {} | undefined
                                  CreatedAfter?: {} | undefined
                                  CreatedBefore?: {} | undefined
                                  ObjectReplicationStatuses?: {} | undefined
                                }
                              | undefined
                            EnableManifestOutput: {}
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ConfirmationRequired?: boolean | undefined
                Operation: {
                  LambdaInvoke?: { FunctionArn?: {} | undefined } | undefined
                  S3PutObjectCopy?:
                    | {
                        TargetResource?: {} | undefined
                        CannedAccessControlList?: {} | undefined
                        AccessControlGrants?: {} | undefined
                        MetadataDirective?: {} | undefined
                        ModifiedSinceConstraint?: {} | undefined
                        NewObjectMetadata?:
                          | {
                              CacheControl?: {} | undefined
                              ContentDisposition?: {} | undefined
                              ContentEncoding?: {} | undefined
                              ContentLanguage?: {} | undefined
                              UserMetadata?: {} | undefined
                              ContentLength?: {} | undefined
                              ContentMD5?: {} | undefined
                              ContentType?: {} | undefined
                              HttpExpiresDate?: {} | undefined
                              RequesterCharged?: {} | undefined
                              SSEAlgorithm?: {} | undefined
                            }
                          | undefined
                        NewObjectTagging?: {} | undefined
                        RedirectLocation?: {} | undefined
                        RequesterPays?: {} | undefined
                        StorageClass?: {} | undefined
                        UnModifiedSinceConstraint?: {} | undefined
                        SSEAwsKmsKeyId?: {} | undefined
                        TargetKeyPrefix?: {} | undefined
                        ObjectLockLegalHoldStatus?: {} | undefined
                        ObjectLockMode?: {} | undefined
                        ObjectLockRetainUntilDate?: {} | undefined
                        BucketKeyEnabled?: {} | undefined
                        ChecksumAlgorithm?: {} | undefined
                      }
                    | undefined
                  S3PutObjectAcl?:
                    | {
                        AccessControlPolicy?:
                          | {
                              AccessControlList?:
                                | {
                                    Owner: { ID?: {} | undefined; DisplayName?: {} | undefined }
                                    Grants?: {} | undefined
                                  }
                                | undefined
                              CannedAccessControlList?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  S3PutObjectTagging?: { TagSet?: {} | undefined } | undefined
                  S3DeleteObjectTagging?: {} | undefined
                  S3InitiateRestoreObject?:
                    | { ExpirationInDays?: {} | undefined; GlacierJobTier?: {} | undefined }
                    | undefined
                  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined
                  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined
                  S3ReplicateObject?: {} | undefined
                }
                Report: {
                  Bucket?: {} | undefined
                  Format?: {} | undefined
                  Enabled?: {} | undefined
                  Prefix?: {} | undefined
                  ReportScope?: {} | undefined
                }
                ClientRequestToken: string
                Manifest?:
                  | {
                      Spec?: { Format: {}; Fields?: {} | undefined } | undefined
                      Location?:
                        | { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
                        | undefined
                    }
                  | undefined
                Description?: string | undefined
                Priority: number
                RoleArn: string
                Tags?: S3Tag[] | undefined
                ManifestGenerator?:
                  | {
                      S3JobManifestGenerator?:
                        | {
                            ExpectedBucketOwner?: {} | undefined
                            SourceBucket: {}
                            ManifestOutputLocation?:
                              | {
                                  ExpectedManifestBucketOwner?: {} | undefined
                                  Bucket: {}
                                  ManifestPrefix?: {} | undefined
                                  ManifestEncryption?:
                                    | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                                    | undefined
                                  ManifestFormat: {}
                                }
                              | undefined
                            Filter?:
                              | {
                                  EligibleForReplication?: {} | undefined
                                  CreatedAfter?: {} | undefined
                                  CreatedBefore?: {} | undefined
                                  ObjectReplicationStatuses?: {} | undefined
                                }
                              | undefined
                            EnableManifestOutput: {}
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ConfirmationRequired?: boolean | undefined
                Operation: {
                  LambdaInvoke?: { FunctionArn?: {} | undefined } | undefined
                  S3PutObjectCopy?:
                    | {
                        TargetResource?: {} | undefined
                        CannedAccessControlList?: {} | undefined
                        AccessControlGrants?: {} | undefined
                        MetadataDirective?: {} | undefined
                        ModifiedSinceConstraint?: {} | undefined
                        NewObjectMetadata?:
                          | {
                              CacheControl?: {} | undefined
                              ContentDisposition?: {} | undefined
                              ContentEncoding?: {} | undefined
                              ContentLanguage?: {} | undefined
                              UserMetadata?: {} | undefined
                              ContentLength?: {} | undefined
                              ContentMD5?: {} | undefined
                              ContentType?: {} | undefined
                              HttpExpiresDate?: {} | undefined
                              RequesterCharged?: {} | undefined
                              SSEAlgorithm?: {} | undefined
                            }
                          | undefined
                        NewObjectTagging?: {} | undefined
                        RedirectLocation?: {} | undefined
                        RequesterPays?: {} | undefined
                        StorageClass?: {} | undefined
                        UnModifiedSinceConstraint?: {} | undefined
                        SSEAwsKmsKeyId?: {} | undefined
                        TargetKeyPrefix?: {} | undefined
                        ObjectLockLegalHoldStatus?: {} | undefined
                        ObjectLockMode?: {} | undefined
                        ObjectLockRetainUntilDate?: {} | undefined
                        BucketKeyEnabled?: {} | undefined
                        ChecksumAlgorithm?: {} | undefined
                      }
                    | undefined
                  S3PutObjectAcl?:
                    | {
                        AccessControlPolicy?:
                          | {
                              AccessControlList?:
                                | {
                                    Owner: { ID?: {} | undefined; DisplayName?: {} | undefined }
                                    Grants?: {} | undefined
                                  }
                                | undefined
                              CannedAccessControlList?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  S3PutObjectTagging?: { TagSet?: {} | undefined } | undefined
                  S3DeleteObjectTagging?: {} | undefined
                  S3InitiateRestoreObject?:
                    | { ExpirationInDays?: {} | undefined; GlacierJobTier?: {} | undefined }
                    | undefined
                  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined
                  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined
                  S3ReplicateObject?: {} | undefined
                }
                Report: {
                  Bucket?: {} | undefined
                  Format?: {} | undefined
                  Enabled?: {} | undefined
                  Prefix?: {} | undefined
                  ReportScope?: {} | undefined
                }
                ClientRequestToken: string
                Manifest?:
                  | {
                      Spec?: { Format: {}; Fields?: {} | undefined } | undefined
                      Location?:
                        | { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
                        | undefined
                    }
                  | undefined
                Description?: string | undefined
                Priority: number
                RoleArn: string
                Tags?: S3Tag[] | undefined
                ManifestGenerator?:
                  | {
                      S3JobManifestGenerator?:
                        | {
                            ExpectedBucketOwner?: {} | undefined
                            SourceBucket: {}
                            ManifestOutputLocation?:
                              | {
                                  ExpectedManifestBucketOwner?: {} | undefined
                                  Bucket: {}
                                  ManifestPrefix?: {} | undefined
                                  ManifestEncryption?:
                                    | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                                    | undefined
                                  ManifestFormat: {}
                                }
                              | undefined
                            Filter?:
                              | {
                                  EligibleForReplication?: {} | undefined
                                  CreatedAfter?: {} | undefined
                                  CreatedBefore?: {} | undefined
                                  ObjectReplicationStatuses?: {} | undefined
                                }
                              | undefined
                            EnableManifestOutput: {}
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: IdempotencyException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ConfirmationRequired?: boolean | undefined
                Operation: {
                  LambdaInvoke?: { FunctionArn?: {} | undefined } | undefined
                  S3PutObjectCopy?:
                    | {
                        TargetResource?: {} | undefined
                        CannedAccessControlList?: {} | undefined
                        AccessControlGrants?: {} | undefined
                        MetadataDirective?: {} | undefined
                        ModifiedSinceConstraint?: {} | undefined
                        NewObjectMetadata?:
                          | {
                              CacheControl?: {} | undefined
                              ContentDisposition?: {} | undefined
                              ContentEncoding?: {} | undefined
                              ContentLanguage?: {} | undefined
                              UserMetadata?: {} | undefined
                              ContentLength?: {} | undefined
                              ContentMD5?: {} | undefined
                              ContentType?: {} | undefined
                              HttpExpiresDate?: {} | undefined
                              RequesterCharged?: {} | undefined
                              SSEAlgorithm?: {} | undefined
                            }
                          | undefined
                        NewObjectTagging?: {} | undefined
                        RedirectLocation?: {} | undefined
                        RequesterPays?: {} | undefined
                        StorageClass?: {} | undefined
                        UnModifiedSinceConstraint?: {} | undefined
                        SSEAwsKmsKeyId?: {} | undefined
                        TargetKeyPrefix?: {} | undefined
                        ObjectLockLegalHoldStatus?: {} | undefined
                        ObjectLockMode?: {} | undefined
                        ObjectLockRetainUntilDate?: {} | undefined
                        BucketKeyEnabled?: {} | undefined
                        ChecksumAlgorithm?: {} | undefined
                      }
                    | undefined
                  S3PutObjectAcl?:
                    | {
                        AccessControlPolicy?:
                          | {
                              AccessControlList?:
                                | {
                                    Owner: { ID?: {} | undefined; DisplayName?: {} | undefined }
                                    Grants?: {} | undefined
                                  }
                                | undefined
                              CannedAccessControlList?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  S3PutObjectTagging?: { TagSet?: {} | undefined } | undefined
                  S3DeleteObjectTagging?: {} | undefined
                  S3InitiateRestoreObject?:
                    | { ExpirationInDays?: {} | undefined; GlacierJobTier?: {} | undefined }
                    | undefined
                  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined
                  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined
                  S3ReplicateObject?: {} | undefined
                }
                Report: {
                  Bucket?: {} | undefined
                  Format?: {} | undefined
                  Enabled?: {} | undefined
                  Prefix?: {} | undefined
                  ReportScope?: {} | undefined
                }
                ClientRequestToken: string
                Manifest?:
                  | {
                      Spec?: { Format: {}; Fields?: {} | undefined } | undefined
                      Location?:
                        | { ObjectArn: {}; ObjectVersionId?: {} | undefined; ETag: {} }
                        | undefined
                    }
                  | undefined
                Description?: string | undefined
                Priority: number
                RoleArn: string
                Tags?: S3Tag[] | undefined
                ManifestGenerator?:
                  | {
                      S3JobManifestGenerator?:
                        | {
                            ExpectedBucketOwner?: {} | undefined
                            SourceBucket: {}
                            ManifestOutputLocation?:
                              | {
                                  ExpectedManifestBucketOwner?: {} | undefined
                                  Bucket: {}
                                  ManifestPrefix?: {} | undefined
                                  ManifestEncryption?:
                                    | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                                    | undefined
                                  ManifestFormat: {}
                                }
                              | undefined
                            Filter?:
                              | {
                                  EligibleForReplication?: {} | undefined
                                  CreatedAfter?: {} | undefined
                                  CreatedBefore?: {} | undefined
                                  ObjectReplicationStatuses?: {} | undefined
                                }
                              | undefined
                            EnableManifestOutput: {}
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 483
          }
      $get:
        | {
            input: {
              query: {
                jobStatuses?: JobStatus[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListJobsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                jobStatuses?: JobStatus[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                jobStatuses?: JobStatus[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                jobStatuses?: JobStatus[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/v20180820/async-requests/mrap/create#x-amz-account-id': {
      $post: {
        input: {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ClientToken: string
            Details: {
              Name?: {} | undefined
              PublicAccessBlock?: PublicAccessBlockConfiguration | undefined
              Regions?: {} | undefined
            }
          }
        }
        output: CreateMultiRegionAccessPointResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/accesspoint/:name/policy#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointPolicyResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointPolicyForObjectLambdaResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBucketResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBucketLifecycleConfigurationResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { LifecycleConfiguration?: { Rules?: {} | undefined } | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name/policy#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBucketPolicyResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'x-amz-confirm-remove-self-bucket-access'?: boolean | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name/replication#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBucketReplicationResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { ReplicationConfiguration: { Role?: {} | undefined; Rules?: {} | undefined } }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name/tagging#x-amz-account-id': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
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
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBucketTaggingResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tagging: { TagSet?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/jobs/:id/tagging#x-amz-account-id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteJobTaggingResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetJobTaggingResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: S3Tag[] } }
            output: PutJobTaggingResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: S3Tag[] } }
            output: InternalServiceException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: S3Tag[] } }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: S3Tag[] } }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: S3Tag[] } }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/v20180820/async-requests/mrap/delete#x-amz-account-id': {
      $post: {
        input: {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ClientToken: string; Details: { Name?: {} | undefined } } }
        output: DeleteMultiRegionAccessPointResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id': {
      $delete: {
        input: {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get:
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetPublicAccessBlockOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NoSuchPublicAccessBlockConfiguration
            outputFormat: 'text'
            status: 480
          }
      $put: {
        input: {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls?: {} | undefined
              IgnorePublicAcls?: {} | undefined
              BlockPublicPolicy?: {} | undefined
              RestrictPublicBuckets?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/storagelens/:storagelensid#x-amz-account-id': {
      $delete: {
        input: { param: { storagelensid: string } } & {
          header: {
            'x-amz-account-id': string
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
        status: 200
      }
      $get: {
        input: { param: { storagelensid: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetStorageLensConfigurationResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { storagelensid: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            StorageLensConfiguration: {
              Id?: {} | undefined
              AccountLevel?:
                | {
                    ActivityMetrics?: { IsEnabled?: {} | undefined } | undefined
                    BucketLevel: {
                      ActivityMetrics?: { IsEnabled?: {} | undefined } | undefined
                      PrefixLevel?:
                        | {
                            StorageMetrics: {
                              IsEnabled?: {} | undefined
                              SelectionCriteria?: SelectionCriteria | undefined
                            }
                          }
                        | undefined
                      AdvancedCostOptimizationMetrics?: { IsEnabled?: {} | undefined } | undefined
                      AdvancedDataProtectionMetrics?: { IsEnabled?: {} | undefined } | undefined
                      DetailedStatusCodesMetrics?: { IsEnabled?: {} | undefined } | undefined
                    }
                    AdvancedCostOptimizationMetrics?: { IsEnabled?: {} | undefined } | undefined
                    AdvancedDataProtectionMetrics?: { IsEnabled?: {} | undefined } | undefined
                    DetailedStatusCodesMetrics?: { IsEnabled?: {} | undefined } | undefined
                  }
                | undefined
              Include?: { Buckets?: {} | undefined; Regions?: {} | undefined } | undefined
              Exclude?: { Buckets?: {} | undefined; Regions?: {} | undefined } | undefined
              DataExport?:
                | {
                    S3BucketDestination?:
                      | {
                          Format: {}
                          OutputSchemaVersion: {}
                          AccountId: {}
                          Arn: {}
                          Prefix?: {} | undefined
                          Encryption?:
                            | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                            | undefined
                        }
                      | undefined
                    CloudWatchMetrics?: { IsEnabled: {} } | undefined
                  }
                | undefined
              IsEnabled?: {} | undefined
              AwsOrg?: { Arn: {} } | undefined
              StorageLensArn?: {} | undefined
            }
            Tags?: { Key: {}; Value: {} }[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id': {
      $delete: {
        input: { param: { storagelensid: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteStorageLensConfigurationTaggingResult
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { storagelensid: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetStorageLensConfigurationTaggingResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { storagelensid: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { Key: {}; Value: {} }[] } }
        output: PutStorageLensConfigurationTaggingResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/jobs/:id#x-amz-account-id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeJobResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
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
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/v20180820/async-requests/mrap/:request_token#x-amz-account-id': {
      $get: {
        input: { param: { request_token: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeMultiRegionAccessPointOperationResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/accesspointforobjectlambda/:name/configuration#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointConfigurationForObjectLambdaResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Configuration: {
              SupportingAccessPoint?: {} | undefined
              CloudWatchMetricsEnabled?: {} | undefined
              AllowedFeatures?: {} | undefined
              TransformationConfigurations?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/accesspoint/:name/policyStatus#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointPolicyStatusResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/accesspointforobjectlambda/:name/policyStatus#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessPointPolicyStatusForObjectLambdaResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/bucket/:name/versioning#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBucketVersioningResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'x-amz-mfa'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { VersioningConfiguration: { MFADelete?: {} | undefined; Status?: {} | undefined } }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v20180820/mrap/instances/:name#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMultiRegionAccessPointResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/mrap/instances/:name/policy#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMultiRegionAccessPointPolicyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/mrap/instances/:name/policystatus#x-amz-account-id': {
      $get: {
        input: { param: { name: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMultiRegionAccessPointPolicyStatusResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/mrap/instances/:mrap/routes#x-amz-account-id': {
      $get: {
        input: { param: { mrap: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMultiRegionAccessPointRoutesResult
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { mrap: string } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            RouteUpdates: {
              Bucket?: {} | undefined
              Region?: {} | undefined
              TrafficDialPercentage: {}
            }[]
          }
        }
        output: SubmitMultiRegionAccessPointRoutesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/accesspoint#x-amz-account-id': {
      $get: {
        input: {
          query: {
            bucket?: string | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAccessPointsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/accesspointforobjectlambda#x-amz-account-id': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAccessPointsForObjectLambdaResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/mrap/instances#x-amz-account-id': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListMultiRegionAccessPointsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/bucket#x-amz-account-id': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-account-id': string
            'x-amz-outpost-id'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListRegionalBucketsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/storagelens#x-amz-account-id': {
      $get: {
        input: { query: { nextToken?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListStorageLensConfigurationsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/async-requests/mrap/put-policy#x-amz-account-id': {
      $post: {
        input: {
          header: {
            'x-amz-account-id': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { ClientToken: string; Details: { Name?: {} | undefined; Policy?: {} | undefined } }
        }
        output: PutMultiRegionAccessPointPolicyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v20180820/jobs/:id/priority#x-amz-account-id&priority': {
      $post:
        | {
            input: { param: { id: string } } & { query: { priority: number } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateJobPriorityResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { priority: number } } & {
              header: {
                'x-amz-account-id': string
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
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { id: string } } & { query: { priority: number } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { id: string } } & { query: { priority: number } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { id: string } } & { query: { priority: number } } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/v20180820/jobs/:id/status#x-amz-account-id&requestedJobStatus': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                requestedJobStatus: 'Cancelled' | 'Ready'
                statusUpdateReason?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateJobStatusResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                requestedJobStatus: 'Cancelled' | 'Ready'
                statusUpdateReason?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
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
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              query: {
                requestedJobStatus: 'Cancelled' | 'Ready'
                statusUpdateReason?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              query: {
                requestedJobStatus: 'Cancelled' | 'Ready'
                statusUpdateReason?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { id: string } } & {
              query: {
                requestedJobStatus: 'Cancelled' | 'Ready'
                statusUpdateReason?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: JobStatusException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { id: string } } & {
              query: {
                requestedJobStatus: 'Cancelled' | 'Ready'
                statusUpdateReason?: string | undefined
              }
            } & {
              header: {
                'x-amz-account-id': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'text'
            status: 484
          }
    }
  },
  '/'
>
export default routes
