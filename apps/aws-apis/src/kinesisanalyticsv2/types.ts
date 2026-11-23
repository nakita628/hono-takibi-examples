type AddApplicationCloudWatchLoggingOptionRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId?: {} | undefined
  CloudWatchLoggingOption: { LogStreamARN: {} }
  ConditionalToken?: {} | undefined
}
type AddApplicationCloudWatchLoggingOptionResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  CloudWatchLoggingOptionDescriptions?: {} | undefined
}
type AddApplicationInputRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  Input: {
    NamePrefix: {}
    InputProcessingConfiguration?: { InputLambdaProcessor: { ResourceARN: {} } } | undefined
    KinesisStreamsInput?: { ResourceARN: {} } | undefined
    KinesisFirehoseInput?: { ResourceARN: {} } | undefined
    InputParallelism?: { Count?: {} | undefined } | undefined
    InputSchema: {
      RecordFormat: {
        RecordFormatType: {}
        MappingParameters?:
          | {
              JSONMappingParameters?: { RecordRowPath: {} } | undefined
              CSVMappingParameters?:
                | { RecordRowDelimiter: {}; RecordColumnDelimiter: {} }
                | undefined
            }
          | undefined
      }
      RecordEncoding?: {} | undefined
      RecordColumns: {}
    }
  }
}
type AddApplicationInputResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  InputDescriptions?: {} | undefined
}
type AddApplicationInputProcessingConfigurationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  InputId: {}
  InputProcessingConfiguration: { InputLambdaProcessor: { ResourceARN: {} } }
}
type AddApplicationInputProcessingConfigurationResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  InputId?: {} | undefined
  InputProcessingConfigurationDescription?:
    | {
        InputLambdaProcessorDescription?: { ResourceARN: {}; RoleARN?: {} | undefined } | undefined
      }
    | undefined
}
type AddApplicationOutputRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  Output: {
    Name: {}
    KinesisStreamsOutput?: { ResourceARN: {} } | undefined
    KinesisFirehoseOutput?: { ResourceARN: {} } | undefined
    LambdaOutput?: { ResourceARN: {} } | undefined
    DestinationSchema: { RecordFormatType: {} }
  }
}
type AddApplicationOutputResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  OutputDescriptions?: {} | undefined
}
type AddApplicationReferenceDataSourceRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  ReferenceDataSource: {
    TableName: {}
    S3ReferenceDataSource?: { BucketARN?: {} | undefined; FileKey?: {} | undefined } | undefined
    ReferenceSchema: {
      RecordFormat: {
        RecordFormatType: {}
        MappingParameters?:
          | {
              JSONMappingParameters?: { RecordRowPath: {} } | undefined
              CSVMappingParameters?:
                | { RecordRowDelimiter: {}; RecordColumnDelimiter: {} }
                | undefined
            }
          | undefined
      }
      RecordEncoding?: {} | undefined
      RecordColumns: {}
    }
  }
}
type AddApplicationReferenceDataSourceResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  ReferenceDataSourceDescriptions?: {} | undefined
}
type AddApplicationVpcConfigurationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId?: {} | undefined
  VpcConfiguration: { SubnetIds: {}; SecurityGroupIds: {} }
  ConditionalToken?: {} | undefined
}
type AddApplicationVpcConfigurationResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  VpcConfigurationDescription?:
    | { VpcConfigurationId: {}; VpcId: {}; SubnetIds: {}; SecurityGroupIds: {} }
    | undefined
}
type CreateApplicationRequest = {
  ApplicationName: {}
  ApplicationDescription?: {} | undefined
  RuntimeEnvironment: {}
  ServiceExecutionRole: {}
  ApplicationConfiguration?:
    | {
        SqlApplicationConfiguration?:
          | {
              Inputs?: {} | undefined
              Outputs?: {} | undefined
              ReferenceDataSources?: {} | undefined
            }
          | undefined
        FlinkApplicationConfiguration?:
          | {
              CheckpointConfiguration?:
                | {
                    ConfigurationType: {}
                    CheckpointingEnabled?: {} | undefined
                    CheckpointInterval?: {} | undefined
                    MinPauseBetweenCheckpoints?: {} | undefined
                  }
                | undefined
              MonitoringConfiguration?:
                | {
                    ConfigurationType: {}
                    MetricsLevel?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
              ParallelismConfiguration?:
                | {
                    ConfigurationType: {}
                    Parallelism?: {} | undefined
                    ParallelismPerKPU?: {} | undefined
                    AutoScalingEnabled?: {} | undefined
                  }
                | undefined
            }
          | undefined
        EnvironmentProperties?: { PropertyGroups: {} } | undefined
        ApplicationCodeConfiguration?:
          | {
              CodeContent?:
                | {
                    TextContent?: {} | undefined
                    ZipFileContent?: {} | undefined
                    S3ContentLocation?:
                      | { BucketARN: {}; FileKey: {}; ObjectVersion?: {} | undefined }
                      | undefined
                  }
                | undefined
              CodeContentType: {}
            }
          | undefined
        ApplicationSnapshotConfiguration?: { SnapshotsEnabled: {} } | undefined
        VpcConfigurations?: {} | undefined
        ZeppelinApplicationConfiguration?:
          | {
              MonitoringConfiguration?: { LogLevel: {} } | undefined
              CatalogConfiguration?:
                | { GlueDataCatalogConfiguration: { DatabaseARN: {} } }
                | undefined
              DeployAsApplicationConfiguration?:
                | { S3ContentLocation: { BucketARN: {}; BasePath?: {} | undefined } }
                | undefined
              CustomArtifactsConfiguration?: {} | undefined
            }
          | undefined
      }
    | undefined
  CloudWatchLoggingOptions?: {} | undefined
  Tags?: {} | undefined
  ApplicationMode?: {} | undefined
}
type FlinkRunConfiguration = { AllowNonRestoredState?: {} | undefined }
type CreateApplicationResponse = {
  ApplicationDetail: {
    ApplicationARN: {}
    ApplicationDescription?: {} | undefined
    ApplicationName: {}
    RuntimeEnvironment: {}
    ServiceExecutionRole?: {} | undefined
    ApplicationStatus: {}
    ApplicationVersionId: {}
    CreateTimestamp?: {} | undefined
    LastUpdateTimestamp?: {} | undefined
    ApplicationConfigurationDescription?:
      | {
          SqlApplicationConfigurationDescription?:
            | {
                InputDescriptions?: {} | undefined
                OutputDescriptions?: {} | undefined
                ReferenceDataSourceDescriptions?: {} | undefined
              }
            | undefined
          ApplicationCodeConfigurationDescription?:
            | {
                CodeContentType: {}
                CodeContentDescription?:
                  | {
                      TextContent?: {} | undefined
                      CodeMD5?: {} | undefined
                      CodeSize?: {} | undefined
                      S3ApplicationCodeLocationDescription?:
                        | { BucketARN: {}; FileKey: {}; ObjectVersion?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          RunConfigurationDescription?:
            | {
                ApplicationRestoreConfigurationDescription?:
                  | { ApplicationRestoreType: {}; SnapshotName?: {} | undefined }
                  | undefined
                FlinkRunConfigurationDescription?: FlinkRunConfiguration | undefined
              }
            | undefined
          FlinkApplicationConfigurationDescription?:
            | {
                CheckpointConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      CheckpointingEnabled?: {} | undefined
                      CheckpointInterval?: {} | undefined
                      MinPauseBetweenCheckpoints?: {} | undefined
                    }
                  | undefined
                MonitoringConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      MetricsLevel?: {} | undefined
                      LogLevel?: {} | undefined
                    }
                  | undefined
                ParallelismConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      Parallelism?: {} | undefined
                      ParallelismPerKPU?: {} | undefined
                      CurrentParallelism?: {} | undefined
                      AutoScalingEnabled?: {} | undefined
                    }
                  | undefined
                JobPlanDescription?: {} | undefined
              }
            | undefined
          EnvironmentPropertyDescriptions?:
            | { PropertyGroupDescriptions?: {} | undefined }
            | undefined
          ApplicationSnapshotConfigurationDescription?: { SnapshotsEnabled: {} } | undefined
          VpcConfigurationDescriptions?: {} | undefined
          ZeppelinApplicationConfigurationDescription?:
            | {
                MonitoringConfigurationDescription: { LogLevel?: {} | undefined }
                CatalogConfigurationDescription?:
                  | { GlueDataCatalogConfigurationDescription: { DatabaseARN: {} } }
                  | undefined
                DeployAsApplicationConfigurationDescription?:
                  | { S3ContentLocationDescription: { BucketARN: {}; BasePath?: {} | undefined } }
                  | undefined
                CustomArtifactsConfigurationDescription?: {} | undefined
              }
            | undefined
        }
      | undefined
    CloudWatchLoggingOptionDescriptions?: {} | undefined
    ApplicationMaintenanceConfigurationDescription?:
      | { ApplicationMaintenanceWindowStartTime: {}; ApplicationMaintenanceWindowEndTime: {} }
      | undefined
    ApplicationVersionUpdatedFrom?: {} | undefined
    ApplicationVersionRolledBackFrom?: {} | undefined
    ConditionalToken?: {} | undefined
    ApplicationVersionRolledBackTo?: {} | undefined
    ApplicationMode?: {} | undefined
  }
}
type CreateApplicationPresignedUrlRequest = {
  ApplicationName: {}
  UrlType: {}
  SessionExpirationDurationInSeconds?: {} | undefined
}
type CreateApplicationPresignedUrlResponse = { AuthorizedUrl?: {} | undefined }
type CreateApplicationSnapshotRequest = { ApplicationName: {}; SnapshotName: {} }
type CreateApplicationSnapshotResponse = { [x: string]: unknown }
type DeleteApplicationRequest = { ApplicationName: {}; CreateTimestamp: {} }
type DeleteApplicationResponse = { [x: string]: unknown }
type DeleteApplicationCloudWatchLoggingOptionRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId?: {} | undefined
  CloudWatchLoggingOptionId: {}
  ConditionalToken?: {} | undefined
}
type DeleteApplicationCloudWatchLoggingOptionResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
  CloudWatchLoggingOptionDescriptions?: {} | undefined
}
type DeleteApplicationInputProcessingConfigurationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  InputId: {}
}
type DeleteApplicationInputProcessingConfigurationResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
}
type DeleteApplicationOutputRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  OutputId: {}
}
type DeleteApplicationOutputResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
}
type DeleteApplicationReferenceDataSourceRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId: {}
  ReferenceId: {}
}
type DeleteApplicationReferenceDataSourceResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
}
type DeleteApplicationSnapshotRequest = {
  ApplicationName: {}
  SnapshotName: {}
  SnapshotCreationTimestamp: {}
}
type DeleteApplicationSnapshotResponse = { [x: string]: unknown }
type DeleteApplicationVpcConfigurationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId?: {} | undefined
  VpcConfigurationId: {}
  ConditionalToken?: {} | undefined
}
type DeleteApplicationVpcConfigurationResponse = {
  ApplicationARN?: {} | undefined
  ApplicationVersionId?: {} | undefined
}
type DescribeApplicationRequest = { ApplicationName: {}; IncludeAdditionalDetails?: {} | undefined }
type DescribeApplicationResponse = {
  ApplicationDetail: {
    ApplicationARN: {}
    ApplicationDescription?: {} | undefined
    ApplicationName: {}
    RuntimeEnvironment: {}
    ServiceExecutionRole?: {} | undefined
    ApplicationStatus: {}
    ApplicationVersionId: {}
    CreateTimestamp?: {} | undefined
    LastUpdateTimestamp?: {} | undefined
    ApplicationConfigurationDescription?:
      | {
          SqlApplicationConfigurationDescription?:
            | {
                InputDescriptions?: {} | undefined
                OutputDescriptions?: {} | undefined
                ReferenceDataSourceDescriptions?: {} | undefined
              }
            | undefined
          ApplicationCodeConfigurationDescription?:
            | {
                CodeContentType: {}
                CodeContentDescription?:
                  | {
                      TextContent?: {} | undefined
                      CodeMD5?: {} | undefined
                      CodeSize?: {} | undefined
                      S3ApplicationCodeLocationDescription?:
                        | { BucketARN: {}; FileKey: {}; ObjectVersion?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          RunConfigurationDescription?:
            | {
                ApplicationRestoreConfigurationDescription?:
                  | { ApplicationRestoreType: {}; SnapshotName?: {} | undefined }
                  | undefined
                FlinkRunConfigurationDescription?: FlinkRunConfiguration | undefined
              }
            | undefined
          FlinkApplicationConfigurationDescription?:
            | {
                CheckpointConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      CheckpointingEnabled?: {} | undefined
                      CheckpointInterval?: {} | undefined
                      MinPauseBetweenCheckpoints?: {} | undefined
                    }
                  | undefined
                MonitoringConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      MetricsLevel?: {} | undefined
                      LogLevel?: {} | undefined
                    }
                  | undefined
                ParallelismConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      Parallelism?: {} | undefined
                      ParallelismPerKPU?: {} | undefined
                      CurrentParallelism?: {} | undefined
                      AutoScalingEnabled?: {} | undefined
                    }
                  | undefined
                JobPlanDescription?: {} | undefined
              }
            | undefined
          EnvironmentPropertyDescriptions?:
            | { PropertyGroupDescriptions?: {} | undefined }
            | undefined
          ApplicationSnapshotConfigurationDescription?: { SnapshotsEnabled: {} } | undefined
          VpcConfigurationDescriptions?: {} | undefined
          ZeppelinApplicationConfigurationDescription?:
            | {
                MonitoringConfigurationDescription: { LogLevel?: {} | undefined }
                CatalogConfigurationDescription?:
                  | { GlueDataCatalogConfigurationDescription: { DatabaseARN: {} } }
                  | undefined
                DeployAsApplicationConfigurationDescription?:
                  | { S3ContentLocationDescription: { BucketARN: {}; BasePath?: {} | undefined } }
                  | undefined
                CustomArtifactsConfigurationDescription?: {} | undefined
              }
            | undefined
        }
      | undefined
    CloudWatchLoggingOptionDescriptions?: {} | undefined
    ApplicationMaintenanceConfigurationDescription?:
      | { ApplicationMaintenanceWindowStartTime: {}; ApplicationMaintenanceWindowEndTime: {} }
      | undefined
    ApplicationVersionUpdatedFrom?: {} | undefined
    ApplicationVersionRolledBackFrom?: {} | undefined
    ConditionalToken?: {} | undefined
    ApplicationVersionRolledBackTo?: {} | undefined
    ApplicationMode?: {} | undefined
  }
}
type DescribeApplicationSnapshotRequest = { ApplicationName: {}; SnapshotName: {} }
type DescribeApplicationSnapshotResponse = {
  SnapshotDetails: {
    SnapshotName: {}
    SnapshotStatus: {}
    ApplicationVersionId: {}
    SnapshotCreationTimestamp?: {} | undefined
  }
}
type DescribeApplicationVersionRequest = { ApplicationName: {}; ApplicationVersionId: {} }
type ApplicationDetail = {
  ApplicationARN: {}
  ApplicationDescription?: {} | undefined
  ApplicationName: {}
  RuntimeEnvironment: {}
  ServiceExecutionRole?: {} | undefined
  ApplicationStatus: {}
  ApplicationVersionId: {}
  CreateTimestamp?: {} | undefined
  LastUpdateTimestamp?: {} | undefined
  ApplicationConfigurationDescription?:
    | {
        SqlApplicationConfigurationDescription?:
          | {
              InputDescriptions?: {} | undefined
              OutputDescriptions?: {} | undefined
              ReferenceDataSourceDescriptions?: {} | undefined
            }
          | undefined
        ApplicationCodeConfigurationDescription?:
          | {
              CodeContentType: {}
              CodeContentDescription?:
                | {
                    TextContent?: {} | undefined
                    CodeMD5?: {} | undefined
                    CodeSize?: {} | undefined
                    S3ApplicationCodeLocationDescription?:
                      | { BucketARN: {}; FileKey: {}; ObjectVersion?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
          | undefined
        RunConfigurationDescription?:
          | {
              ApplicationRestoreConfigurationDescription?:
                | { ApplicationRestoreType: {}; SnapshotName?: {} | undefined }
                | undefined
              FlinkRunConfigurationDescription?: FlinkRunConfiguration | undefined
            }
          | undefined
        FlinkApplicationConfigurationDescription?:
          | {
              CheckpointConfigurationDescription?:
                | {
                    ConfigurationType?: {} | undefined
                    CheckpointingEnabled?: {} | undefined
                    CheckpointInterval?: {} | undefined
                    MinPauseBetweenCheckpoints?: {} | undefined
                  }
                | undefined
              MonitoringConfigurationDescription?:
                | {
                    ConfigurationType?: {} | undefined
                    MetricsLevel?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
              ParallelismConfigurationDescription?:
                | {
                    ConfigurationType?: {} | undefined
                    Parallelism?: {} | undefined
                    ParallelismPerKPU?: {} | undefined
                    CurrentParallelism?: {} | undefined
                    AutoScalingEnabled?: {} | undefined
                  }
                | undefined
              JobPlanDescription?: {} | undefined
            }
          | undefined
        EnvironmentPropertyDescriptions?: { PropertyGroupDescriptions?: {} | undefined } | undefined
        ApplicationSnapshotConfigurationDescription?: { SnapshotsEnabled: {} } | undefined
        VpcConfigurationDescriptions?: {} | undefined
        ZeppelinApplicationConfigurationDescription?:
          | {
              MonitoringConfigurationDescription: { LogLevel?: {} | undefined }
              CatalogConfigurationDescription?:
                | { GlueDataCatalogConfigurationDescription: { DatabaseARN: {} } }
                | undefined
              DeployAsApplicationConfigurationDescription?:
                | { S3ContentLocationDescription: { BucketARN: {}; BasePath?: {} | undefined } }
                | undefined
              CustomArtifactsConfigurationDescription?: {} | undefined
            }
          | undefined
      }
    | undefined
  CloudWatchLoggingOptionDescriptions?: {} | undefined
  ApplicationMaintenanceConfigurationDescription?:
    | { ApplicationMaintenanceWindowStartTime: {}; ApplicationMaintenanceWindowEndTime: {} }
    | undefined
  ApplicationVersionUpdatedFrom?: {} | undefined
  ApplicationVersionRolledBackFrom?: {} | undefined
  ConditionalToken?: {} | undefined
  ApplicationVersionRolledBackTo?: {} | undefined
  ApplicationMode?: {} | undefined
}
type DescribeApplicationVersionResponse = {
  ApplicationVersionDetail?: ApplicationDetail | undefined
}
type DiscoverInputSchemaRequest = {
  ResourceARN?: {} | undefined
  ServiceExecutionRole: {}
  InputStartingPositionConfiguration?: { InputStartingPosition?: {} | undefined } | undefined
  S3Configuration?: { BucketARN: {}; FileKey: {} } | undefined
  InputProcessingConfiguration?: { InputLambdaProcessor: { ResourceARN: {} } } | undefined
}
type DiscoverInputSchemaResponse = {
  InputSchema?:
    | {
        RecordFormat: {
          RecordFormatType: {}
          MappingParameters?:
            | {
                JSONMappingParameters?: { RecordRowPath: {} } | undefined
                CSVMappingParameters?:
                  | { RecordRowDelimiter: {}; RecordColumnDelimiter: {} }
                  | undefined
              }
            | undefined
        }
        RecordEncoding?: {} | undefined
        RecordColumns: {}
      }
    | undefined
  ParsedInputRecords?: {} | undefined
  ProcessedInputRecords?: {} | undefined
  RawInputRecords?: {} | undefined
}
type ListApplicationSnapshotsRequest = {
  ApplicationName: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListApplicationSnapshotsResponse = {
  SnapshotSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListApplicationVersionsRequest = {
  ApplicationName: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListApplicationVersionsResponse = {
  ApplicationVersionSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListApplicationsRequest = { Limit?: {} | undefined; NextToken?: {} | undefined }
type ListApplicationsResponse = { ApplicationSummaries: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type RollbackApplicationRequest = { ApplicationName: {}; CurrentApplicationVersionId: {} }
type RollbackApplicationResponse = { ApplicationDetail: ApplicationDetail }
type StartApplicationRequest = {
  ApplicationName: {}
  RunConfiguration?:
    | {
        FlinkRunConfiguration?: { AllowNonRestoredState?: {} | undefined } | undefined
        SqlRunConfigurations?: {} | undefined
        ApplicationRestoreConfiguration?:
          | { ApplicationRestoreType: {}; SnapshotName?: {} | undefined }
          | undefined
      }
    | undefined
}
type StartApplicationResponse = { [x: string]: unknown }
type StopApplicationRequest = { ApplicationName: {}; Force?: {} | undefined }
type StopApplicationResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type DeployAsApplicationConfigurationUpdate = {
  S3ContentLocationUpdate?:
    | { BucketARNUpdate?: {} | undefined; BasePathUpdate?: {} | undefined }
    | undefined
}
type UpdateApplicationRequest = {
  ApplicationName: {}
  CurrentApplicationVersionId?: {} | undefined
  ApplicationConfigurationUpdate?:
    | {
        SqlApplicationConfigurationUpdate?:
          | {
              InputUpdates?: {} | undefined
              OutputUpdates?: {} | undefined
              ReferenceDataSourceUpdates?: {} | undefined
            }
          | undefined
        ApplicationCodeConfigurationUpdate?:
          | {
              CodeContentTypeUpdate?: {} | undefined
              CodeContentUpdate?:
                | {
                    TextContentUpdate?: {} | undefined
                    ZipFileContentUpdate?: {} | undefined
                    S3ContentLocationUpdate?:
                      | {
                          BucketARNUpdate?: {} | undefined
                          FileKeyUpdate?: {} | undefined
                          ObjectVersionUpdate?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        FlinkApplicationConfigurationUpdate?:
          | {
              CheckpointConfigurationUpdate?:
                | {
                    ConfigurationTypeUpdate?: {} | undefined
                    CheckpointingEnabledUpdate?: {} | undefined
                    CheckpointIntervalUpdate?: {} | undefined
                    MinPauseBetweenCheckpointsUpdate?: {} | undefined
                  }
                | undefined
              MonitoringConfigurationUpdate?:
                | {
                    ConfigurationTypeUpdate?: {} | undefined
                    MetricsLevelUpdate?: {} | undefined
                    LogLevelUpdate?: {} | undefined
                  }
                | undefined
              ParallelismConfigurationUpdate?:
                | {
                    ConfigurationTypeUpdate?: {} | undefined
                    ParallelismUpdate?: {} | undefined
                    ParallelismPerKPUUpdate?: {} | undefined
                    AutoScalingEnabledUpdate?: {} | undefined
                  }
                | undefined
            }
          | undefined
        EnvironmentPropertyUpdates?: { PropertyGroups: {} } | undefined
        ApplicationSnapshotConfigurationUpdate?: { SnapshotsEnabledUpdate: {} } | undefined
        VpcConfigurationUpdates?: {} | undefined
        ZeppelinApplicationConfigurationUpdate?:
          | {
              MonitoringConfigurationUpdate?: { LogLevelUpdate: {} } | undefined
              CatalogConfigurationUpdate?:
                | { GlueDataCatalogConfigurationUpdate: { DatabaseARNUpdate: {} } }
                | undefined
              DeployAsApplicationConfigurationUpdate?:
                | DeployAsApplicationConfigurationUpdate
                | undefined
              CustomArtifactsConfigurationUpdate?: {} | undefined
            }
          | undefined
      }
    | undefined
  ServiceExecutionRoleUpdate?: {} | undefined
  RunConfigurationUpdate?:
    | {
        FlinkRunConfiguration?: { AllowNonRestoredState?: {} | undefined } | undefined
        ApplicationRestoreConfiguration?:
          | { ApplicationRestoreType: {}; SnapshotName?: {} | undefined }
          | undefined
      }
    | undefined
  CloudWatchLoggingOptionUpdates?: {} | undefined
  ConditionalToken?: {} | undefined
}
type UpdateApplicationResponse = {
  ApplicationDetail: {
    ApplicationARN: {}
    ApplicationDescription?: {} | undefined
    ApplicationName: {}
    RuntimeEnvironment: {}
    ServiceExecutionRole?: {} | undefined
    ApplicationStatus: {}
    ApplicationVersionId: {}
    CreateTimestamp?: {} | undefined
    LastUpdateTimestamp?: {} | undefined
    ApplicationConfigurationDescription?:
      | {
          SqlApplicationConfigurationDescription?:
            | {
                InputDescriptions?: {} | undefined
                OutputDescriptions?: {} | undefined
                ReferenceDataSourceDescriptions?: {} | undefined
              }
            | undefined
          ApplicationCodeConfigurationDescription?:
            | {
                CodeContentType: {}
                CodeContentDescription?:
                  | {
                      TextContent?: {} | undefined
                      CodeMD5?: {} | undefined
                      CodeSize?: {} | undefined
                      S3ApplicationCodeLocationDescription?:
                        | { BucketARN: {}; FileKey: {}; ObjectVersion?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          RunConfigurationDescription?:
            | {
                ApplicationRestoreConfigurationDescription?:
                  | { ApplicationRestoreType: {}; SnapshotName?: {} | undefined }
                  | undefined
                FlinkRunConfigurationDescription?: FlinkRunConfiguration | undefined
              }
            | undefined
          FlinkApplicationConfigurationDescription?:
            | {
                CheckpointConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      CheckpointingEnabled?: {} | undefined
                      CheckpointInterval?: {} | undefined
                      MinPauseBetweenCheckpoints?: {} | undefined
                    }
                  | undefined
                MonitoringConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      MetricsLevel?: {} | undefined
                      LogLevel?: {} | undefined
                    }
                  | undefined
                ParallelismConfigurationDescription?:
                  | {
                      ConfigurationType?: {} | undefined
                      Parallelism?: {} | undefined
                      ParallelismPerKPU?: {} | undefined
                      CurrentParallelism?: {} | undefined
                      AutoScalingEnabled?: {} | undefined
                    }
                  | undefined
                JobPlanDescription?: {} | undefined
              }
            | undefined
          EnvironmentPropertyDescriptions?:
            | { PropertyGroupDescriptions?: {} | undefined }
            | undefined
          ApplicationSnapshotConfigurationDescription?: { SnapshotsEnabled: {} } | undefined
          VpcConfigurationDescriptions?: {} | undefined
          ZeppelinApplicationConfigurationDescription?:
            | {
                MonitoringConfigurationDescription: { LogLevel?: {} | undefined }
                CatalogConfigurationDescription?:
                  | { GlueDataCatalogConfigurationDescription: { DatabaseARN: {} } }
                  | undefined
                DeployAsApplicationConfigurationDescription?:
                  | { S3ContentLocationDescription: { BucketARN: {}; BasePath?: {} | undefined } }
                  | undefined
                CustomArtifactsConfigurationDescription?: {} | undefined
              }
            | undefined
        }
      | undefined
    CloudWatchLoggingOptionDescriptions?: {} | undefined
    ApplicationMaintenanceConfigurationDescription?:
      | { ApplicationMaintenanceWindowStartTime: {}; ApplicationMaintenanceWindowEndTime: {} }
      | undefined
    ApplicationVersionUpdatedFrom?: {} | undefined
    ApplicationVersionRolledBackFrom?: {} | undefined
    ConditionalToken?: {} | undefined
    ApplicationVersionRolledBackTo?: {} | undefined
    ApplicationMode?: {} | undefined
  }
}
type UpdateApplicationMaintenanceConfigurationRequest = {
  ApplicationName: {}
  ApplicationMaintenanceConfigurationUpdate: { ApplicationMaintenanceWindowStartTimeUpdate: {} }
}
type UpdateApplicationMaintenanceConfigurationResponse = {
  ApplicationARN?: {} | undefined
  ApplicationMaintenanceConfigurationDescription?:
    | { ApplicationMaintenanceWindowStartTime: {}; ApplicationMaintenanceWindowEndTime: {} }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationCloudWatchLoggingOptionRequest }
        output: AddApplicationCloudWatchLoggingOptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.AddApplicationInput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationInputRequest }
        output: AddApplicationInputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationInputProcessingConfigurationRequest }
        output: AddApplicationInputProcessingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.AddApplicationOutput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationOutputRequest }
        output: AddApplicationOutputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.AddApplicationReferenceDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationReferenceDataSourceRequest }
        output: AddApplicationReferenceDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.AddApplicationVpcConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddApplicationVpcConfigurationRequest }
        output: AddApplicationVpcConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.CreateApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateApplicationRequest }
        output: CreateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.CreateApplicationPresignedUrl'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateApplicationPresignedUrlRequest }
        output: CreateApplicationPresignedUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.CreateApplicationSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateApplicationSnapshotRequest }
        output: CreateApplicationSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationRequest }
        output: DeleteApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationCloudWatchLoggingOptionRequest }
        output: DeleteApplicationCloudWatchLoggingOptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationInputProcessingConfigurationRequest }
        output: DeleteApplicationInputProcessingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplicationOutput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationOutputRequest }
        output: DeleteApplicationOutputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationReferenceDataSourceRequest }
        output: DeleteApplicationReferenceDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplicationSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationSnapshotRequest }
        output: DeleteApplicationSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApplicationVpcConfigurationRequest }
        output: DeleteApplicationVpcConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DescribeApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationRequest }
        output: DescribeApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DescribeApplicationSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationSnapshotRequest }
        output: DescribeApplicationSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DescribeApplicationVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationVersionRequest }
        output: DescribeApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.DiscoverInputSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DiscoverInputSchemaRequest }
        output: DiscoverInputSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.ListApplicationSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApplicationSnapshotsRequest }
        output: ListApplicationSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.ListApplicationVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApplicationVersionsRequest }
        output: ListApplicationVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplications': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.ListApplications'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApplicationsRequest }
        output: ListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.RollbackApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RollbackApplicationRequest }
        output: RollbackApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.StartApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.StartApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartApplicationRequest }
        output: StartApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.StopApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.StopApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopApplicationRequest }
        output: StopApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.UpdateApplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApplicationRequest }
        output: UpdateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApplicationMaintenanceConfigurationRequest }
        output: UpdateApplicationMaintenanceConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
