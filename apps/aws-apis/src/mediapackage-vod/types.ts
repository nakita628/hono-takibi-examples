type ConfigureLogsResponse = {
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  CreatedAt?: {} | undefined
  DomainName?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Id?: {} | undefined
  Tags?: {} | undefined
}
type UnprocessableEntityException = { [x: string]: unknown }
type InternalServerErrorException = { [x: string]: unknown }
type ForbiddenException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type String = string
type CreateAssetResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  EgressEndpoints?: {} | undefined
  Id?: {} | undefined
  PackagingGroupId?: {} | undefined
  ResourceId?: {} | undefined
  SourceArn?: {} | undefined
  SourceRoleArn?: {} | undefined
  Tags?: {} | undefined
}
type ListAssetsResponse = { Assets?: {} | undefined; NextToken?: {} | undefined }
type CreatePackagingConfigurationResponse = {
  Arn?: {} | undefined
  CmafPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests: {}
        IncludeEncoderConfigurationInSegments?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  DashPackage?:
    | {
        DashManifests: {}
        Encryption?:
          | {
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeEncoderConfigurationInSegments?: {} | undefined
        IncludeIframeOnlyStream?: {} | undefined
        PeriodTriggers?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentTemplateFormat?: {} | undefined
      }
    | undefined
  HlsPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests: {}
        IncludeDvbSubtitles?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        UseAudioRenditionGroup?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  MssPackage?:
    | {
        Encryption?:
          | {
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        MssManifests: {}
        SegmentDurationSeconds?: {} | undefined
      }
    | undefined
  PackagingGroupId?: {} | undefined
  Tags?: {} | undefined
}
type ListPackagingConfigurationsResponse = {
  NextToken?: {} | undefined
  PackagingConfigurations?: {} | undefined
}
type CreatePackagingGroupResponse = {
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  CreatedAt?: {} | undefined
  DomainName?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Id?: {} | undefined
  Tags?: {} | undefined
}
type ListPackagingGroupsResponse = { NextToken?: {} | undefined; PackagingGroups?: {} | undefined }
type DeleteAssetResponse = { [x: string]: unknown }
type DescribeAssetResponse = {
  Arn?: {} | undefined
  CreatedAt?: {} | undefined
  EgressEndpoints?: {} | undefined
  Id?: {} | undefined
  PackagingGroupId?: {} | undefined
  ResourceId?: {} | undefined
  SourceArn?: {} | undefined
  SourceRoleArn?: {} | undefined
  Tags?: {} | undefined
}
type DeletePackagingConfigurationResponse = { [x: string]: unknown }
type DescribePackagingConfigurationResponse = {
  Arn?: {} | undefined
  CmafPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests: {}
        IncludeEncoderConfigurationInSegments?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  DashPackage?:
    | {
        DashManifests: {}
        Encryption?:
          | {
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        IncludeEncoderConfigurationInSegments?: {} | undefined
        IncludeIframeOnlyStream?: {} | undefined
        PeriodTriggers?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        SegmentTemplateFormat?: {} | undefined
      }
    | undefined
  HlsPackage?:
    | {
        Encryption?:
          | {
              ConstantInitializationVector?: {} | undefined
              EncryptionMethod?: {} | undefined
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        HlsManifests: {}
        IncludeDvbSubtitles?: {} | undefined
        SegmentDurationSeconds?: {} | undefined
        UseAudioRenditionGroup?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  MssPackage?:
    | {
        Encryption?:
          | {
              SpekeKeyProvider: {
                EncryptionContractConfiguration?:
                  | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                  | undefined
                RoleArn: {}
                SystemIds: {}
                Url: {}
              }
            }
          | undefined
        MssManifests: {}
        SegmentDurationSeconds?: {} | undefined
      }
    | undefined
  PackagingGroupId?: {} | undefined
  Tags?: {} | undefined
}
type DeletePackagingGroupResponse = { [x: string]: unknown }
type DescribePackagingGroupResponse = {
  ApproximateAssetCount?: {} | undefined
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  CreatedAt?: {} | undefined
  DomainName?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Id?: {} | undefined
  Tags?: {} | undefined
}
type UpdatePackagingGroupResponse = {
  ApproximateAssetCount?: {} | undefined
  Arn?: {} | undefined
  Authorization?: { CdnIdentifierSecret: {}; SecretsRoleArn: {} } | undefined
  CreatedAt?: {} | undefined
  DomainName?: {} | undefined
  EgressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
  Id?: {} | undefined
  Tags?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/packaging_groups/:id/configure_logs': {
      $put:
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: ConfigureLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            } & { json: { egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/assets': {
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateAssetResponse
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: UnprocessableEntityException
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceUnavailableException
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
                id: string
                packagingGroupId: string
                resourceId?: string | undefined
                sourceArn: string
                sourceRoleArn: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: ListAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/packaging_configurations': {
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreatePackagingConfigurationResponse
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: UnprocessableEntityException
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceUnavailableException
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
                cmafPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                dashPackage?:
                  | {
                      DashManifests?: {} | undefined
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      IncludeEncoderConfigurationInSegments?: {} | undefined
                      IncludeIframeOnlyStream?: {} | undefined
                      PeriodTriggers?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      SegmentTemplateFormat?: {} | undefined
                    }
                  | undefined
                hlsPackage?:
                  | {
                      Encryption?:
                        | {
                            ConstantInitializationVector?: {} | undefined
                            EncryptionMethod?: {} | undefined
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      HlsManifests?: {} | undefined
                      IncludeDvbSubtitles?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                      UseAudioRenditionGroup?: {} | undefined
                    }
                  | undefined
                id: string
                mssPackage?:
                  | {
                      Encryption?:
                        | {
                            SpekeKeyProvider: {
                              EncryptionContractConfiguration?:
                                | { PresetSpeke20Audio: {}; PresetSpeke20Video: {} }
                                | undefined
                              RoleArn: {}
                              SystemIds: {}
                              Url: {}
                            }
                          }
                        | undefined
                      MssManifests?: {} | undefined
                      SegmentDurationSeconds?: {} | undefined
                    }
                  | undefined
                packagingGroupId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: ListPackagingConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                packagingGroupId?: string | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/packaging_groups': {
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreatePackagingGroupResponse
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: UnprocessableEntityException
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceUnavailableException
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
                authorization?:
                  | { CdnIdentifierSecret?: {} | undefined; SecretsRoleArn?: {} | undefined }
                  | undefined
                egressAccessLogs?: { LogGroupName?: {} | undefined } | undefined
                id: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
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
            output: ListPackagingGroupsResponse
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/assets/:id': {
      $delete:
        | {
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
            output: DeleteAssetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
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
            output: DescribeAssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/packaging_configurations/:id': {
      $delete:
        | {
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
            output: DeletePackagingConfigurationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
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
            output: DescribePackagingConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/packaging_groups/:id': {
      $delete:
        | {
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
            output: DeletePackagingGroupResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
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
            output: DescribePackagingGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
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
              }
            }
            output: UpdatePackagingGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              }
            }
            output: UnprocessableEntityException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
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
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
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
