type AddLayerVersionPermissionResponse = { Statement?: {} | undefined; RevisionId?: {} | undefined }
type ServiceException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ResourceConflictException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type InvalidParameterValueException = { [x: string]: unknown }
type PolicyLengthExceededException = { [x: string]: unknown }
type PreconditionFailedException = { [x: string]: unknown }
type GetLayerVersionPolicyResponse = { Policy?: {} | undefined; RevisionId?: {} | undefined }
type AddPermissionResponse = { Statement?: {} | undefined }
type GetPolicyResponse = { Policy?: {} | undefined; RevisionId?: {} | undefined }
type AliasConfiguration = {
  AliasArn?: {} | undefined
  Name?: {} | undefined
  FunctionVersion?: {} | undefined
  Description?: {} | undefined
  RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
  RevisionId?: {} | undefined
}
type ListAliasesResponse = { NextMarker?: {} | undefined; Aliases?: {} | undefined }
type CreateCodeSigningConfigResponse = {
  CodeSigningConfig: {
    CodeSigningConfigId: {}
    CodeSigningConfigArn: {}
    Description?: {} | undefined
    AllowedPublishers: { SigningProfileVersionArns: {} }
    CodeSigningPolicies: { UntrustedArtifactOnDeployment?: {} | undefined }
    LastModified: {}
  }
}
type ListCodeSigningConfigsResponse = {
  NextMarker?: {} | undefined
  CodeSigningConfigs?: {} | undefined
}
type Topic = string
type Queue = string
type SourceAccessConfiguration = { Type?: {} | undefined; URI?: {} | undefined }
type FunctionResponseType = 'ReportBatchItemFailures'
type EventSourceMappingConfiguration = {
  UUID?: {} | undefined
  StartingPosition?: {} | undefined
  StartingPositionTimestamp?: {} | undefined
  BatchSize?: {} | undefined
  MaximumBatchingWindowInSeconds?: {} | undefined
  ParallelizationFactor?: {} | undefined
  EventSourceArn?: {} | undefined
  FilterCriteria?: { Filters?: {} | undefined } | undefined
  FunctionArn?: {} | undefined
  LastModified?: {} | undefined
  LastProcessingResult?: {} | undefined
  State?: {} | undefined
  StateTransitionReason?: {} | undefined
  DestinationConfig?:
    | {
        OnSuccess?: { Destination?: {} | undefined } | undefined
        OnFailure?: { Destination?: {} | undefined } | undefined
      }
    | undefined
  Topics?: {} | undefined
  Queues?: {} | undefined
  SourceAccessConfigurations?: {} | undefined
  SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
  MaximumRecordAgeInSeconds?: {} | undefined
  BisectBatchOnFunctionError?: {} | undefined
  MaximumRetryAttempts?: {} | undefined
  TumblingWindowInSeconds?: {} | undefined
  FunctionResponseTypes?: {} | undefined
  AmazonManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
  SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
  ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
  DocumentDBEventSourceConfig?:
    | {
        DatabaseName?: {} | undefined
        CollectionName?: {} | undefined
        FullDocument?: {} | undefined
      }
    | undefined
}
type ListEventSourceMappingsResponse = {
  NextMarker?: {} | undefined
  EventSourceMappings?: {} | undefined
}
type TagValue = string
type LayerVersionArn = string
type FileSystemConfig = { Arn: {}; LocalMountPath: {} }
type Architecture = 'x86_64' | 'arm64'
type FunctionConfiguration = {
  FunctionName?: {} | undefined
  FunctionArn?: {} | undefined
  Runtime?: {} | undefined
  Role?: {} | undefined
  Handler?: {} | undefined
  CodeSize?: {} | undefined
  Description?: {} | undefined
  Timeout?: {} | undefined
  MemorySize?: {} | undefined
  LastModified?: {} | undefined
  CodeSha256?: {} | undefined
  Version?: {} | undefined
  VpcConfig?:
    | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined; VpcId?: {} | undefined }
    | undefined
  DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
  Environment?:
    | {
        Variables?: {} | undefined
        Error?: { ErrorCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
  KMSKeyArn?: {} | undefined
  TracingConfig?: { Mode?: {} | undefined } | undefined
  MasterArn?: {} | undefined
  RevisionId?: {} | undefined
  Layers?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  StateReasonCode?: {} | undefined
  LastUpdateStatus?: {} | undefined
  LastUpdateStatusReason?: {} | undefined
  LastUpdateStatusReasonCode?: {} | undefined
  FileSystemConfigs?: {} | undefined
  PackageType?: {} | undefined
  ImageConfigResponse?:
    | {
        ImageConfig?:
          | {
              EntryPoint?: {} | undefined
              Command?: {} | undefined
              WorkingDirectory?: {} | undefined
            }
          | undefined
        Error?: { ErrorCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
  SigningProfileVersionArn?: {} | undefined
  SigningJobArn?: {} | undefined
  Architectures?: {} | undefined
  EphemeralStorage?: { Size: {} } | undefined
  SnapStart?: { ApplyOn?: {} | undefined; OptimizationStatus?: {} | undefined } | undefined
  RuntimeVersionConfig?:
    | {
        RuntimeVersionArn?: {} | undefined
        Error?: { ErrorCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type CodeStorageExceededException = { [x: string]: unknown }
type CodeVerificationFailedException = { [x: string]: unknown }
type InvalidCodeSignatureException = { [x: string]: unknown }
type CodeSigningConfigNotFoundException = { [x: string]: unknown }
type CreateFunctionUrlConfigResponse = {
  FunctionUrl: {}
  FunctionArn: {}
  AuthType: {}
  Cors?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreationTime: {}
  InvokeMode?: {} | undefined
}
type GetFunctionUrlConfigResponse = {
  FunctionUrl: {}
  FunctionArn: {}
  AuthType: {}
  Cors?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreationTime: {}
  LastModifiedTime: {}
  InvokeMode?: {} | undefined
}
type UpdateFunctionUrlConfigResponse = {
  FunctionUrl: {}
  FunctionArn: {}
  AuthType: {}
  Cors?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreationTime: {}
  LastModifiedTime: {}
  InvokeMode?: {} | undefined
}
type DeleteCodeSigningConfigResponse = { [x: string]: unknown }
type GetCodeSigningConfigResponse = {
  CodeSigningConfig: {
    CodeSigningConfigId: {}
    CodeSigningConfigArn: {}
    Description?: {} | undefined
    AllowedPublishers: { SigningProfileVersionArns: {} }
    CodeSigningPolicies: { UntrustedArtifactOnDeployment?: {} | undefined }
    LastModified: {}
  }
}
type UpdateCodeSigningConfigResponse = {
  CodeSigningConfig: {
    CodeSigningConfigId: {}
    CodeSigningConfigArn: {}
    Description?: {} | undefined
    AllowedPublishers: { SigningProfileVersionArns: {} }
    CodeSigningPolicies: { UntrustedArtifactOnDeployment?: {} | undefined }
    LastModified: {}
  }
}
type ResourceInUseException = { [x: string]: unknown }
type GetFunctionResponse = {
  Configuration?:
    | {
        FunctionName?: {} | undefined
        FunctionArn?: {} | undefined
        Runtime?: {} | undefined
        Role?: {} | undefined
        Handler?: {} | undefined
        CodeSize?: {} | undefined
        Description?: {} | undefined
        Timeout?: {} | undefined
        MemorySize?: {} | undefined
        LastModified?: {} | undefined
        CodeSha256?: {} | undefined
        Version?: {} | undefined
        VpcConfig?:
          | {
              SubnetIds?: {} | undefined
              SecurityGroupIds?: {} | undefined
              VpcId?: {} | undefined
            }
          | undefined
        DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
        Environment?:
          | {
              Variables?: {} | undefined
              Error?: { ErrorCode?: {} | undefined; Message?: {} | undefined } | undefined
            }
          | undefined
        KMSKeyArn?: {} | undefined
        TracingConfig?: { Mode?: {} | undefined } | undefined
        MasterArn?: {} | undefined
        RevisionId?: {} | undefined
        Layers?: {} | undefined
        State?: {} | undefined
        StateReason?: {} | undefined
        StateReasonCode?: {} | undefined
        LastUpdateStatus?: {} | undefined
        LastUpdateStatusReason?: {} | undefined
        LastUpdateStatusReasonCode?: {} | undefined
        FileSystemConfigs?: {} | undefined
        PackageType?: {} | undefined
        ImageConfigResponse?:
          | {
              ImageConfig?:
                | {
                    EntryPoint?: {} | undefined
                    Command?: {} | undefined
                    WorkingDirectory?: {} | undefined
                  }
                | undefined
              Error?: { ErrorCode?: {} | undefined; Message?: {} | undefined } | undefined
            }
          | undefined
        SigningProfileVersionArn?: {} | undefined
        SigningJobArn?: {} | undefined
        Architectures?: {} | undefined
        EphemeralStorage?: { Size: {} } | undefined
        SnapStart?: { ApplyOn?: {} | undefined; OptimizationStatus?: {} | undefined } | undefined
        RuntimeVersionConfig?:
          | {
              RuntimeVersionArn?: {} | undefined
              Error?: { ErrorCode?: {} | undefined; Message?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
  Code?:
    | {
        RepositoryType?: {} | undefined
        Location?: {} | undefined
        ImageUri?: {} | undefined
        ResolvedImageUri?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
  Concurrency?: { ReservedConcurrentExecutions?: {} | undefined } | undefined
}
type GetFunctionCodeSigningConfigResponse = { CodeSigningConfigArn: {}; FunctionName: {} }
type PutFunctionCodeSigningConfigResponse = { CodeSigningConfigArn: {}; FunctionName: {} }
type Concurrency = { ReservedConcurrentExecutions?: {} | undefined }
type FunctionEventInvokeConfig = {
  LastModified?: {} | undefined
  FunctionArn?: {} | undefined
  MaximumRetryAttempts?: {} | undefined
  MaximumEventAgeInSeconds?: {} | undefined
  DestinationConfig?:
    | {
        OnSuccess?: { Destination?: {} | undefined } | undefined
        OnFailure?: { Destination?: {} | undefined } | undefined
      }
    | undefined
}
type GetLayerVersionResponse = {
  Content?:
    | {
        Location?: {} | undefined
        CodeSha256?: {} | undefined
        CodeSize?: {} | undefined
        SigningProfileVersionArn?: {} | undefined
        SigningJobArn?: {} | undefined
      }
    | undefined
  LayerArn?: {} | undefined
  LayerVersionArn?: {} | undefined
  Description?: {} | undefined
  CreatedDate?: {} | undefined
  Version?: {} | undefined
  CompatibleRuntimes?: {} | undefined
  LicenseInfo?: {} | undefined
  CompatibleArchitectures?: {} | undefined
}
type GetProvisionedConcurrencyConfigResponse = {
  RequestedProvisionedConcurrentExecutions?: {} | undefined
  AvailableProvisionedConcurrentExecutions?: {} | undefined
  AllocatedProvisionedConcurrentExecutions?: {} | undefined
  Status?: {} | undefined
  StatusReason?: {} | undefined
  LastModified?: {} | undefined
}
type ProvisionedConcurrencyConfigNotFoundException = { [x: string]: unknown }
type PutProvisionedConcurrencyConfigResponse = {
  RequestedProvisionedConcurrentExecutions?: {} | undefined
  AvailableProvisionedConcurrentExecutions?: {} | undefined
  AllocatedProvisionedConcurrentExecutions?: {} | undefined
  Status?: {} | undefined
  StatusReason?: {} | undefined
  LastModified?: {} | undefined
}
type GetAccountSettingsResponse = {
  AccountLimit?:
    | {
        TotalCodeSize?: {} | undefined
        CodeSizeUnzipped?: {} | undefined
        CodeSizeZipped?: {} | undefined
        ConcurrentExecutions?: {} | undefined
        UnreservedConcurrentExecutions?: {} | undefined
      }
    | undefined
  AccountUsage?: { TotalCodeSize?: {} | undefined; FunctionCount?: {} | undefined } | undefined
}
type GetFunctionConcurrencyResponse = { ReservedConcurrentExecutions?: {} | undefined }
type GetRuntimeManagementConfigResponse = {
  UpdateRuntimeOn?: {} | undefined
  RuntimeVersionArn?: {} | undefined
  FunctionArn?: {} | undefined
}
type PutRuntimeManagementConfigResponse = {
  UpdateRuntimeOn: {}
  FunctionArn: {}
  RuntimeVersionArn?: {} | undefined
}
type InvocationResponse = { StatusCode?: {} | undefined; Payload?: {} | undefined }
type InvalidRequestContentException = { [x: string]: unknown }
type RequestTooLargeException = { [x: string]: unknown }
type UnsupportedMediaTypeException = { [x: string]: unknown }
type EC2UnexpectedException = { [x: string]: unknown }
type SubnetIPAddressLimitReachedException = { [x: string]: unknown }
type ENILimitReachedException = { [x: string]: unknown }
type EFSMountConnectivityException = { [x: string]: unknown }
type EFSMountFailureException = { [x: string]: unknown }
type EFSMountTimeoutException = { [x: string]: unknown }
type EFSIOException = { [x: string]: unknown }
type SnapStartException = { [x: string]: unknown }
type SnapStartTimeoutException = { [x: string]: unknown }
type SnapStartNotReadyException = { [x: string]: unknown }
type EC2ThrottledException = { [x: string]: unknown }
type EC2AccessDeniedException = { [x: string]: unknown }
type InvalidSubnetIDException = { [x: string]: unknown }
type InvalidSecurityGroupIDException = { [x: string]: unknown }
type InvalidZipFileException = { [x: string]: unknown }
type KMSDisabledException = { [x: string]: unknown }
type KMSInvalidStateException = { [x: string]: unknown }
type KMSAccessDeniedException = { [x: string]: unknown }
type KMSNotFoundException = { [x: string]: unknown }
type InvalidRuntimeException = { [x: string]: unknown }
type ResourceNotReadyException = { [x: string]: unknown }
type RecursiveInvocationException = { [x: string]: unknown }
type InvokeAsyncResponse = { Status?: {} | undefined }
type InvokeWithResponseStreamResponse = {
  StatusCode?: {} | undefined
  EventStream?:
    | {
        PayloadChunk?: { Payload?: {} | undefined } | undefined
        InvokeComplete?:
          | {
              ErrorCode?: {} | undefined
              ErrorDetails?: {} | undefined
              LogResult?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListFunctionEventInvokeConfigsResponse = {
  FunctionEventInvokeConfigs?: {} | undefined
  NextMarker?: {} | undefined
}
type ListFunctionUrlConfigsResponse = { FunctionUrlConfigs: {}; NextMarker?: {} | undefined }
type ListFunctionsResponse = { NextMarker?: {} | undefined; Functions?: {} | undefined }
type ListFunctionsByCodeSigningConfigResponse = {
  NextMarker?: {} | undefined
  FunctionArns?: {} | undefined
}
type ListLayerVersionsResponse = { NextMarker?: {} | undefined; LayerVersions?: {} | undefined }
type Runtime =
  | 'nodejs'
  | 'nodejs4.3'
  | 'nodejs6.10'
  | 'nodejs8.10'
  | 'nodejs10.x'
  | 'nodejs12.x'
  | 'nodejs14.x'
  | 'nodejs16.x'
  | 'java8'
  | 'java8.al2'
  | 'java11'
  | 'python2.7'
  | 'python3.6'
  | 'python3.7'
  | 'python3.8'
  | 'python3.9'
  | 'dotnetcore1.0'
  | 'dotnetcore2.0'
  | 'dotnetcore2.1'
  | 'dotnetcore3.1'
  | 'dotnet6'
  | 'nodejs4.3-edge'
  | 'go1.x'
  | 'ruby2.5'
  | 'ruby2.7'
  | 'provided'
  | 'provided.al2'
  | 'nodejs18.x'
  | 'python3.10'
  | 'java17'
  | 'ruby3.2'
  | 'python3.11'
type PublishLayerVersionResponse = {
  Content?:
    | {
        Location?: {} | undefined
        CodeSha256?: {} | undefined
        CodeSize?: {} | undefined
        SigningProfileVersionArn?: {} | undefined
        SigningJobArn?: {} | undefined
      }
    | undefined
  LayerArn?: {} | undefined
  LayerVersionArn?: {} | undefined
  Description?: {} | undefined
  CreatedDate?: {} | undefined
  Version?: {} | undefined
  CompatibleRuntimes?: {} | undefined
  LicenseInfo?: {} | undefined
  CompatibleArchitectures?: {} | undefined
}
type ListLayersResponse = { NextMarker?: {} | undefined; Layers?: {} | undefined }
type ListProvisionedConcurrencyConfigsResponse = {
  ProvisionedConcurrencyConfigs?: {} | undefined
  NextMarker?: {} | undefined
}
type ListTagsResponse = { Tags?: {} | undefined }
type ListVersionsByFunctionResponse = { NextMarker?: {} | undefined; Versions?: {} | undefined }
type TagKey = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy': {
      $post:
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: AddLayerVersionPermissionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: PolicyLengthExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
              query: { RevisionId?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                OrganizationId?: string | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: GetLayerVersionPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/policy': {
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: AddPermissionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: PolicyLengthExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                StatementId: string
                Action: string
                Principal: string
                SourceArn?: string | undefined
                SourceAccount?: string | undefined
                EventSourceToken?: string | undefined
                RevisionId?: string | undefined
                PrincipalOrgID?: string | undefined
                FunctionUrlAuthType?: 'NONE' | 'AWS_IAM' | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: GetPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/aliases': {
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                FunctionVersion: string
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
              }
            }
            output: AliasConfiguration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                FunctionVersion: string
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                FunctionVersion: string
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                FunctionVersion: string
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                FunctionVersion: string
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                FunctionVersion: string
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: {
                FunctionVersion?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: ListAliasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: {
                FunctionVersion?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: {
                FunctionVersion?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            input: { param: { FunctionName: string } } & {
              query: {
                FunctionVersion?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: {
                FunctionVersion?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2020-04-22/code-signing-configs/': {
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
                AllowedPublishers: { SigningProfileVersionArns?: {} | undefined }
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: CreateCodeSigningConfigResponse
            outputFormat: 'json'
            status: 201
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
                AllowedPublishers: { SigningProfileVersionArns?: {} | undefined }
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: ServiceException
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
                AllowedPublishers: { SigningProfileVersionArns?: {} | undefined }
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { query: { Marker?: string | undefined; MaxItems?: number | undefined } } & {
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
            output: ListCodeSigningConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Marker?: string | undefined; MaxItems?: number | undefined } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Marker?: string | undefined; MaxItems?: number | undefined } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/2015-03-31/event-source-mappings/': {
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
                EventSourceArn?: string | undefined
                FunctionName: string
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                ParallelizationFactor?: number | undefined
                StartingPosition?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
                StartingPositionTimestamp?: string | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                TumblingWindowInSeconds?: number | undefined
                Topics?: Topic[] | undefined
                Queues?: Queue[] | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                AmazonManagedKafkaEventSourceConfig?:
                  | { ConsumerGroupId?: {} | undefined }
                  | undefined
                SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: EventSourceMappingConfiguration
            outputFormat: 'json'
            status: 202
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
                EventSourceArn?: string | undefined
                FunctionName: string
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                ParallelizationFactor?: number | undefined
                StartingPosition?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
                StartingPositionTimestamp?: string | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                TumblingWindowInSeconds?: number | undefined
                Topics?: Topic[] | undefined
                Queues?: Queue[] | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                AmazonManagedKafkaEventSourceConfig?:
                  | { ConsumerGroupId?: {} | undefined }
                  | undefined
                SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
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
                EventSourceArn?: string | undefined
                FunctionName: string
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                ParallelizationFactor?: number | undefined
                StartingPosition?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
                StartingPositionTimestamp?: string | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                TumblingWindowInSeconds?: number | undefined
                Topics?: Topic[] | undefined
                Queues?: Queue[] | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                AmazonManagedKafkaEventSourceConfig?:
                  | { ConsumerGroupId?: {} | undefined }
                  | undefined
                SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InvalidParameterValueException
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
                EventSourceArn?: string | undefined
                FunctionName: string
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                ParallelizationFactor?: number | undefined
                StartingPosition?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
                StartingPositionTimestamp?: string | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                TumblingWindowInSeconds?: number | undefined
                Topics?: Topic[] | undefined
                Queues?: Queue[] | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                AmazonManagedKafkaEventSourceConfig?:
                  | { ConsumerGroupId?: {} | undefined }
                  | undefined
                SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceConflictException
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
                EventSourceArn?: string | undefined
                FunctionName: string
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                ParallelizationFactor?: number | undefined
                StartingPosition?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
                StartingPositionTimestamp?: string | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                TumblingWindowInSeconds?: number | undefined
                Topics?: Topic[] | undefined
                Queues?: Queue[] | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                AmazonManagedKafkaEventSourceConfig?:
                  | { ConsumerGroupId?: {} | undefined }
                  | undefined
                SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
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
                EventSourceArn?: string | undefined
                FunctionName: string
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                ParallelizationFactor?: number | undefined
                StartingPosition?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
                StartingPositionTimestamp?: string | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                TumblingWindowInSeconds?: number | undefined
                Topics?: Topic[] | undefined
                Queues?: Queue[] | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                SelfManagedEventSource?: { Endpoints?: {} | undefined } | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                AmazonManagedKafkaEventSourceConfig?:
                  | { ConsumerGroupId?: {} | undefined }
                  | undefined
                SelfManagedKafkaEventSourceConfig?: { ConsumerGroupId?: {} | undefined } | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                EventSourceArn?: string | undefined
                FunctionName?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: ListEventSourceMappingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EventSourceArn?: string | undefined
                FunctionName?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                EventSourceArn?: string | undefined
                FunctionName?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            input: {
              query: {
                EventSourceArn?: string | undefined
                FunctionName?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                EventSourceArn?: string | undefined
                FunctionName?: string | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-03-31/functions': {
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: FunctionConfiguration
            outputFormat: 'json'
            status: 201
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: ServiceException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: InvalidParameterValueException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: ResourceConflictException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: TooManyRequestsException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: CodeStorageExceededException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: CodeVerificationFailedException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: InvalidCodeSignatureException
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
                FunctionName: string
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Role: string
                Handler?: string | undefined
                Code: {
                  ZipFile?: {} | undefined
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ImageUri?: {} | undefined
                }
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                Publish?: boolean | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                PackageType?: 'Zip' | 'Image' | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                Tags?: { [x: string]: TagValue } | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                CodeSigningConfigArn?: string | undefined
                Architectures?: Architecture[] | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: CodeSigningConfigNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/2021-10-31/functions/:FunctionName/url': {
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType: 'NONE' | 'AWS_IAM'
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: CreateFunctionUrlConfigResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType: 'NONE' | 'AWS_IAM'
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType: 'NONE' | 'AWS_IAM'
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType: 'NONE' | 'AWS_IAM'
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType: 'NONE' | 'AWS_IAM'
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType: 'NONE' | 'AWS_IAM'
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: GetFunctionUrlConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType?: 'NONE' | 'AWS_IAM' | undefined
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: UpdateFunctionUrlConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType?: 'NONE' | 'AWS_IAM' | undefined
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType?: 'NONE' | 'AWS_IAM' | undefined
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType?: 'NONE' | 'AWS_IAM' | undefined
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType?: 'NONE' | 'AWS_IAM' | undefined
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                AuthType?: 'NONE' | 'AWS_IAM' | undefined
                Cors?:
                  | {
                      AllowCredentials?: {} | undefined
                      AllowHeaders?: {} | undefined
                      AllowMethods?: {} | undefined
                      AllowOrigins?: {} | undefined
                      ExposeHeaders?: {} | undefined
                      MaxAge?: {} | undefined
                    }
                  | undefined
                InvokeMode?: 'BUFFERED' | 'RESPONSE_STREAM' | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/aliases/:Name': {
      $delete:
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: AliasConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: AliasConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string; Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionVersion?: string | undefined
                Description?: string | undefined
                RoutingConfig?: { AdditionalVersionWeights?: {} | undefined } | undefined
                RevisionId?: string | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2020-04-22/code-signing-configs/:CodeSigningConfigArn': {
      $delete:
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: DeleteCodeSigningConfigResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: GetCodeSigningConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
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
      $put:
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                AllowedPublishers?: { SigningProfileVersionArns?: {} | undefined } | undefined
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: UpdateCodeSigningConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                AllowedPublishers?: { SigningProfileVersionArns?: {} | undefined } | undefined
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                AllowedPublishers?: { SigningProfileVersionArns?: {} | undefined } | undefined
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                AllowedPublishers?: { SigningProfileVersionArns?: {} | undefined } | undefined
                CodeSigningPolicies?: { UntrustedArtifactOnDeployment?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2015-03-31/event-source-mappings/:UUID': {
      $delete:
        | {
            input: { param: { UUID: string } } & {
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
            output: EventSourceMappingConfiguration
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { UUID: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UUID: string } } & {
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
            input: { param: { UUID: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UUID: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { UUID: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { UUID: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { UUID: string } } & {
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
            output: EventSourceMappingConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UUID: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UUID: string } } & {
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
            input: { param: { UUID: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UUID: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: EventSourceMappingConfiguration
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { UUID: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                FunctionName?: string | undefined
                Enabled?: boolean | undefined
                BatchSize?: number | undefined
                FilterCriteria?: { Filters?: {} | undefined } | undefined
                MaximumBatchingWindowInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
                MaximumRecordAgeInSeconds?: number | undefined
                BisectBatchOnFunctionError?: boolean | undefined
                MaximumRetryAttempts?: number | undefined
                ParallelizationFactor?: number | undefined
                SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined
                TumblingWindowInSeconds?: number | undefined
                FunctionResponseTypes?: FunctionResponseType[] | undefined
                ScalingConfig?: { MaximumConcurrency?: {} | undefined } | undefined
                DocumentDBEventSourceConfig?:
                  | {
                      DatabaseName?: {} | undefined
                      CollectionName?: {} | undefined
                      FullDocument?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName': {
      $delete:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: GetFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2020-06-30/functions/:FunctionName/code-signing-config': {
      $delete:
        | {
            input: { param: { FunctionName: string } } & {
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
        | {
            input: { param: { FunctionName: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: CodeSigningConfigNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            input: { param: { FunctionName: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & {
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
            output: GetFunctionCodeSigningConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            input: { param: { FunctionName: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: PutFunctionCodeSigningConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CodeSigningConfigArn: string } }
            output: CodeSigningConfigNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-10-31/functions/:FunctionName/concurrency': {
      $delete:
        | {
            input: { param: { FunctionName: string } } & {
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
        | {
            input: { param: { FunctionName: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            input: { param: { FunctionName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReservedConcurrentExecutions: number } }
            output: Concurrency
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReservedConcurrentExecutions: number } }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReservedConcurrentExecutions: number } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReservedConcurrentExecutions: number } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReservedConcurrentExecutions: number } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ReservedConcurrentExecutions: number } }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2019-09-25/functions/:FunctionName/event-invoke-config': {
      $delete:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: FunctionEventInvokeConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: FunctionEventInvokeConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: FunctionEventInvokeConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                MaximumRetryAttempts?: number | undefined
                MaximumEventAgeInSeconds?: number | undefined
                DestinationConfig?:
                  | {
                      OnSuccess?: { Destination?: {} | undefined } | undefined
                      OnFailure?: { Destination?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber': {
      $delete:
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: GetLayerVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number } } & {
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
            status: 483
          }
    }
  } & {
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier': {
      $delete:
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: GetProvisionedConcurrencyConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
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
            output: ProvisionedConcurrencyConfigNotFoundException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProvisionedConcurrentExecutions: number } }
            output: PutProvisionedConcurrencyConfigResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProvisionedConcurrentExecutions: number } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProvisionedConcurrentExecutions: number } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProvisionedConcurrentExecutions: number } }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProvisionedConcurrentExecutions: number } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & { query: { Qualifier: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ProvisionedConcurrentExecutions: number } }
            output: ServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2016-08-19/account-settings/': {
      $get:
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
            }
            output: GetAccountSettingsResponse
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
            }
            output: TooManyRequestsException
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
            }
            output: ServiceException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/2019-09-30/functions/:FunctionName/concurrency': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
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
            output: GetFunctionConcurrencyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            input: { param: { FunctionName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/configuration': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: FunctionConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: FunctionConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: CodeVerificationFailedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: InvalidCodeSignatureException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Role?: string | undefined
                Handler?: string | undefined
                Description?: string | undefined
                Timeout?: number | undefined
                MemorySize?: number | undefined
                VpcConfig?:
                  | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
                  | undefined
                Environment?: { Variables?: {} | undefined } | undefined
                Runtime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                DeadLetterConfig?: { TargetArn?: {} | undefined } | undefined
                KMSKeyArn?: string | undefined
                TracingConfig?: { Mode?: {} | undefined } | undefined
                RevisionId?: string | undefined
                Layers?: LayerVersionArn[] | undefined
                FileSystemConfigs?: FileSystemConfig[] | undefined
                ImageConfig?:
                  | {
                      EntryPoint?: {} | undefined
                      Command?: {} | undefined
                      WorkingDirectory?: {} | undefined
                    }
                  | undefined
                EphemeralStorage?: { Size?: {} | undefined } | undefined
                SnapStart?: { ApplyOn?: {} | undefined } | undefined
              }
            }
            output: CodeSigningConfigNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/2018-10-31/layers#find=LayerVersion&Arn': {
      $get:
        | {
            input: { query: { Arn: string; find: 'LayerVersion' } } & {
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
            output: GetLayerVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Arn: string; find: 'LayerVersion' } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Arn: string; find: 'LayerVersion' } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Arn: string; find: 'LayerVersion' } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Arn: string; find: 'LayerVersion' } } & {
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
            status: 483
          }
    }
  } & {
    '/2021-07-20/functions/:FunctionName/runtime-management-config': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: GetRuntimeManagementConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                UpdateRuntimeOn: 'Auto' | 'Manual' | 'FunctionUpdate'
                RuntimeVersionArn?: string | undefined
              }
            }
            output: PutRuntimeManagementConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                UpdateRuntimeOn: 'Auto' | 'Manual' | 'FunctionUpdate'
                RuntimeVersionArn?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                UpdateRuntimeOn: 'Auto' | 'Manual' | 'FunctionUpdate'
                RuntimeVersionArn?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                UpdateRuntimeOn: 'Auto' | 'Manual' | 'FunctionUpdate'
                RuntimeVersionArn?: string | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                UpdateRuntimeOn: 'Auto' | 'Manual' | 'FunctionUpdate'
                RuntimeVersionArn?: string | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
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
                UpdateRuntimeOn: 'Auto' | 'Manual' | 'FunctionUpdate'
                RuntimeVersionArn?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/invocations': {
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidRequestContentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: RequestTooLargeException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: UnsupportedMediaTypeException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EC2UnexpectedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SubnetIPAddressLimitReachedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ENILimitReachedException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSMountConnectivityException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSMountFailureException
            outputFormat: 'json'
            status: 491
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSMountTimeoutException
            outputFormat: 'json'
            status: 492
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSIOException
            outputFormat: 'json'
            status: 493
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SnapStartException
            outputFormat: 'json'
            status: 494
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SnapStartTimeoutException
            outputFormat: 'json'
            status: 495
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SnapStartNotReadyException
            outputFormat: 'json'
            status: 496
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EC2ThrottledException
            outputFormat: 'json'
            status: 497
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EC2AccessDeniedException
            outputFormat: 'json'
            status: 498
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidSubnetIDException
            outputFormat: 'json'
            status: 499
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidSecurityGroupIDException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidZipFileException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSDisabledException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSInvalidStateException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSAccessDeniedException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSNotFoundException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidRuntimeException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'Event' | 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: RecursiveInvocationException
            outputFormat: 'json'
            status: 509
          }
    }
  } & {
    '/2014-11-13/functions/:FunctionName/invoke-async/': {
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { InvokeArgs: string } }
            output: InvokeAsyncResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { InvokeArgs: string } }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { InvokeArgs: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { InvokeArgs: string } }
            output: InvalidRequestContentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { InvokeArgs: string } }
            output: InvalidRuntimeException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { InvokeArgs: string } }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2021-11-15/functions/:FunctionName/response-streaming-invocations': {
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvokeWithResponseStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidRequestContentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: RequestTooLargeException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: UnsupportedMediaTypeException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EC2UnexpectedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SubnetIPAddressLimitReachedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ENILimitReachedException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSMountConnectivityException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSMountFailureException
            outputFormat: 'json'
            status: 491
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSMountTimeoutException
            outputFormat: 'json'
            status: 492
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EFSIOException
            outputFormat: 'json'
            status: 493
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SnapStartException
            outputFormat: 'json'
            status: 494
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SnapStartTimeoutException
            outputFormat: 'json'
            status: 495
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: SnapStartNotReadyException
            outputFormat: 'json'
            status: 496
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EC2ThrottledException
            outputFormat: 'json'
            status: 497
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: EC2AccessDeniedException
            outputFormat: 'json'
            status: 498
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidSubnetIDException
            outputFormat: 'json'
            status: 499
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidSecurityGroupIDException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidZipFileException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSDisabledException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSInvalidStateException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSAccessDeniedException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: KMSNotFoundException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: InvalidRuntimeException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Qualifier?: string | undefined }
            } & {
              header: {
                'X-Amz-Invocation-Type'?: 'RequestResponse' | 'DryRun' | undefined
                'X-Amz-Log-Type'?: 'None' | 'Tail' | undefined
                'X-Amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Payload?: string | undefined } }
            output: RecursiveInvocationException
            outputFormat: 'json'
            status: 509
          }
    }
  } & {
    '/2019-09-25/functions/:FunctionName/event-invoke-config/list': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ListFunctionEventInvokeConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2021-10-31/functions/:FunctionName/urls': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ListFunctionUrlConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-03-31/functions/': {
      $get:
        | {
            input: {
              query: {
                MasterRegion?: string | undefined
                FunctionVersion?: 'ALL' | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: ListFunctionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                MasterRegion?: string | undefined
                FunctionVersion?: 'ALL' | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                MasterRegion?: string | undefined
                FunctionVersion?: 'ALL' | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                MasterRegion?: string | undefined
                FunctionVersion?: 'ALL' | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2020-04-22/code-signing-configs/:CodeSigningConfigArn/functions': {
      $get:
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ListFunctionsByCodeSigningConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeSigningConfigArn: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
    }
  } & {
    '/2018-10-31/layers/:LayerName/versions': {
      $get:
        | {
            input: { param: { LayerName: string } } & {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: ListLayerVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LayerName: string } } & {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string } } & {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { LayerName: string } } & {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            status: 482
          }
        | {
            input: { param: { LayerName: string } } & {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { LayerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                Content: {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ZipFile?: {} | undefined
                }
                CompatibleRuntimes?: Runtime[] | undefined
                LicenseInfo?: string | undefined
                CompatibleArchitectures?: Architecture[] | undefined
              }
            }
            output: PublishLayerVersionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { LayerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                Content: {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ZipFile?: {} | undefined
                }
                CompatibleRuntimes?: Runtime[] | undefined
                LicenseInfo?: string | undefined
                CompatibleArchitectures?: Architecture[] | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                Content: {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ZipFile?: {} | undefined
                }
                CompatibleRuntimes?: Runtime[] | undefined
                LicenseInfo?: string | undefined
                CompatibleArchitectures?: Architecture[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { LayerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                Content: {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ZipFile?: {} | undefined
                }
                CompatibleRuntimes?: Runtime[] | undefined
                LicenseInfo?: string | undefined
                CompatibleArchitectures?: Architecture[] | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { LayerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                Content: {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ZipFile?: {} | undefined
                }
                CompatibleRuntimes?: Runtime[] | undefined
                LicenseInfo?: string | undefined
                CompatibleArchitectures?: Architecture[] | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { LayerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
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
                Content: {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3ObjectVersion?: {} | undefined
                  ZipFile?: {} | undefined
                }
                CompatibleRuntimes?: Runtime[] | undefined
                LicenseInfo?: string | undefined
                CompatibleArchitectures?: Architecture[] | undefined
              }
            }
            output: CodeStorageExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2018-10-31/layers': {
      $get:
        | {
            input: {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: ListLayersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                CompatibleRuntime?:
                  | 'nodejs'
                  | 'nodejs4.3'
                  | 'nodejs6.10'
                  | 'nodejs8.10'
                  | 'nodejs10.x'
                  | 'nodejs12.x'
                  | 'nodejs14.x'
                  | 'nodejs16.x'
                  | 'java8'
                  | 'java8.al2'
                  | 'java11'
                  | 'python2.7'
                  | 'python3.6'
                  | 'python3.7'
                  | 'python3.8'
                  | 'python3.9'
                  | 'dotnetcore1.0'
                  | 'dotnetcore2.0'
                  | 'dotnetcore2.1'
                  | 'dotnetcore3.1'
                  | 'dotnet6'
                  | 'nodejs4.3-edge'
                  | 'go1.x'
                  | 'ruby2.5'
                  | 'ruby2.7'
                  | 'provided'
                  | 'provided.al2'
                  | 'nodejs18.x'
                  | 'python3.10'
                  | 'java17'
                  | 'ruby3.2'
                  | 'python3.11'
                  | undefined
                Marker?: string | undefined
                MaxItems?: number | undefined
                CompatibleArchitecture?: 'x86_64' | 'arm64' | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#List=ALL': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined; List: 'ALL' }
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
            output: ListProvisionedConcurrencyConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined; List: 'ALL' }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined; List: 'ALL' }
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
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined; List: 'ALL' }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined; List: 'ALL' }
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
            output: ServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2017-03-31/tags/:ARN': {
      $get:
        | {
            input: { param: { ARN: string } } & {
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
            output: ListTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ARN: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ARN: string } } & {
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
            input: { param: { ARN: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ARN: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { ARN: string } } & {
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
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ARN: string } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ARN: string } } & {
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
            input: { param: { ARN: string } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ARN: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ARN: string } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/versions': {
      $get:
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ListVersionsByFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              query: { Marker?: string | undefined; MaxItems?: number | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: FunctionConfiguration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: CodeStorageExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                CodeSha256?: string | undefined
                Description?: string | undefined
                RevisionId?: string | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy/:StatementId': {
      $delete:
        | {
            input: { param: { LayerName: string; VersionNumber: number; StatementId: string } } & {
              query: { RevisionId?: string | undefined }
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
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number; StatementId: string } } & {
              query: { RevisionId?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number; StatementId: string } } & {
              query: { RevisionId?: string | undefined }
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
            input: { param: { LayerName: string; VersionNumber: number; StatementId: string } } & {
              query: { RevisionId?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number; StatementId: string } } & {
              query: { RevisionId?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { LayerName: string; VersionNumber: number; StatementId: string } } & {
              query: { RevisionId?: string | undefined }
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
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/policy/:StatementId': {
      $delete:
        | {
            input: { param: { FunctionName: string; StatementId: string } } & {
              query: { Qualifier?: string | undefined; RevisionId?: string | undefined }
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
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { FunctionName: string; StatementId: string } } & {
              query: { Qualifier?: string | undefined; RevisionId?: string | undefined }
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string; StatementId: string } } & {
              query: { Qualifier?: string | undefined; RevisionId?: string | undefined }
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
            input: { param: { FunctionName: string; StatementId: string } } & {
              query: { Qualifier?: string | undefined; RevisionId?: string | undefined }
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string; StatementId: string } } & {
              query: { Qualifier?: string | undefined; RevisionId?: string | undefined }
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string; StatementId: string } } & {
              query: { Qualifier?: string | undefined; RevisionId?: string | undefined }
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
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2017-03-31/tags/:ARN#tagKeys': {
      $delete:
        | {
            input: { param: { ARN: string } } & { query: { tagKeys: TagKey[] } } & {
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
        | {
            input: { param: { ARN: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ARN: string } } & { query: { tagKeys: TagKey[] } } & {
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
            input: { param: { ARN: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ARN: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ARN: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-03-31/functions/:FunctionName/code': {
      $put:
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: FunctionConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: CodeStorageExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: CodeVerificationFailedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: InvalidCodeSignatureException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { param: { FunctionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ZipFile?: string | undefined
                S3Bucket?: string | undefined
                S3Key?: string | undefined
                S3ObjectVersion?: string | undefined
                ImageUri?: string | undefined
                Publish?: boolean | undefined
                DryRun?: boolean | undefined
                RevisionId?: string | undefined
                Architectures?: Architecture[] | undefined
              }
            }
            output: CodeSigningConfigNotFoundException
            outputFormat: 'json'
            status: 489
          }
    }
  },
  '/'
>
export default routes
