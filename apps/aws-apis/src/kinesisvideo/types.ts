type Tag = { Key: {}; Value: {} }
type CreateSignalingChannelOutput = { ChannelARN?: {} | undefined }
type TagValue = string
type CreateStreamOutput = { StreamARN?: {} | undefined }
type DeleteSignalingChannelOutput = { [x: string]: unknown }
type DeleteStreamOutput = { [x: string]: unknown }
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
    }
  } & {
    '/createStream': {
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
    }
  } & {
    '/deleteSignalingChannel': {
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
        } & { json: { ChannelARN: string; CurrentVersion?: string | undefined } }
        output: DeleteSignalingChannelOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteStream': {
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
        } & { json: { StreamARN: string; CurrentVersion?: string | undefined } }
        output: DeleteStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeEdgeConfiguration': {
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
        } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
        output: DescribeEdgeConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeImageGenerationConfiguration': {
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
        } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
        output: DescribeImageGenerationConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeMappedResourceConfiguration': {
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
    }
  } & {
    '/describeMediaStorageConfiguration': {
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
        } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
        output: DescribeMediaStorageConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeNotificationConfiguration': {
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
        } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
        output: DescribeNotificationConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeSignalingChannel': {
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
        } & { json: { ChannelName?: string | undefined; ChannelARN?: string | undefined } }
        output: DescribeSignalingChannelOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeStream': {
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
        } & { json: { StreamName?: string | undefined; StreamARN?: string | undefined } }
        output: DescribeStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getDataEndpoint': {
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
    }
  } & {
    '/getSignalingChannelEndpoint': {
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
    }
  } & {
    '/listSignalingChannels': {
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
    }
  } & {
    '/listStreams': {
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
    }
  } & {
    '/ListTagsForResource': {
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
        } & { json: { NextToken?: string | undefined; ResourceARN: string } }
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listTagsForStream': {
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
            NextToken?: string | undefined
            StreamARN?: string | undefined
            StreamName?: string | undefined
          }
        }
        output: ListTagsForStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/startEdgeConfigurationUpdate': {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            EdgeConfig: {
              HubDeviceArn?: {} | undefined
              RecorderConfig?:
                | {
                    MediaSourceConfig: { MediaUriSecretArn: {}; MediaUriType: {} }
                    ScheduleConfig?: { ScheduleExpression: {}; DurationInSeconds: {} } | undefined
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
    }
  } & {
    '/TagResource': {
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
        } & { json: { ResourceARN: string; Tags: Tag[] } }
        output: TagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagStream': {
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
            StreamARN?: string | undefined
            StreamName?: string | undefined
            Tags: { [x: string]: TagValue }
          }
        }
        output: TagStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UntagResource': {
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
        } & { json: { ResourceARN: string; TagKeyList: TagKey[] } }
        output: UntagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/untagStream': {
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
            StreamARN?: string | undefined
            StreamName?: string | undefined
            TagKeyList: TagKey[]
          }
        }
        output: UntagStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateDataRetention': {
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
    }
  } & {
    '/updateImageGenerationConfiguration': {
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
    }
  } & {
    '/updateMediaStorageConfiguration': {
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
            ChannelARN: string
            MediaStorageConfiguration: { StreamARN?: {} | undefined; Status?: {} | undefined }
          }
        }
        output: UpdateMediaStorageConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateNotificationConfiguration': {
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
    }
  } & {
    '/updateSignalingChannel': {
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
            ChannelARN: string
            CurrentVersion: string
            SingleMasterConfiguration?: { MessageTtlSeconds?: {} | undefined } | undefined
          }
        }
        output: UpdateSignalingChannelOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateStream': {
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
    }
  },
  '/'
>
export default routes
