type Tag = { Key: {}; Value: {} }
type CreateSignalingChannelOutput = { ChannelARN?: {} | undefined }
type InvalidArgumentException = { [x: string]: unknown }
type ClientLimitExceededException = { [x: string]: unknown }
type AccountChannelLimitExceededException = { [x: string]: unknown }
type ResourceInUseException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type TagsPerResourceExceededLimitException = { [x: string]: unknown }
type TagValue = string
type CreateStreamOutput = { StreamARN?: {} | undefined }
type AccountStreamLimitExceededException = { [x: string]: unknown }
type DeviceStreamLimitExceededException = { [x: string]: unknown }
type InvalidDeviceException = { [x: string]: unknown }
type DeleteSignalingChannelOutput = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type VersionMismatchException = { [x: string]: unknown }
type DeleteStreamOutput = { [x: string]: unknown }
type NotAuthorizedException = { [x: string]: unknown }
type DescribeEdgeConfigurationOutput = {
  StreamName?: {} | undefined
  StreamARN?: {} | undefined
  CreationTime?: {} | undefined
  LastUpdatedTime?: {} | undefined
  SyncStatus?: {} | undefined
  FailedStatusDetails?: {} | undefined
  EdgeConfig?:
    | {
        HubDeviceArn: {}
        RecorderConfig: {
          MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
          ScheduleConfig?: { ScheduleExpression: {}; DurationInSeconds: {} } | undefined
        }
        UploaderConfig?:
          | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
          | undefined
        DeletionConfig?:
          | {
              EdgeRetentionInHours?: {} | undefined
              LocalSizeConfig?:
                | { MaxLocalMediaSizeInMB?: {} | undefined; StrategyOnFullSize?: {} | undefined }
                | undefined
              DeleteAfterUpload?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type StreamEdgeConfigurationNotFoundException = { [x: string]: unknown }
type DescribeImageGenerationConfigurationOutput = {
  ImageGenerationConfiguration?:
    | {
        Status: {}
        ImageSelectorType: {}
        DestinationConfig: { Uri: {}; DestinationRegion: {} }
        SamplingInterval: {}
        Format: {}
        FormatConfig?: {} | undefined
        WidthPixels?: {} | undefined
        HeightPixels?: {} | undefined
      }
    | undefined
}
type DescribeMappedResourceConfigurationOutput = {
  MappedResourceConfigurationList?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMediaStorageConfigurationOutput = {
  MediaStorageConfiguration?: { StreamARN?: {} | undefined; Status: {} } | undefined
}
type DescribeNotificationConfigurationOutput = {
  NotificationConfiguration?: { Status: {}; DestinationConfig: { Uri: {} } } | undefined
}
type DescribeSignalingChannelOutput = {
  ChannelInfo?:
    | {
        ChannelName?: {} | undefined
        ChannelARN?: {} | undefined
        ChannelType?: {} | undefined
        ChannelStatus?: {} | undefined
        CreationTime?: {} | undefined
        SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
        Version?: {} | undefined
      }
    | undefined
}
type DescribeStreamOutput = {
  StreamInfo?:
    | {
        DeviceName?: {} | undefined
        StreamName?: {} | undefined
        StreamARN?: {} | undefined
        MediaType?: {} | undefined
        KmsKeyId?: {} | undefined
        Version?: {} | undefined
        Status?: {} | undefined
        CreationTime?: {} | undefined
        DataRetentionInHours?: {} | undefined
      }
    | undefined
}
type GetDataEndpointOutput = { DataEndpoint?: {} | undefined }
type GetSignalingChannelEndpointOutput = { ResourceEndpointList?: {} | undefined }
type ListSignalingChannelsOutput = { ChannelInfoList?: {} | undefined; NextToken?: {} | undefined }
type ListStreamsOutput = { StreamInfoList?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceOutput = { NextToken?: {} | undefined; Tags?: {} | undefined }
type ListTagsForStreamOutput = { NextToken?: {} | undefined; Tags?: {} | undefined }
type InvalidResourceFormatException = { [x: string]: unknown }
type StartEdgeConfigurationUpdateOutput = {
  StreamName?: {} | undefined
  StreamARN?: {} | undefined
  CreationTime?: {} | undefined
  LastUpdatedTime?: {} | undefined
  SyncStatus?: {} | undefined
  FailedStatusDetails?: {} | undefined
  EdgeConfig?:
    | {
        HubDeviceArn: {}
        RecorderConfig: {
          MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
          ScheduleConfig?: { ScheduleExpression: {}; DurationInSeconds: {} } | undefined
        }
        UploaderConfig?:
          | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
          | undefined
        DeletionConfig?:
          | {
              EdgeRetentionInHours?: {} | undefined
              LocalSizeConfig?:
                | { MaxLocalMediaSizeInMB?: {} | undefined; StrategyOnFullSize?: {} | undefined }
                | undefined
              DeleteAfterUpload?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type NoDataRetentionException = { [x: string]: unknown }
type TagResourceOutput = { [x: string]: unknown }
type TagStreamOutput = { [x: string]: unknown }
type TagKey = string
type UntagResourceOutput = { [x: string]: unknown }
type UntagStreamOutput = { [x: string]: unknown }
type UpdateDataRetentionOutput = { [x: string]: unknown }
type UpdateImageGenerationConfigurationOutput = { [x: string]: unknown }
type UpdateMediaStorageConfigurationOutput = { [x: string]: unknown }
type UpdateNotificationConfigurationOutput = { [x: string]: unknown }
type UpdateSignalingChannelOutput = { [x: string]: unknown }
type UpdateStreamOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createSignalingChannel': {
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: CreateSignalingChannelOutput
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: InvalidArgumentException
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ClientLimitExceededException
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: AccountChannelLimitExceededException
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ResourceInUseException
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
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
                ChannelName: string
                ChannelType?: 'SINGLE_MASTER' | 'FULL_MESH' | undefined
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: TagsPerResourceExceededLimitException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/createStream': {
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateStreamOutput
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccountStreamLimitExceededException
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: DeviceStreamLimitExceededException
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceInUseException
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidDeviceException
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidArgumentException
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ClientLimitExceededException
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
                DeviceName?: string | undefined
                StreamName: string
                MediaType?: string | undefined
                KmsKeyId?: string | undefined
                DataRetentionInHours?: number | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: TagsPerResourceExceededLimitException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/deleteSignalingChannel': {
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
            output: DeleteSignalingChannelOutput
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
            output: VersionMismatchException
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
            } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/deleteStream': {
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
            output: DeleteStreamOutput
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
            output: NotAuthorizedException
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
            output: VersionMismatchException
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
            } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/describeEdgeConfiguration': {
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: DescribeEdgeConfigurationOutput
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: ResourceNotFoundException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: StreamEdgeConfigurationNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/describeImageGenerationConfiguration': {
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: DescribeImageGenerationConfigurationOutput
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/describeMappedResourceConfiguration': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: DescribeMappedResourceConfigurationOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ClientLimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/describeMediaStorageConfiguration': {
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: DescribeMediaStorageConfigurationOutput
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: ResourceNotFoundException
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: ClientLimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/describeNotificationConfiguration': {
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: DescribeNotificationConfigurationOutput
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/describeSignalingChannel': {
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: DescribeSignalingChannelOutput
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
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
            } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/describeStream': {
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: DescribeStreamOutput
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: InvalidArgumentException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: ResourceNotFoundException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: ClientLimitExceededException
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
            } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/getDataEndpoint': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                APIName:
                  | 'PUT_MEDIA'
                  | 'GET_MEDIA'
                  | 'LIST_FRAGMENTS'
                  | 'GET_MEDIA_FOR_FRAGMENT_LIST'
                  | 'GET_HLS_STREAMING_SESSION_URL'
                  | 'GET_DASH_STREAMING_SESSION_URL'
                  | 'GET_CLIP'
                  | 'GET_IMAGES'
              }
            }
            output: GetDataEndpointOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                APIName:
                  | 'PUT_MEDIA'
                  | 'GET_MEDIA'
                  | 'LIST_FRAGMENTS'
                  | 'GET_MEDIA_FOR_FRAGMENT_LIST'
                  | 'GET_HLS_STREAMING_SESSION_URL'
                  | 'GET_DASH_STREAMING_SESSION_URL'
                  | 'GET_CLIP'
                  | 'GET_IMAGES'
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                APIName:
                  | 'PUT_MEDIA'
                  | 'GET_MEDIA'
                  | 'LIST_FRAGMENTS'
                  | 'GET_MEDIA_FOR_FRAGMENT_LIST'
                  | 'GET_HLS_STREAMING_SESSION_URL'
                  | 'GET_DASH_STREAMING_SESSION_URL'
                  | 'GET_CLIP'
                  | 'GET_IMAGES'
              }
            }
            output: ResourceNotFoundException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                APIName:
                  | 'PUT_MEDIA'
                  | 'GET_MEDIA'
                  | 'LIST_FRAGMENTS'
                  | 'GET_MEDIA_FOR_FRAGMENT_LIST'
                  | 'GET_HLS_STREAMING_SESSION_URL'
                  | 'GET_DASH_STREAMING_SESSION_URL'
                  | 'GET_CLIP'
                  | 'GET_IMAGES'
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                APIName:
                  | 'PUT_MEDIA'
                  | 'GET_MEDIA'
                  | 'LIST_FRAGMENTS'
                  | 'GET_MEDIA_FOR_FRAGMENT_LIST'
                  | 'GET_HLS_STREAMING_SESSION_URL'
                  | 'GET_DASH_STREAMING_SESSION_URL'
                  | 'GET_CLIP'
                  | 'GET_IMAGES'
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/getSignalingChannelEndpoint': {
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
                ChannelARN: string
                SingleMasterChannelEndpointConfiguration?:
                  | { Protocols?: {} | undefined; Role?: {} | undefined }
                  | undefined
              }
            }
            output: GetSignalingChannelEndpointOutput
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
                ChannelARN: string
                SingleMasterChannelEndpointConfiguration?:
                  | { Protocols?: {} | undefined; Role?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidArgumentException
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
                ChannelARN: string
                SingleMasterChannelEndpointConfiguration?:
                  | { Protocols?: {} | undefined; Role?: {} | undefined }
                  | undefined
              }
            }
            output: ClientLimitExceededException
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
                ChannelARN: string
                SingleMasterChannelEndpointConfiguration?:
                  | { Protocols?: {} | undefined; Role?: {} | undefined }
                  | undefined
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
                ChannelARN: string
                SingleMasterChannelEndpointConfiguration?:
                  | { Protocols?: {} | undefined; Role?: {} | undefined }
                  | undefined
              }
            }
            output: ResourceInUseException
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
                ChannelARN: string
                SingleMasterChannelEndpointConfiguration?:
                  | { Protocols?: {} | undefined; Role?: {} | undefined }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/listSignalingChannels': {
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                ChannelNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: ListSignalingChannelsOutput
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                ChannelNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidArgumentException
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                ChannelNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: ClientLimitExceededException
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                ChannelNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/listStreams': {
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StreamNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: ListStreamsOutput
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StreamNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: ClientLimitExceededException
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
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StreamNameCondition?:
                  | { ComparisonOperator?: {} | undefined; ComparisonValue?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/ListTagsForResource': {
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
            } & { json: { NextToken?: string | undefined; ResourceARN: string } }
            output: ListTagsForResourceOutput
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
            } & { json: { NextToken?: string | undefined; ResourceARN: string } }
            output: InvalidArgumentException
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
            } & { json: { NextToken?: string | undefined; ResourceARN: string } }
            output: ClientLimitExceededException
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
            } & { json: { NextToken?: string | undefined; ResourceARN: string } }
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
            } & { json: { NextToken?: string | undefined; ResourceARN: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/listTagsForStream': {
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
                NextToken?: string | undefined
                StreamARN?: string | undefined
                StreamName?: string | undefined
              }
            }
            output: ListTagsForStreamOutput
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
                NextToken?: string | undefined
                StreamARN?: string | undefined
                StreamName?: string | undefined
              }
            }
            output: ClientLimitExceededException
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
                NextToken?: string | undefined
                StreamARN?: string | undefined
                StreamName?: string | undefined
              }
            }
            output: InvalidArgumentException
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
                NextToken?: string | undefined
                StreamARN?: string | undefined
                StreamName?: string | undefined
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
                NextToken?: string | undefined
                StreamARN?: string | undefined
                StreamName?: string | undefined
              }
            }
            output: NotAuthorizedException
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
                NextToken?: string | undefined
                StreamARN?: string | undefined
                StreamName?: string | undefined
              }
            }
            output: InvalidResourceFormatException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/startEdgeConfigurationUpdate': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
              }
            }
            output: StartEdgeConfigurationUpdateOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
              }
            }
            output: NoDataRetentionException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
              }
            }
            output: ResourceInUseException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                EdgeConfig: {
                  HubDeviceArn?: {} | undefined
                  RecorderConfig?:
                    | {
                        MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                        ScheduleConfig?:
                          | { ScheduleExpression: {}; DurationInSeconds: {} }
                          | undefined
                      }
                    | undefined
                  UploaderConfig?:
                    | { ScheduleConfig: { ScheduleExpression: {}; DurationInSeconds: {} } }
                    | undefined
                  DeletionConfig?:
                    | {
                        EdgeRetentionInHours?: {} | undefined
                        LocalSizeConfig?:
                          | {
                              MaxLocalMediaSizeInMB?: {} | undefined
                              StrategyOnFullSize?: {} | undefined
                            }
                          | undefined
                        DeleteAfterUpload?: {} | undefined
                      }
                    | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/TagResource': {
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
            } & { json: { ResourceARN: string; Tags: Tag[] } }
            output: TagResourceOutput
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
            } & { json: { ResourceARN: string; Tags: Tag[] } }
            output: InvalidArgumentException
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
            } & { json: { ResourceARN: string; Tags: Tag[] } }
            output: ClientLimitExceededException
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
            } & { json: { ResourceARN: string; Tags: Tag[] } }
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
            } & { json: { ResourceARN: string; Tags: Tag[] } }
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
            } & { json: { ResourceARN: string; Tags: Tag[] } }
            output: TagsPerResourceExceededLimitException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tagStream': {
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
              }
            }
            output: TagStreamOutput
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
              }
            }
            output: ClientLimitExceededException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
              }
            }
            output: InvalidArgumentException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
              }
            }
            output: NotAuthorizedException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
              }
            }
            output: InvalidResourceFormatException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                Tags: { [x: string]: TagValue }
              }
            }
            output: TagsPerResourceExceededLimitException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/UntagResource': {
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
            } & { json: { ResourceARN: string; TagKeyList: TagKey[] } }
            output: UntagResourceOutput
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
            } & { json: { ResourceARN: string; TagKeyList: TagKey[] } }
            output: InvalidArgumentException
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
            } & { json: { ResourceARN: string; TagKeyList: TagKey[] } }
            output: ClientLimitExceededException
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
            } & { json: { ResourceARN: string; TagKeyList: TagKey[] } }
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
            } & { json: { ResourceARN: string; TagKeyList: TagKey[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/untagStream': {
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                TagKeyList: TagKey[]
              }
            }
            output: UntagStreamOutput
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                TagKeyList: TagKey[]
              }
            }
            output: ClientLimitExceededException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                TagKeyList: TagKey[]
              }
            }
            output: InvalidArgumentException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                TagKeyList: TagKey[]
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                TagKeyList: TagKey[]
              }
            }
            output: NotAuthorizedException
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
                StreamARN?: string | undefined
                StreamName?: string | undefined
                TagKeyList: TagKey[]
              }
            }
            output: InvalidResourceFormatException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/updateDataRetention': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
              }
            }
            output: UpdateDataRetentionOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
              }
            }
            output: ResourceInUseException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
              }
            }
            output: NotAuthorizedException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                Operation: 'INCREASE_DATA_RETENTION' | 'DECREASE_DATA_RETENTION'
                DataRetentionChangeInHours: number
              }
            }
            output: VersionMismatchException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/updateImageGenerationConfiguration': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateImageGenerationConfigurationOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
              }
            }
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
            } & {
              json: {
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceInUseException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ImageGenerationConfiguration?:
                  | {
                      Status?: {} | undefined
                      ImageSelectorType?: {} | undefined
                      DestinationConfig?: { Uri: {}; DestinationRegion: {} } | undefined
                      SamplingInterval?: {} | undefined
                      Format?: {} | undefined
                      FormatConfig?: {} | undefined
                      WidthPixels?: {} | undefined
                      HeightPixels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: NoDataRetentionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/updateMediaStorageConfiguration': {
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
              }
            }
            output: UpdateMediaStorageConfigurationOutput
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
              }
            }
            output: ResourceInUseException
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
              }
            }
            output: InvalidArgumentException
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
              }
            }
            output: ClientLimitExceededException
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
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
                ChannelARN: string
                MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
              }
            }
            output: NoDataRetentionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/updateNotificationConfiguration': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
              }
            }
            output: UpdateNotificationConfigurationOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
              }
            }
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
            } & {
              json: {
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
              }
            }
            output: ResourceInUseException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                NotificationConfiguration?:
                  | { Status?: {} | undefined; DestinationConfig?: { Uri: {} } | undefined }
                  | undefined
              }
            }
            output: NoDataRetentionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/updateSignalingChannel': {
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
              }
            }
            output: UpdateSignalingChannelOutput
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
              }
            }
            output: InvalidArgumentException
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
              }
            }
            output: ClientLimitExceededException
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
              }
            }
            output: ResourceInUseException
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
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
                ChannelARN: string
                CurrentVersion: string
                SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
              }
            }
            output: VersionMismatchException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/updateStream': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
              }
            }
            output: UpdateStreamOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
              }
            }
            output: ResourceInUseException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
              }
            }
            output: NotAuthorizedException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                CurrentVersion: string
                DeviceName?: string | undefined
                MediaType?: string | undefined
              }
            }
            output: VersionMismatchException
            outputFormat: 'json'
            status: 485
          }
    }
  },
  '/'
>
export default routes
