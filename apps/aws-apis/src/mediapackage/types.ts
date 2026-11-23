type ConfigureLogsResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  HlsIngest?: { IngestEndpoints?: {} | undefined } | undefined
  Id?: {} | undefined
  IngressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type String = string
type CreateChannelResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  HlsIngest?: { IngestEndpoints?: {} | undefined } | undefined
  Id?: {} | undefined
  IngressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type ListChannelsResponse = { Channels?: {} | undefined; NextToken?: {} | undefined }
type CreateHarvestJobResponse = {
  Arn?: {} | undefined
  ChannelId?: {} | undefined
  CreatedAt?: {} | undefined
  EndTime?: {} | undefined
  Id?: {} | undefined
  OriginEndpointId?: {} | undefined
  S3Destination?: { BucketName: {}; ManifestKey: {}; RoleArn: {} } | undefined
  StartTime?: {} | undefined
  Status?: {} | undefined
}
type ListHarvestJobsResponse = { HarvestJobs?: {} | undefined; NextToken?: {} | undefined }
type CreateOriginEndpointResponse = {
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  ChannelId?: {} | undefined
  CmafPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              KeyRotationIntervalSeconds?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentPrefix?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  DashPackage?:
    | {
        AdTriggers?: {} | undefined
        AdsOnDeliveryRestrictions?: {} | undefined
        Encryption?:
          | {
              KeyRotationIntervalSeconds?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeIframeOnlyStream?: {} | undefined
        ManifestLayout?: {} | undefined
        ManifestWindowSeconds?: {} | undefined
        MinBufferTimeSeconds?: {} | undefined
        MinUpdatePeriodSeconds?: {} | undefined
        PeriodTriggers?: {} | undefined
        Profile?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentTemplateFormat?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
        SuggestedPresentationDelaySeconds?: {} | undefined
        UtcTiming?: {} | undefined
        UtcTimingUri?: {} | undefined
      }
    | undefined
  Description?: {} | undefined
  HlsPackage?:
    | {
        AdMarkers?: {} | undefined
        AdTriggers?: {} | undefined
        AdsOnDeliveryRestrictions?: {} | undefined
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              KeyRotationIntervalSeconds?: {} | undefined
              RepeatExtXKey?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeDvbSubtitles?: {} | undefined
        IncludeIframeOnlyStream?: {} | undefined
        PlaylistType?: {} | undefined
        PlaylistWindowSeconds?: {} | undefined
        ProgramDateTimeIntervalSeconds?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
        UseAudioRenditionGroup?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  ManifestName?: {} | undefined
  MssPackage?:
    | {
        Encryption?:
          | {
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        ManifestWindowSeconds?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
      }
    | undefined
  Origination?: {} | undefined
  StartoverWindowSeconds?: {} | undefined
  Tags?: {} | undefined
  TimeDelaySeconds?: {} | undefined
  Url?: {} | undefined
  Whitelist?: {} | undefined
}
type ListOriginEndpointsResponse = { NextToken?: {} | undefined; OriginEndpoints?: {} | undefined }
type DeleteChannelResponse = { [x: string]: unknown }
type DescribeChannelResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  HlsIngest?: { IngestEndpoints?: {} | undefined } | undefined
  Id?: {} | undefined
  IngressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type UpdateChannelResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  HlsIngest?: { IngestEndpoints?: {} | undefined } | undefined
  Id?: {} | undefined
  IngressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type DeleteOriginEndpointResponse = { [x: string]: unknown }
type DescribeOriginEndpointResponse = {
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  ChannelId?: {} | undefined
  CmafPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              KeyRotationIntervalSeconds?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentPrefix?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  DashPackage?:
    | {
        AdTriggers?: {} | undefined
        AdsOnDeliveryRestrictions?: {} | undefined
        Encryption?:
          | {
              KeyRotationIntervalSeconds?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeIframeOnlyStream?: {} | undefined
        ManifestLayout?: {} | undefined
        ManifestWindowSeconds?: {} | undefined
        MinBufferTimeSeconds?: {} | undefined
        MinUpdatePeriodSeconds?: {} | undefined
        PeriodTriggers?: {} | undefined
        Profile?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentTemplateFormat?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
        SuggestedPresentationDelaySeconds?: {} | undefined
        UtcTiming?: {} | undefined
        UtcTimingUri?: {} | undefined
      }
    | undefined
  Description?: {} | undefined
  HlsPackage?:
    | {
        AdMarkers?: {} | undefined
        AdTriggers?: {} | undefined
        AdsOnDeliveryRestrictions?: {} | undefined
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              KeyRotationIntervalSeconds?: {} | undefined
              RepeatExtXKey?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeDvbSubtitles?: {} | undefined
        IncludeIframeOnlyStream?: {} | undefined
        PlaylistType?: {} | undefined
        PlaylistWindowSeconds?: {} | undefined
        ProgramDateTimeIntervalSeconds?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
        UseAudioRenditionGroup?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  ManifestName?: {} | undefined
  MssPackage?:
    | {
        Encryption?:
          | {
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        ManifestWindowSeconds?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
      }
    | undefined
  Origination?: {} | undefined
  StartoverWindowSeconds?: {} | undefined
  Tags?: {} | undefined
  TimeDelaySeconds?: {} | undefined
  Url?: {} | undefined
  Whitelist?: {} | undefined
}
type UpdateOriginEndpointResponse = {
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  ChannelId?: {} | undefined
  CmafPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              KeyRotationIntervalSeconds?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentPrefix?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  DashPackage?:
    | {
        AdTriggers?: {} | undefined
        AdsOnDeliveryRestrictions?: {} | undefined
        Encryption?:
          | {
              KeyRotationIntervalSeconds?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeIframeOnlyStream?: {} | undefined
        ManifestLayout?: {} | undefined
        ManifestWindowSeconds?: {} | undefined
        MinBufferTimeSeconds?: {} | undefined
        MinUpdatePeriodSeconds?: {} | undefined
        PeriodTriggers?: {} | undefined
        Profile?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentTemplateFormat?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
        SuggestedPresentationDelaySeconds?: {} | undefined
        UtcTiming?: {} | undefined
        UtcTimingUri?: {} | undefined
      }
    | undefined
  Description?: {} | undefined
  HlsPackage?:
    | {
        AdMarkers?: {} | undefined
        AdTriggers?: {} | undefined
        AdsOnDeliveryRestrictions?: {} | undefined
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              KeyRotationIntervalSeconds?: {} | undefined
              RepeatExtXKey?: {} | undefined
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeDvbSubtitles?: {} | undefined
        IncludeIframeOnlyStream?: {} | undefined
        PlaylistType?: {} | undefined
        PlaylistWindowSeconds?: {} | undefined
        ProgramDateTimeIntervalSeconds?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
        UseAudioRenditionGroup?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  ManifestName?: {} | undefined
  MssPackage?:
    | {
        Encryption?:
          | {
              SpekeKeyProvider: {
                CertificateArn?: {} | undefined
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                ResourceId: {}
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        ManifestWindowSeconds?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        StreamSelection?:
          | {
              MaxVideoBitsPerSecond?: {} | undefined
              MinVideoBitsPerSecond?: {} | undefined
              StreamOrder?: {} | undefined
            }
          | undefined
      }
    | undefined
  Origination?: {} | undefined
  StartoverWindowSeconds?: {} | undefined
  Tags?: {} | undefined
  TimeDelaySeconds?: {} | undefined
  Url?: {} | undefined
  Whitelist?: {} | undefined
}
type DescribeHarvestJobResponse = {
  Arn?: {} | undefined
  ChannelId?: {} | undefined
  CreatedAt?: {} | undefined
  EndTime?: {} | undefined
  Id?: {} | undefined
  OriginEndpointId?: {} | undefined
  S3Destination?: { BucketName: {}; ManifestKey: {}; RoleArn: {} } | undefined
  StartTime?: {} | undefined
  Status?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type RotateChannelCredentialsResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  HlsIngest?: { IngestEndpoints?: {} | undefined } | undefined
  Id?: {} | undefined
  IngressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type RotateIngestEndpointCredentialsResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  Description?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  HlsIngest?: { IngestEndpoints?: {} | undefined } | undefined
  Id?: {} | undefined
  IngressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Tags?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/channels/:id/configure_logs': {
      $put: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
            ingressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
          }
        }
        output: ConfigureLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels': {
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
            description?: string | undefined
            id: string
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 200
      }
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
    '/harvest_jobs': {
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
            endTime: string
            id: string
            originEndpointId: string
            s3Destination: {
              BucketName?: {} | undefined
              ManifestKey?: {} | undefined
              RoleArn?: {} | undefined
            }
            startTime: string
          }
        }
        output: CreateHarvestJobResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            includeChannelId?: string | undefined
            includeStatus?: string | undefined
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
        output: ListHarvestJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/origin_endpoints': {
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
            authorization?:
              | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
              | undefined
            channelId: string
            cmafPackage?:
              | {
                  Encryption?:
                    | {
                        ConstantInitializationVector?: {} | undefined
                        EncryptionMethod?: {} | undefined
                        KeyRotationIntervalSeconds?: {} | undefined
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  HlsManifests?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  SegmentPrefix?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            dashPackage?:
              | {
                  AdTriggers?: {} | undefined
                  AdsOnDeliveryRestrictions?: {} | undefined
                  Encryption?:
                    | {
                        KeyRotationIntervalSeconds?: {} | undefined
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  IncludeIframeOnlyStream?: {} | undefined
                  ManifestLayout?: {} | undefined
                  ManifestWindowSeconds?: {} | undefined
                  MinBufferTimeSeconds?: {} | undefined
                  MinUpdatePeriodSeconds?: {} | undefined
                  PeriodTriggers?: {} | undefined
                  Profile?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  SegmentTemplateFormat?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                  SuggestedPresentationDelaySeconds?: {} | undefined
                  UtcTiming?: {} | undefined
                  UtcTimingUri?: {} | undefined
                }
              | undefined
            description?: string | undefined
            hlsPackage?:
              | {
                  AdMarkers?: {} | undefined
                  AdTriggers?: {} | undefined
                  AdsOnDeliveryRestrictions?: {} | undefined
                  Encryption?:
                    | {
                        ConstantInitializationVector?: {} | undefined
                        EncryptionMethod?: {} | undefined
                        KeyRotationIntervalSeconds?: {} | undefined
                        RepeatExtXKey?: {} | undefined
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  IncludeDvbSubtitles?: {} | undefined
                  IncludeIframeOnlyStream?: {} | undefined
                  PlaylistType?: {} | undefined
                  PlaylistWindowSeconds?: {} | undefined
                  ProgramDateTimeIntervalSeconds?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                  UseAudioRenditionGroup?: {} | undefined
                }
              | undefined
            id: string
            manifestName?: string | undefined
            mssPackage?:
              | {
                  Encryption?:
                    | {
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  ManifestWindowSeconds?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            origination?: 'ALLOW' | 'DENY' | undefined
            startoverWindowSeconds?: number | undefined
            tags?: { [x: string]: String } | undefined
            timeDelaySeconds?: number | undefined
            whitelist?: String[] | undefined
          }
        }
        output: CreateOriginEndpointResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            channelId?: string | undefined
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
        output: ListOriginEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: {
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
        status: 202
      }
      $get: {
        input: { param: { id: string } } & {
          header: {
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
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { description?: string | undefined } }
        output: UpdateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/origin_endpoints/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteOriginEndpointResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeOriginEndpointResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            authorization?:
              | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
              | undefined
            cmafPackage?:
              | {
                  Encryption?:
                    | {
                        ConstantInitializationVector?: {} | undefined
                        EncryptionMethod?: {} | undefined
                        KeyRotationIntervalSeconds?: {} | undefined
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  HlsManifests?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  SegmentPrefix?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            dashPackage?:
              | {
                  AdTriggers?: {} | undefined
                  AdsOnDeliveryRestrictions?: {} | undefined
                  Encryption?:
                    | {
                        KeyRotationIntervalSeconds?: {} | undefined
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  IncludeIframeOnlyStream?: {} | undefined
                  ManifestLayout?: {} | undefined
                  ManifestWindowSeconds?: {} | undefined
                  MinBufferTimeSeconds?: {} | undefined
                  MinUpdatePeriodSeconds?: {} | undefined
                  PeriodTriggers?: {} | undefined
                  Profile?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  SegmentTemplateFormat?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                  SuggestedPresentationDelaySeconds?: {} | undefined
                  UtcTiming?: {} | undefined
                  UtcTimingUri?: {} | undefined
                }
              | undefined
            description?: string | undefined
            hlsPackage?:
              | {
                  AdMarkers?: {} | undefined
                  AdTriggers?: {} | undefined
                  AdsOnDeliveryRestrictions?: {} | undefined
                  Encryption?:
                    | {
                        ConstantInitializationVector?: {} | undefined
                        EncryptionMethod?: {} | undefined
                        KeyRotationIntervalSeconds?: {} | undefined
                        RepeatExtXKey?: {} | undefined
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  IncludeDvbSubtitles?: {} | undefined
                  IncludeIframeOnlyStream?: {} | undefined
                  PlaylistType?: {} | undefined
                  PlaylistWindowSeconds?: {} | undefined
                  ProgramDateTimeIntervalSeconds?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                  UseAudioRenditionGroup?: {} | undefined
                }
              | undefined
            manifestName?: string | undefined
            mssPackage?:
              | {
                  Encryption?:
                    | {
                        SpekeKeyProvider: {
                          CertificateArn?: {} | undefined
                          EncryptionContractConfiguration?:
                            | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                            | undefined
                          ResourceId: {}
                          RoleArn: {}
                          SystemIds: {}
                          Url: {}
                        }
                      }
                    | undefined
                  ManifestWindowSeconds?: {} | undefined
                  SegmentDurationSeconds?: {} | undefined
                  StreamSelection?:
                    | {
                        MaxVideoBitsPerSecond?: {} | undefined
                        MinVideoBitsPerSecond?: {} | undefined
                        StreamOrder?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            origination?: 'ALLOW' | 'DENY' | undefined
            startoverWindowSeconds?: number | undefined
            timeDelaySeconds?: number | undefined
            whitelist?: String[] | undefined
          }
        }
        output: UpdateOriginEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/harvest_jobs/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeHarvestJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource-arn': {
      $get: {
        input: { param: { 'resource-arn': string } } & {
          header: {
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
      $post: {
        input: { param: { 'resource-arn': string } } & {
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
    }
  } & {
    '/channels/:id/credentials': {
      $put: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RotateChannelCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:id/ingest_endpoints/:ingest_endpoint_id/credentials': {
      $put: {
        input: { param: { id: string; ingest_endpoint_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RotateIngestEndpointCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
          header: {
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
    }
  },
  '/'
>
export default routes
