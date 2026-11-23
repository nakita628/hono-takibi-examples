type AddAssociationRequest = { SourceArn: {}; DestinationArn: {}; AssociationType?: {} | undefined }
type AddAssociationResponse = { SourceArn?: {} | undefined; DestinationArn?: {} | undefined }
type ResourceNotFound = { [x: string]: unknown }
type ResourceLimitExceeded = { [x: string]: unknown }
type AddTagsInput = { ResourceArn: {}; Tags: {} }
type AddTagsOutput = { Tags?: {} | undefined }
type AssociateTrialComponentRequest = { TrialComponentName: {}; TrialName: {} }
type AssociateTrialComponentResponse = {
  TrialComponentArn?: {} | undefined
  TrialArn?: {} | undefined
}
type BatchDescribeModelPackageInput = { ModelPackageArnList: {} }
type BatchDescribeModelPackageOutput = {
  ModelPackageSummaries?: {} | undefined
  BatchDescribeModelPackageErrorMap?: {} | undefined
}
type MetadataProperties = {
  CommitId?: {} | undefined
  Repository?: {} | undefined
  GeneratedBy?: {} | undefined
  ProjectId?: {} | undefined
}
type CreateActionRequest = {
  ActionName: {}
  Source: { SourceUri: {}; SourceType?: {} | undefined; SourceId?: {} | undefined }
  ActionType: {}
  Description?: {} | undefined
  Status?: {} | undefined
  Properties?: {} | undefined
  MetadataProperties?: MetadataProperties | undefined
  Tags?: {} | undefined
}
type CreateActionResponse = { ActionArn?: {} | undefined }
type CreateAlgorithmInput = {
  AlgorithmName: {}
  AlgorithmDescription?: {} | undefined
  TrainingSpecification: {
    TrainingImage: {}
    TrainingImageDigest?: {} | undefined
    SupportedHyperParameters?: {} | undefined
    SupportedTrainingInstanceTypes: {}
    SupportsDistributedTraining?: {} | undefined
    MetricDefinitions?: {} | undefined
    TrainingChannels: {}
    SupportedTuningJobObjectiveMetrics?: {} | undefined
  }
  InferenceSpecification?:
    | {
        Containers: {}
        SupportedTransformInstanceTypes?: {} | undefined
        SupportedRealtimeInferenceInstanceTypes?: {} | undefined
        SupportedContentTypes: {}
        SupportedResponseMIMETypes: {}
      }
    | undefined
  ValidationSpecification?: { ValidationRole: {}; ValidationProfiles: {} } | undefined
  CertifyForMarketplace?: {} | undefined
  Tags?: {} | undefined
}
type CreateAlgorithmOutput = { AlgorithmArn: {} }
type CreateAppRequest = {
  DomainId: {}
  UserProfileName?: {} | undefined
  AppType: {}
  AppName: {}
  Tags?: {} | undefined
  ResourceSpec?:
    | {
        SageMakerImageArn?: {} | undefined
        SageMakerImageVersionArn?: {} | undefined
        InstanceType?: {} | undefined
        LifecycleConfigArn?: {} | undefined
      }
    | undefined
  SpaceName?: {} | undefined
}
type CreateAppResponse = { AppArn?: {} | undefined }
type ResourceInUse = { [x: string]: unknown }
type CreateAppImageConfigRequest = {
  AppImageConfigName: {}
  Tags?: {} | undefined
  KernelGatewayImageConfig?:
    | {
        KernelSpecs: {}
        FileSystemConfig?:
          | { MountPath?: {} | undefined; DefaultUid?: {} | undefined; DefaultGid?: {} | undefined }
          | undefined
      }
    | undefined
}
type CreateAppImageConfigResponse = { AppImageConfigArn?: {} | undefined }
type CreateArtifactRequest = {
  ArtifactName?: {} | undefined
  Source: { SourceUri: {}; SourceTypes?: {} | undefined }
  ArtifactType: {}
  Properties?: {} | undefined
  MetadataProperties?: MetadataProperties | undefined
  Tags?: {} | undefined
}
type CreateArtifactResponse = { ArtifactArn?: {} | undefined }
type CreateAutoMLJobRequest = {
  AutoMLJobName: {}
  InputDataConfig: {}
  OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
  ProblemType?: {} | undefined
  AutoMLJobObjective?: { MetricName: {} } | undefined
  AutoMLJobConfig?:
    | {
        CompletionCriteria?:
          | {
              MaxCandidates?: {} | undefined
              MaxRuntimePerTrainingJobInSeconds?: {} | undefined
              MaxAutoMLJobRuntimeInSeconds?: {} | undefined
            }
          | undefined
        SecurityConfig?:
          | {
              VolumeKmsKeyId?: {} | undefined
              EnableInterContainerTrafficEncryption?: {} | undefined
              VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
            }
          | undefined
        DataSplitConfig?: { ValidationFraction?: {} | undefined } | undefined
        CandidateGenerationConfig?:
          | { FeatureSpecificationS3Uri?: {} | undefined; AlgorithmsConfig?: {} | undefined }
          | undefined
        Mode?: {} | undefined
      }
    | undefined
  RoleArn: {}
  GenerateCandidateDefinitionsOnly?: {} | undefined
  Tags?: {} | undefined
  ModelDeployConfig?:
    | { AutoGenerateEndpointName?: {} | undefined; EndpointName?: {} | undefined }
    | undefined
}
type CreateAutoMLJobResponse = { AutoMLJobArn: {} }
type CreateAutoMLJobV2Request = {
  AutoMLJobName: {}
  AutoMLJobInputDataConfig: {}
  OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
  AutoMLProblemTypeConfig: {
    ImageClassificationJobConfig?:
      | {
          CompletionCriteria?:
            | {
                MaxCandidates?: {} | undefined
                MaxRuntimePerTrainingJobInSeconds?: {} | undefined
                MaxAutoMLJobRuntimeInSeconds?: {} | undefined
              }
            | undefined
        }
      | undefined
    TextClassificationJobConfig?:
      | {
          CompletionCriteria?:
            | {
                MaxCandidates?: {} | undefined
                MaxRuntimePerTrainingJobInSeconds?: {} | undefined
                MaxAutoMLJobRuntimeInSeconds?: {} | undefined
              }
            | undefined
          ContentColumn?: {} | undefined
          TargetLabelColumn?: {} | undefined
        }
      | undefined
  }
  RoleArn: {}
  Tags?: {} | undefined
  SecurityConfig?:
    | {
        VolumeKmsKeyId?: {} | undefined
        EnableInterContainerTrafficEncryption?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
      }
    | undefined
  AutoMLJobObjective?: { MetricName: {} } | undefined
  ModelDeployConfig?:
    | { AutoGenerateEndpointName?: {} | undefined; EndpointName?: {} | undefined }
    | undefined
  DataSplitConfig?: { ValidationFraction?: {} | undefined } | undefined
}
type CreateAutoMLJobV2Response = { AutoMLJobArn: {} }
type CreateCodeRepositoryInput = {
  CodeRepositoryName: {}
  GitConfig: { RepositoryUrl: {}; Branch?: {} | undefined; SecretArn?: {} | undefined }
  Tags?: {} | undefined
}
type CreateCodeRepositoryOutput = { CodeRepositoryArn: {} }
type CreateCompilationJobRequest = {
  CompilationJobName: {}
  RoleArn: {}
  ModelPackageVersionArn?: {} | undefined
  InputConfig?:
    | { S3Uri: {}; DataInputConfig: {}; Framework: {}; FrameworkVersion?: {} | undefined }
    | undefined
  OutputConfig: {
    S3OutputLocation: {}
    TargetDevice?: {} | undefined
    TargetPlatform?: { Os: {}; Arch: {}; Accelerator?: {} | undefined } | undefined
    CompilerOptions?: {} | undefined
    KmsKeyId?: {} | undefined
  }
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  StoppingCondition: { MaxRuntimeInSeconds?: {} | undefined; MaxWaitTimeInSeconds?: {} | undefined }
  Tags?: {} | undefined
}
type CreateCompilationJobResponse = { CompilationJobArn: {} }
type CreateContextRequest = {
  ContextName: {}
  Source: { SourceUri: {}; SourceType?: {} | undefined; SourceId?: {} | undefined }
  ContextType: {}
  Description?: {} | undefined
  Properties?: {} | undefined
  Tags?: {} | undefined
}
type CreateContextResponse = { ContextArn?: {} | undefined }
type MonitoringConstraintsResource = { S3Uri?: {} | undefined }
type MonitoringStatisticsResource = { S3Uri?: {} | undefined }
type EndpointInput = {
  EndpointName: {}
  LocalPath: {}
  S3InputMode?: {} | undefined
  S3DataDistributionType?: {} | undefined
  FeaturesAttribute?: {} | undefined
  InferenceAttribute?: {} | undefined
  ProbabilityAttribute?: {} | undefined
  ProbabilityThresholdAttribute?: {} | undefined
  StartTimeOffset?: {} | undefined
  EndTimeOffset?: {} | undefined
}
type MonitoringOutputConfig = { MonitoringOutputs: {}; KmsKeyId?: {} | undefined }
type MonitoringResources = {
  ClusterConfig: {
    InstanceCount: {}
    InstanceType: {}
    VolumeSizeInGB: {}
    VolumeKmsKeyId?: {} | undefined
  }
}
type VpcConfig = { SecurityGroupIds: {}; Subnets: {} }
type MonitoringStoppingCondition = { MaxRuntimeInSeconds: {} }
type CreateDataQualityJobDefinitionRequest = {
  JobDefinitionName: {}
  DataQualityBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
        StatisticsResource?: MonitoringStatisticsResource | undefined
      }
    | undefined
  DataQualityAppSpecification: {
    ImageUri: {}
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
    RecordPreprocessorSourceUri?: {} | undefined
    PostAnalyticsProcessorSourceUri?: {} | undefined
    Environment?: {} | undefined
  }
  DataQualityJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
  }
  DataQualityJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
  Tags?: {} | undefined
}
type CreateDataQualityJobDefinitionResponse = { JobDefinitionArn: {} }
type CreateDeviceFleetRequest = {
  DeviceFleetName: {}
  RoleArn?: {} | undefined
  Description?: {} | undefined
  OutputConfig: {
    S3OutputLocation: {}
    KmsKeyId?: {} | undefined
    PresetDeploymentType?: {} | undefined
    PresetDeploymentConfig?: {} | undefined
  }
  Tags?: {} | undefined
  EnableIotRoleAlias?: {} | undefined
}
type ResourceSpec = {
  SageMakerImageArn?: {} | undefined
  SageMakerImageVersionArn?: {} | undefined
  InstanceType?: {} | undefined
  LifecycleConfigArn?: {} | undefined
}
type JupyterServerAppSettings = {
  DefaultResourceSpec?:
    | {
        SageMakerImageArn?: {} | undefined
        SageMakerImageVersionArn?: {} | undefined
        InstanceType?: {} | undefined
        LifecycleConfigArn?: {} | undefined
      }
    | undefined
  LifecycleConfigArns?: {} | undefined
  CodeRepositories?: {} | undefined
}
type KernelGatewayAppSettings = {
  DefaultResourceSpec?:
    | {
        SageMakerImageArn?: {} | undefined
        SageMakerImageVersionArn?: {} | undefined
        InstanceType?: {} | undefined
        LifecycleConfigArn?: {} | undefined
      }
    | undefined
  CustomImages?: {} | undefined
  LifecycleConfigArns?: {} | undefined
}
type CreateDomainRequest = {
  DomainName: {}
  AuthMode: {}
  DefaultUserSettings: {
    ExecutionRole?: {} | undefined
    SecurityGroups?: {} | undefined
    SharingSettings?:
      | {
          NotebookOutputOption?: {} | undefined
          S3OutputPath?: {} | undefined
          S3KmsKeyId?: {} | undefined
        }
      | undefined
    JupyterServerAppSettings?:
      | {
          DefaultResourceSpec?:
            | {
                SageMakerImageArn?: {} | undefined
                SageMakerImageVersionArn?: {} | undefined
                InstanceType?: {} | undefined
                LifecycleConfigArn?: {} | undefined
              }
            | undefined
          LifecycleConfigArns?: {} | undefined
          CodeRepositories?: {} | undefined
        }
      | undefined
    KernelGatewayAppSettings?:
      | {
          DefaultResourceSpec?:
            | {
                SageMakerImageArn?: {} | undefined
                SageMakerImageVersionArn?: {} | undefined
                InstanceType?: {} | undefined
                LifecycleConfigArn?: {} | undefined
              }
            | undefined
          CustomImages?: {} | undefined
          LifecycleConfigArns?: {} | undefined
        }
      | undefined
    TensorBoardAppSettings?:
      | {
          DefaultResourceSpec?:
            | {
                SageMakerImageArn?: {} | undefined
                SageMakerImageVersionArn?: {} | undefined
                InstanceType?: {} | undefined
                LifecycleConfigArn?: {} | undefined
              }
            | undefined
        }
      | undefined
    RStudioServerProAppSettings?:
      | { AccessStatus?: {} | undefined; UserGroup?: {} | undefined }
      | undefined
    RSessionAppSettings?:
      | { DefaultResourceSpec?: ResourceSpec | undefined; CustomImages?: {} | undefined }
      | undefined
    CanvasAppSettings?:
      | {
          TimeSeriesForecastingSettings?:
            | { Status?: {} | undefined; AmazonForecastRoleArn?: {} | undefined }
            | undefined
          ModelRegisterSettings?:
            | { Status?: {} | undefined; CrossAccountModelRegisterRoleArn?: {} | undefined }
            | undefined
        }
      | undefined
  }
  SubnetIds: {}
  VpcId: {}
  Tags?: {} | undefined
  AppNetworkAccessType?: {} | undefined
  HomeEfsFileSystemKmsKeyId?: {} | undefined
  KmsKeyId?: {} | undefined
  AppSecurityGroupManagement?: {} | undefined
  DomainSettings?:
    | {
        SecurityGroupIds?: {} | undefined
        RStudioServerProDomainSettings?:
          | {
              DomainExecutionRoleArn: {}
              RStudioConnectUrl?: {} | undefined
              RStudioPackageManagerUrl?: {} | undefined
              DefaultResourceSpec?: ResourceSpec | undefined
            }
          | undefined
        ExecutionRoleIdentityConfig?: {} | undefined
      }
    | undefined
  DefaultSpaceSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        JupyterServerAppSettings?: JupyterServerAppSettings | undefined
        KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined
      }
    | undefined
}
type CreateDomainResponse = { DomainArn?: {} | undefined; Url?: {} | undefined }
type CreateEdgeDeploymentPlanRequest = {
  EdgeDeploymentPlanName: {}
  ModelConfigs: {}
  DeviceFleetName: {}
  Stages?: {} | undefined
  Tags?: {} | undefined
}
type CreateEdgeDeploymentPlanResponse = { EdgeDeploymentPlanArn: {} }
type CreateEdgeDeploymentStageRequest = { EdgeDeploymentPlanName: {}; Stages: {} }
type CreateEdgePackagingJobRequest = {
  EdgePackagingJobName: {}
  CompilationJobName: {}
  ModelName: {}
  ModelVersion: {}
  RoleArn: {}
  OutputConfig: {
    S3OutputLocation: {}
    KmsKeyId?: {} | undefined
    PresetDeploymentType?: {} | undefined
    PresetDeploymentConfig?: {} | undefined
  }
  ResourceKey?: {} | undefined
  Tags?: {} | undefined
}
type DeploymentConfig = {
  BlueGreenUpdatePolicy: {
    TrafficRoutingConfiguration: {
      Type: {}
      WaitIntervalInSeconds: {}
      CanarySize?: { Type: {}; Value: {} } | undefined
      LinearStepSize?: { Type: {}; Value: {} } | undefined
    }
    TerminationWaitInSeconds?: {} | undefined
    MaximumExecutionTimeoutInSeconds?: {} | undefined
  }
  AutoRollbackConfiguration?: { Alarms?: {} | undefined } | undefined
}
type CreateEndpointInput = {
  EndpointName: {}
  EndpointConfigName: {}
  DeploymentConfig?: DeploymentConfig | undefined
  Tags?: {} | undefined
}
type CreateEndpointOutput = { EndpointArn: {} }
type DataCaptureConfig = {
  EnableCapture?: {} | undefined
  InitialSamplingPercentage: {}
  DestinationS3Uri: {}
  KmsKeyId?: {} | undefined
  CaptureOptions: {}
  CaptureContentTypeHeader?:
    | { CsvContentTypes?: {} | undefined; JsonContentTypes?: {} | undefined }
    | undefined
}
type CreateEndpointConfigInput = {
  EndpointConfigName: {}
  ProductionVariants: {}
  DataCaptureConfig?: DataCaptureConfig | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  AsyncInferenceConfig?:
    | {
        ClientConfig?: { MaxConcurrentInvocationsPerInstance?: {} | undefined } | undefined
        OutputConfig: {
          KmsKeyId?: {} | undefined
          S3OutputPath?: {} | undefined
          NotificationConfig?:
            | {
                SuccessTopic?: {} | undefined
                ErrorTopic?: {} | undefined
                IncludeInferenceResponseIn?: {} | undefined
              }
            | undefined
          S3FailurePath?: {} | undefined
        }
      }
    | undefined
  ExplainerConfig?:
    | {
        ClarifyExplainerConfig?:
          | {
              EnableExplanations?: {} | undefined
              InferenceConfig?:
                | {
                    FeaturesAttribute?: {} | undefined
                    ContentTemplate?: {} | undefined
                    MaxRecordCount?: {} | undefined
                    MaxPayloadInMB?: {} | undefined
                    ProbabilityIndex?: {} | undefined
                    LabelIndex?: {} | undefined
                    ProbabilityAttribute?: {} | undefined
                    LabelAttribute?: {} | undefined
                    LabelHeaders?: {} | undefined
                    FeatureHeaders?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
              ShapConfig: {
                ShapBaselineConfig: {
                  MimeType?: {} | undefined
                  ShapBaseline?: {} | undefined
                  ShapBaselineUri?: {} | undefined
                }
                NumberOfSamples?: {} | undefined
                UseLogit?: {} | undefined
                Seed?: {} | undefined
                TextConfig?: { Language: {}; Granularity: {} } | undefined
              }
            }
          | undefined
      }
    | undefined
  ShadowProductionVariants?: {} | undefined
}
type CreateEndpointConfigOutput = { EndpointConfigArn: {} }
type CreateExperimentRequest = {
  ExperimentName: {}
  DisplayName?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateExperimentResponse = { ExperimentArn?: {} | undefined }
type CreateFeatureGroupRequest = {
  FeatureGroupName: {}
  RecordIdentifierFeatureName: {}
  EventTimeFeatureName: {}
  FeatureDefinitions: {}
  OnlineStoreConfig?:
    | {
        SecurityConfig?: { KmsKeyId?: {} | undefined } | undefined
        EnableOnlineStore?: {} | undefined
      }
    | undefined
  OfflineStoreConfig?:
    | {
        S3StorageConfig: {
          S3Uri: {}
          KmsKeyId?: {} | undefined
          ResolvedOutputS3Uri?: {} | undefined
        }
        DisableGlueTableCreation?: {} | undefined
        DataCatalogConfig?: { TableName: {}; Catalog: {}; Database: {} } | undefined
        TableFormat?: {} | undefined
      }
    | undefined
  RoleArn?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateFeatureGroupResponse = { FeatureGroupArn: {} }
type PublicWorkforceTaskPrice = {
  AmountInUsd?:
    | { Dollars?: {} | undefined; Cents?: {} | undefined; TenthFractionsOfACent?: {} | undefined }
    | undefined
}
type CreateFlowDefinitionRequest = {
  FlowDefinitionName: {}
  HumanLoopRequestSource?: { AwsManagedHumanLoopRequestSource: {} } | undefined
  HumanLoopActivationConfig?:
    | { HumanLoopActivationConditionsConfig: { HumanLoopActivationConditions: {} } }
    | undefined
  HumanLoopConfig: {
    WorkteamArn: {}
    HumanTaskUiArn: {}
    TaskTitle: {}
    TaskDescription: {}
    TaskCount: {}
    TaskAvailabilityLifetimeInSeconds?: {} | undefined
    TaskTimeLimitInSeconds?: {} | undefined
    TaskKeywords?: {} | undefined
    PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice | undefined
  }
  OutputConfig: { S3OutputPath: {}; KmsKeyId?: {} | undefined }
  RoleArn: {}
  Tags?: {} | undefined
}
type CreateFlowDefinitionResponse = { FlowDefinitionArn: {} }
type CreateHubRequest = {
  HubName: {}
  HubDescription: {}
  HubDisplayName?: {} | undefined
  HubSearchKeywords?: {} | undefined
  S3StorageConfig?: { S3OutputPath?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type CreateHubResponse = { HubArn: {} }
type UiTemplate = { Content: {} }
type CreateHumanTaskUiRequest = {
  HumanTaskUiName: {}
  UiTemplate: UiTemplate
  Tags?: {} | undefined
}
type CreateHumanTaskUiResponse = { HumanTaskUiArn: {} }
type HyperParameterTuningJobObjective = { Type: {}; MetricName: {} }
type ParameterRanges = {
  IntegerParameterRanges?: {} | undefined
  ContinuousParameterRanges?: {} | undefined
  CategoricalParameterRanges?: {} | undefined
}
type TrainingInputMode = 'Pipe' | 'File' | 'FastFile'
type CheckpointConfig = { S3Uri: {}; LocalPath?: {} | undefined }
type CreateHyperParameterTuningJobRequest = {
  HyperParameterTuningJobName: {}
  HyperParameterTuningJobConfig: {
    Strategy: {}
    StrategyConfig?:
      | {
          HyperbandStrategyConfig?:
            | { MinResource?: {} | undefined; MaxResource?: {} | undefined }
            | undefined
        }
      | undefined
    HyperParameterTuningJobObjective?: { Type: {}; MetricName: {} } | undefined
    ResourceLimits: {
      MaxNumberOfTrainingJobs?: {} | undefined
      MaxParallelTrainingJobs: {}
      MaxRuntimeInSeconds?: {} | undefined
    }
    ParameterRanges?:
      | {
          IntegerParameterRanges?: {} | undefined
          ContinuousParameterRanges?: {} | undefined
          CategoricalParameterRanges?: {} | undefined
        }
      | undefined
    TrainingJobEarlyStoppingType?: {} | undefined
    TuningJobCompletionCriteria?:
      | {
          TargetObjectiveMetricValue?: {} | undefined
          BestObjectiveNotImproving?:
            | { MaxNumberOfTrainingJobsNotImproving?: {} | undefined }
            | undefined
          ConvergenceDetected?: { CompleteOnConvergence?: {} | undefined } | undefined
        }
      | undefined
    RandomSeed?: {} | undefined
  }
  TrainingJobDefinition?:
    | {
        DefinitionName?: {} | undefined
        TuningObjective?: HyperParameterTuningJobObjective | undefined
        HyperParameterRanges?: ParameterRanges | undefined
        StaticHyperParameters?: {} | undefined
        AlgorithmSpecification: {
          TrainingImage?: {} | undefined
          TrainingInputMode: TrainingInputMode
          AlgorithmName?: {} | undefined
          MetricDefinitions?: {} | undefined
        }
        RoleArn: {}
        InputDataConfig?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
        OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
        ResourceConfig?:
          | {
              InstanceType?: {} | undefined
              InstanceCount?: {} | undefined
              VolumeSizeInGB: {}
              VolumeKmsKeyId?: {} | undefined
              InstanceGroups?: {} | undefined
              KeepAlivePeriodInSeconds?: {} | undefined
            }
          | undefined
        StoppingCondition: {
          MaxRuntimeInSeconds?: {} | undefined
          MaxWaitTimeInSeconds?: {} | undefined
        }
        EnableNetworkIsolation?: {} | undefined
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableManagedSpotTraining?: {} | undefined
        CheckpointConfig?: CheckpointConfig | undefined
        RetryStrategy?: { MaximumRetryAttempts: {} } | undefined
        HyperParameterTuningResourceConfig?:
          | {
              InstanceType?: {} | undefined
              InstanceCount?: {} | undefined
              VolumeSizeInGB?: {} | undefined
              VolumeKmsKeyId?: {} | undefined
              AllocationStrategy?: {} | undefined
              InstanceConfigs?: {} | undefined
            }
          | undefined
        Environment?: {} | undefined
      }
    | undefined
  TrainingJobDefinitions?: {} | undefined
  WarmStartConfig?: { ParentHyperParameterTuningJobs: {}; WarmStartType: {} } | undefined
  Tags?: {} | undefined
}
type CreateHyperParameterTuningJobResponse = { HyperParameterTuningJobArn: {} }
type CreateImageRequest = {
  Description?: {} | undefined
  DisplayName?: {} | undefined
  ImageName: {}
  RoleArn: {}
  Tags?: {} | undefined
}
type CreateImageResponse = { ImageArn?: {} | undefined }
type CreateImageVersionRequest = {
  BaseImage: {}
  ClientToken: {}
  ImageName: {}
  Aliases?: {} | undefined
  VendorGuidance?: {} | undefined
  JobType?: {} | undefined
  MLFramework?: {} | undefined
  ProgrammingLang?: {} | undefined
  Processor?: {} | undefined
  Horovod?: {} | undefined
  ReleaseNotes?: {} | undefined
}
type CreateImageVersionResponse = { ImageVersionArn?: {} | undefined }
type CaptureContentTypeHeader = {
  CsvContentTypes?: {} | undefined
  JsonContentTypes?: {} | undefined
}
type CreateInferenceExperimentRequest = {
  Name: {}
  Type: {}
  Schedule?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  Description?: {} | undefined
  RoleArn: {}
  EndpointName: {}
  ModelVariants: {}
  DataStorageConfig?:
    | {
        Destination: {}
        KmsKey?: {} | undefined
        ContentType?: CaptureContentTypeHeader | undefined
      }
    | undefined
  ShadowModeConfig: { SourceModelVariantName: {}; ShadowModelVariants: {} }
  KmsKey?: {} | undefined
  Tags?: {} | undefined
}
type CreateInferenceExperimentResponse = { InferenceExperimentArn: {} }
type CreateInferenceRecommendationsJobRequest = {
  JobName: {}
  JobType: {}
  RoleArn: {}
  InputConfig: {
    ModelPackageVersionArn?: {} | undefined
    JobDurationInSeconds?: {} | undefined
    TrafficPattern?: { TrafficType?: {} | undefined; Phases?: {} | undefined } | undefined
    ResourceLimit?:
      | { MaxNumberOfTests?: {} | undefined; MaxParallelOfTests?: {} | undefined }
      | undefined
    EndpointConfigurations?: {} | undefined
    VolumeKmsKeyId?: {} | undefined
    ContainerConfig?:
      | {
          Domain?: {} | undefined
          Task?: {} | undefined
          Framework?: {} | undefined
          FrameworkVersion?: {} | undefined
          PayloadConfig?:
            | { SamplePayloadUrl?: {} | undefined; SupportedContentTypes?: {} | undefined }
            | undefined
          NearestModelName?: {} | undefined
          SupportedInstanceTypes?: {} | undefined
          DataInputConfig?: {} | undefined
        }
      | undefined
    Endpoints?: {} | undefined
    VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
    ModelName?: {} | undefined
  }
  JobDescription?: {} | undefined
  StoppingConditions?:
    | { MaxInvocations?: {} | undefined; ModelLatencyThresholds?: {} | undefined }
    | undefined
  OutputConfig?:
    | {
        KmsKeyId?: {} | undefined
        CompiledOutputConfig?: { S3OutputUri?: {} | undefined } | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type CreateInferenceRecommendationsJobResponse = { JobArn: {} }
type CreateLabelingJobRequest = {
  LabelingJobName: {}
  LabelAttributeName: {}
  InputConfig: {
    DataSource: {
      S3DataSource?: { ManifestS3Uri: {} } | undefined
      SnsDataSource?: { SnsTopicArn: {} } | undefined
    }
    DataAttributes?: { ContentClassifiers?: {} | undefined } | undefined
  }
  OutputConfig: { S3OutputPath: {}; KmsKeyId?: {} | undefined; SnsTopicArn?: {} | undefined }
  RoleArn: {}
  LabelCategoryConfigS3Uri?: {} | undefined
  StoppingConditions?:
    | {
        MaxHumanLabeledObjectCount?: {} | undefined
        MaxPercentageOfInputDatasetLabeled?: {} | undefined
      }
    | undefined
  LabelingJobAlgorithmsConfig?:
    | {
        LabelingJobAlgorithmSpecificationArn: {}
        InitialActiveLearningModelArn?: {} | undefined
        LabelingJobResourceConfig?:
          | { VolumeKmsKeyId?: {} | undefined; VpcConfig?: VpcConfig | undefined }
          | undefined
      }
    | undefined
  HumanTaskConfig: {
    WorkteamArn: {}
    UiConfig: { UiTemplateS3Uri?: {} | undefined; HumanTaskUiArn?: {} | undefined }
    PreHumanTaskLambdaArn: {}
    TaskKeywords?: {} | undefined
    TaskTitle: {}
    TaskDescription: {}
    NumberOfHumanWorkersPerDataObject: {}
    TaskTimeLimitInSeconds: {}
    TaskAvailabilityLifetimeInSeconds?: {} | undefined
    MaxConcurrentTaskCount?: {} | undefined
    AnnotationConsolidationConfig: { AnnotationConsolidationLambdaArn: {} }
    PublicWorkforceTaskPrice?:
      | {
          AmountInUsd?:
            | {
                Dollars?: {} | undefined
                Cents?: {} | undefined
                TenthFractionsOfACent?: {} | undefined
              }
            | undefined
        }
      | undefined
  }
  Tags?: {} | undefined
}
type CreateLabelingJobResponse = { LabelingJobArn: {} }
type CreateModelInput = {
  ModelName: {}
  PrimaryContainer?:
    | {
        ContainerHostname?: {} | undefined
        Image?: {} | undefined
        ImageConfig?:
          | {
              RepositoryAccessMode: {}
              RepositoryAuthConfig?: { RepositoryCredentialsProviderArn: {} } | undefined
            }
          | undefined
        Mode?: {} | undefined
        ModelDataUrl?: {} | undefined
        Environment?: {} | undefined
        ModelPackageName?: {} | undefined
        InferenceSpecificationName?: {} | undefined
        MultiModelConfig?: { ModelCacheSetting?: {} | undefined } | undefined
      }
    | undefined
  Containers?: {} | undefined
  InferenceExecutionConfig?: { Mode: {} } | undefined
  ExecutionRoleArn: {}
  Tags?: {} | undefined
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  EnableNetworkIsolation?: {} | undefined
}
type CreateModelOutput = { ModelArn: {} }
type CreateModelBiasJobDefinitionRequest = {
  JobDefinitionName: {}
  ModelBiasBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
      }
    | undefined
  ModelBiasAppSpecification: { ImageUri: {}; ConfigUri: {}; Environment?: {} | undefined }
  ModelBiasJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
    GroundTruthS3Input: { S3Uri?: {} | undefined }
  }
  ModelBiasJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
  Tags?: {} | undefined
}
type CreateModelBiasJobDefinitionResponse = { JobDefinitionArn: {} }
type CreateModelCardRequest = {
  ModelCardName: {}
  SecurityConfig?: { KmsKeyId?: {} | undefined } | undefined
  Content: {}
  ModelCardStatus: {}
  Tags?: {} | undefined
}
type CreateModelCardResponse = { ModelCardArn: {} }
type ConflictException = { [x: string]: unknown }
type CreateModelCardExportJobRequest = {
  ModelCardName: {}
  ModelCardVersion?: {} | undefined
  ModelCardExportJobName: {}
  OutputConfig: { S3OutputPath: {} }
}
type CreateModelCardExportJobResponse = { ModelCardExportJobArn: {} }
type CreateModelExplainabilityJobDefinitionRequest = {
  JobDefinitionName: {}
  ModelExplainabilityBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
      }
    | undefined
  ModelExplainabilityAppSpecification: { ImageUri: {}; ConfigUri: {}; Environment?: {} | undefined }
  ModelExplainabilityJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
  }
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
  Tags?: {} | undefined
}
type CreateModelExplainabilityJobDefinitionResponse = { JobDefinitionArn: {} }
type CreateModelPackageInput = {
  ModelPackageName?: {} | undefined
  ModelPackageGroupName?: {} | undefined
  ModelPackageDescription?: {} | undefined
  InferenceSpecification?:
    | {
        Containers: {}
        SupportedTransformInstanceTypes?: {} | undefined
        SupportedRealtimeInferenceInstanceTypes?: {} | undefined
        SupportedContentTypes: {}
        SupportedResponseMIMETypes: {}
      }
    | undefined
  ValidationSpecification?: { ValidationRole: {}; ValidationProfiles: {} } | undefined
  SourceAlgorithmSpecification?: { SourceAlgorithms: {} } | undefined
  CertifyForMarketplace?: {} | undefined
  Tags?: {} | undefined
  ModelApprovalStatus?: {} | undefined
  MetadataProperties?: MetadataProperties | undefined
  ModelMetrics?:
    | {
        ModelQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        ModelDataQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        Bias?:
          | {
              Report?: { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} } | undefined
              PreTrainingReport?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              PostTrainingReport?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        Explainability?:
          | { Report?: { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} } | undefined }
          | undefined
      }
    | undefined
  ClientToken?: {} | undefined
  CustomerMetadataProperties?: {} | undefined
  DriftCheckBaselines?:
    | {
        Bias?:
          | {
              ConfigFile?:
                | { ContentType?: {} | undefined; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              PreTrainingConstraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              PostTrainingConstraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        Explainability?:
          | {
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              ConfigFile?:
                | { ContentType?: {} | undefined; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        ModelQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        ModelDataQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
      }
    | undefined
  Domain?: {} | undefined
  Task?: {} | undefined
  SamplePayloadUrl?: {} | undefined
  AdditionalInferenceSpecifications?: {} | undefined
}
type CreateModelPackageOutput = { ModelPackageArn: {} }
type CreateModelPackageGroupInput = {
  ModelPackageGroupName: {}
  ModelPackageGroupDescription?: {} | undefined
  Tags?: {} | undefined
}
type CreateModelPackageGroupOutput = { ModelPackageGroupArn: {} }
type CreateModelQualityJobDefinitionRequest = {
  JobDefinitionName: {}
  ModelQualityBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
      }
    | undefined
  ModelQualityAppSpecification: {
    ImageUri: {}
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
    RecordPreprocessorSourceUri?: {} | undefined
    PostAnalyticsProcessorSourceUri?: {} | undefined
    ProblemType?: {} | undefined
    Environment?: {} | undefined
  }
  ModelQualityJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
    GroundTruthS3Input: { S3Uri?: {} | undefined }
  }
  ModelQualityJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
  Tags?: {} | undefined
}
type CreateModelQualityJobDefinitionResponse = { JobDefinitionArn: {} }
type CreateMonitoringScheduleRequest = {
  MonitoringScheduleName: {}
  MonitoringScheduleConfig: {
    ScheduleConfig?: { ScheduleExpression: {} } | undefined
    MonitoringJobDefinition?:
      | {
          BaselineConfig?:
            | {
                BaseliningJobName?: {} | undefined
                ConstraintsResource?: { S3Uri?: {} | undefined } | undefined
                StatisticsResource?: { S3Uri?: {} | undefined } | undefined
              }
            | undefined
          MonitoringInputs: {}
          MonitoringOutputConfig: { MonitoringOutputs: {}; KmsKeyId?: {} | undefined }
          MonitoringResources: {
            ClusterConfig: {
              InstanceCount: {}
              InstanceType: {}
              VolumeSizeInGB: {}
              VolumeKmsKeyId?: {} | undefined
            }
          }
          MonitoringAppSpecification: {
            ImageUri: {}
            ContainerEntrypoint?: {} | undefined
            ContainerArguments?: {} | undefined
            RecordPreprocessorSourceUri?: {} | undefined
            PostAnalyticsProcessorSourceUri?: {} | undefined
          }
          StoppingCondition?: { MaxRuntimeInSeconds: {} } | undefined
          Environment?: {} | undefined
          NetworkConfig?:
            | {
                EnableInterContainerTrafficEncryption?: {} | undefined
                EnableNetworkIsolation?: {} | undefined
                VpcConfig?: VpcConfig | undefined
              }
            | undefined
          RoleArn: {}
        }
      | undefined
    MonitoringJobDefinitionName?: {} | undefined
    MonitoringType?: {} | undefined
  }
  Tags?: {} | undefined
}
type CreateMonitoringScheduleResponse = { MonitoringScheduleArn: {} }
type CreateNotebookInstanceInput = {
  NotebookInstanceName: {}
  InstanceType: {}
  SubnetId?: {} | undefined
  SecurityGroupIds?: {} | undefined
  RoleArn: {}
  KmsKeyId?: {} | undefined
  Tags?: {} | undefined
  LifecycleConfigName?: {} | undefined
  DirectInternetAccess?: {} | undefined
  VolumeSizeInGB?: {} | undefined
  AcceleratorTypes?: {} | undefined
  DefaultCodeRepository?: {} | undefined
  AdditionalCodeRepositories?: {} | undefined
  RootAccess?: {} | undefined
  PlatformIdentifier?: {} | undefined
  InstanceMetadataServiceConfiguration?: { MinimumInstanceMetadataServiceVersion: {} } | undefined
}
type CreateNotebookInstanceOutput = { NotebookInstanceArn?: {} | undefined }
type CreateNotebookInstanceLifecycleConfigInput = {
  NotebookInstanceLifecycleConfigName: {}
  OnCreate?: {} | undefined
  OnStart?: {} | undefined
}
type CreateNotebookInstanceLifecycleConfigOutput = {
  NotebookInstanceLifecycleConfigArn?: {} | undefined
}
type CreatePipelineRequest = {
  PipelineName: {}
  PipelineDisplayName?: {} | undefined
  PipelineDefinition?: {} | undefined
  PipelineDefinitionS3Location?:
    | { Bucket: {}; ObjectKey: {}; VersionId?: {} | undefined }
    | undefined
  PipelineDescription?: {} | undefined
  ClientRequestToken: {}
  RoleArn: {}
  Tags?: {} | undefined
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type CreatePipelineResponse = { PipelineArn?: {} | undefined }
type CreatePresignedDomainUrlRequest = {
  DomainId: {}
  UserProfileName: {}
  SessionExpirationDurationInSeconds?: {} | undefined
  ExpiresInSeconds?: {} | undefined
  SpaceName?: {} | undefined
}
type CreatePresignedDomainUrlResponse = { AuthorizedUrl?: {} | undefined }
type CreatePresignedNotebookInstanceUrlInput = {
  NotebookInstanceName: {}
  SessionExpirationDurationInSeconds?: {} | undefined
}
type CreatePresignedNotebookInstanceUrlOutput = { AuthorizedUrl?: {} | undefined }
type ExperimentConfig = {
  ExperimentName?: {} | undefined
  TrialName?: {} | undefined
  TrialComponentDisplayName?: {} | undefined
  RunName?: {} | undefined
}
type CreateProcessingJobRequest = {
  ProcessingInputs?: {} | undefined
  ProcessingOutputConfig?: { Outputs: {}; KmsKeyId?: {} | undefined } | undefined
  ProcessingJobName: {}
  ProcessingResources: {
    ClusterConfig: {
      InstanceCount: {}
      InstanceType: {}
      VolumeSizeInGB: {}
      VolumeKmsKeyId?: {} | undefined
    }
  }
  StoppingCondition?: { MaxRuntimeInSeconds: {} } | undefined
  AppSpecification: {
    ImageUri: {}
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
  }
  Environment?: {} | undefined
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  Tags?: {} | undefined
  ExperimentConfig?: ExperimentConfig | undefined
}
type CreateProcessingJobResponse = { ProcessingJobArn: {} }
type CreateProjectInput = {
  ProjectName: {}
  ProjectDescription?: {} | undefined
  ServiceCatalogProvisioningDetails: {
    ProductId: {}
    ProvisioningArtifactId?: {} | undefined
    PathId?: {} | undefined
    ProvisioningParameters?: {} | undefined
  }
  Tags?: {} | undefined
}
type CreateProjectOutput = { ProjectArn: {}; ProjectId: {} }
type CreateSpaceRequest = {
  DomainId: {}
  SpaceName: {}
  Tags?: {} | undefined
  SpaceSettings?:
    | {
        JupyterServerAppSettings?: JupyterServerAppSettings | undefined
        KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined
      }
    | undefined
}
type CreateSpaceResponse = { SpaceArn?: {} | undefined }
type CreateStudioLifecycleConfigRequest = {
  StudioLifecycleConfigName: {}
  StudioLifecycleConfigContent: {}
  StudioLifecycleConfigAppType: {}
  Tags?: {} | undefined
}
type CreateStudioLifecycleConfigResponse = { StudioLifecycleConfigArn?: {} | undefined }
type DebugHookConfig = {
  LocalPath?: {} | undefined
  S3OutputPath: {}
  HookParameters?: {} | undefined
  CollectionConfigurations?: {} | undefined
}
type TensorBoardOutputConfig = { LocalPath?: {} | undefined; S3OutputPath: {} }
type ProfilerConfig = {
  S3OutputPath?: {} | undefined
  ProfilingIntervalInMilliseconds?: {} | undefined
  ProfilingParameters?: {} | undefined
  DisableProfiler?: {} | undefined
}
type CreateTrainingJobRequest = {
  TrainingJobName: {}
  HyperParameters?: {} | undefined
  AlgorithmSpecification: {
    TrainingImage?: {} | undefined
    AlgorithmName?: {} | undefined
    TrainingInputMode: TrainingInputMode
    MetricDefinitions?: {} | undefined
    EnableSageMakerMetricsTimeSeries?: {} | undefined
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
    TrainingImageConfig?:
      | {
          TrainingRepositoryAccessMode: {}
          TrainingRepositoryAuthConfig?:
            | { TrainingRepositoryCredentialsProviderArn: {} }
            | undefined
        }
      | undefined
  }
  RoleArn: {}
  InputDataConfig?: {} | undefined
  OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
  ResourceConfig: {
    InstanceType?: {} | undefined
    InstanceCount?: {} | undefined
    VolumeSizeInGB: {}
    VolumeKmsKeyId?: {} | undefined
    InstanceGroups?: {} | undefined
    KeepAlivePeriodInSeconds?: {} | undefined
  }
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  StoppingCondition: { MaxRuntimeInSeconds?: {} | undefined; MaxWaitTimeInSeconds?: {} | undefined }
  Tags?: {} | undefined
  EnableNetworkIsolation?: {} | undefined
  EnableInterContainerTrafficEncryption?: {} | undefined
  EnableManagedSpotTraining?: {} | undefined
  CheckpointConfig?: { S3Uri: {}; LocalPath?: {} | undefined } | undefined
  DebugHookConfig?: DebugHookConfig | undefined
  DebugRuleConfigurations?: {} | undefined
  TensorBoardOutputConfig?: TensorBoardOutputConfig | undefined
  ExperimentConfig?: ExperimentConfig | undefined
  ProfilerConfig?: ProfilerConfig | undefined
  ProfilerRuleConfigurations?: {} | undefined
  Environment?: {} | undefined
  RetryStrategy?: { MaximumRetryAttempts: {} } | undefined
}
type CreateTrainingJobResponse = { TrainingJobArn: {} }
type CreateTransformJobRequest = {
  TransformJobName: {}
  ModelName: {}
  MaxConcurrentTransforms?: {} | undefined
  ModelClientConfig?:
    | { InvocationsTimeoutInSeconds?: {} | undefined; InvocationsMaxRetries?: {} | undefined }
    | undefined
  MaxPayloadInMB?: {} | undefined
  BatchStrategy?: {} | undefined
  Environment?: {} | undefined
  TransformInput: {
    DataSource: { S3DataSource: { S3DataType: {}; S3Uri: {} } }
    ContentType?: {} | undefined
    CompressionType?: {} | undefined
    SplitType?: {} | undefined
  }
  TransformOutput: {
    S3OutputPath: {}
    Accept?: {} | undefined
    AssembleWith?: {} | undefined
    KmsKeyId?: {} | undefined
  }
  DataCaptureConfig?:
    | { DestinationS3Uri: {}; KmsKeyId?: {} | undefined; GenerateInferenceId?: {} | undefined }
    | undefined
  TransformResources: { InstanceType: {}; InstanceCount: {}; VolumeKmsKeyId?: {} | undefined }
  DataProcessing?:
    | { InputFilter?: {} | undefined; OutputFilter?: {} | undefined; JoinSource?: {} | undefined }
    | undefined
  Tags?: {} | undefined
  ExperimentConfig?: ExperimentConfig | undefined
}
type CreateTransformJobResponse = { TransformJobArn: {} }
type CreateTrialRequest = {
  TrialName: {}
  DisplayName?: {} | undefined
  ExperimentName: {}
  MetadataProperties?: MetadataProperties | undefined
  Tags?: {} | undefined
}
type CreateTrialResponse = { TrialArn?: {} | undefined }
type CreateTrialComponentRequest = {
  TrialComponentName: {}
  DisplayName?: {} | undefined
  Status?: { PrimaryStatus?: {} | undefined; Message?: {} | undefined } | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Parameters?: {} | undefined
  InputArtifacts?: {} | undefined
  OutputArtifacts?: {} | undefined
  MetadataProperties?: MetadataProperties | undefined
  Tags?: {} | undefined
}
type CreateTrialComponentResponse = { TrialComponentArn?: {} | undefined }
type CreateUserProfileRequest = {
  DomainId: {}
  UserProfileName: {}
  SingleSignOnUserIdentifier?: {} | undefined
  SingleSignOnUserValue?: {} | undefined
  Tags?: {} | undefined
  UserSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        SharingSettings?:
          | {
              NotebookOutputOption?: {} | undefined
              S3OutputPath?: {} | undefined
              S3KmsKeyId?: {} | undefined
            }
          | undefined
        JupyterServerAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              LifecycleConfigArns?: {} | undefined
              CodeRepositories?: {} | undefined
            }
          | undefined
        KernelGatewayAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              CustomImages?: {} | undefined
              LifecycleConfigArns?: {} | undefined
            }
          | undefined
        TensorBoardAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        RStudioServerProAppSettings?:
          | { AccessStatus?: {} | undefined; UserGroup?: {} | undefined }
          | undefined
        RSessionAppSettings?:
          | { DefaultResourceSpec?: ResourceSpec | undefined; CustomImages?: {} | undefined }
          | undefined
        CanvasAppSettings?:
          | {
              TimeSeriesForecastingSettings?:
                | { Status?: {} | undefined; AmazonForecastRoleArn?: {} | undefined }
                | undefined
              ModelRegisterSettings?:
                | { Status?: {} | undefined; CrossAccountModelRegisterRoleArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateUserProfileResponse = { UserProfileArn?: {} | undefined }
type SourceIpConfig = { Cidrs: {} }
type CreateWorkforceRequest = {
  CognitoConfig?: { UserPool: {}; ClientId: {} } | undefined
  OidcConfig?:
    | {
        ClientId: {}
        ClientSecret: {}
        Issuer: {}
        AuthorizationEndpoint: {}
        TokenEndpoint: {}
        UserInfoEndpoint: {}
        LogoutEndpoint: {}
        JwksUri: {}
      }
    | undefined
  SourceIpConfig?: SourceIpConfig | undefined
  WorkforceName: {}
  Tags?: {} | undefined
  WorkforceVpcConfig?:
    | { VpcId?: {} | undefined; SecurityGroupIds?: {} | undefined; Subnets?: {} | undefined }
    | undefined
}
type CreateWorkforceResponse = { WorkforceArn: {} }
type CreateWorkteamRequest = {
  WorkteamName: {}
  WorkforceName?: {} | undefined
  MemberDefinitions: {}
  Description: {}
  NotificationConfiguration?: { NotificationTopicArn?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type CreateWorkteamResponse = { WorkteamArn?: {} | undefined }
type DeleteActionRequest = { ActionName: {} }
type DeleteActionResponse = { ActionArn?: {} | undefined }
type DeleteAlgorithmInput = { AlgorithmName: {} }
type DeleteAppRequest = {
  DomainId: {}
  UserProfileName?: {} | undefined
  AppType: {}
  AppName: {}
  SpaceName?: {} | undefined
}
type DeleteAppImageConfigRequest = { AppImageConfigName: {} }
type DeleteArtifactRequest = {
  ArtifactArn?: {} | undefined
  Source?: { SourceUri: {}; SourceTypes?: {} | undefined } | undefined
}
type DeleteArtifactResponse = { ArtifactArn?: {} | undefined }
type DeleteAssociationRequest = { SourceArn: {}; DestinationArn: {} }
type DeleteAssociationResponse = { SourceArn?: {} | undefined; DestinationArn?: {} | undefined }
type DeleteCodeRepositoryInput = { CodeRepositoryName: {} }
type DeleteContextRequest = { ContextName: {} }
type DeleteContextResponse = { ContextArn?: {} | undefined }
type DeleteDataQualityJobDefinitionRequest = { JobDefinitionName: {} }
type DeleteDeviceFleetRequest = { DeviceFleetName: {} }
type DeleteDomainRequest = {
  DomainId: {}
  RetentionPolicy?: { HomeEfsFileSystem?: {} | undefined } | undefined
}
type DeleteEdgeDeploymentPlanRequest = { EdgeDeploymentPlanName: {} }
type DeleteEdgeDeploymentStageRequest = { EdgeDeploymentPlanName: {}; StageName: {} }
type DeleteEndpointInput = { EndpointName: {} }
type DeleteEndpointConfigInput = { EndpointConfigName: {} }
type DeleteExperimentRequest = { ExperimentName: {} }
type DeleteExperimentResponse = { ExperimentArn?: {} | undefined }
type DeleteFeatureGroupRequest = { FeatureGroupName: {} }
type DeleteFlowDefinitionRequest = { FlowDefinitionName: {} }
type DeleteFlowDefinitionResponse = { [x: string]: unknown }
type DeleteHubRequest = { HubName: {} }
type DeleteHubContentRequest = {
  HubName: {}
  HubContentType: {}
  HubContentName: {}
  HubContentVersion: {}
}
type DeleteHumanTaskUiRequest = { HumanTaskUiName: {} }
type DeleteHumanTaskUiResponse = { [x: string]: unknown }
type DeleteImageRequest = { ImageName: {} }
type DeleteImageResponse = { [x: string]: unknown }
type DeleteImageVersionRequest = { ImageName: {}; Version?: {} | undefined; Alias?: {} | undefined }
type DeleteImageVersionResponse = { [x: string]: unknown }
type DeleteInferenceExperimentRequest = { Name: {} }
type DeleteInferenceExperimentResponse = { InferenceExperimentArn: {} }
type DeleteModelInput = { ModelName: {} }
type DeleteModelBiasJobDefinitionRequest = { JobDefinitionName: {} }
type DeleteModelCardRequest = { ModelCardName: {} }
type DeleteModelExplainabilityJobDefinitionRequest = { JobDefinitionName: {} }
type DeleteModelPackageInput = { ModelPackageName: {} }
type DeleteModelPackageGroupInput = { ModelPackageGroupName: {} }
type DeleteModelPackageGroupPolicyInput = { ModelPackageGroupName: {} }
type DeleteModelQualityJobDefinitionRequest = { JobDefinitionName: {} }
type DeleteMonitoringScheduleRequest = { MonitoringScheduleName: {} }
type DeleteNotebookInstanceInput = { NotebookInstanceName: {} }
type DeleteNotebookInstanceLifecycleConfigInput = { NotebookInstanceLifecycleConfigName: {} }
type DeletePipelineRequest = { PipelineName: {}; ClientRequestToken: {} }
type DeletePipelineResponse = { PipelineArn?: {} | undefined }
type DeleteProjectInput = { ProjectName: {} }
type DeleteSpaceRequest = { DomainId: {}; SpaceName: {} }
type DeleteStudioLifecycleConfigRequest = { StudioLifecycleConfigName: {} }
type DeleteTagsInput = { ResourceArn: {}; TagKeys: {} }
type DeleteTagsOutput = { [x: string]: unknown }
type DeleteTrialRequest = { TrialName: {} }
type DeleteTrialResponse = { TrialArn?: {} | undefined }
type DeleteTrialComponentRequest = { TrialComponentName: {} }
type DeleteTrialComponentResponse = { TrialComponentArn?: {} | undefined }
type DeleteUserProfileRequest = { DomainId: {}; UserProfileName: {} }
type DeleteWorkforceRequest = { WorkforceName: {} }
type DeleteWorkforceResponse = { [x: string]: unknown }
type DeleteWorkteamRequest = { WorkteamName: {} }
type DeleteWorkteamResponse = { Success: {} }
type DeregisterDevicesRequest = { DeviceFleetName: {}; DeviceNames: {} }
type DescribeActionRequest = { ActionName: {} }
type UserContext = {
  UserProfileArn?: {} | undefined
  UserProfileName?: {} | undefined
  DomainId?: {} | undefined
  IamIdentity?:
    | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
    | undefined
}
type DescribeActionResponse = {
  ActionName?: {} | undefined
  ActionArn?: {} | undefined
  Source?: { SourceUri: {}; SourceType?: {} | undefined; SourceId?: {} | undefined } | undefined
  ActionType?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  Properties?: {} | undefined
  CreationTime?: {} | undefined
  CreatedBy?: UserContext | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
  MetadataProperties?: MetadataProperties | undefined
  LineageGroupArn?: {} | undefined
}
type DescribeAlgorithmInput = { AlgorithmName: {} }
type DescribeAlgorithmOutput = {
  AlgorithmName: {}
  AlgorithmArn: {}
  AlgorithmDescription?: {} | undefined
  CreationTime: {}
  TrainingSpecification: {
    TrainingImage: {}
    TrainingImageDigest?: {} | undefined
    SupportedHyperParameters?: {} | undefined
    SupportedTrainingInstanceTypes: {}
    SupportsDistributedTraining?: {} | undefined
    MetricDefinitions?: {} | undefined
    TrainingChannels: {}
    SupportedTuningJobObjectiveMetrics?: {} | undefined
  }
  InferenceSpecification?:
    | {
        Containers: {}
        SupportedTransformInstanceTypes?: {} | undefined
        SupportedRealtimeInferenceInstanceTypes?: {} | undefined
        SupportedContentTypes: {}
        SupportedResponseMIMETypes: {}
      }
    | undefined
  ValidationSpecification?: { ValidationRole: {}; ValidationProfiles: {} } | undefined
  AlgorithmStatus: {}
  AlgorithmStatusDetails: {
    ValidationStatuses?: {} | undefined
    ImageScanStatuses?: {} | undefined
  }
  ProductId?: {} | undefined
  CertifyForMarketplace?: {} | undefined
}
type DescribeAppRequest = {
  DomainId: {}
  UserProfileName?: {} | undefined
  AppType: {}
  AppName: {}
  SpaceName?: {} | undefined
}
type DescribeAppResponse = {
  AppArn?: {} | undefined
  AppType?: {} | undefined
  AppName?: {} | undefined
  DomainId?: {} | undefined
  UserProfileName?: {} | undefined
  Status?: {} | undefined
  LastHealthCheckTimestamp?: {} | undefined
  LastUserActivityTimestamp?: {} | undefined
  CreationTime?: {} | undefined
  FailureReason?: {} | undefined
  ResourceSpec?:
    | {
        SageMakerImageArn?: {} | undefined
        SageMakerImageVersionArn?: {} | undefined
        InstanceType?: {} | undefined
        LifecycleConfigArn?: {} | undefined
      }
    | undefined
  SpaceName?: {} | undefined
}
type DescribeAppImageConfigRequest = { AppImageConfigName: {} }
type DescribeAppImageConfigResponse = {
  AppImageConfigArn?: {} | undefined
  AppImageConfigName?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  KernelGatewayImageConfig?:
    | {
        KernelSpecs: {}
        FileSystemConfig?:
          | { MountPath?: {} | undefined; DefaultUid?: {} | undefined; DefaultGid?: {} | undefined }
          | undefined
      }
    | undefined
}
type DescribeArtifactRequest = { ArtifactArn: {} }
type DescribeArtifactResponse = {
  ArtifactName?: {} | undefined
  ArtifactArn?: {} | undefined
  Source?: { SourceUri: {}; SourceTypes?: {} | undefined } | undefined
  ArtifactType?: {} | undefined
  Properties?: {} | undefined
  CreationTime?: {} | undefined
  CreatedBy?: UserContext | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
  MetadataProperties?: MetadataProperties | undefined
  LineageGroupArn?: {} | undefined
}
type DescribeAutoMLJobRequest = { AutoMLJobName: {} }
type FinalAutoMLJobObjectiveMetric = {
  Type?: {} | undefined
  MetricName: {}
  Value: {}
  StandardMetricName?: {} | undefined
}
type AutoMLJobObjective = { MetricName: {} }
type AutoMLJobCompletionCriteria = {
  MaxCandidates?: {} | undefined
  MaxRuntimePerTrainingJobInSeconds?: {} | undefined
  MaxAutoMLJobRuntimeInSeconds?: {} | undefined
}
type DescribeAutoMLJobResponse = {
  AutoMLJobName: {}
  AutoMLJobArn: {}
  InputDataConfig: {}
  OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
  RoleArn: {}
  AutoMLJobObjective?: { MetricName: {} } | undefined
  ProblemType?: {} | undefined
  AutoMLJobConfig?:
    | {
        CompletionCriteria?:
          | {
              MaxCandidates?: {} | undefined
              MaxRuntimePerTrainingJobInSeconds?: {} | undefined
              MaxAutoMLJobRuntimeInSeconds?: {} | undefined
            }
          | undefined
        SecurityConfig?:
          | {
              VolumeKmsKeyId?: {} | undefined
              EnableInterContainerTrafficEncryption?: {} | undefined
              VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
            }
          | undefined
        DataSplitConfig?: { ValidationFraction?: {} | undefined } | undefined
        CandidateGenerationConfig?:
          | { FeatureSpecificationS3Uri?: {} | undefined; AlgorithmsConfig?: {} | undefined }
          | undefined
        Mode?: {} | undefined
      }
    | undefined
  CreationTime: {}
  EndTime?: {} | undefined
  LastModifiedTime: {}
  FailureReason?: {} | undefined
  PartialFailureReasons?: {} | undefined
  BestCandidate?:
    | {
        CandidateName: {}
        FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric | undefined
        ObjectiveStatus: {}
        CandidateSteps: {}
        CandidateStatus: {}
        InferenceContainers?: {} | undefined
        CreationTime: {}
        EndTime?: {} | undefined
        LastModifiedTime: {}
        FailureReason?: {} | undefined
        CandidateProperties?:
          | {
              CandidateArtifactLocations?:
                | { Explainability: {}; ModelInsights?: {} | undefined }
                | undefined
              CandidateMetrics?: {} | undefined
            }
          | undefined
        InferenceContainerDefinitions?: {} | undefined
      }
    | undefined
  AutoMLJobStatus: {}
  AutoMLJobSecondaryStatus: {}
  GenerateCandidateDefinitionsOnly?: {} | undefined
  AutoMLJobArtifacts?:
    | {
        CandidateDefinitionNotebookLocation?: {} | undefined
        DataExplorationNotebookLocation?: {} | undefined
      }
    | undefined
  ResolvedAttributes?:
    | {
        AutoMLJobObjective?: AutoMLJobObjective | undefined
        ProblemType?: {} | undefined
        CompletionCriteria?: AutoMLJobCompletionCriteria | undefined
      }
    | undefined
  ModelDeployConfig?:
    | { AutoGenerateEndpointName?: {} | undefined; EndpointName?: {} | undefined }
    | undefined
  ModelDeployResult?: { EndpointName?: {} | undefined } | undefined
}
type DescribeAutoMLJobV2Request = { AutoMLJobName: {} }
type DescribeAutoMLJobV2Response = {
  AutoMLJobName: {}
  AutoMLJobArn: {}
  AutoMLJobInputDataConfig: {}
  OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
  RoleArn: {}
  AutoMLJobObjective?: { MetricName: {} } | undefined
  AutoMLProblemTypeConfig?:
    | {
        ImageClassificationJobConfig?:
          | {
              CompletionCriteria?:
                | {
                    MaxCandidates?: {} | undefined
                    MaxRuntimePerTrainingJobInSeconds?: {} | undefined
                    MaxAutoMLJobRuntimeInSeconds?: {} | undefined
                  }
                | undefined
            }
          | undefined
        TextClassificationJobConfig?:
          | {
              CompletionCriteria?:
                | {
                    MaxCandidates?: {} | undefined
                    MaxRuntimePerTrainingJobInSeconds?: {} | undefined
                    MaxAutoMLJobRuntimeInSeconds?: {} | undefined
                  }
                | undefined
              ContentColumn?: {} | undefined
              TargetLabelColumn?: {} | undefined
            }
          | undefined
      }
    | undefined
  CreationTime: {}
  EndTime?: {} | undefined
  LastModifiedTime: {}
  FailureReason?: {} | undefined
  PartialFailureReasons?: {} | undefined
  BestCandidate?:
    | {
        CandidateName: {}
        FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric | undefined
        ObjectiveStatus: {}
        CandidateSteps: {}
        CandidateStatus: {}
        InferenceContainers?: {} | undefined
        CreationTime: {}
        EndTime?: {} | undefined
        LastModifiedTime: {}
        FailureReason?: {} | undefined
        CandidateProperties?:
          | {
              CandidateArtifactLocations?:
                | { Explainability: {}; ModelInsights?: {} | undefined }
                | undefined
              CandidateMetrics?: {} | undefined
            }
          | undefined
        InferenceContainerDefinitions?: {} | undefined
      }
    | undefined
  AutoMLJobStatus: {}
  AutoMLJobSecondaryStatus: {}
  ModelDeployConfig?:
    | { AutoGenerateEndpointName?: {} | undefined; EndpointName?: {} | undefined }
    | undefined
  ModelDeployResult?: { EndpointName?: {} | undefined } | undefined
  DataSplitConfig?: { ValidationFraction?: {} | undefined } | undefined
  SecurityConfig?:
    | {
        VolumeKmsKeyId?: {} | undefined
        EnableInterContainerTrafficEncryption?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
      }
    | undefined
}
type DescribeCodeRepositoryInput = { CodeRepositoryName: {} }
type DescribeCodeRepositoryOutput = {
  CodeRepositoryName: {}
  CodeRepositoryArn: {}
  CreationTime: {}
  LastModifiedTime: {}
  GitConfig?: { RepositoryUrl: {}; Branch?: {} | undefined; SecretArn?: {} | undefined } | undefined
}
type DescribeCompilationJobRequest = { CompilationJobName: {} }
type DescribeCompilationJobResponse = {
  CompilationJobName: {}
  CompilationJobArn: {}
  CompilationJobStatus: {}
  CompilationStartTime?: {} | undefined
  CompilationEndTime?: {} | undefined
  StoppingCondition: { MaxRuntimeInSeconds?: {} | undefined; MaxWaitTimeInSeconds?: {} | undefined }
  InferenceImage?: {} | undefined
  ModelPackageVersionArn?: {} | undefined
  CreationTime: {}
  LastModifiedTime: {}
  FailureReason: {}
  ModelArtifacts: { S3ModelArtifacts: {} }
  ModelDigests?: { ArtifactDigest?: {} | undefined } | undefined
  RoleArn: {}
  InputConfig: { S3Uri: {}; DataInputConfig: {}; Framework: {}; FrameworkVersion?: {} | undefined }
  OutputConfig: {
    S3OutputLocation: {}
    TargetDevice?: {} | undefined
    TargetPlatform?: { Os: {}; Arch: {}; Accelerator?: {} | undefined } | undefined
    CompilerOptions?: {} | undefined
    KmsKeyId?: {} | undefined
  }
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
}
type DescribeContextRequest = { ContextName: {} }
type DescribeContextResponse = {
  ContextName?: {} | undefined
  ContextArn?: {} | undefined
  Source?: { SourceUri: {}; SourceType?: {} | undefined; SourceId?: {} | undefined } | undefined
  ContextType?: {} | undefined
  Description?: {} | undefined
  Properties?: {} | undefined
  CreationTime?: {} | undefined
  CreatedBy?: UserContext | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
  LineageGroupArn?: {} | undefined
}
type DescribeDataQualityJobDefinitionRequest = { JobDefinitionName: {} }
type DescribeDataQualityJobDefinitionResponse = {
  JobDefinitionArn: {}
  JobDefinitionName: {}
  CreationTime: {}
  DataQualityBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
        StatisticsResource?: MonitoringStatisticsResource | undefined
      }
    | undefined
  DataQualityAppSpecification: {
    ImageUri: {}
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
    RecordPreprocessorSourceUri?: {} | undefined
    PostAnalyticsProcessorSourceUri?: {} | undefined
    Environment?: {} | undefined
  }
  DataQualityJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
  }
  DataQualityJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
}
type DescribeDeviceRequest = { NextToken?: {} | undefined; DeviceName: {}; DeviceFleetName: {} }
type DescribeDeviceResponse = {
  DeviceArn?: {} | undefined
  DeviceName: {}
  Description?: {} | undefined
  DeviceFleetName: {}
  IotThingName?: {} | undefined
  RegistrationTime: {}
  LatestHeartbeat?: {} | undefined
  Models?: {} | undefined
  MaxModels?: {} | undefined
  NextToken?: {} | undefined
  AgentVersion?: {} | undefined
}
type DescribeDeviceFleetRequest = { DeviceFleetName: {} }
type DescribeDeviceFleetResponse = {
  DeviceFleetName: {}
  DeviceFleetArn: {}
  OutputConfig: {
    S3OutputLocation: {}
    KmsKeyId?: {} | undefined
    PresetDeploymentType?: {} | undefined
    PresetDeploymentConfig?: {} | undefined
  }
  Description?: {} | undefined
  CreationTime: {}
  LastModifiedTime: {}
  RoleArn?: {} | undefined
  IotRoleAlias?: {} | undefined
}
type DescribeDomainRequest = { DomainId: {} }
type DescribeDomainResponse = {
  DomainArn?: {} | undefined
  DomainId?: {} | undefined
  DomainName?: {} | undefined
  HomeEfsFileSystemId?: {} | undefined
  SingleSignOnManagedApplicationInstanceId?: {} | undefined
  Status?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  FailureReason?: {} | undefined
  AuthMode?: {} | undefined
  DefaultUserSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        SharingSettings?:
          | {
              NotebookOutputOption?: {} | undefined
              S3OutputPath?: {} | undefined
              S3KmsKeyId?: {} | undefined
            }
          | undefined
        JupyterServerAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              LifecycleConfigArns?: {} | undefined
              CodeRepositories?: {} | undefined
            }
          | undefined
        KernelGatewayAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              CustomImages?: {} | undefined
              LifecycleConfigArns?: {} | undefined
            }
          | undefined
        TensorBoardAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        RStudioServerProAppSettings?:
          | { AccessStatus?: {} | undefined; UserGroup?: {} | undefined }
          | undefined
        RSessionAppSettings?:
          | { DefaultResourceSpec?: ResourceSpec | undefined; CustomImages?: {} | undefined }
          | undefined
        CanvasAppSettings?:
          | {
              TimeSeriesForecastingSettings?:
                | { Status?: {} | undefined; AmazonForecastRoleArn?: {} | undefined }
                | undefined
              ModelRegisterSettings?:
                | { Status?: {} | undefined; CrossAccountModelRegisterRoleArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  AppNetworkAccessType?: {} | undefined
  HomeEfsFileSystemKmsKeyId?: {} | undefined
  SubnetIds?: {} | undefined
  Url?: {} | undefined
  VpcId?: {} | undefined
  KmsKeyId?: {} | undefined
  DomainSettings?:
    | {
        SecurityGroupIds?: {} | undefined
        RStudioServerProDomainSettings?:
          | {
              DomainExecutionRoleArn: {}
              RStudioConnectUrl?: {} | undefined
              RStudioPackageManagerUrl?: {} | undefined
              DefaultResourceSpec?: ResourceSpec | undefined
            }
          | undefined
        ExecutionRoleIdentityConfig?: {} | undefined
      }
    | undefined
  AppSecurityGroupManagement?: {} | undefined
  SecurityGroupIdForDomainBoundary?: {} | undefined
  DefaultSpaceSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        JupyterServerAppSettings?: JupyterServerAppSettings | undefined
        KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined
      }
    | undefined
}
type DescribeEdgeDeploymentPlanRequest = {
  EdgeDeploymentPlanName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeEdgeDeploymentPlanResponse = {
  EdgeDeploymentPlanArn: {}
  EdgeDeploymentPlanName: {}
  ModelConfigs: {}
  DeviceFleetName: {}
  EdgeDeploymentSuccess?: {} | undefined
  EdgeDeploymentPending?: {} | undefined
  EdgeDeploymentFailed?: {} | undefined
  Stages: {}
  NextToken?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
}
type DescribeEdgePackagingJobRequest = { EdgePackagingJobName: {} }
type DescribeEdgePackagingJobResponse = {
  EdgePackagingJobArn: {}
  EdgePackagingJobName: {}
  CompilationJobName?: {} | undefined
  ModelName?: {} | undefined
  ModelVersion?: {} | undefined
  RoleArn?: {} | undefined
  OutputConfig?:
    | {
        S3OutputLocation: {}
        KmsKeyId?: {} | undefined
        PresetDeploymentType?: {} | undefined
        PresetDeploymentConfig?: {} | undefined
      }
    | undefined
  ResourceKey?: {} | undefined
  EdgePackagingJobStatus: {}
  EdgePackagingJobStatusMessage?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  ModelArtifact?: {} | undefined
  ModelSignature?: {} | undefined
  PresetDeploymentOutput?:
    | {
        Type: {}
        Artifact?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
      }
    | undefined
}
type DescribeEndpointInput = { EndpointName: {} }
type DataCaptureConfigSummary = {
  EnableCapture: {}
  CaptureStatus: {}
  CurrentSamplingPercentage: {}
  DestinationS3Uri: {}
  KmsKeyId: {}
}
type DescribeEndpointOutput = {
  EndpointName: {}
  EndpointArn: {}
  EndpointConfigName: {}
  ProductionVariants?: {} | undefined
  DataCaptureConfig?: DataCaptureConfigSummary | undefined
  EndpointStatus: {}
  FailureReason?: {} | undefined
  CreationTime: {}
  LastModifiedTime: {}
  LastDeploymentConfig?:
    | {
        BlueGreenUpdatePolicy: {
          TrafficRoutingConfiguration: {
            Type: {}
            WaitIntervalInSeconds: {}
            CanarySize?: { Type: {}; Value: {} } | undefined
            LinearStepSize?: { Type: {}; Value: {} } | undefined
          }
          TerminationWaitInSeconds?: {} | undefined
          MaximumExecutionTimeoutInSeconds?: {} | undefined
        }
        AutoRollbackConfiguration?: { Alarms?: {} | undefined } | undefined
      }
    | undefined
  AsyncInferenceConfig?:
    | {
        ClientConfig?: { MaxConcurrentInvocationsPerInstance?: {} | undefined } | undefined
        OutputConfig: {
          KmsKeyId?: {} | undefined
          S3OutputPath?: {} | undefined
          NotificationConfig?:
            | {
                SuccessTopic?: {} | undefined
                ErrorTopic?: {} | undefined
                IncludeInferenceResponseIn?: {} | undefined
              }
            | undefined
          S3FailurePath?: {} | undefined
        }
      }
    | undefined
  PendingDeploymentSummary?:
    | {
        EndpointConfigName: {}
        ProductionVariants?: {} | undefined
        StartTime?: {} | undefined
        ShadowProductionVariants?: {} | undefined
      }
    | undefined
  ExplainerConfig?:
    | {
        ClarifyExplainerConfig?:
          | {
              EnableExplanations?: {} | undefined
              InferenceConfig?:
                | {
                    FeaturesAttribute?: {} | undefined
                    ContentTemplate?: {} | undefined
                    MaxRecordCount?: {} | undefined
                    MaxPayloadInMB?: {} | undefined
                    ProbabilityIndex?: {} | undefined
                    LabelIndex?: {} | undefined
                    ProbabilityAttribute?: {} | undefined
                    LabelAttribute?: {} | undefined
                    LabelHeaders?: {} | undefined
                    FeatureHeaders?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
              ShapConfig: {
                ShapBaselineConfig: {
                  MimeType?: {} | undefined
                  ShapBaseline?: {} | undefined
                  ShapBaselineUri?: {} | undefined
                }
                NumberOfSamples?: {} | undefined
                UseLogit?: {} | undefined
                Seed?: {} | undefined
                TextConfig?: { Language: {}; Granularity: {} } | undefined
              }
            }
          | undefined
      }
    | undefined
  ShadowProductionVariants?: {} | undefined
}
type DescribeEndpointConfigInput = { EndpointConfigName: {} }
type DescribeEndpointConfigOutput = {
  EndpointConfigName: {}
  EndpointConfigArn: {}
  ProductionVariants: {}
  DataCaptureConfig?: DataCaptureConfig | undefined
  KmsKeyId?: {} | undefined
  CreationTime: {}
  AsyncInferenceConfig?:
    | {
        ClientConfig?: { MaxConcurrentInvocationsPerInstance?: {} | undefined } | undefined
        OutputConfig: {
          KmsKeyId?: {} | undefined
          S3OutputPath?: {} | undefined
          NotificationConfig?:
            | {
                SuccessTopic?: {} | undefined
                ErrorTopic?: {} | undefined
                IncludeInferenceResponseIn?: {} | undefined
              }
            | undefined
          S3FailurePath?: {} | undefined
        }
      }
    | undefined
  ExplainerConfig?:
    | {
        ClarifyExplainerConfig?:
          | {
              EnableExplanations?: {} | undefined
              InferenceConfig?:
                | {
                    FeaturesAttribute?: {} | undefined
                    ContentTemplate?: {} | undefined
                    MaxRecordCount?: {} | undefined
                    MaxPayloadInMB?: {} | undefined
                    ProbabilityIndex?: {} | undefined
                    LabelIndex?: {} | undefined
                    ProbabilityAttribute?: {} | undefined
                    LabelAttribute?: {} | undefined
                    LabelHeaders?: {} | undefined
                    FeatureHeaders?: {} | undefined
                    FeatureTypes?: {} | undefined
                  }
                | undefined
              ShapConfig: {
                ShapBaselineConfig: {
                  MimeType?: {} | undefined
                  ShapBaseline?: {} | undefined
                  ShapBaselineUri?: {} | undefined
                }
                NumberOfSamples?: {} | undefined
                UseLogit?: {} | undefined
                Seed?: {} | undefined
                TextConfig?: { Language: {}; Granularity: {} } | undefined
              }
            }
          | undefined
      }
    | undefined
  ShadowProductionVariants?: {} | undefined
}
type DescribeExperimentRequest = { ExperimentName: {} }
type DescribeExperimentResponse = {
  ExperimentName?: {} | undefined
  ExperimentArn?: {} | undefined
  DisplayName?: {} | undefined
  Source?: { SourceArn: {}; SourceType?: {} | undefined } | undefined
  Description?: {} | undefined
  CreationTime?: {} | undefined
  CreatedBy?:
    | {
        UserProfileArn?: {} | undefined
        UserProfileName?: {} | undefined
        DomainId?: {} | undefined
        IamIdentity?:
          | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
          | undefined
      }
    | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?:
    | {
        UserProfileArn?: {} | undefined
        UserProfileName?: {} | undefined
        DomainId?: {} | undefined
        IamIdentity?:
          | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
          | undefined
      }
    | undefined
}
type DescribeFeatureGroupRequest = { FeatureGroupName: {}; NextToken?: {} | undefined }
type DescribeFeatureGroupResponse = {
  FeatureGroupArn: {}
  FeatureGroupName: {}
  RecordIdentifierFeatureName: {}
  EventTimeFeatureName: {}
  FeatureDefinitions: {}
  CreationTime: {}
  LastModifiedTime?: {} | undefined
  OnlineStoreConfig?:
    | {
        SecurityConfig?: { KmsKeyId?: {} | undefined } | undefined
        EnableOnlineStore?: {} | undefined
      }
    | undefined
  OfflineStoreConfig?:
    | {
        S3StorageConfig: {
          S3Uri: {}
          KmsKeyId?: {} | undefined
          ResolvedOutputS3Uri?: {} | undefined
        }
        DisableGlueTableCreation?: {} | undefined
        DataCatalogConfig?: { TableName: {}; Catalog: {}; Database: {} } | undefined
        TableFormat?: {} | undefined
      }
    | undefined
  RoleArn?: {} | undefined
  FeatureGroupStatus?: {} | undefined
  OfflineStoreStatus?: { Status: {}; BlockedReason?: {} | undefined } | undefined
  LastUpdateStatus?: { Status: {}; FailureReason?: {} | undefined } | undefined
  FailureReason?: {} | undefined
  Description?: {} | undefined
  NextToken: {}
  OnlineStoreTotalSizeBytes?: {} | undefined
}
type DescribeFeatureMetadataRequest = { FeatureGroupName: {}; FeatureName: {} }
type DescribeFeatureMetadataResponse = {
  FeatureGroupArn: {}
  FeatureGroupName: {}
  FeatureName: {}
  FeatureType: {}
  CreationTime: {}
  LastModifiedTime: {}
  Description?: {} | undefined
  Parameters?: {} | undefined
}
type DescribeFlowDefinitionRequest = { FlowDefinitionName: {} }
type DescribeFlowDefinitionResponse = {
  FlowDefinitionArn: {}
  FlowDefinitionName: {}
  FlowDefinitionStatus: {}
  CreationTime: {}
  HumanLoopRequestSource?: { AwsManagedHumanLoopRequestSource: {} } | undefined
  HumanLoopActivationConfig?:
    | { HumanLoopActivationConditionsConfig: { HumanLoopActivationConditions: {} } }
    | undefined
  HumanLoopConfig: {
    WorkteamArn: {}
    HumanTaskUiArn: {}
    TaskTitle: {}
    TaskDescription: {}
    TaskCount: {}
    TaskAvailabilityLifetimeInSeconds?: {} | undefined
    TaskTimeLimitInSeconds?: {} | undefined
    TaskKeywords?: {} | undefined
    PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice | undefined
  }
  OutputConfig: { S3OutputPath: {}; KmsKeyId?: {} | undefined }
  RoleArn: {}
  FailureReason?: {} | undefined
}
type DescribeHubRequest = { HubName: {} }
type DescribeHubResponse = {
  HubName: {}
  HubArn: {}
  HubDisplayName?: {} | undefined
  HubDescription?: {} | undefined
  HubSearchKeywords?: {} | undefined
  S3StorageConfig?: { S3OutputPath?: {} | undefined } | undefined
  HubStatus: {}
  FailureReason?: {} | undefined
  CreationTime: {}
  LastModifiedTime: {}
}
type DescribeHubContentRequest = {
  HubName: {}
  HubContentType: {}
  HubContentName: {}
  HubContentVersion?: {} | undefined
}
type DescribeHubContentResponse = {
  HubContentName: {}
  HubContentArn: {}
  HubContentVersion: {}
  HubContentType: {}
  DocumentSchemaVersion: {}
  HubName: {}
  HubArn: {}
  HubContentDisplayName?: {} | undefined
  HubContentDescription?: {} | undefined
  HubContentMarkdown?: {} | undefined
  HubContentDocument: {}
  HubContentSearchKeywords?: {} | undefined
  HubContentDependencies?: {} | undefined
  HubContentStatus: {}
  FailureReason?: {} | undefined
  CreationTime: {}
}
type DescribeHumanTaskUiRequest = { HumanTaskUiName: {} }
type UiTemplateInfo = { Url?: {} | undefined; ContentSha256?: {} | undefined }
type DescribeHumanTaskUiResponse = {
  HumanTaskUiArn: {}
  HumanTaskUiName: {}
  HumanTaskUiStatus?: {} | undefined
  CreationTime: {}
  UiTemplate: UiTemplateInfo
}
type DescribeHyperParameterTuningJobRequest = { HyperParameterTuningJobName: {} }
type HyperParameterTuningJobConsumedResources = { RuntimeInSeconds?: {} | undefined }
type DescribeHyperParameterTuningJobResponse = {
  HyperParameterTuningJobName: {}
  HyperParameterTuningJobArn: {}
  HyperParameterTuningJobConfig: {
    Strategy: {}
    StrategyConfig?:
      | {
          HyperbandStrategyConfig?:
            | { MinResource?: {} | undefined; MaxResource?: {} | undefined }
            | undefined
        }
      | undefined
    HyperParameterTuningJobObjective?: { Type: {}; MetricName: {} } | undefined
    ResourceLimits: {
      MaxNumberOfTrainingJobs?: {} | undefined
      MaxParallelTrainingJobs: {}
      MaxRuntimeInSeconds?: {} | undefined
    }
    ParameterRanges?:
      | {
          IntegerParameterRanges?: {} | undefined
          ContinuousParameterRanges?: {} | undefined
          CategoricalParameterRanges?: {} | undefined
        }
      | undefined
    TrainingJobEarlyStoppingType?: {} | undefined
    TuningJobCompletionCriteria?:
      | {
          TargetObjectiveMetricValue?: {} | undefined
          BestObjectiveNotImproving?:
            | { MaxNumberOfTrainingJobsNotImproving?: {} | undefined }
            | undefined
          ConvergenceDetected?: { CompleteOnConvergence?: {} | undefined } | undefined
        }
      | undefined
    RandomSeed?: {} | undefined
  }
  TrainingJobDefinition?:
    | {
        DefinitionName?: {} | undefined
        TuningObjective?: HyperParameterTuningJobObjective | undefined
        HyperParameterRanges?: ParameterRanges | undefined
        StaticHyperParameters?: {} | undefined
        AlgorithmSpecification: {
          TrainingImage?: {} | undefined
          TrainingInputMode: TrainingInputMode
          AlgorithmName?: {} | undefined
          MetricDefinitions?: {} | undefined
        }
        RoleArn: {}
        InputDataConfig?: {} | undefined
        VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
        OutputDataConfig: { KmsKeyId?: {} | undefined; S3OutputPath: {} }
        ResourceConfig?:
          | {
              InstanceType?: {} | undefined
              InstanceCount?: {} | undefined
              VolumeSizeInGB: {}
              VolumeKmsKeyId?: {} | undefined
              InstanceGroups?: {} | undefined
              KeepAlivePeriodInSeconds?: {} | undefined
            }
          | undefined
        StoppingCondition: {
          MaxRuntimeInSeconds?: {} | undefined
          MaxWaitTimeInSeconds?: {} | undefined
        }
        EnableNetworkIsolation?: {} | undefined
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableManagedSpotTraining?: {} | undefined
        CheckpointConfig?: CheckpointConfig | undefined
        RetryStrategy?: { MaximumRetryAttempts: {} } | undefined
        HyperParameterTuningResourceConfig?:
          | {
              InstanceType?: {} | undefined
              InstanceCount?: {} | undefined
              VolumeSizeInGB?: {} | undefined
              VolumeKmsKeyId?: {} | undefined
              AllocationStrategy?: {} | undefined
              InstanceConfigs?: {} | undefined
            }
          | undefined
        Environment?: {} | undefined
      }
    | undefined
  TrainingJobDefinitions?: {} | undefined
  HyperParameterTuningJobStatus: {}
  CreationTime: {}
  HyperParameterTuningEndTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  TrainingJobStatusCounters: {
    Completed?: {} | undefined
    InProgress?: {} | undefined
    RetryableError?: {} | undefined
    NonRetryableError?: {} | undefined
    Stopped?: {} | undefined
  }
  ObjectiveStatusCounters: {
    Succeeded?: {} | undefined
    Pending?: {} | undefined
    Failed?: {} | undefined
  }
  BestTrainingJob?:
    | {
        TrainingJobDefinitionName?: {} | undefined
        TrainingJobName: {}
        TrainingJobArn: {}
        TuningJobName?: {} | undefined
        CreationTime: {}
        TrainingStartTime?: {} | undefined
        TrainingEndTime?: {} | undefined
        TrainingJobStatus: {}
        TunedHyperParameters: {}
        FailureReason?: {} | undefined
        FinalHyperParameterTuningJobObjectiveMetric?:
          | { Type?: {} | undefined; MetricName: {}; Value: {} }
          | undefined
        ObjectiveStatus?: {} | undefined
      }
    | undefined
  OverallBestTrainingJob?:
    | {
        TrainingJobDefinitionName?: {} | undefined
        TrainingJobName: {}
        TrainingJobArn: {}
        TuningJobName?: {} | undefined
        CreationTime: {}
        TrainingStartTime?: {} | undefined
        TrainingEndTime?: {} | undefined
        TrainingJobStatus: {}
        TunedHyperParameters: {}
        FailureReason?: {} | undefined
        FinalHyperParameterTuningJobObjectiveMetric?:
          | { Type?: {} | undefined; MetricName: {}; Value: {} }
          | undefined
        ObjectiveStatus?: {} | undefined
      }
    | undefined
  WarmStartConfig?: { ParentHyperParameterTuningJobs: {}; WarmStartType: {} } | undefined
  FailureReason?: {} | undefined
  TuningJobCompletionDetails?:
    | {
        NumberOfTrainingJobsObjectiveNotImproving?: {} | undefined
        ConvergenceDetectedTime?: {} | undefined
      }
    | undefined
  ConsumedResources?: HyperParameterTuningJobConsumedResources | undefined
}
type DescribeImageRequest = { ImageName: {} }
type DescribeImageResponse = {
  CreationTime?: {} | undefined
  Description?: {} | undefined
  DisplayName?: {} | undefined
  FailureReason?: {} | undefined
  ImageArn?: {} | undefined
  ImageName?: {} | undefined
  ImageStatus?: {} | undefined
  LastModifiedTime?: {} | undefined
  RoleArn?: {} | undefined
}
type DescribeImageVersionRequest = {
  ImageName: {}
  Version?: {} | undefined
  Alias?: {} | undefined
}
type DescribeImageVersionResponse = {
  BaseImage?: {} | undefined
  ContainerImage?: {} | undefined
  CreationTime?: {} | undefined
  FailureReason?: {} | undefined
  ImageArn?: {} | undefined
  ImageVersionArn?: {} | undefined
  ImageVersionStatus?: {} | undefined
  LastModifiedTime?: {} | undefined
  Version?: {} | undefined
  VendorGuidance?: {} | undefined
  JobType?: {} | undefined
  MLFramework?: {} | undefined
  ProgrammingLang?: {} | undefined
  Processor?: {} | undefined
  Horovod?: {} | undefined
  ReleaseNotes?: {} | undefined
}
type DescribeInferenceExperimentRequest = { Name: {} }
type DescribeInferenceExperimentResponse = {
  Arn: {}
  Name: {}
  Type: {}
  Schedule?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  Status: {}
  StatusReason?: {} | undefined
  Description?: {} | undefined
  CreationTime?: {} | undefined
  CompletionTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  RoleArn?: {} | undefined
  EndpointMetadata: {
    EndpointName: {}
    EndpointConfigName?: {} | undefined
    EndpointStatus?: {} | undefined
    FailureReason?: {} | undefined
  }
  ModelVariants: {}
  DataStorageConfig?:
    | {
        Destination: {}
        KmsKey?: {} | undefined
        ContentType?: CaptureContentTypeHeader | undefined
      }
    | undefined
  ShadowModeConfig?: { SourceModelVariantName: {}; ShadowModelVariants: {} } | undefined
  KmsKey?: {} | undefined
}
type DescribeInferenceRecommendationsJobRequest = { JobName: {} }
type DescribeInferenceRecommendationsJobResponse = {
  JobName: {}
  JobDescription?: {} | undefined
  JobType: {}
  JobArn: {}
  RoleArn: {}
  Status: {}
  CreationTime: {}
  CompletionTime?: {} | undefined
  LastModifiedTime: {}
  FailureReason?: {} | undefined
  InputConfig: {
    ModelPackageVersionArn?: {} | undefined
    JobDurationInSeconds?: {} | undefined
    TrafficPattern?: { TrafficType?: {} | undefined; Phases?: {} | undefined } | undefined
    ResourceLimit?:
      | { MaxNumberOfTests?: {} | undefined; MaxParallelOfTests?: {} | undefined }
      | undefined
    EndpointConfigurations?: {} | undefined
    VolumeKmsKeyId?: {} | undefined
    ContainerConfig?:
      | {
          Domain?: {} | undefined
          Task?: {} | undefined
          Framework?: {} | undefined
          FrameworkVersion?: {} | undefined
          PayloadConfig?:
            | { SamplePayloadUrl?: {} | undefined; SupportedContentTypes?: {} | undefined }
            | undefined
          NearestModelName?: {} | undefined
          SupportedInstanceTypes?: {} | undefined
          DataInputConfig?: {} | undefined
        }
      | undefined
    Endpoints?: {} | undefined
    VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
    ModelName?: {} | undefined
  }
  StoppingConditions?:
    | { MaxInvocations?: {} | undefined; ModelLatencyThresholds?: {} | undefined }
    | undefined
  InferenceRecommendations?: {} | undefined
  EndpointPerformances?: {} | undefined
}
type DescribeLabelingJobRequest = { LabelingJobName: {} }
type DescribeLabelingJobResponse = {
  LabelingJobStatus: {}
  LabelCounters: {
    TotalLabeled?: {} | undefined
    HumanLabeled?: {} | undefined
    MachineLabeled?: {} | undefined
    FailedNonRetryableError?: {} | undefined
    Unlabeled?: {} | undefined
  }
  FailureReason?: {} | undefined
  CreationTime: {}
  LastModifiedTime: {}
  JobReferenceCode: {}
  LabelingJobName: {}
  LabelingJobArn: {}
  LabelAttributeName?: {} | undefined
  InputConfig: {
    DataSource: {
      S3DataSource?: { ManifestS3Uri: {} } | undefined
      SnsDataSource?: { SnsTopicArn: {} } | undefined
    }
    DataAttributes?: { ContentClassifiers?: {} | undefined } | undefined
  }
  OutputConfig: { S3OutputPath: {}; KmsKeyId?: {} | undefined; SnsTopicArn?: {} | undefined }
  RoleArn: {}
  LabelCategoryConfigS3Uri?: {} | undefined
  StoppingConditions?:
    | {
        MaxHumanLabeledObjectCount?: {} | undefined
        MaxPercentageOfInputDatasetLabeled?: {} | undefined
      }
    | undefined
  LabelingJobAlgorithmsConfig?:
    | {
        LabelingJobAlgorithmSpecificationArn: {}
        InitialActiveLearningModelArn?: {} | undefined
        LabelingJobResourceConfig?:
          | { VolumeKmsKeyId?: {} | undefined; VpcConfig?: VpcConfig | undefined }
          | undefined
      }
    | undefined
  HumanTaskConfig: {
    WorkteamArn: {}
    UiConfig: { UiTemplateS3Uri?: {} | undefined; HumanTaskUiArn?: {} | undefined }
    PreHumanTaskLambdaArn: {}
    TaskKeywords?: {} | undefined
    TaskTitle: {}
    TaskDescription: {}
    NumberOfHumanWorkersPerDataObject: {}
    TaskTimeLimitInSeconds: {}
    TaskAvailabilityLifetimeInSeconds?: {} | undefined
    MaxConcurrentTaskCount?: {} | undefined
    AnnotationConsolidationConfig: { AnnotationConsolidationLambdaArn: {} }
    PublicWorkforceTaskPrice?:
      | {
          AmountInUsd?:
            | {
                Dollars?: {} | undefined
                Cents?: {} | undefined
                TenthFractionsOfACent?: {} | undefined
              }
            | undefined
        }
      | undefined
  }
  Tags?: {} | undefined
  LabelingJobOutput?:
    | { OutputDatasetS3Uri: {}; FinalActiveLearningModelArn?: {} | undefined }
    | undefined
}
type DescribeLineageGroupRequest = { LineageGroupName: {} }
type DescribeLineageGroupResponse = {
  LineageGroupName?: {} | undefined
  LineageGroupArn?: {} | undefined
  DisplayName?: {} | undefined
  Description?: {} | undefined
  CreationTime?: {} | undefined
  CreatedBy?: UserContext | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
}
type DescribeModelInput = { ModelName: {} }
type DescribeModelOutput = {
  ModelName: {}
  PrimaryContainer?:
    | {
        ContainerHostname?: {} | undefined
        Image?: {} | undefined
        ImageConfig?:
          | {
              RepositoryAccessMode: {}
              RepositoryAuthConfig?: { RepositoryCredentialsProviderArn: {} } | undefined
            }
          | undefined
        Mode?: {} | undefined
        ModelDataUrl?: {} | undefined
        Environment?: {} | undefined
        ModelPackageName?: {} | undefined
        InferenceSpecificationName?: {} | undefined
        MultiModelConfig?: { ModelCacheSetting?: {} | undefined } | undefined
      }
    | undefined
  Containers?: {} | undefined
  InferenceExecutionConfig?: { Mode: {} } | undefined
  ExecutionRoleArn: {}
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  CreationTime: {}
  ModelArn: {}
  EnableNetworkIsolation?: {} | undefined
}
type DescribeModelBiasJobDefinitionRequest = { JobDefinitionName: {} }
type DescribeModelBiasJobDefinitionResponse = {
  JobDefinitionArn: {}
  JobDefinitionName: {}
  CreationTime: {}
  ModelBiasBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
      }
    | undefined
  ModelBiasAppSpecification: { ImageUri: {}; ConfigUri: {}; Environment?: {} | undefined }
  ModelBiasJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
    GroundTruthS3Input: { S3Uri?: {} | undefined }
  }
  ModelBiasJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
}
type DescribeModelCardRequest = { ModelCardName: {}; ModelCardVersion?: {} | undefined }
type DescribeModelCardResponse = {
  ModelCardArn: {}
  ModelCardName: {}
  ModelCardVersion: {}
  Content: {}
  ModelCardStatus: {}
  SecurityConfig?: { KmsKeyId?: {} | undefined } | undefined
  CreationTime: {}
  CreatedBy: UserContext
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
  ModelCardProcessingStatus?: {} | undefined
}
type DescribeModelCardExportJobRequest = { ModelCardExportJobArn: {} }
type DescribeModelCardExportJobResponse = {
  ModelCardExportJobName: {}
  ModelCardExportJobArn: {}
  Status: {}
  ModelCardName: {}
  ModelCardVersion: {}
  OutputConfig: { S3OutputPath: {} }
  CreatedAt: {}
  LastModifiedAt: {}
  FailureReason?: {} | undefined
  ExportArtifacts?: { S3ExportArtifacts: {} } | undefined
}
type DescribeModelExplainabilityJobDefinitionRequest = { JobDefinitionName: {} }
type DescribeModelExplainabilityJobDefinitionResponse = {
  JobDefinitionArn: {}
  JobDefinitionName: {}
  CreationTime: {}
  ModelExplainabilityBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
      }
    | undefined
  ModelExplainabilityAppSpecification: { ImageUri: {}; ConfigUri: {}; Environment?: {} | undefined }
  ModelExplainabilityJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
  }
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
}
type DescribeModelPackageInput = { ModelPackageName: {} }
type DescribeModelPackageOutput = {
  ModelPackageName: {}
  ModelPackageGroupName?: {} | undefined
  ModelPackageVersion?: {} | undefined
  ModelPackageArn: {}
  ModelPackageDescription?: {} | undefined
  CreationTime: {}
  InferenceSpecification?:
    | {
        Containers: {}
        SupportedTransformInstanceTypes?: {} | undefined
        SupportedRealtimeInferenceInstanceTypes?: {} | undefined
        SupportedContentTypes: {}
        SupportedResponseMIMETypes: {}
      }
    | undefined
  SourceAlgorithmSpecification?: { SourceAlgorithms: {} } | undefined
  ValidationSpecification?: { ValidationRole: {}; ValidationProfiles: {} } | undefined
  ModelPackageStatus: {}
  ModelPackageStatusDetails: { ValidationStatuses: {}; ImageScanStatuses?: {} | undefined }
  CertifyForMarketplace?: {} | undefined
  ModelApprovalStatus?: {} | undefined
  CreatedBy?: UserContext | undefined
  MetadataProperties?: MetadataProperties | undefined
  ModelMetrics?:
    | {
        ModelQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        ModelDataQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        Bias?:
          | {
              Report?: { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} } | undefined
              PreTrainingReport?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              PostTrainingReport?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        Explainability?:
          | { Report?: { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} } | undefined }
          | undefined
      }
    | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
  ApprovalDescription?: {} | undefined
  CustomerMetadataProperties?: {} | undefined
  DriftCheckBaselines?:
    | {
        Bias?:
          | {
              ConfigFile?:
                | { ContentType?: {} | undefined; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              PreTrainingConstraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              PostTrainingConstraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        Explainability?:
          | {
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              ConfigFile?:
                | { ContentType?: {} | undefined; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        ModelQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
        ModelDataQuality?:
          | {
              Statistics?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
              Constraints?:
                | { ContentType: {}; ContentDigest?: {} | undefined; S3Uri: {} }
                | undefined
            }
          | undefined
      }
    | undefined
  Domain?: {} | undefined
  Task?: {} | undefined
  SamplePayloadUrl?: {} | undefined
  AdditionalInferenceSpecifications?: {} | undefined
}
type DescribeModelPackageGroupInput = { ModelPackageGroupName: {} }
type DescribeModelPackageGroupOutput = {
  ModelPackageGroupName: {}
  ModelPackageGroupArn: {}
  ModelPackageGroupDescription?: {} | undefined
  CreationTime: {}
  CreatedBy: UserContext
  ModelPackageGroupStatus: {}
}
type DescribeModelQualityJobDefinitionRequest = { JobDefinitionName: {} }
type DescribeModelQualityJobDefinitionResponse = {
  JobDefinitionArn: {}
  JobDefinitionName: {}
  CreationTime: {}
  ModelQualityBaselineConfig?:
    | {
        BaseliningJobName?: {} | undefined
        ConstraintsResource?: MonitoringConstraintsResource | undefined
      }
    | undefined
  ModelQualityAppSpecification: {
    ImageUri: {}
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
    RecordPreprocessorSourceUri?: {} | undefined
    PostAnalyticsProcessorSourceUri?: {} | undefined
    ProblemType?: {} | undefined
    Environment?: {} | undefined
  }
  ModelQualityJobInput: {
    EndpointInput?: EndpointInput | undefined
    BatchTransformInput?:
      | {
          DataCapturedDestinationS3Uri: {}
          DatasetFormat: {
            Csv?: { Header?: {} | undefined } | undefined
            Json?: { Line?: {} | undefined } | undefined
            Parquet?: {} | undefined
          }
          LocalPath: {}
          S3InputMode?: {} | undefined
          S3DataDistributionType?: {} | undefined
          FeaturesAttribute?: {} | undefined
          InferenceAttribute?: {} | undefined
          ProbabilityAttribute?: {} | undefined
          ProbabilityThresholdAttribute?: {} | undefined
          StartTimeOffset?: {} | undefined
          EndTimeOffset?: {} | undefined
        }
      | undefined
    GroundTruthS3Input: { S3Uri?: {} | undefined }
  }
  ModelQualityJobOutputConfig: MonitoringOutputConfig
  JobResources: MonitoringResources
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn: {}
  StoppingCondition?: MonitoringStoppingCondition | undefined
}
type DescribeMonitoringScheduleRequest = { MonitoringScheduleName: {} }
type DescribeMonitoringScheduleResponse = {
  MonitoringScheduleArn: {}
  MonitoringScheduleName: {}
  MonitoringScheduleStatus: {}
  MonitoringType?: {} | undefined
  FailureReason?: {} | undefined
  CreationTime: {}
  LastModifiedTime: {}
  MonitoringScheduleConfig: {
    ScheduleConfig?: { ScheduleExpression: {} } | undefined
    MonitoringJobDefinition?:
      | {
          BaselineConfig?:
            | {
                BaseliningJobName?: {} | undefined
                ConstraintsResource?: { S3Uri?: {} | undefined } | undefined
                StatisticsResource?: { S3Uri?: {} | undefined } | undefined
              }
            | undefined
          MonitoringInputs: {}
          MonitoringOutputConfig: { MonitoringOutputs: {}; KmsKeyId?: {} | undefined }
          MonitoringResources: {
            ClusterConfig: {
              InstanceCount: {}
              InstanceType: {}
              VolumeSizeInGB: {}
              VolumeKmsKeyId?: {} | undefined
            }
          }
          MonitoringAppSpecification: {
            ImageUri: {}
            ContainerEntrypoint?: {} | undefined
            ContainerArguments?: {} | undefined
            RecordPreprocessorSourceUri?: {} | undefined
            PostAnalyticsProcessorSourceUri?: {} | undefined
          }
          StoppingCondition?: { MaxRuntimeInSeconds: {} } | undefined
          Environment?: {} | undefined
          NetworkConfig?:
            | {
                EnableInterContainerTrafficEncryption?: {} | undefined
                EnableNetworkIsolation?: {} | undefined
                VpcConfig?: VpcConfig | undefined
              }
            | undefined
          RoleArn: {}
        }
      | undefined
    MonitoringJobDefinitionName?: {} | undefined
    MonitoringType?: {} | undefined
  }
  EndpointName?: {} | undefined
  LastMonitoringExecutionSummary?:
    | {
        MonitoringScheduleName: {}
        ScheduledTime: {}
        CreationTime: {}
        LastModifiedTime: {}
        MonitoringExecutionStatus: {}
        ProcessingJobArn?: {} | undefined
        EndpointName?: {} | undefined
        FailureReason?: {} | undefined
        MonitoringJobDefinitionName?: {} | undefined
        MonitoringType?: {} | undefined
      }
    | undefined
}
type DescribeNotebookInstanceInput = { NotebookInstanceName: {} }
type DescribeNotebookInstanceOutput = {
  NotebookInstanceArn?: {} | undefined
  NotebookInstanceName?: {} | undefined
  NotebookInstanceStatus?: {} | undefined
  FailureReason?: {} | undefined
  Url?: {} | undefined
  InstanceType?: {} | undefined
  SubnetId?: {} | undefined
  SecurityGroups?: {} | undefined
  RoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  NetworkInterfaceId?: {} | undefined
  LastModifiedTime?: {} | undefined
  CreationTime?: {} | undefined
  NotebookInstanceLifecycleConfigName?: {} | undefined
  DirectInternetAccess?: {} | undefined
  VolumeSizeInGB?: {} | undefined
  AcceleratorTypes?: {} | undefined
  DefaultCodeRepository?: {} | undefined
  AdditionalCodeRepositories?: {} | undefined
  RootAccess?: {} | undefined
  PlatformIdentifier?: {} | undefined
  InstanceMetadataServiceConfiguration?: { MinimumInstanceMetadataServiceVersion: {} } | undefined
}
type DescribeNotebookInstanceLifecycleConfigInput = { NotebookInstanceLifecycleConfigName: {} }
type DescribeNotebookInstanceLifecycleConfigOutput = {
  NotebookInstanceLifecycleConfigArn?: {} | undefined
  NotebookInstanceLifecycleConfigName?: {} | undefined
  OnCreate?: {} | undefined
  OnStart?: {} | undefined
  LastModifiedTime?: {} | undefined
  CreationTime?: {} | undefined
}
type DescribePipelineRequest = { PipelineName: {} }
type DescribePipelineResponse = {
  PipelineArn?: {} | undefined
  PipelineName?: {} | undefined
  PipelineDisplayName?: {} | undefined
  PipelineDefinition?: {} | undefined
  PipelineDescription?: {} | undefined
  RoleArn?: {} | undefined
  PipelineStatus?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  LastRunTime?: {} | undefined
  CreatedBy?: UserContext | undefined
  LastModifiedBy?: UserContext | undefined
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type DescribePipelineDefinitionForExecutionRequest = { PipelineExecutionArn: {} }
type DescribePipelineDefinitionForExecutionResponse = {
  PipelineDefinition?: {} | undefined
  CreationTime?: {} | undefined
}
type DescribePipelineExecutionRequest = { PipelineExecutionArn: {} }
type PipelineExperimentConfig = { ExperimentName?: {} | undefined; TrialName?: {} | undefined }
type DescribePipelineExecutionResponse = {
  PipelineArn?: {} | undefined
  PipelineExecutionArn?: {} | undefined
  PipelineExecutionDisplayName?: {} | undefined
  PipelineExecutionStatus?: {} | undefined
  PipelineExecutionDescription?: {} | undefined
  PipelineExperimentConfig?: PipelineExperimentConfig | undefined
  FailureReason?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  CreatedBy?: UserContext | undefined
  LastModifiedBy?: UserContext | undefined
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type DescribeProcessingJobRequest = { ProcessingJobName: {} }
type DescribeProcessingJobResponse = {
  ProcessingInputs?: {} | undefined
  ProcessingOutputConfig?: { Outputs: {}; KmsKeyId?: {} | undefined } | undefined
  ProcessingJobName: {}
  ProcessingResources: {
    ClusterConfig: {
      InstanceCount: {}
      InstanceType: {}
      VolumeSizeInGB: {}
      VolumeKmsKeyId?: {} | undefined
    }
  }
  StoppingCondition?: { MaxRuntimeInSeconds: {} } | undefined
  AppSpecification: {
    ImageUri: {}
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
  }
  Environment?: {} | undefined
  NetworkConfig?:
    | {
        EnableInterContainerTrafficEncryption?: {} | undefined
        EnableNetworkIsolation?: {} | undefined
        VpcConfig?: VpcConfig | undefined
      }
    | undefined
  RoleArn?: {} | undefined
  ExperimentConfig?:
    | {
        ExperimentName?: {} | undefined
        TrialName?: {} | undefined
        TrialComponentDisplayName?: {} | undefined
        RunName?: {} | undefined
      }
    | undefined
  ProcessingJobArn: {}
  ProcessingJobStatus: {}
  ExitMessage?: {} | undefined
  FailureReason?: {} | undefined
  ProcessingEndTime?: {} | undefined
  ProcessingStartTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  CreationTime: {}
  MonitoringScheduleArn?: {} | undefined
  AutoMLJobArn?: {} | undefined
  TrainingJobArn?: {} | undefined
}
type DescribeProjectInput = { ProjectName: {} }
type DescribeProjectOutput = {
  ProjectArn: {}
  ProjectName: {}
  ProjectId: {}
  ProjectDescription?: {} | undefined
  ServiceCatalogProvisioningDetails: {
    ProductId: {}
    ProvisioningArtifactId?: {} | undefined
    PathId?: {} | undefined
    ProvisioningParameters?: {} | undefined
  }
  ServiceCatalogProvisionedProductDetails?:
    | { ProvisionedProductId?: {} | undefined; ProvisionedProductStatusMessage?: {} | undefined }
    | undefined
  ProjectStatus: {}
  CreatedBy?: UserContext | undefined
  CreationTime: {}
  LastModifiedTime?: {} | undefined
  LastModifiedBy?: UserContext | undefined
}
type DescribeSpaceRequest = { DomainId: {}; SpaceName: {} }
type DescribeSpaceResponse = {
  DomainId?: {} | undefined
  SpaceArn?: {} | undefined
  SpaceName?: {} | undefined
  HomeEfsFileSystemUid?: {} | undefined
  Status?: {} | undefined
  LastModifiedTime?: {} | undefined
  CreationTime?: {} | undefined
  FailureReason?: {} | undefined
  SpaceSettings?:
    | {
        JupyterServerAppSettings?: JupyterServerAppSettings | undefined
        KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined
      }
    | undefined
}
type DescribeStudioLifecycleConfigRequest = { StudioLifecycleConfigName: {} }
type DescribeStudioLifecycleConfigResponse = {
  StudioLifecycleConfigArn?: {} | undefined
  StudioLifecycleConfigName?: {} | undefined
  CreationTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  StudioLifecycleConfigContent?: {} | undefined
  StudioLifecycleConfigAppType?: {} | undefined
}
type DescribeSubscribedWorkteamRequest = { WorkteamArn: {} }
type DescribeSubscribedWorkteamResponse = {
  SubscribedWorkteam: {
    WorkteamArn: {}
    MarketplaceTitle?: {} | undefined
    SellerName?: {} | undefined
    MarketplaceDescription?: {} | undefined
    ListingId?: {} | undefined
  }
}
type DescribeTrainingJobRequest = { TrainingJobName: {} }
type DescribeTrainingJobResponse = {
  TrainingJobName: {}
  TrainingJobArn: {}
  TuningJobArn?: {} | undefined
  LabelingJobArn?: {} | undefined
  AutoMLJobArn?: {} | undefined
  ModelArtifacts: { S3ModelArtifacts: {} }
  TrainingJobStatus: {}
  SecondaryStatus: {}
  FailureReason?: {} | undefined
  HyperParameters?: {} | undefined
  AlgorithmSpecification: {
    TrainingImage?: {} | undefined
    AlgorithmName?: {} | undefined
    TrainingInputMode: TrainingInputMode
    MetricDefinitions?: {} | undefined
    EnableSageMakerMetricsTimeSeries?: {} | undefined
    ContainerEntrypoint?: {} | undefined
    ContainerArguments?: {} | undefined
    TrainingImageConfig?:
      | {
          TrainingRepositoryAccessMode: {}
          TrainingRepositoryAuthConfig?:
            | { TrainingRepositoryCredentialsProviderArn: {} }
            | undefined
        }
      | undefined
  }
  RoleArn?: {} | undefined
  InputDataConfig?: {} | undefined
  OutputDataConfig?: { KmsKeyId?: {} | undefined; S3OutputPath: {} } | undefined
  ResourceConfig: {
    InstanceType?: {} | undefined
    InstanceCount?: {} | undefined
    VolumeSizeInGB: {}
    VolumeKmsKeyId?: {} | undefined
    InstanceGroups?: {} | undefined
    KeepAlivePeriodInSeconds?: {} | undefined
  }
  VpcConfig?: { SecurityGroupIds: {}; Subnets: {} } | undefined
  StoppingCondition: { MaxRuntimeInSeconds?: {} | undefined; MaxWaitTimeInSeconds?: {} | undefined }
  CreationTime: {}
  TrainingStartTime?: {} | undefined
  TrainingEndTime?: {} | undefined
  LastModifiedTime?: {} | undefined
  SecondaryStatusTransitions?: {} | undefined
  FinalMetricDataList?: {} | undefined
  EnableNetworkIsolation?: {} | undefined
  EnableInterContainerTrafficEncryption?: {} | undefined
  EnableManagedSpotTraining?: {} | undefined
  CheckpointConfig?: CheckpointConfig | undefined
  TrainingTimeInSeconds?: {} | undefined
  BillableTimeInSeconds?: {} | undefined
  DebugHookConfig?: DebugHookConfig | undefined
  ExperimentConfig?: ExperimentConfig | undefined
  DebugRuleConfigurations?: {} | undefined
  TensorBoardOutputConfig?: TensorBoardOutputConfig | undefined
  DebugRuleEvaluationStatuses?: {} | undefined
  ProfilerConfig?: ProfilerConfig | undefined
  ProfilerRuleConfigurations?: {} | undefined
  ProfilerRuleEvaluationStatuses?: {} | undefined
  ProfilingStatus?: {} | undefined
  RetryStrategy?: { MaximumRetryAttempts: {} } | undefined
  Environment?: {} | undefined
  WarmPoolStatus?:
    | {
        Status: {}
        ResourceRetainedBillableTimeInSeconds?: {} | undefined
        ReusedByJob?: {} | undefined
      }
    | undefined
}
type DescribeTransformJobRequest = { TransformJobName: {} }
type DataProcessing = {
  InputFilter?: {} | undefined
  OutputFilter?: {} | undefined
  JoinSource?: {} | undefined
}
type DescribeTransformJobResponse = {
  TransformJobName: {}
  TransformJobArn: {}
  TransformJobStatus: {}
  FailureReason?: {} | undefined
  ModelName: {}
  MaxConcurrentTransforms?: {} | undefined
  ModelClientConfig?:
    | { InvocationsTimeoutInSeconds?: {} | undefined; InvocationsMaxRetries?: {} | undefined }
    | undefined
  MaxPayloadInMB?: {} | undefined
  BatchStrategy?: {} | undefined
  Environment?: {} | undefined
  TransformInput: {
    DataSource: { S3DataSource: { S3DataType: {}; S3Uri: {} } }
    ContentType?: {} | undefined
    CompressionType?: {} | undefined
    SplitType?: {} | undefined
  }
  TransformOutput?:
    | {
        S3OutputPath: {}
        Accept?: {} | undefined
        AssembleWith?: {} | undefined
        KmsKeyId?: {} | undefined
      }
    | undefined
  DataCaptureConfig?:
    | { DestinationS3Uri: {}; KmsKeyId?: {} | undefined; GenerateInferenceId?: {} | undefined }
    | undefined
  TransformResources: { InstanceType: {}; InstanceCount: {}; VolumeKmsKeyId?: {} | undefined }
  CreationTime: {}
  TransformStartTime?: {} | undefined
  TransformEndTime?: {} | undefined
  LabelingJobArn?: {} | undefined
  AutoMLJobArn?: {} | undefined
  DataProcessing?: DataProcessing | undefined
  ExperimentConfig?: ExperimentConfig | undefined
}
type DescribeTrialRequest = { TrialName: {} }
type DescribeTrialResponse = {
  TrialName?: {} | undefined
  TrialArn?: {} | undefined
  DisplayName?: {} | undefined
  ExperimentName?: {} | undefined
  Source?: { SourceArn: {}; SourceType?: {} | undefined } | undefined
  CreationTime?: {} | undefined
  CreatedBy?:
    | {
        UserProfileArn?: {} | undefined
        UserProfileName?: {} | undefined
        DomainId?: {} | undefined
        IamIdentity?:
          | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
          | undefined
      }
    | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?:
    | {
        UserProfileArn?: {} | undefined
        UserProfileName?: {} | undefined
        DomainId?: {} | undefined
        IamIdentity?:
          | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
          | undefined
      }
    | undefined
  MetadataProperties?: MetadataProperties | undefined
}
type DescribeTrialComponentRequest = { TrialComponentName: {} }
type DescribeTrialComponentResponse = {
  TrialComponentName?: {} | undefined
  TrialComponentArn?: {} | undefined
  DisplayName?: {} | undefined
  Source?: { SourceArn: {}; SourceType?: {} | undefined } | undefined
  Status?: { PrimaryStatus?: {} | undefined; Message?: {} | undefined } | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  CreationTime?: {} | undefined
  CreatedBy?:
    | {
        UserProfileArn?: {} | undefined
        UserProfileName?: {} | undefined
        DomainId?: {} | undefined
        IamIdentity?:
          | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
          | undefined
      }
    | undefined
  LastModifiedTime?: {} | undefined
  LastModifiedBy?:
    | {
        UserProfileArn?: {} | undefined
        UserProfileName?: {} | undefined
        DomainId?: {} | undefined
        IamIdentity?:
          | { Arn?: {} | undefined; PrincipalId?: {} | undefined; SourceIdentity?: {} | undefined }
          | undefined
      }
    | undefined
  Parameters?: {} | undefined
  InputArtifacts?: {} | undefined
  OutputArtifacts?: {} | undefined
  MetadataProperties?: MetadataProperties | undefined
  Metrics?: {} | undefined
  LineageGroupArn?: {} | undefined
  Sources?: {} | undefined
}
type DescribeUserProfileRequest = { DomainId: {}; UserProfileName: {} }
type DescribeUserProfileResponse = {
  DomainId?: {} | undefined
  UserProfileArn?: {} | undefined
  UserProfileName?: {} | undefined
  HomeEfsFileSystemUid?: {} | undefined
  Status?: {} | undefined
  LastModifiedTime?: {} | undefined
  CreationTime?: {} | undefined
  FailureReason?: {} | undefined
  SingleSignOnUserIdentifier?: {} | undefined
  SingleSignOnUserValue?: {} | undefined
  UserSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        SharingSettings?:
          | {
              NotebookOutputOption?: {} | undefined
              S3OutputPath?: {} | undefined
              S3KmsKeyId?: {} | undefined
            }
          | undefined
        JupyterServerAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              LifecycleConfigArns?: {} | undefined
              CodeRepositories?: {} | undefined
            }
          | undefined
        KernelGatewayAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              CustomImages?: {} | undefined
              LifecycleConfigArns?: {} | undefined
            }
          | undefined
        TensorBoardAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        RStudioServerProAppSettings?:
          | { AccessStatus?: {} | undefined; UserGroup?: {} | undefined }
          | undefined
        RSessionAppSettings?:
          | { DefaultResourceSpec?: ResourceSpec | undefined; CustomImages?: {} | undefined }
          | undefined
        CanvasAppSettings?:
          | {
              TimeSeriesForecastingSettings?:
                | { Status?: {} | undefined; AmazonForecastRoleArn?: {} | undefined }
                | undefined
              ModelRegisterSettings?:
                | { Status?: {} | undefined; CrossAccountModelRegisterRoleArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeWorkforceRequest = { WorkforceName: {} }
type DescribeWorkforceResponse = {
  Workforce: {
    WorkforceName: {}
    WorkforceArn: {}
    LastUpdatedDate?: {} | undefined
    SourceIpConfig?: { Cidrs: {} } | undefined
    SubDomain?: {} | undefined
    CognitoConfig?: { UserPool: {}; ClientId: {} } | undefined
    OidcConfig?:
      | {
          ClientId?: {} | undefined
          Issuer?: {} | undefined
          AuthorizationEndpoint?: {} | undefined
          TokenEndpoint?: {} | undefined
          UserInfoEndpoint?: {} | undefined
          LogoutEndpoint?: {} | undefined
          JwksUri?: {} | undefined
        }
      | undefined
    CreateDate?: {} | undefined
    WorkforceVpcConfig?:
      | { VpcId: {}; SecurityGroupIds: {}; Subnets: {}; VpcEndpointId?: {} | undefined }
      | undefined
    Status?: {} | undefined
    FailureReason?: {} | undefined
  }
}
type DescribeWorkteamRequest = { WorkteamName: {} }
type DescribeWorkteamResponse = {
  Workteam: {
    WorkteamName: {}
    MemberDefinitions: {}
    WorkteamArn: {}
    WorkforceArn?: {} | undefined
    ProductListingIds?: {} | undefined
    Description: {}
    SubDomain?: {} | undefined
    CreateDate?: {} | undefined
    LastUpdatedDate?: {} | undefined
    NotificationConfiguration?: { NotificationTopicArn?: {} | undefined } | undefined
  }
}
type DisableSagemakerServicecatalogPortfolioInput = { [x: string]: unknown }
type DisableSagemakerServicecatalogPortfolioOutput = { [x: string]: unknown }
type DisassociateTrialComponentRequest = { TrialComponentName: {}; TrialName: {} }
type DisassociateTrialComponentResponse = {
  TrialComponentArn?: {} | undefined
  TrialArn?: {} | undefined
}
type EnableSagemakerServicecatalogPortfolioInput = { [x: string]: unknown }
type EnableSagemakerServicecatalogPortfolioOutput = { [x: string]: unknown }
type GetDeviceFleetReportRequest = { DeviceFleetName: {} }
type GetDeviceFleetReportResponse = {
  DeviceFleetArn: {}
  DeviceFleetName: {}
  OutputConfig?:
    | {
        S3OutputLocation: {}
        KmsKeyId?: {} | undefined
        PresetDeploymentType?: {} | undefined
        PresetDeploymentConfig?: {} | undefined
      }
    | undefined
  Description?: {} | undefined
  ReportGenerated?: {} | undefined
  DeviceStats?: { ConnectedDeviceCount: {}; RegisteredDeviceCount: {} } | undefined
  AgentVersions?: {} | undefined
  ModelStats?: {} | undefined
}
type GetLineageGroupPolicyRequest = { LineageGroupName: {} }
type GetLineageGroupPolicyResponse = {
  LineageGroupArn?: {} | undefined
  ResourcePolicy?: {} | undefined
}
type GetModelPackageGroupPolicyInput = { ModelPackageGroupName: {} }
type GetModelPackageGroupPolicyOutput = { ResourcePolicy: {} }
type GetSagemakerServicecatalogPortfolioStatusInput = { [x: string]: unknown }
type GetSagemakerServicecatalogPortfolioStatusOutput = { Status?: {} | undefined }
type GetSearchSuggestionsRequest = {
  Resource: {}
  SuggestionQuery?: { PropertyNameQuery?: { PropertyNameHint: {} } | undefined } | undefined
}
type GetSearchSuggestionsResponse = { PropertyNameSuggestions?: {} | undefined }
type ImportHubContentRequest = {
  HubContentName: {}
  HubContentVersion?: {} | undefined
  HubContentType: {}
  DocumentSchemaVersion: {}
  HubName: {}
  HubContentDisplayName?: {} | undefined
  HubContentDescription?: {} | undefined
  HubContentMarkdown?: {} | undefined
  HubContentDocument: {}
  HubContentSearchKeywords?: {} | undefined
  Tags?: {} | undefined
}
type ImportHubContentResponse = { HubArn: {}; HubContentArn: {} }
type ListActionsRequest = {
  SourceUri?: {} | undefined
  ActionType?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListActionsResponse = { ActionSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListAlgorithmsInput = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListAlgorithmsOutput = { AlgorithmSummaryList: {}; NextToken?: {} | undefined }
type ListAliasesRequest = {
  ImageName: {}
  Alias?: {} | undefined
  Version?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAliasesResponse = {
  SageMakerImageVersionAliases?: {} | undefined
  NextToken?: {} | undefined
}
type ListAppImageConfigsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  ModifiedTimeBefore?: {} | undefined
  ModifiedTimeAfter?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListAppImageConfigsResponse = { NextToken?: {} | undefined; AppImageConfigs?: {} | undefined }
type ListAppsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  DomainIdEquals?: {} | undefined
  UserProfileNameEquals?: {} | undefined
  SpaceNameEquals?: {} | undefined
}
type ListAppsResponse = { Apps?: {} | undefined; NextToken?: {} | undefined }
type ListArtifactsRequest = {
  SourceUri?: {} | undefined
  ArtifactType?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListArtifactsResponse = { ArtifactSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListAssociationsRequest = {
  SourceArn?: {} | undefined
  DestinationArn?: {} | undefined
  SourceType?: {} | undefined
  DestinationType?: {} | undefined
  AssociationType?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAssociationsResponse = {
  AssociationSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListAutoMLJobsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAutoMLJobsResponse = { AutoMLJobSummaries: {}; NextToken?: {} | undefined }
type ListCandidatesForAutoMLJobRequest = {
  AutoMLJobName: {}
  StatusEquals?: {} | undefined
  CandidateNameEquals?: {} | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCandidatesForAutoMLJobResponse = { Candidates: {}; NextToken?: {} | undefined }
type ListCodeRepositoriesInput = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListCodeRepositoriesOutput = { CodeRepositorySummaryList: {}; NextToken?: {} | undefined }
type ListCompilationJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListCompilationJobsResponse = { CompilationJobSummaries: {}; NextToken?: {} | undefined }
type ListContextsRequest = {
  SourceUri?: {} | undefined
  ContextType?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListContextsResponse = { ContextSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListDataQualityJobDefinitionsRequest = {
  EndpointName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
}
type ListDataQualityJobDefinitionsResponse = {
  JobDefinitionSummaries: {}
  NextToken?: {} | undefined
}
type ListDeviceFleetsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListDeviceFleetsResponse = { DeviceFleetSummaries: {}; NextToken?: {} | undefined }
type ListDevicesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  LatestHeartbeatAfter?: {} | undefined
  ModelName?: {} | undefined
  DeviceFleetName?: {} | undefined
}
type ListDevicesResponse = { DeviceSummaries: {}; NextToken?: {} | undefined }
type ListDomainsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListDomainsResponse = { Domains?: {} | undefined; NextToken?: {} | undefined }
type ListEdgeDeploymentPlansRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  DeviceFleetNameContains?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListEdgeDeploymentPlansResponse = {
  EdgeDeploymentPlanSummaries: {}
  NextToken?: {} | undefined
}
type ListEdgePackagingJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  ModelNameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListEdgePackagingJobsResponse = { EdgePackagingJobSummaries: {}; NextToken?: {} | undefined }
type ListEndpointConfigsInput = {
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
}
type ListEndpointConfigsOutput = { EndpointConfigs: {}; NextToken?: {} | undefined }
type ListEndpointsInput = {
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  StatusEquals?: {} | undefined
}
type ListEndpointsOutput = { Endpoints: {}; NextToken?: {} | undefined }
type ListExperimentsRequest = {
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListExperimentsResponse = { ExperimentSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListFeatureGroupsRequest = {
  NameContains?: {} | undefined
  FeatureGroupStatusEquals?: {} | undefined
  OfflineStoreStatusEquals?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListFeatureGroupsResponse = { FeatureGroupSummaries: {}; NextToken: {} }
type ListFlowDefinitionsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListFlowDefinitionsResponse = { FlowDefinitionSummaries: {}; NextToken?: {} | undefined }
type ListHubContentVersionsRequest = {
  HubName: {}
  HubContentType: {}
  HubContentName: {}
  MinVersion?: {} | undefined
  MaxSchemaVersion?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListHubContentVersionsResponse = { HubContentSummaries: {}; NextToken?: {} | undefined }
type ListHubContentsRequest = {
  HubName: {}
  HubContentType: {}
  NameContains?: {} | undefined
  MaxSchemaVersion?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListHubContentsResponse = { HubContentSummaries: {}; NextToken?: {} | undefined }
type ListHubsRequest = {
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListHubsResponse = { HubSummaries: {}; NextToken?: {} | undefined }
type ListHumanTaskUisRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListHumanTaskUisResponse = { HumanTaskUiSummaries: {}; NextToken?: {} | undefined }
type ListHyperParameterTuningJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  StatusEquals?: {} | undefined
}
type ListHyperParameterTuningJobsResponse = {
  HyperParameterTuningJobSummaries: {}
  NextToken?: {} | undefined
}
type ListImageVersionsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  ImageName: {}
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListImageVersionsResponse = { ImageVersions?: {} | undefined; NextToken?: {} | undefined }
type ListImagesRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListImagesResponse = { Images?: {} | undefined; NextToken?: {} | undefined }
type ListInferenceExperimentsRequest = {
  NameContains?: {} | undefined
  Type?: {} | undefined
  StatusEquals?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListInferenceExperimentsResponse = {
  InferenceExperiments?: {} | undefined
  NextToken?: {} | undefined
}
type ListInferenceRecommendationsJobStepsRequest = {
  JobName: {}
  Status?: {} | undefined
  StepType?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListInferenceRecommendationsJobStepsResponse = {
  Steps?: {} | undefined
  NextToken?: {} | undefined
}
type ListInferenceRecommendationsJobsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListInferenceRecommendationsJobsResponse = {
  InferenceRecommendationsJobs: {}
  NextToken?: {} | undefined
}
type ListLabelingJobsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  NameContains?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  StatusEquals?: {} | undefined
}
type ListLabelingJobsResponse = {
  LabelingJobSummaryList?: {} | undefined
  NextToken?: {} | undefined
}
type ListLabelingJobsForWorkteamRequest = {
  WorkteamArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  JobReferenceCodeContains?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListLabelingJobsForWorkteamResponse = {
  LabelingJobSummaryList: {}
  NextToken?: {} | undefined
}
type ListLineageGroupsRequest = {
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLineageGroupsResponse = {
  LineageGroupSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListModelBiasJobDefinitionsRequest = {
  EndpointName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
}
type ListModelBiasJobDefinitionsResponse = {
  JobDefinitionSummaries: {}
  NextToken?: {} | undefined
}
type ListModelCardExportJobsRequest = {
  ModelCardName: {}
  ModelCardVersion?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  ModelCardExportJobNameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListModelCardExportJobsResponse = {
  ModelCardExportJobSummaries: {}
  NextToken?: {} | undefined
}
type ListModelCardVersionsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  ModelCardName: {}
  ModelCardStatus?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListModelCardVersionsResponse = { ModelCardVersionSummaryList: {}; NextToken?: {} | undefined }
type ListModelCardsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  ModelCardStatus?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListModelCardsResponse = { ModelCardSummaries: {}; NextToken?: {} | undefined }
type ListModelExplainabilityJobDefinitionsRequest = {
  EndpointName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
}
type ListModelExplainabilityJobDefinitionsResponse = {
  JobDefinitionSummaries: {}
  NextToken?: {} | undefined
}
type ListModelMetadataRequest = {
  SearchExpression?: { Filters?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListModelMetadataResponse = { ModelMetadataSummaries: {}; NextToken?: {} | undefined }
type ListModelPackageGroupsInput = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListModelPackageGroupsOutput = { ModelPackageGroupSummaryList: {}; NextToken?: {} | undefined }
type ListModelPackagesInput = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  ModelApprovalStatus?: {} | undefined
  ModelPackageGroupName?: {} | undefined
  ModelPackageType?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListModelPackagesOutput = { ModelPackageSummaryList: {}; NextToken?: {} | undefined }
type ListModelQualityJobDefinitionsRequest = {
  EndpointName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
}
type ListModelQualityJobDefinitionsResponse = {
  JobDefinitionSummaries: {}
  NextToken?: {} | undefined
}
type ListModelsInput = {
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
}
type ListModelsOutput = { Models: {}; NextToken?: {} | undefined }
type ListMonitoringAlertHistoryRequest = {
  MonitoringScheduleName?: {} | undefined
  MonitoringAlertName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  StatusEquals?: {} | undefined
}
type ListMonitoringAlertHistoryResponse = {
  MonitoringAlertHistory?: {} | undefined
  NextToken?: {} | undefined
}
type ListMonitoringAlertsRequest = {
  MonitoringScheduleName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListMonitoringAlertsResponse = {
  MonitoringAlertSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListMonitoringExecutionsRequest = {
  MonitoringScheduleName?: {} | undefined
  EndpointName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ScheduledTimeBefore?: {} | undefined
  ScheduledTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  StatusEquals?: {} | undefined
  MonitoringJobDefinitionName?: {} | undefined
  MonitoringTypeEquals?: {} | undefined
}
type ListMonitoringExecutionsResponse = {
  MonitoringExecutionSummaries: {}
  NextToken?: {} | undefined
}
type ListMonitoringSchedulesRequest = {
  EndpointName?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  StatusEquals?: {} | undefined
  MonitoringJobDefinitionName?: {} | undefined
  MonitoringTypeEquals?: {} | undefined
}
type ListMonitoringSchedulesResponse = {
  MonitoringScheduleSummaries: {}
  NextToken?: {} | undefined
}
type ListNotebookInstanceLifecycleConfigsInput = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
}
type ListNotebookInstanceLifecycleConfigsOutput = {
  NextToken?: {} | undefined
  NotebookInstanceLifecycleConfigs?: {} | undefined
}
type ListNotebookInstancesInput = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NameContains?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  StatusEquals?: {} | undefined
  NotebookInstanceLifecycleConfigNameContains?: {} | undefined
  DefaultCodeRepositoryContains?: {} | undefined
  AdditionalCodeRepositoryEquals?: {} | undefined
}
type ListNotebookInstancesOutput = {
  NextToken?: {} | undefined
  NotebookInstances?: {} | undefined
}
type ListPipelineExecutionStepsRequest = {
  PipelineExecutionArn?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortOrder?: {} | undefined
}
type ListPipelineExecutionStepsResponse = {
  PipelineExecutionSteps?: {} | undefined
  NextToken?: {} | undefined
}
type ListPipelineExecutionsRequest = {
  PipelineName: {}
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPipelineExecutionsResponse = {
  PipelineExecutionSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListPipelineParametersForExecutionRequest = {
  PipelineExecutionArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPipelineParametersForExecutionResponse = {
  PipelineParameters?: {} | undefined
  NextToken?: {} | undefined
}
type ListPipelinesRequest = {
  PipelineNamePrefix?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPipelinesResponse = { PipelineSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListProcessingJobsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListProcessingJobsResponse = { ProcessingJobSummaries: {}; NextToken?: {} | undefined }
type ListProjectsInput = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  MaxResults?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListProjectsOutput = { ProjectSummaryList: {}; NextToken?: {} | undefined }
type ListSpacesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  DomainIdEquals?: {} | undefined
  SpaceNameContains?: {} | undefined
}
type ListSpacesResponse = { Spaces?: {} | undefined; NextToken?: {} | undefined }
type ListStageDevicesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  EdgeDeploymentPlanName: {}
  ExcludeDevicesDeployedInOtherStage?: {} | undefined
  StageName: {}
}
type ListStageDevicesResponse = { DeviceDeploymentSummaries: {}; NextToken?: {} | undefined }
type ListStudioLifecycleConfigsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  NameContains?: {} | undefined
  AppTypeEquals?: {} | undefined
  CreationTimeBefore?: {} | undefined
  CreationTimeAfter?: {} | undefined
  ModifiedTimeBefore?: {} | undefined
  ModifiedTimeAfter?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListStudioLifecycleConfigsResponse = {
  NextToken?: {} | undefined
  StudioLifecycleConfigs?: {} | undefined
}
type ListSubscribedWorkteamsRequest = {
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListSubscribedWorkteamsResponse = { SubscribedWorkteams: {}; NextToken?: {} | undefined }
type ListTagsInput = { ResourceArn: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListTagsOutput = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ListTrainingJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  WarmPoolStatusEquals?: {} | undefined
}
type ListTrainingJobsResponse = { TrainingJobSummaries: {}; NextToken?: {} | undefined }
type ListTrainingJobsForHyperParameterTuningJobRequest = {
  HyperParameterTuningJobName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListTrainingJobsForHyperParameterTuningJobResponse = {
  TrainingJobSummaries: {}
  NextToken?: {} | undefined
}
type ListTransformJobsRequest = {
  CreationTimeAfter?: {} | undefined
  CreationTimeBefore?: {} | undefined
  LastModifiedTimeAfter?: {} | undefined
  LastModifiedTimeBefore?: {} | undefined
  NameContains?: {} | undefined
  StatusEquals?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTransformJobsResponse = { TransformJobSummaries: {}; NextToken?: {} | undefined }
type ListTrialComponentsRequest = {
  ExperimentName?: {} | undefined
  TrialName?: {} | undefined
  SourceArn?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTrialComponentsResponse = {
  TrialComponentSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListTrialsRequest = {
  ExperimentName?: {} | undefined
  TrialComponentName?: {} | undefined
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTrialsResponse = { TrialSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListUserProfilesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  DomainIdEquals?: {} | undefined
  UserProfileNameContains?: {} | undefined
}
type ListUserProfilesResponse = { UserProfiles?: {} | undefined; NextToken?: {} | undefined }
type ListWorkforcesRequest = {
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListWorkforcesResponse = { Workforces: {}; NextToken?: {} | undefined }
type ListWorkteamsRequest = {
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NameContains?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListWorkteamsResponse = { Workteams: {}; NextToken?: {} | undefined }
type PutModelPackageGroupPolicyInput = { ModelPackageGroupName: {}; ResourcePolicy: {} }
type PutModelPackageGroupPolicyOutput = { ModelPackageGroupArn: {} }
type QueryLineageRequest = {
  StartArns?: {} | undefined
  Direction?: {} | undefined
  IncludeEdges?: {} | undefined
  Filters?:
    | {
        Types?: {} | undefined
        LineageTypes?: {} | undefined
        CreatedBefore?: {} | undefined
        CreatedAfter?: {} | undefined
        ModifiedBefore?: {} | undefined
        ModifiedAfter?: {} | undefined
        Properties?: {} | undefined
      }
    | undefined
  MaxDepth?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type QueryLineageResponse = {
  Vertices?: {} | undefined
  Edges?: {} | undefined
  NextToken?: {} | undefined
}
type RegisterDevicesRequest = { DeviceFleetName: {}; Devices: {}; Tags?: {} | undefined }
type RenderUiTemplateRequest = {
  UiTemplate?: { Content: {} } | undefined
  Task: { Input: {} }
  RoleArn: {}
  HumanTaskUiArn?: {} | undefined
}
type RenderUiTemplateResponse = { RenderedContent: {}; Errors: {} }
type RetryPipelineExecutionRequest = {
  PipelineExecutionArn: {}
  ClientRequestToken: {}
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type RetryPipelineExecutionResponse = { PipelineExecutionArn?: {} | undefined }
type SearchRequest = {
  Resource: {}
  SearchExpression?:
    | {
        Filters?: {} | undefined
        NestedFilters?: {} | undefined
        SubExpressions?: {} | undefined
        Operator?: {} | undefined
      }
    | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type SearchResponse = { Results?: {} | undefined; NextToken?: {} | undefined }
type SendPipelineExecutionStepFailureRequest = {
  CallbackToken: {}
  FailureReason?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type SendPipelineExecutionStepFailureResponse = { PipelineExecutionArn?: {} | undefined }
type SendPipelineExecutionStepSuccessRequest = {
  CallbackToken: {}
  OutputParameters?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type SendPipelineExecutionStepSuccessResponse = { PipelineExecutionArn?: {} | undefined }
type StartEdgeDeploymentStageRequest = { EdgeDeploymentPlanName: {}; StageName: {} }
type StartInferenceExperimentRequest = { Name: {} }
type StartInferenceExperimentResponse = { InferenceExperimentArn: {} }
type StartMonitoringScheduleRequest = { MonitoringScheduleName: {} }
type StartNotebookInstanceInput = { NotebookInstanceName: {} }
type StartPipelineExecutionRequest = {
  PipelineName: {}
  PipelineExecutionDisplayName?: {} | undefined
  PipelineParameters?: {} | undefined
  PipelineExecutionDescription?: {} | undefined
  ClientRequestToken: {}
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type StartPipelineExecutionResponse = { PipelineExecutionArn?: {} | undefined }
type StopAutoMLJobRequest = { AutoMLJobName: {} }
type StopCompilationJobRequest = { CompilationJobName: {} }
type StopEdgeDeploymentStageRequest = { EdgeDeploymentPlanName: {}; StageName: {} }
type StopEdgePackagingJobRequest = { EdgePackagingJobName: {} }
type StopHyperParameterTuningJobRequest = { HyperParameterTuningJobName: {} }
type StopInferenceExperimentRequest = {
  Name: {}
  ModelVariantActions: {}
  DesiredModelVariants?: {} | undefined
  DesiredState?: {} | undefined
  Reason?: {} | undefined
}
type StopInferenceExperimentResponse = { InferenceExperimentArn: {} }
type StopInferenceRecommendationsJobRequest = { JobName: {} }
type StopLabelingJobRequest = { LabelingJobName: {} }
type StopMonitoringScheduleRequest = { MonitoringScheduleName: {} }
type StopNotebookInstanceInput = { NotebookInstanceName: {} }
type StopPipelineExecutionRequest = { PipelineExecutionArn: {}; ClientRequestToken: {} }
type StopPipelineExecutionResponse = { PipelineExecutionArn?: {} | undefined }
type StopProcessingJobRequest = { ProcessingJobName: {} }
type StopTrainingJobRequest = { TrainingJobName: {} }
type StopTransformJobRequest = { TransformJobName: {} }
type UpdateActionRequest = {
  ActionName: {}
  Description?: {} | undefined
  Status?: {} | undefined
  Properties?: {} | undefined
  PropertiesToRemove?: {} | undefined
}
type UpdateActionResponse = { ActionArn?: {} | undefined }
type UpdateAppImageConfigRequest = {
  AppImageConfigName: {}
  KernelGatewayImageConfig?:
    | {
        KernelSpecs: {}
        FileSystemConfig?:
          | { MountPath?: {} | undefined; DefaultUid?: {} | undefined; DefaultGid?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdateAppImageConfigResponse = { AppImageConfigArn?: {} | undefined }
type UpdateArtifactRequest = {
  ArtifactArn: {}
  ArtifactName?: {} | undefined
  Properties?: {} | undefined
  PropertiesToRemove?: {} | undefined
}
type UpdateArtifactResponse = { ArtifactArn?: {} | undefined }
type UpdateCodeRepositoryInput = {
  CodeRepositoryName: {}
  GitConfig?: { SecretArn?: {} | undefined } | undefined
}
type UpdateCodeRepositoryOutput = { CodeRepositoryArn: {} }
type UpdateContextRequest = {
  ContextName: {}
  Description?: {} | undefined
  Properties?: {} | undefined
  PropertiesToRemove?: {} | undefined
}
type UpdateContextResponse = { ContextArn?: {} | undefined }
type UpdateDeviceFleetRequest = {
  DeviceFleetName: {}
  RoleArn?: {} | undefined
  Description?: {} | undefined
  OutputConfig: {
    S3OutputLocation: {}
    KmsKeyId?: {} | undefined
    PresetDeploymentType?: {} | undefined
    PresetDeploymentConfig?: {} | undefined
  }
  EnableIotRoleAlias?: {} | undefined
}
type UpdateDevicesRequest = { DeviceFleetName: {}; Devices: {} }
type UpdateDomainRequest = {
  DomainId: {}
  DefaultUserSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        SharingSettings?:
          | {
              NotebookOutputOption?: {} | undefined
              S3OutputPath?: {} | undefined
              S3KmsKeyId?: {} | undefined
            }
          | undefined
        JupyterServerAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              LifecycleConfigArns?: {} | undefined
              CodeRepositories?: {} | undefined
            }
          | undefined
        KernelGatewayAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              CustomImages?: {} | undefined
              LifecycleConfigArns?: {} | undefined
            }
          | undefined
        TensorBoardAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        RStudioServerProAppSettings?:
          | { AccessStatus?: {} | undefined; UserGroup?: {} | undefined }
          | undefined
        RSessionAppSettings?:
          | { DefaultResourceSpec?: ResourceSpec | undefined; CustomImages?: {} | undefined }
          | undefined
        CanvasAppSettings?:
          | {
              TimeSeriesForecastingSettings?:
                | { Status?: {} | undefined; AmazonForecastRoleArn?: {} | undefined }
                | undefined
              ModelRegisterSettings?:
                | { Status?: {} | undefined; CrossAccountModelRegisterRoleArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  DomainSettingsForUpdate?:
    | {
        RStudioServerProDomainSettingsForUpdate?:
          | {
              DomainExecutionRoleArn: {}
              DefaultResourceSpec?: ResourceSpec | undefined
              RStudioConnectUrl?: {} | undefined
              RStudioPackageManagerUrl?: {} | undefined
            }
          | undefined
        ExecutionRoleIdentityConfig?: {} | undefined
        SecurityGroupIds?: {} | undefined
      }
    | undefined
  DefaultSpaceSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        JupyterServerAppSettings?: JupyterServerAppSettings | undefined
        KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined
      }
    | undefined
  AppSecurityGroupManagement?: {} | undefined
}
type UpdateDomainResponse = { DomainArn?: {} | undefined }
type UpdateEndpointInput = {
  EndpointName: {}
  EndpointConfigName: {}
  RetainAllVariantProperties?: {} | undefined
  ExcludeRetainedVariantProperties?: {} | undefined
  DeploymentConfig?:
    | {
        BlueGreenUpdatePolicy: {
          TrafficRoutingConfiguration: {
            Type: {}
            WaitIntervalInSeconds: {}
            CanarySize?: { Type: {}; Value: {} } | undefined
            LinearStepSize?: { Type: {}; Value: {} } | undefined
          }
          TerminationWaitInSeconds?: {} | undefined
          MaximumExecutionTimeoutInSeconds?: {} | undefined
        }
        AutoRollbackConfiguration?: { Alarms?: {} | undefined } | undefined
      }
    | undefined
  RetainDeploymentConfig?: {} | undefined
}
type UpdateEndpointOutput = { EndpointArn: {} }
type UpdateEndpointWeightsAndCapacitiesInput = { EndpointName: {}; DesiredWeightsAndCapacities: {} }
type UpdateEndpointWeightsAndCapacitiesOutput = { EndpointArn: {} }
type UpdateExperimentRequest = {
  ExperimentName: {}
  DisplayName?: {} | undefined
  Description?: {} | undefined
}
type UpdateExperimentResponse = { ExperimentArn?: {} | undefined }
type UpdateFeatureGroupRequest = { FeatureGroupName: {}; FeatureAdditions?: {} | undefined }
type UpdateFeatureGroupResponse = { FeatureGroupArn: {} }
type UpdateFeatureMetadataRequest = {
  FeatureGroupName: {}
  FeatureName: {}
  Description?: {} | undefined
  ParameterAdditions?: {} | undefined
  ParameterRemovals?: {} | undefined
}
type UpdateHubRequest = {
  HubName: {}
  HubDescription?: {} | undefined
  HubDisplayName?: {} | undefined
  HubSearchKeywords?: {} | undefined
}
type UpdateHubResponse = { HubArn: {} }
type UpdateImageRequest = {
  DeleteProperties?: {} | undefined
  Description?: {} | undefined
  DisplayName?: {} | undefined
  ImageName: {}
  RoleArn?: {} | undefined
}
type UpdateImageResponse = { ImageArn?: {} | undefined }
type UpdateImageVersionRequest = {
  ImageName: {}
  Alias?: {} | undefined
  Version?: {} | undefined
  AliasesToAdd?: {} | undefined
  AliasesToDelete?: {} | undefined
  VendorGuidance?: {} | undefined
  JobType?: {} | undefined
  MLFramework?: {} | undefined
  ProgrammingLang?: {} | undefined
  Processor?: {} | undefined
  Horovod?: {} | undefined
  ReleaseNotes?: {} | undefined
}
type UpdateImageVersionResponse = { ImageVersionArn?: {} | undefined }
type UpdateInferenceExperimentRequest = {
  Name: {}
  Schedule?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  Description?: {} | undefined
  ModelVariants?: {} | undefined
  DataStorageConfig?:
    | {
        Destination: {}
        KmsKey?: {} | undefined
        ContentType?: CaptureContentTypeHeader | undefined
      }
    | undefined
  ShadowModeConfig?: { SourceModelVariantName: {}; ShadowModelVariants: {} } | undefined
}
type UpdateInferenceExperimentResponse = { InferenceExperimentArn: {} }
type UpdateModelCardRequest = {
  ModelCardName: {}
  Content?: {} | undefined
  ModelCardStatus?: {} | undefined
}
type UpdateModelCardResponse = { ModelCardArn: {} }
type UpdateModelPackageInput = {
  ModelPackageArn: {}
  ModelApprovalStatus?: {} | undefined
  ApprovalDescription?: {} | undefined
  CustomerMetadataProperties?: {} | undefined
  CustomerMetadataPropertiesToRemove?: {} | undefined
  AdditionalInferenceSpecificationsToAdd?: {} | undefined
}
type UpdateModelPackageOutput = { ModelPackageArn: {} }
type UpdateMonitoringAlertRequest = {
  MonitoringScheduleName: {}
  MonitoringAlertName: {}
  DatapointsToAlert: {}
  EvaluationPeriod: {}
}
type UpdateMonitoringAlertResponse = {
  MonitoringScheduleArn: {}
  MonitoringAlertName?: {} | undefined
}
type UpdateMonitoringScheduleRequest = {
  MonitoringScheduleName: {}
  MonitoringScheduleConfig: {
    ScheduleConfig?: { ScheduleExpression: {} } | undefined
    MonitoringJobDefinition?:
      | {
          BaselineConfig?:
            | {
                BaseliningJobName?: {} | undefined
                ConstraintsResource?: { S3Uri?: {} | undefined } | undefined
                StatisticsResource?: { S3Uri?: {} | undefined } | undefined
              }
            | undefined
          MonitoringInputs: {}
          MonitoringOutputConfig: { MonitoringOutputs: {}; KmsKeyId?: {} | undefined }
          MonitoringResources: {
            ClusterConfig: {
              InstanceCount: {}
              InstanceType: {}
              VolumeSizeInGB: {}
              VolumeKmsKeyId?: {} | undefined
            }
          }
          MonitoringAppSpecification: {
            ImageUri: {}
            ContainerEntrypoint?: {} | undefined
            ContainerArguments?: {} | undefined
            RecordPreprocessorSourceUri?: {} | undefined
            PostAnalyticsProcessorSourceUri?: {} | undefined
          }
          StoppingCondition?: { MaxRuntimeInSeconds: {} } | undefined
          Environment?: {} | undefined
          NetworkConfig?:
            | {
                EnableInterContainerTrafficEncryption?: {} | undefined
                EnableNetworkIsolation?: {} | undefined
                VpcConfig?: VpcConfig | undefined
              }
            | undefined
          RoleArn: {}
        }
      | undefined
    MonitoringJobDefinitionName?: {} | undefined
    MonitoringType?: {} | undefined
  }
}
type UpdateMonitoringScheduleResponse = { MonitoringScheduleArn: {} }
type UpdateNotebookInstanceInput = {
  NotebookInstanceName: {}
  InstanceType?: {} | undefined
  RoleArn?: {} | undefined
  LifecycleConfigName?: {} | undefined
  DisassociateLifecycleConfig?: {} | undefined
  VolumeSizeInGB?: {} | undefined
  DefaultCodeRepository?: {} | undefined
  AdditionalCodeRepositories?: {} | undefined
  AcceleratorTypes?: {} | undefined
  DisassociateAcceleratorTypes?: {} | undefined
  DisassociateDefaultCodeRepository?: {} | undefined
  DisassociateAdditionalCodeRepositories?: {} | undefined
  RootAccess?: {} | undefined
  InstanceMetadataServiceConfiguration?: { MinimumInstanceMetadataServiceVersion: {} } | undefined
}
type UpdateNotebookInstanceOutput = { [x: string]: unknown }
type UpdateNotebookInstanceLifecycleConfigInput = {
  NotebookInstanceLifecycleConfigName: {}
  OnCreate?: {} | undefined
  OnStart?: {} | undefined
}
type UpdateNotebookInstanceLifecycleConfigOutput = { [x: string]: unknown }
type UpdatePipelineRequest = {
  PipelineName: {}
  PipelineDisplayName?: {} | undefined
  PipelineDefinition?: {} | undefined
  PipelineDefinitionS3Location?:
    | { Bucket: {}; ObjectKey: {}; VersionId?: {} | undefined }
    | undefined
  PipelineDescription?: {} | undefined
  RoleArn?: {} | undefined
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type UpdatePipelineResponse = { PipelineArn?: {} | undefined }
type UpdatePipelineExecutionRequest = {
  PipelineExecutionArn: {}
  PipelineExecutionDescription?: {} | undefined
  PipelineExecutionDisplayName?: {} | undefined
  ParallelismConfiguration?: { MaxParallelExecutionSteps: {} } | undefined
}
type UpdatePipelineExecutionResponse = { PipelineExecutionArn?: {} | undefined }
type UpdateProjectInput = {
  ProjectName: {}
  ProjectDescription?: {} | undefined
  ServiceCatalogProvisioningUpdateDetails?:
    | { ProvisioningArtifactId?: {} | undefined; ProvisioningParameters?: {} | undefined }
    | undefined
  Tags?: {} | undefined
}
type UpdateProjectOutput = { ProjectArn: {} }
type UpdateSpaceRequest = {
  DomainId: {}
  SpaceName: {}
  SpaceSettings?:
    | {
        JupyterServerAppSettings?: JupyterServerAppSettings | undefined
        KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined
      }
    | undefined
}
type UpdateSpaceResponse = { SpaceArn?: {} | undefined }
type UpdateTrainingJobRequest = {
  TrainingJobName: {}
  ProfilerConfig?:
    | {
        S3OutputPath?: {} | undefined
        ProfilingIntervalInMilliseconds?: {} | undefined
        ProfilingParameters?: {} | undefined
        DisableProfiler?: {} | undefined
      }
    | undefined
  ProfilerRuleConfigurations?: {} | undefined
  ResourceConfig?: { KeepAlivePeriodInSeconds: {} } | undefined
}
type UpdateTrainingJobResponse = { TrainingJobArn: {} }
type UpdateTrialRequest = { TrialName: {}; DisplayName?: {} | undefined }
type UpdateTrialResponse = { TrialArn?: {} | undefined }
type UpdateTrialComponentRequest = {
  TrialComponentName: {}
  DisplayName?: {} | undefined
  Status?: { PrimaryStatus?: {} | undefined; Message?: {} | undefined } | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Parameters?: {} | undefined
  ParametersToRemove?: {} | undefined
  InputArtifacts?: {} | undefined
  InputArtifactsToRemove?: {} | undefined
  OutputArtifacts?: {} | undefined
  OutputArtifactsToRemove?: {} | undefined
}
type UpdateTrialComponentResponse = { TrialComponentArn?: {} | undefined }
type UpdateUserProfileRequest = {
  DomainId: {}
  UserProfileName: {}
  UserSettings?:
    | {
        ExecutionRole?: {} | undefined
        SecurityGroups?: {} | undefined
        SharingSettings?:
          | {
              NotebookOutputOption?: {} | undefined
              S3OutputPath?: {} | undefined
              S3KmsKeyId?: {} | undefined
            }
          | undefined
        JupyterServerAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              LifecycleConfigArns?: {} | undefined
              CodeRepositories?: {} | undefined
            }
          | undefined
        KernelGatewayAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
              CustomImages?: {} | undefined
              LifecycleConfigArns?: {} | undefined
            }
          | undefined
        TensorBoardAppSettings?:
          | {
              DefaultResourceSpec?:
                | {
                    SageMakerImageArn?: {} | undefined
                    SageMakerImageVersionArn?: {} | undefined
                    InstanceType?: {} | undefined
                    LifecycleConfigArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        RStudioServerProAppSettings?:
          | { AccessStatus?: {} | undefined; UserGroup?: {} | undefined }
          | undefined
        RSessionAppSettings?:
          | { DefaultResourceSpec?: ResourceSpec | undefined; CustomImages?: {} | undefined }
          | undefined
        CanvasAppSettings?:
          | {
              TimeSeriesForecastingSettings?:
                | { Status?: {} | undefined; AmazonForecastRoleArn?: {} | undefined }
                | undefined
              ModelRegisterSettings?:
                | { Status?: {} | undefined; CrossAccountModelRegisterRoleArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateUserProfileResponse = { UserProfileArn?: {} | undefined }
type UpdateWorkforceRequest = {
  WorkforceName: {}
  SourceIpConfig?: { Cidrs: {} } | undefined
  OidcConfig?:
    | {
        ClientId: {}
        ClientSecret: {}
        Issuer: {}
        AuthorizationEndpoint: {}
        TokenEndpoint: {}
        UserInfoEndpoint: {}
        LogoutEndpoint: {}
        JwksUri: {}
      }
    | undefined
  WorkforceVpcConfig?:
    | { VpcId?: {} | undefined; SecurityGroupIds?: {} | undefined; Subnets?: {} | undefined }
    | undefined
}
type UpdateWorkforceResponse = {
  Workforce: {
    WorkforceName: {}
    WorkforceArn: {}
    LastUpdatedDate?: {} | undefined
    SourceIpConfig?: { Cidrs: {} } | undefined
    SubDomain?: {} | undefined
    CognitoConfig?: { UserPool: {}; ClientId: {} } | undefined
    OidcConfig?:
      | {
          ClientId?: {} | undefined
          Issuer?: {} | undefined
          AuthorizationEndpoint?: {} | undefined
          TokenEndpoint?: {} | undefined
          UserInfoEndpoint?: {} | undefined
          LogoutEndpoint?: {} | undefined
          JwksUri?: {} | undefined
        }
      | undefined
    CreateDate?: {} | undefined
    WorkforceVpcConfig?:
      | { VpcId: {}; SecurityGroupIds: {}; Subnets: {}; VpcEndpointId?: {} | undefined }
      | undefined
    Status?: {} | undefined
    FailureReason?: {} | undefined
  }
}
type UpdateWorkteamRequest = {
  WorkteamName: {}
  MemberDefinitions?: {} | undefined
  Description?: {} | undefined
  NotificationConfiguration?: { NotificationTopicArn?: {} | undefined } | undefined
}
type UpdateWorkteamResponse = {
  Workteam: {
    WorkteamName: {}
    MemberDefinitions: {}
    WorkteamArn: {}
    WorkforceArn?: {} | undefined
    ProductListingIds?: {} | undefined
    Description: {}
    SubDomain?: {} | undefined
    CreateDate?: {} | undefined
    LastUpdatedDate?: {} | undefined
    NotificationConfiguration?: { NotificationTopicArn?: {} | undefined } | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=SageMaker.AddAssociation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.AddAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddAssociationRequest }
            output: AddAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.AddAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddAssociationRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.AddAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddAssociationRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.AddTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.AddTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsInput }
        output: AddTagsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.AssociateTrialComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.AssociateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateTrialComponentRequest }
            output: AssociateTrialComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.AssociateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateTrialComponentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.AssociateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateTrialComponentRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.BatchDescribeModelPackage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.BatchDescribeModelPackage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDescribeModelPackageInput }
        output: BatchDescribeModelPackageOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateAction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateActionRequest }
            output: CreateActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateActionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateAlgorithm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.CreateAlgorithm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAlgorithmInput }
        output: CreateAlgorithmOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateApp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppRequest }
            output: CreateAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateAppImageConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppImageConfigRequest }
            output: CreateAppImageConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppImageConfigRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateArtifact': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateArtifactRequest }
            output: CreateArtifactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateArtifactRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateAutoMLJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAutoMLJobRequest }
            output: CreateAutoMLJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAutoMLJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAutoMLJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateAutoMLJobV2': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAutoMLJobV2'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAutoMLJobV2Request }
            output: CreateAutoMLJobV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAutoMLJobV2'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAutoMLJobV2Request }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateAutoMLJobV2'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAutoMLJobV2Request }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateCodeRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.CreateCodeRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCodeRepositoryInput }
        output: CreateCodeRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateCompilationJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCompilationJobRequest }
            output: CreateCompilationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCompilationJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCompilationJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateContext': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateContextRequest }
            output: CreateContextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateContextRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataQualityJobDefinitionRequest }
            output: CreateDataQualityJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataQualityJobDefinitionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDataQualityJobDefinitionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateDeviceFleet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeviceFleetRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeviceFleetRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeviceFleetRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: CreateDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEdgeDeploymentPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEdgeDeploymentPlanRequest }
            output: CreateEdgeDeploymentPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEdgeDeploymentPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEdgeDeploymentPlanRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEdgeDeploymentStage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEdgeDeploymentStageRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEdgeDeploymentStage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEdgeDeploymentStageRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateEdgePackagingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEdgePackagingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEdgePackagingJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEdgePackagingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEdgePackagingJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointInput }
            output: CreateEndpointOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateEndpointConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEndpointConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointConfigInput }
            output: CreateEndpointConfigOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateEndpointConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointConfigInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateExperimentRequest }
            output: CreateExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateExperimentRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateFeatureGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFeatureGroupRequest }
            output: CreateFeatureGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFeatureGroupRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFeatureGroupRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateFlowDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlowDefinitionRequest }
            output: CreateFlowDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlowDefinitionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFlowDefinitionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateHub': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHubRequest }
            output: CreateHubResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHubRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHubRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateHumanTaskUi': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHumanTaskUiRequest }
            output: CreateHumanTaskUiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHumanTaskUiRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHumanTaskUiRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHyperParameterTuningJobRequest }
            output: CreateHyperParameterTuningJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHyperParameterTuningJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHyperParameterTuningJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateImage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageRequest }
            output: CreateImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateImageVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageVersionRequest }
            output: CreateImageVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageVersionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageVersionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateImageVersionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateInferenceExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInferenceExperimentRequest }
            output: CreateInferenceExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInferenceExperimentRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInferenceExperimentRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInferenceRecommendationsJobRequest }
            output: CreateInferenceRecommendationsJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInferenceRecommendationsJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInferenceRecommendationsJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateLabelingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLabelingJobRequest }
            output: CreateLabelingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLabelingJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLabelingJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelInput }
            output: CreateModelOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelBiasJobDefinitionRequest }
            output: CreateModelBiasJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelBiasJobDefinitionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelBiasJobDefinitionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelCard': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardRequest }
            output: CreateModelCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelCardExportJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCardExportJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardExportJobRequest }
            output: CreateModelCardExportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCardExportJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardExportJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCardExportJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardExportJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelCardExportJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelCardExportJobRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelExplainabilityJobDefinitionRequest }
            output: CreateModelExplainabilityJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelExplainabilityJobDefinitionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelExplainabilityJobDefinitionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelPackage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelPackage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelPackageInput }
            output: CreateModelPackageOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelPackage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelPackageInput }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelPackage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelPackageInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelPackageGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelPackageGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelPackageGroupInput }
            output: CreateModelPackageGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelPackageGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelPackageGroupInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelQualityJobDefinitionRequest }
            output: CreateModelQualityJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelQualityJobDefinitionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateModelQualityJobDefinitionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateMonitoringSchedule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMonitoringScheduleRequest }
            output: CreateMonitoringScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMonitoringScheduleRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMonitoringScheduleRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateNotebookInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateNotebookInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNotebookInstanceInput }
            output: CreateNotebookInstanceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateNotebookInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNotebookInstanceInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateNotebookInstanceLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNotebookInstanceLifecycleConfigInput }
            output: CreateNotebookInstanceLifecycleConfigOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateNotebookInstanceLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNotebookInstanceLifecycleConfigInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreatePipeline': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreatePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePipelineRequest }
            output: CreatePipelineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreatePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePipelineRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreatePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePipelineRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreatePresignedDomainUrl': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreatePresignedDomainUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePresignedDomainUrlRequest }
            output: CreatePresignedDomainUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreatePresignedDomainUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePresignedDomainUrlRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.CreatePresignedNotebookInstanceUrl'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePresignedNotebookInstanceUrlInput }
        output: CreatePresignedNotebookInstanceUrlOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateProcessingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProcessingJobRequest }
            output: CreateProcessingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProcessingJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProcessingJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProcessingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectInput }
            output: CreateProjectOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateSpace': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSpaceRequest }
            output: CreateSpaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSpaceRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateSpaceRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStudioLifecycleConfigRequest }
            output: CreateStudioLifecycleConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStudioLifecycleConfigRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateTrainingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrainingJobRequest }
            output: CreateTrainingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrainingJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrainingJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrainingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateTransformJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransformJobRequest }
            output: CreateTransformJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransformJobRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransformJobRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransformJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateTrial': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrialRequest }
            output: CreateTrialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrialRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrialRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateTrialComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrialComponentRequest }
            output: CreateTrialComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTrialComponentRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserProfileRequest }
            output: CreateUserProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserProfileRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserProfileRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateWorkforce': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.CreateWorkforce'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkforceRequest }
        output: CreateWorkforceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.CreateWorkteam': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateWorkteamRequest }
            output: CreateWorkteamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateWorkteamRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.CreateWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateWorkteamRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteAction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteActionRequest }
            output: DeleteActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteActionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteAlgorithm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteAlgorithm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAlgorithmInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteApp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteAppImageConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppImageConfigRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppImageConfigRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteArtifact': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteArtifactRequest }
            output: DeleteArtifactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteArtifactRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteAssociation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAssociationRequest }
            output: DeleteAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAssociationRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteCodeRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteCodeRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCodeRepositoryInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteContext': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteContextRequest }
            output: DeleteContextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteContextRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDataQualityJobDefinitionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDataQualityJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteDeviceFleet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeviceFleetRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeviceFleetRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteEdgeDeploymentPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEdgeDeploymentPlanRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteEdgeDeploymentPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEdgeDeploymentPlanRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteEdgeDeploymentStage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEdgeDeploymentStageRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteEdgeDeploymentStage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEdgeDeploymentStageRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEndpointInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteEndpointConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteEndpointConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEndpointConfigInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExperimentRequest }
            output: DeleteExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteFeatureGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFeatureGroupRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFeatureGroupRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteFlowDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlowDefinitionRequest }
            output: DeleteFlowDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlowDefinitionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFlowDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteHub': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHubRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHubRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHubRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteHubContent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHubContentRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHubContentRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHubContentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteHumanTaskUi': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHumanTaskUiRequest }
            output: DeleteHumanTaskUiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteHumanTaskUiRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteImage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteImageRequest }
            output: DeleteImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteImageRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteImageRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteImageVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteImageVersionRequest }
            output: DeleteImageVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteImageVersionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteImageVersionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteInferenceExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInferenceExperimentRequest }
            output: DeleteInferenceExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInferenceExperimentRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInferenceExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteModelInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelBiasJobDefinitionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelBiasJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelCard': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelCardRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelCardRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelCardRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelExplainabilityJobDefinitionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelExplainabilityJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelPackage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelPackage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelPackageInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelPackage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelPackageInput }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelPackageGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelPackageGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelPackageGroupInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelPackageGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelPackageGroupInput }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteModelPackageGroupPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteModelPackageGroupPolicyInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelQualityJobDefinitionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteModelQualityJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteMonitoringSchedule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMonitoringScheduleRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMonitoringScheduleRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteNotebookInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteNotebookInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNotebookInstanceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteNotebookInstanceLifecycleConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNotebookInstanceLifecycleConfigInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeletePipeline': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeletePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePipelineRequest }
            output: DeletePipelineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeletePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePipelineRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectInput }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteSpace': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSpaceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSpaceRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSpaceRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStudioLifecycleConfigRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStudioLifecycleConfigRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStudioLifecycleConfigRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTagsInput }
        output: DeleteTagsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteTrial': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTrialRequest }
            output: DeleteTrialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTrialRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteTrialComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTrialComponentRequest }
            output: DeleteTrialComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTrialComponentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserProfileRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserProfileRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserProfileRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteWorkforce': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeleteWorkforce'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkforceRequest }
        output: DeleteWorkforceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeleteWorkteam': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteWorkteamRequest }
            output: DeleteWorkteamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DeleteWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteWorkteamRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DeregisterDevices': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DeregisterDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterDevicesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeAction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeActionRequest }
            output: DescribeActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeActionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeAlgorithm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeAlgorithm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAlgorithmInput }
        output: DescribeAlgorithmOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeApp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppRequest }
            output: DescribeAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeAppImageConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppImageConfigRequest }
            output: DescribeAppImageConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppImageConfigRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeArtifact': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeArtifactRequest }
            output: DescribeArtifactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeArtifactRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeAutoMLJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAutoMLJobRequest }
            output: DescribeAutoMLJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAutoMLJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeAutoMLJobV2': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAutoMLJobV2'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAutoMLJobV2Request }
            output: DescribeAutoMLJobV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeAutoMLJobV2'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAutoMLJobV2Request }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeCodeRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeCodeRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCodeRepositoryInput }
        output: DescribeCodeRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeCompilationJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCompilationJobRequest }
            output: DescribeCompilationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCompilationJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeContext': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContextRequest }
            output: DescribeContextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContextRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDataQualityJobDefinitionRequest }
            output: DescribeDataQualityJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDataQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDataQualityJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeDevice': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeviceRequest }
            output: DescribeDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeviceRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeDeviceFleet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeviceFleetRequest }
            output: DescribeDeviceFleetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeviceFleetRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainRequest }
            output: DescribeDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeEdgeDeploymentPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEdgeDeploymentPlanRequest }
            output: DescribeEdgeDeploymentPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeEdgeDeploymentPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEdgeDeploymentPlanRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeEdgePackagingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeEdgePackagingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEdgePackagingJobRequest }
            output: DescribeEdgePackagingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeEdgePackagingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEdgePackagingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointInput }
        output: DescribeEndpointOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeEndpointConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeEndpointConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointConfigInput }
        output: DescribeEndpointConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExperimentRequest }
            output: DescribeExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeFeatureGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFeatureGroupRequest }
            output: DescribeFeatureGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFeatureGroupRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeFeatureMetadata': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeFeatureMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFeatureMetadataRequest }
            output: DescribeFeatureMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeFeatureMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFeatureMetadataRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeFlowDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlowDefinitionRequest }
            output: DescribeFlowDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeFlowDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFlowDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeHub': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHubRequest }
            output: DescribeHubResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHubRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeHubContent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHubContentRequest }
            output: DescribeHubContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHubContentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeHumanTaskUi': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHumanTaskUiRequest }
            output: DescribeHumanTaskUiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHumanTaskUi'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHumanTaskUiRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHyperParameterTuningJobRequest }
            output: DescribeHyperParameterTuningJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHyperParameterTuningJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeImage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeImageRequest }
            output: DescribeImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeImageRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeImageVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeImageVersionRequest }
            output: DescribeImageVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeImageVersionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeInferenceExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInferenceExperimentRequest }
            output: DescribeInferenceExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInferenceExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInferenceRecommendationsJobRequest }
            output: DescribeInferenceRecommendationsJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInferenceRecommendationsJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeLabelingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLabelingJobRequest }
            output: DescribeLabelingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLabelingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeLineageGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeLineageGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLineageGroupRequest }
            output: DescribeLineageGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeLineageGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLineageGroupRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeModel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeModelInput }
        output: DescribeModelOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelBiasJobDefinitionRequest }
            output: DescribeModelBiasJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelBiasJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelBiasJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelCard': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelCardRequest }
            output: DescribeModelCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelCardRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelCardExportJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelCardExportJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelCardExportJobRequest }
            output: DescribeModelCardExportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelCardExportJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelCardExportJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelExplainabilityJobDefinitionRequest }
            output: DescribeModelExplainabilityJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelExplainabilityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelExplainabilityJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelPackage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeModelPackage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeModelPackageInput }
        output: DescribeModelPackageOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelPackageGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeModelPackageGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeModelPackageGroupInput }
        output: DescribeModelPackageGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelQualityJobDefinitionRequest }
            output: DescribeModelQualityJobDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeModelQualityJobDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeModelQualityJobDefinitionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeMonitoringSchedule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMonitoringScheduleRequest }
            output: DescribeMonitoringScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMonitoringScheduleRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeNotebookInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeNotebookInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNotebookInstanceInput }
        output: DescribeNotebookInstanceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeNotebookInstanceLifecycleConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNotebookInstanceLifecycleConfigInput }
        output: DescribeNotebookInstanceLifecycleConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribePipeline': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePipelineRequest }
            output: DescribePipelineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePipelineRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribePipelineDefinitionForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePipelineDefinitionForExecutionRequest }
            output: DescribePipelineDefinitionForExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribePipelineDefinitionForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePipelineDefinitionForExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribePipelineExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribePipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePipelineExecutionRequest }
            output: DescribePipelineExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribePipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePipelineExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeProcessingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProcessingJobRequest }
            output: DescribeProcessingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProcessingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeProject': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProjectInput }
        output: DescribeProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeSpace': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSpaceRequest }
            output: DescribeSpaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSpaceRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStudioLifecycleConfigRequest }
            output: DescribeStudioLifecycleConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeStudioLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStudioLifecycleConfigRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeSubscribedWorkteam'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSubscribedWorkteamRequest }
        output: DescribeSubscribedWorkteamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeTrainingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTrainingJobRequest }
            output: DescribeTrainingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTrainingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeTransformJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTransformJobRequest }
            output: DescribeTransformJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTransformJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeTrial': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTrialRequest }
            output: DescribeTrialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTrialRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeTrialComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTrialComponentRequest }
            output: DescribeTrialComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTrialComponentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeUserProfileRequest }
            output: DescribeUserProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DescribeUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeUserProfileRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeWorkforce': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeWorkforce'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkforceRequest }
        output: DescribeWorkforceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DescribeWorkteam': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DescribeWorkteam'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkteamRequest }
        output: DescribeWorkteamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.DisableSagemakerServicecatalogPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableSagemakerServicecatalogPortfolioInput }
        output: DisableSagemakerServicecatalogPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.DisassociateTrialComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DisassociateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateTrialComponentRequest }
            output: DisassociateTrialComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.DisassociateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateTrialComponentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.EnableSagemakerServicecatalogPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableSagemakerServicecatalogPortfolioInput }
        output: EnableSagemakerServicecatalogPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.GetDeviceFleetReport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.GetDeviceFleetReport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDeviceFleetReportRequest }
        output: GetDeviceFleetReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.GetLineageGroupPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.GetLineageGroupPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLineageGroupPolicyRequest }
            output: GetLineageGroupPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.GetLineageGroupPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetLineageGroupPolicyRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.GetModelPackageGroupPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetModelPackageGroupPolicyInput }
        output: GetModelPackageGroupPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.GetSagemakerServicecatalogPortfolioStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSagemakerServicecatalogPortfolioStatusInput }
        output: GetSagemakerServicecatalogPortfolioStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.GetSearchSuggestions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.GetSearchSuggestions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSearchSuggestionsRequest }
        output: GetSearchSuggestionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ImportHubContent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ImportHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportHubContentRequest }
            output: ImportHubContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ImportHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportHubContentRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ImportHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportHubContentRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ImportHubContent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportHubContentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListActions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListActionsRequest }
            output: ListActionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListActionsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListAlgorithms': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListAlgorithms'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAlgorithmsInput }
        output: ListAlgorithmsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListAliases': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAliasesRequest }
            output: ListAliasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAliasesRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListAppImageConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListAppImageConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAppImageConfigsRequest }
        output: ListAppImageConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListApps': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListApps'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAppsRequest }
        output: ListAppsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListArtifacts': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: ListArtifactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListAssociations': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListAssociations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAssociationsRequest }
            output: ListAssociationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListAssociations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAssociationsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListAutoMLJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListAutoMLJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAutoMLJobsRequest }
        output: ListAutoMLJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListCandidatesForAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCandidatesForAutoMLJobRequest }
            output: ListCandidatesForAutoMLJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListCandidatesForAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListCandidatesForAutoMLJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListCodeRepositories': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListCodeRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCodeRepositoriesInput }
        output: ListCodeRepositoriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListCompilationJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListCompilationJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCompilationJobsRequest }
        output: ListCompilationJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListContexts': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListContexts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContextsRequest }
            output: ListContextsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListContexts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContextsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListDataQualityJobDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataQualityJobDefinitionsRequest }
        output: ListDataQualityJobDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListDeviceFleets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListDeviceFleets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDeviceFleetsRequest }
        output: ListDeviceFleetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListDevices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDevicesRequest }
        output: ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListDomains': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDomainsRequest }
        output: ListDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListEdgeDeploymentPlans'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEdgeDeploymentPlansRequest }
        output: ListEdgeDeploymentPlansResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListEdgePackagingJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListEdgePackagingJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEdgePackagingJobsRequest }
        output: ListEdgePackagingJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListEndpointConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListEndpointConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEndpointConfigsInput }
        output: ListEndpointConfigsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListEndpoints': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEndpointsInput }
        output: ListEndpointsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListExperiments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListExperiments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExperimentsRequest }
        output: ListExperimentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListFeatureGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListFeatureGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFeatureGroupsRequest }
        output: ListFeatureGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListFlowDefinitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListFlowDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFlowDefinitionsRequest }
        output: ListFlowDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListHubContentVersions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ListHubContentVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListHubContentVersionsRequest }
            output: ListHubContentVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ListHubContentVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListHubContentVersionsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListHubContents': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ListHubContents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListHubContentsRequest }
            output: ListHubContentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.ListHubContents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListHubContentsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListHubs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.ListHubs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHubsRequest }
        output: ListHubsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListHumanTaskUis': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListHumanTaskUis'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHumanTaskUisRequest }
        output: ListHumanTaskUisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListHyperParameterTuningJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHyperParameterTuningJobsRequest }
        output: ListHyperParameterTuningJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListImageVersions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListImageVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListImageVersionsRequest }
            output: ListImageVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListImageVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListImageVersionsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListImages': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListImagesRequest }
        output: ListImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListInferenceExperiments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListInferenceExperiments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInferenceExperimentsRequest }
        output: ListInferenceExperimentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListInferenceRecommendationsJobSteps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInferenceRecommendationsJobStepsRequest }
            output: ListInferenceRecommendationsJobStepsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListInferenceRecommendationsJobSteps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInferenceRecommendationsJobStepsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListInferenceRecommendationsJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInferenceRecommendationsJobsRequest }
        output: ListInferenceRecommendationsJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListLabelingJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListLabelingJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLabelingJobsRequest }
        output: ListLabelingJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListLabelingJobsForWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLabelingJobsForWorkteamRequest }
            output: ListLabelingJobsForWorkteamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListLabelingJobsForWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLabelingJobsForWorkteamRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListLineageGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListLineageGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLineageGroupsRequest }
        output: ListLineageGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelBiasJobDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelBiasJobDefinitionsRequest }
        output: ListModelBiasJobDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelCardExportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelCardExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelCardExportJobsRequest }
        output: ListModelCardExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelCardVersions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListModelCardVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListModelCardVersionsRequest }
            output: ListModelCardVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListModelCardVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListModelCardVersionsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelCards': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelCards'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelCardsRequest }
        output: ListModelCardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelExplainabilityJobDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelExplainabilityJobDefinitionsRequest }
        output: ListModelExplainabilityJobDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelMetadata': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelMetadataRequest }
        output: ListModelMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelPackageGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelPackageGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelPackageGroupsInput }
        output: ListModelPackageGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelPackages': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelPackages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelPackagesInput }
        output: ListModelPackagesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModelQualityJobDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelQualityJobDefinitionsRequest }
        output: ListModelQualityJobDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListModels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListModels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListModelsInput }
        output: ListModelsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListMonitoringAlertHistory': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListMonitoringAlertHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMonitoringAlertHistoryRequest }
            output: ListMonitoringAlertHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListMonitoringAlertHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMonitoringAlertHistoryRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListMonitoringAlerts': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListMonitoringAlerts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMonitoringAlertsRequest }
            output: ListMonitoringAlertsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListMonitoringAlerts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMonitoringAlertsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListMonitoringExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListMonitoringExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMonitoringExecutionsRequest }
        output: ListMonitoringExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListMonitoringSchedules': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListMonitoringSchedules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMonitoringSchedulesRequest }
        output: ListMonitoringSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListNotebookInstanceLifecycleConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNotebookInstanceLifecycleConfigsInput }
        output: ListNotebookInstanceLifecycleConfigsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListNotebookInstances': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListNotebookInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNotebookInstancesInput }
        output: ListNotebookInstancesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListPipelineExecutionSteps': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListPipelineExecutionSteps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPipelineExecutionStepsRequest }
            output: ListPipelineExecutionStepsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListPipelineExecutionSteps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPipelineExecutionStepsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListPipelineExecutions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListPipelineExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPipelineExecutionsRequest }
            output: ListPipelineExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListPipelineExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPipelineExecutionsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListPipelineParametersForExecution': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListPipelineParametersForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPipelineParametersForExecutionRequest }
            output: ListPipelineParametersForExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListPipelineParametersForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPipelineParametersForExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListPipelines': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListPipelines'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPipelinesRequest }
        output: ListPipelinesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListProcessingJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListProcessingJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProcessingJobsRequest }
        output: ListProcessingJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListProjects': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListProjects'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProjectsInput }
        output: ListProjectsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListSpaces': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListSpaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSpacesRequest }
        output: ListSpacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListStageDevices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListStageDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStageDevicesRequest }
        output: ListStageDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListStudioLifecycleConfigs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStudioLifecycleConfigsRequest }
            output: ListStudioLifecycleConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListStudioLifecycleConfigs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStudioLifecycleConfigsRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListSubscribedWorkteams': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListSubscribedWorkteams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSubscribedWorkteamsRequest }
        output: ListSubscribedWorkteamsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsInput }
        output: ListTagsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListTrainingJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListTrainingJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTrainingJobsRequest }
        output: ListTrainingJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListTrainingJobsForHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTrainingJobsForHyperParameterTuningJobRequest }
            output: ListTrainingJobsForHyperParameterTuningJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListTrainingJobsForHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTrainingJobsForHyperParameterTuningJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListTransformJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListTransformJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTransformJobsRequest }
        output: ListTransformJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListTrialComponents': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListTrialComponents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTrialComponentsRequest }
            output: ListTrialComponentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListTrialComponents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTrialComponentsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListTrials': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListTrials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTrialsRequest }
            output: ListTrialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.ListTrials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTrialsRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListUserProfiles': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListUserProfiles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUserProfilesRequest }
        output: ListUserProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListWorkforces': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListWorkforces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkforcesRequest }
        output: ListWorkforcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.ListWorkteams': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.ListWorkteams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkteamsRequest }
        output: ListWorkteamsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.PutModelPackageGroupPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutModelPackageGroupPolicyInput }
        output: PutModelPackageGroupPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.QueryLineage': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.QueryLineage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryLineageRequest }
            output: QueryLineageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'SageMaker.QueryLineage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryLineageRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.RegisterDevices': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RegisterDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDevicesRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RegisterDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterDevicesRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.RenderUiTemplate': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RenderUiTemplate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenderUiTemplateRequest }
            output: RenderUiTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RenderUiTemplate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenderUiTemplateRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.RetryPipelineExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RetryPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetryPipelineExecutionRequest }
            output: RetryPipelineExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RetryPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetryPipelineExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RetryPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetryPipelineExecutionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.RetryPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RetryPipelineExecutionRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.Search': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SageMaker.Search'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchRequest }
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.SendPipelineExecutionStepFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendPipelineExecutionStepFailureRequest }
            output: SendPipelineExecutionStepFailureResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.SendPipelineExecutionStepFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendPipelineExecutionStepFailureRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.SendPipelineExecutionStepFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendPipelineExecutionStepFailureRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.SendPipelineExecutionStepSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendPipelineExecutionStepSuccessRequest }
            output: SendPipelineExecutionStepSuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.SendPipelineExecutionStepSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendPipelineExecutionStepSuccessRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.SendPipelineExecutionStepSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendPipelineExecutionStepSuccessRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StartEdgeDeploymentStage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.StartEdgeDeploymentStage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartEdgeDeploymentStageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StartInferenceExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartInferenceExperimentRequest }
            output: StartInferenceExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartInferenceExperimentRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartInferenceExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StartMonitoringSchedule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMonitoringScheduleRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMonitoringScheduleRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StartNotebookInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartNotebookInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartNotebookInstanceInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartNotebookInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartNotebookInstanceInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StartPipelineExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPipelineExecutionRequest }
            output: StartPipelineExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPipelineExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StartPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartPipelineExecutionRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopAutoMLJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopAutoMLJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopAutoMLJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopAutoMLJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopCompilationJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopCompilationJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopCompilationJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopCompilationJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopEdgeDeploymentStage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.StopEdgeDeploymentStage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopEdgeDeploymentStageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopEdgePackagingJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.StopEdgePackagingJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopEdgePackagingJobRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopHyperParameterTuningJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopHyperParameterTuningJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopHyperParameterTuningJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopHyperParameterTuningJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopInferenceExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInferenceExperimentRequest }
            output: StopInferenceExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInferenceExperimentRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInferenceExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInferenceRecommendationsJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopInferenceRecommendationsJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInferenceRecommendationsJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopLabelingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopLabelingJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopLabelingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopLabelingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopMonitoringSchedule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMonitoringScheduleRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMonitoringScheduleRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopNotebookInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.StopNotebookInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopNotebookInstanceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopPipelineExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopPipelineExecutionRequest }
            output: StopPipelineExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopPipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopPipelineExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopProcessingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProcessingJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopProcessingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopProcessingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopTrainingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTrainingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.StopTransformJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTransformJobRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.StopTransformJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTransformJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateAction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateActionRequest }
            output: UpdateActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateActionRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateActionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateAppImageConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAppImageConfigRequest }
            output: UpdateAppImageConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateAppImageConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAppImageConfigRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateArtifact': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateArtifactRequest }
            output: UpdateArtifactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateArtifactRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateArtifact'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateArtifactRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateCodeRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.UpdateCodeRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCodeRepositoryInput }
        output: UpdateCodeRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateContext': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContextRequest }
            output: UpdateContextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContextRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateContext'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContextRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateDeviceFleet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceFleetRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateDeviceFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceFleetRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateDevices': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.UpdateDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDevicesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateDomain': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainRequest }
            output: UpdateDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateDomain'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointInput }
            output: UpdateEndpointOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateEndpointWeightsAndCapacities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointWeightsAndCapacitiesInput }
            output: UpdateEndpointWeightsAndCapacitiesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateEndpointWeightsAndCapacities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEndpointWeightsAndCapacitiesInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateExperimentRequest }
            output: UpdateExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateExperimentRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateFeatureGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFeatureGroupRequest }
            output: UpdateFeatureGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateFeatureGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFeatureGroupRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateFeatureMetadata': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateFeatureMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFeatureMetadataRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateFeatureMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFeatureMetadataRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateHub': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateHubRequest }
            output: UpdateHubResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateHub'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateHubRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateImage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateImageRequest }
            output: UpdateImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateImageRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateImage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateImageRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateImageVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateImageVersionRequest }
            output: UpdateImageVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateImageVersionRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateImageVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateImageVersionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateInferenceExperiment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInferenceExperimentRequest }
            output: UpdateInferenceExperimentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInferenceExperimentRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateInferenceExperiment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInferenceExperimentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateModelCard': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateModelCardRequest }
            output: UpdateModelCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateModelCardRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateModelCardRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateModelCard'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateModelCardRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateModelPackage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.UpdateModelPackage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateModelPackageInput }
        output: UpdateModelPackageOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateMonitoringAlert': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateMonitoringAlert'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMonitoringAlertRequest }
            output: UpdateMonitoringAlertResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateMonitoringAlert'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMonitoringAlertRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateMonitoringAlert'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMonitoringAlertRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateMonitoringSchedule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMonitoringScheduleRequest }
            output: UpdateMonitoringScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMonitoringScheduleRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateMonitoringSchedule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMonitoringScheduleRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateNotebookInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateNotebookInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNotebookInstanceInput }
            output: UpdateNotebookInstanceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateNotebookInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNotebookInstanceInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateNotebookInstanceLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNotebookInstanceLifecycleConfigInput }
            output: UpdateNotebookInstanceLifecycleConfigOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateNotebookInstanceLifecycleConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNotebookInstanceLifecycleConfigInput }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdatePipeline': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdatePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdatePipelineRequest }
            output: UpdatePipelineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdatePipeline'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdatePipelineRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdatePipelineExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdatePipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdatePipelineExecutionRequest }
            output: UpdatePipelineExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdatePipelineExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdatePipelineExecutionRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateProject': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SageMaker.UpdateProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProjectInput }
        output: UpdateProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateSpace': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSpaceRequest }
            output: UpdateSpaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSpaceRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSpaceRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateSpace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSpaceRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateTrainingJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrainingJobRequest }
            output: UpdateTrainingJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrainingJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrainingJobRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateTrial': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrialRequest }
            output: UpdateTrialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrialRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrial'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrialRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateTrialComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrialComponentRequest }
            output: UpdateTrialComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrialComponentRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateTrialComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTrialComponentRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: UpdateUserProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: ResourceInUse
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateWorkforce': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateWorkforce'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateWorkforceRequest }
            output: UpdateWorkforceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateWorkforce'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateWorkforceRequest }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=SageMaker.UpdateWorkteam': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateWorkteamRequest }
            output: UpdateWorkteamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'SageMaker.UpdateWorkteam'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateWorkteamRequest }
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 480
          }
    }
  },
  '/'
>
export default routes
