type LogType = 'AS_RUN'
type ConfigureLogsForChannelResponse = { ChannelName?: {} | undefined; LogTypes?: {} | undefined }
type ConfigureLogsForPlaybackConfigurationResponse = {
  PercentEnabled: {}
  PlaybackConfigurationName?: {} | undefined
}
type RequestOutputItem = {
  DashPlaylistSettings?:
    | {
        ManifestWindowSeconds?: {} | undefined
        MinBufferTimeSeconds?: {} | undefined
        MinUpdatePeriodSeconds?: {} | undefined
        SuggestedPresentationDelaySeconds?: {} | undefined
      }
    | undefined
  HlsPlaylistSettings?: { ManifestWindowSeconds?: {} | undefined } | undefined
  ManifestName: {}
  SourceGroup: {}
}
type String = string
type CreateChannelResponse = {
  Arn?: {} | undefined
  ChannelName?: {} | undefined
  ChannelState?: {} | undefined
  CreationTime?: {} | undefined
  FillerSlate?: { SourceLocationName?: {} | undefined; VodSourceName?: {} | undefined } | undefined
  LastModifiedTime?: {} | undefined
  Outputs?: {} | undefined
  PlaybackMode?: {} | undefined
  Tags?: {} | undefined
  Tier?: {} | undefined
}
type DeleteChannelResponse = { [x: string]: unknown }
type DescribeChannelResponse = {
  Arn?: {} | undefined
  ChannelName?: {} | undefined
  ChannelState?: {} | undefined
  CreationTime?: {} | undefined
  FillerSlate?: { SourceLocationName?: {} | undefined; VodSourceName?: {} | undefined } | undefined
  LastModifiedTime?: {} | undefined
  LogConfiguration: { LogTypes?: {} | undefined }
  Outputs?: {} | undefined
  PlaybackMode?: {} | undefined
  Tags?: {} | undefined
  Tier?: {} | undefined
}
type UpdateChannelResponse = {
  Arn?: {} | undefined
  ChannelName?: {} | undefined
  ChannelState?: {} | undefined
  CreationTime?: {} | undefined
  FillerSlate?: { SourceLocationName?: {} | undefined; VodSourceName?: {} | undefined } | undefined
  LastModifiedTime?: {} | undefined
  Outputs?: {} | undefined
  PlaybackMode?: {} | undefined
  Tags?: {} | undefined
  Tier?: {} | undefined
}
type HttpPackageConfiguration = { Path: {}; SourceGroup: {}; Type: {} }
type CreateLiveSourceResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  HttpPackageConfigurations?: {} | undefined
  LastModifiedTime?: {} | undefined
  LiveSourceName?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
}
type DeleteLiveSourceResponse = { [x: string]: unknown }
type DescribeLiveSourceResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  HttpPackageConfigurations?: {} | undefined
  LastModifiedTime?: {} | undefined
  LiveSourceName?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
}
type UpdateLiveSourceResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  HttpPackageConfigurations?: {} | undefined
  LastModifiedTime?: {} | undefined
  LiveSourceName?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
}
type CreatePrefetchScheduleResponse = {
  Arn?: {} | undefined
  Consumption?:
    | { AvailMatchingCriteria?: {} | undefined; EndTime: {}; StartTime?: {} | undefined }
    | undefined
  Name?: {} | undefined
  PlaybackConfigurationName?: {} | undefined
  Retrieval?:
    | { DynamicVariables?: {} | undefined; EndTime: {}; StartTime?: {} | undefined }
    | undefined
  StreamId?: {} | undefined
}
type DeletePrefetchScheduleResponse = { [x: string]: unknown }
type GetPrefetchScheduleResponse = {
  Arn?: {} | undefined
  Consumption?:
    | { AvailMatchingCriteria?: {} | undefined; EndTime: {}; StartTime?: {} | undefined }
    | undefined
  Name?: {} | undefined
  PlaybackConfigurationName?: {} | undefined
  Retrieval?:
    | { DynamicVariables?: {} | undefined; EndTime: {}; StartTime?: {} | undefined }
    | undefined
  StreamId?: {} | undefined
}
type AdBreak = {
  MessageType?: {} | undefined
  OffsetMillis?: {} | undefined
  Slate?: { SourceLocationName?: {} | undefined; VodSourceName?: {} | undefined } | undefined
  SpliceInsertMessage?:
    | {
        AvailNum?: {} | undefined
        AvailsExpected?: {} | undefined
        SpliceEventId?: {} | undefined
        UniqueProgramId?: {} | undefined
      }
    | undefined
  TimeSignalMessage?: { SegmentationDescriptors?: {} | undefined } | undefined
}
type CreateProgramResponse = {
  AdBreaks?: {} | undefined
  Arn?: {} | undefined
  ChannelName?: {} | undefined
  ClipRange?: { EndOffsetMillis: {} } | undefined
  CreationTime?: {} | undefined
  DurationMillis?: {} | undefined
  LiveSourceName?: {} | undefined
  ProgramName?: {} | undefined
  ScheduledStartTime?: {} | undefined
  SourceLocationName?: {} | undefined
  VodSourceName?: {} | undefined
}
type DeleteProgramResponse = { [x: string]: unknown }
type DescribeProgramResponse = {
  AdBreaks?: {} | undefined
  Arn?: {} | undefined
  ChannelName?: {} | undefined
  ClipRange?: { EndOffsetMillis: {} } | undefined
  CreationTime?: {} | undefined
  DurationMillis?: {} | undefined
  LiveSourceName?: {} | undefined
  ProgramName?: {} | undefined
  ScheduledStartTime?: {} | undefined
  SourceLocationName?: {} | undefined
  VodSourceName?: {} | undefined
}
type UpdateProgramResponse = {
  AdBreaks?: {} | undefined
  Arn?: {} | undefined
  ChannelName?: {} | undefined
  ClipRange?: { EndOffsetMillis: {} } | undefined
  CreationTime?: {} | undefined
  DurationMillis?: {} | undefined
  LiveSourceName?: {} | undefined
  ProgramName?: {} | undefined
  ScheduledStartTime?: {} | undefined
  SourceLocationName?: {} | undefined
  VodSourceName?: {} | undefined
}
type SegmentDeliveryConfiguration = { BaseUrl?: {} | undefined; Name?: {} | undefined }
type CreateSourceLocationResponse = {
  AccessConfiguration?:
    | {
        AccessType?: {} | undefined
        SecretsManagerAccessTokenConfiguration?:
          | {
              HeaderName?: {} | undefined
              SecretArn?: {} | undefined
              SecretStringKey?: {} | undefined
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  DefaultSegmentDeliveryConfiguration?: { BaseUrl?: {} | undefined } | undefined
  HttpConfiguration?: { BaseUrl: {} } | undefined
  LastModifiedTime?: {} | undefined
  SegmentDeliveryConfigurations?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
}
type DeleteSourceLocationResponse = { [x: string]: unknown }
type DescribeSourceLocationResponse = {
  AccessConfiguration?:
    | {
        AccessType?: {} | undefined
        SecretsManagerAccessTokenConfiguration?:
          | {
              HeaderName?: {} | undefined
              SecretArn?: {} | undefined
              SecretStringKey?: {} | undefined
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  DefaultSegmentDeliveryConfiguration?: { BaseUrl?: {} | undefined } | undefined
  HttpConfiguration?: { BaseUrl: {} } | undefined
  LastModifiedTime?: {} | undefined
  SegmentDeliveryConfigurations?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
}
type UpdateSourceLocationResponse = {
  AccessConfiguration?:
    | {
        AccessType?: {} | undefined
        SecretsManagerAccessTokenConfiguration?:
          | {
              HeaderName?: {} | undefined
              SecretArn?: {} | undefined
              SecretStringKey?: {} | undefined
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  DefaultSegmentDeliveryConfiguration?: { BaseUrl?: {} | undefined } | undefined
  HttpConfiguration?: { BaseUrl: {} } | undefined
  LastModifiedTime?: {} | undefined
  SegmentDeliveryConfigurations?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
}
type CreateVodSourceResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  HttpPackageConfigurations?: {} | undefined
  LastModifiedTime?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
  VodSourceName?: {} | undefined
}
type DeleteVodSourceResponse = { [x: string]: unknown }
type DescribeVodSourceResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  HttpPackageConfigurations?: {} | undefined
  LastModifiedTime?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
  VodSourceName?: {} | undefined
}
type UpdateVodSourceResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  HttpPackageConfigurations?: {} | undefined
  LastModifiedTime?: {} | undefined
  SourceLocationName?: {} | undefined
  Tags?: {} | undefined
  VodSourceName?: {} | undefined
}
type DeleteChannelPolicyResponse = { [x: string]: unknown }
type GetChannelPolicyResponse = { Policy?: {} | undefined }
type PutChannelPolicyResponse = { [x: string]: unknown }
type DeletePlaybackConfigurationResponse = { [x: string]: unknown }
type GetPlaybackConfigurationResponse = {
  AdDecisionServerUrl?: {} | undefined
  AvailSuppression?: { Mode?: {} | undefined; Value?: {} | undefined } | undefined
  Bumper?: { EndUrl?: {} | undefined; StartUrl?: {} | undefined } | undefined
  CdnConfiguration?:
    | { AdSegmentUrlPrefix?: {} | undefined; ContentSegmentUrlPrefix?: {} | undefined }
    | undefined
  ConfigurationAliases?: {} | undefined
  DashConfiguration?:
    | {
        ManifestEndpointPrefix?: {} | undefined
        MpdLocation?: {} | undefined
        OriginManifestType?: {} | undefined
      }
    | undefined
  HlsConfiguration?: { ManifestEndpointPrefix?: {} | undefined } | undefined
  LivePreRollConfiguration?:
    | { AdDecisionServerUrl?: {} | undefined; MaxDurationSeconds?: {} | undefined }
    | undefined
  LogConfiguration?: { PercentEnabled: {} } | undefined
  ManifestProcessingRules?:
    | { AdMarkerPassthrough?: { Enabled?: {} | undefined } | undefined }
    | undefined
  Name?: {} | undefined
  PersonalizationThresholdSeconds?: {} | undefined
  PlaybackConfigurationArn?: {} | undefined
  PlaybackEndpointPrefix?: {} | undefined
  SessionInitializationEndpointPrefix?: {} | undefined
  SlateAdUrl?: {} | undefined
  Tags?: {} | undefined
  TranscodeProfileName?: {} | undefined
  VideoContentSourceUrl?: {} | undefined
}
type GetChannelScheduleResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListAlertsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListChannelsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListLiveSourcesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListPlaybackConfigurationsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListPrefetchSchedulesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListSourceLocationsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type BadRequestException = { [x: string]: unknown }
type ListVodSourcesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type MapOfString = { [x: string]: String }
type PutPlaybackConfigurationResponse = {
  AdDecisionServerUrl?: {} | undefined
  AvailSuppression?: { Mode?: {} | undefined; Value?: {} | undefined } | undefined
  Bumper?: { EndUrl?: {} | undefined; StartUrl?: {} | undefined } | undefined
  CdnConfiguration?:
    | { AdSegmentUrlPrefix?: {} | undefined; ContentSegmentUrlPrefix?: {} | undefined }
    | undefined
  ConfigurationAliases?: {} | undefined
  DashConfiguration?:
    | {
        ManifestEndpointPrefix?: {} | undefined
        MpdLocation?: {} | undefined
        OriginManifestType?: {} | undefined
      }
    | undefined
  HlsConfiguration?: { ManifestEndpointPrefix?: {} | undefined } | undefined
  LivePreRollConfiguration?:
    | { AdDecisionServerUrl?: {} | undefined; MaxDurationSeconds?: {} | undefined }
    | undefined
  LogConfiguration?: { PercentEnabled: {} } | undefined
  ManifestProcessingRules?:
    | { AdMarkerPassthrough?: { Enabled?: {} | undefined } | undefined }
    | undefined
  Name?: {} | undefined
  PersonalizationThresholdSeconds?: {} | undefined
  PlaybackConfigurationArn?: {} | undefined
  PlaybackEndpointPrefix?: {} | undefined
  SessionInitializationEndpointPrefix?: {} | undefined
  SlateAdUrl?: {} | undefined
  Tags?: {} | undefined
  TranscodeProfileName?: {} | undefined
  VideoContentSourceUrl?: {} | undefined
}
type StartChannelResponse = { [x: string]: unknown }
type StopChannelResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/configureLogs/channel': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ChannelName: string; LogTypes: LogType[] } }
        output: ConfigureLogsForChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configureLogs/playbackConfiguration': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { PercentEnabled: number; PlaybackConfigurationName: string } }
        output: ConfigureLogsForPlaybackConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:ChannelName': {
      $post: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            FillerSlate?:
              | { SourceLocationName?: {} | undefined; VodSourceName?: {} | undefined }
              | undefined
            Outputs: RequestOutputItem[]
            PlaybackMode: 'LOOP' | 'LINEAR'
            tags?: { [x: string]: String } | undefined
            Tier?: 'BASIC' | 'STANDARD' | undefined
          }
        }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            FillerSlate?:
              | { SourceLocationName?: {} | undefined; VodSourceName?: {} | undefined }
              | undefined
            Outputs: RequestOutputItem[]
          }
        }
        output: UpdateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName': {
      $post: {
        input: { param: { LiveSourceName: string; SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            HttpPackageConfigurations: HttpPackageConfiguration[]
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateLiveSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { LiveSourceName: string; SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteLiveSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { LiveSourceName: string; SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLiveSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { LiveSourceName: string; SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { HttpPackageConfigurations: HttpPackageConfiguration[] } }
        output: UpdateLiveSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prefetchSchedule/:PlaybackConfigurationName/:Name': {
      $post: {
        input: { param: { Name: string; PlaybackConfigurationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Consumption: {
              AvailMatchingCriteria?: {} | undefined
              EndTime?: {} | undefined
              StartTime?: {} | undefined
            }
            Retrieval: {
              DynamicVariables?: {} | undefined
              EndTime?: {} | undefined
              StartTime?: {} | undefined
            }
            StreamId?: string | undefined
          }
        }
        output: CreatePrefetchScheduleResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Name: string; PlaybackConfigurationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeletePrefetchScheduleResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { Name: string; PlaybackConfigurationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPrefetchScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:ChannelName/program/:ProgramName': {
      $post: {
        input: { param: { ChannelName: string; ProgramName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AdBreaks?: AdBreak[] | undefined
            LiveSourceName?: string | undefined
            ScheduleConfiguration: {
              ClipRange?: { EndOffsetMillis: {} } | undefined
              Transition?:
                | {
                    DurationMillis?: {} | undefined
                    RelativePosition: {}
                    RelativeProgram?: {} | undefined
                    ScheduledStartTimeMillis?: {} | undefined
                    Type: {}
                  }
                | undefined
            }
            SourceLocationName: string
            VodSourceName?: string | undefined
          }
        }
        output: CreateProgramResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ChannelName: string; ProgramName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteProgramResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ChannelName: string; ProgramName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeProgramResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ChannelName: string; ProgramName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AdBreaks?: AdBreak[] | undefined
            ScheduleConfiguration: {
              ClipRange?: { EndOffsetMillis: {} } | undefined
              Transition?:
                | { DurationMillis?: {} | undefined; ScheduledStartTimeMillis?: {} | undefined }
                | undefined
            }
          }
        }
        output: UpdateProgramResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sourceLocation/:SourceLocationName': {
      $post: {
        input: { param: { SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AccessConfiguration?:
              | {
                  AccessType?: {} | undefined
                  SecretsManagerAccessTokenConfiguration?:
                    | {
                        HeaderName?: {} | undefined
                        SecretArn?: {} | undefined
                        SecretStringKey?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            DefaultSegmentDeliveryConfiguration?: { BaseUrl?: {} | undefined } | undefined
            HttpConfiguration: { BaseUrl?: {} | undefined }
            SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateSourceLocationResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteSourceLocationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeSourceLocationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { SourceLocationName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AccessConfiguration?:
              | {
                  AccessType?: {} | undefined
                  SecretsManagerAccessTokenConfiguration?:
                    | {
                        HeaderName?: {} | undefined
                        SecretArn?: {} | undefined
                        SecretStringKey?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            DefaultSegmentDeliveryConfiguration?: { BaseUrl?: {} | undefined } | undefined
            HttpConfiguration: { BaseUrl?: {} | undefined }
            SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined
          }
        }
        output: UpdateSourceLocationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName': {
      $post: {
        input: { param: { SourceLocationName: string; VodSourceName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            HttpPackageConfigurations: HttpPackageConfiguration[]
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateVodSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { SourceLocationName: string; VodSourceName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteVodSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { SourceLocationName: string; VodSourceName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeVodSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { SourceLocationName: string; VodSourceName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { HttpPackageConfigurations: HttpPackageConfiguration[] } }
        output: UpdateVodSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:ChannelName/policy': {
      $delete: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteChannelPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetChannelPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy: string } }
        output: PutChannelPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/playbackConfiguration/:Name': {
      $delete: {
        input: { param: { Name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeletePlaybackConfigurationResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { Name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPlaybackConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:ChannelName/schedule': {
      $get: {
        input: { param: { ChannelName: string } } & {
          query: {
            durationMinutes?: string | undefined
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
        output: GetChannelScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alerts#resourceArn': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            resourceArn: string
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
        output: ListAlertsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels': {
      $get: {
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
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sourceLocation/:SourceLocationName/liveSources': {
      $get: {
        input: { param: { SourceLocationName: string } } & {
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
        output: ListLiveSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/playbackConfigurations': {
      $get: {
        input: { query: { MaxResults?: number | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPlaybackConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prefetchSchedule/:PlaybackConfigurationName': {
      $post: {
        input: { param: { PlaybackConfigurationName: string } } & {
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
            StreamId?: string | undefined
          }
        }
        output: ListPrefetchSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sourceLocations': {
      $get: {
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
        output: ListSourceLocationsResponse
        outputFormat: 'json'
        status: 200
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
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
            } & { json: { tags: { [x: string]: String } } }
            output: {}
            outputFormat: string
            status: 204
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
            } & { json: { tags: { [x: string]: String } } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/sourceLocation/:SourceLocationName/vodSources': {
      $get: {
        input: { param: { SourceLocationName: string } } & {
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
        output: ListVodSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/playbackConfiguration': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AdDecisionServerUrl?: string | undefined
            AvailSuppression?: { Mode?: {} | undefined; Value?: {} | undefined } | undefined
            Bumper?: { EndUrl?: {} | undefined; StartUrl?: {} | undefined } | undefined
            CdnConfiguration?:
              | { AdSegmentUrlPrefix?: {} | undefined; ContentSegmentUrlPrefix?: {} | undefined }
              | undefined
            ConfigurationAliases?: { [x: string]: MapOfString } | undefined
            DashConfiguration?:
              | { MpdLocation?: {} | undefined; OriginManifestType?: {} | undefined }
              | undefined
            LivePreRollConfiguration?:
              | { AdDecisionServerUrl?: {} | undefined; MaxDurationSeconds?: {} | undefined }
              | undefined
            ManifestProcessingRules?:
              | { AdMarkerPassthrough?: { Enabled?: {} | undefined } | undefined }
              | undefined
            Name: string
            PersonalizationThresholdSeconds?: number | undefined
            SlateAdUrl?: string | undefined
            tags?: { [x: string]: String } | undefined
            TranscodeProfileName?: string | undefined
            VideoContentSourceUrl?: string | undefined
          }
        }
        output: PutPlaybackConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:ChannelName/start': {
      $put: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:ChannelName/stop': {
      $put: {
        input: { param: { ChannelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
              header: {
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
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
              header: {
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
    }
  },
  '/'
>
export default routes
