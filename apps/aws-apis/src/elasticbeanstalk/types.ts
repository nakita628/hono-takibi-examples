type InsufficientPrivilegesException = { [x: string]: unknown }
type AbortEnvironmentUpdateMessage = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
}
type ApplyEnvironmentManagedActionResult = {
  ActionId?: {} | undefined
  ActionDescription?: {} | undefined
  ActionType?: {} | undefined
  Status?: {} | undefined
}
type ElasticBeanstalkServiceException = { [x: string]: unknown }
type ManagedActionInvalidStateException = { [x: string]: unknown }
type ApplyEnvironmentManagedActionRequest = {
  EnvironmentName?: {} | undefined
  EnvironmentId?: {} | undefined
  ActionId: {}
}
type AssociateEnvironmentOperationsRoleMessage = { EnvironmentName: {}; OperationsRole: {} }
type CheckDNSAvailabilityResultMessage = {
  Available?: {} | undefined
  FullyQualifiedCNAME?: {} | undefined
}
type CheckDNSAvailabilityMessage = { CNAMEPrefix: {} }
type VersionLabel = string
type EnvironmentDescriptionsMessage = { Environments?: {} | undefined; NextToken?: {} | undefined }
type TooManyEnvironmentsException = { [x: string]: unknown }
type ComposeEnvironmentsMessage = {
  ApplicationName?: {} | undefined
  GroupName?: {} | undefined
  VersionLabels?: {} | undefined
}
type Tag = { Key?: {} | undefined; Value?: {} | undefined }
type ApplicationDescriptionMessage = {
  Application?:
    | {
        ApplicationArn?: {} | undefined
        ApplicationName?: {} | undefined
        Description?: {} | undefined
        DateCreated?: {} | undefined
        DateUpdated?: {} | undefined
        Versions?: {} | undefined
        ConfigurationTemplates?: {} | undefined
        ResourceLifecycleConfig?:
          | {
              ServiceRole?: {} | undefined
              VersionLifecycleConfig?:
                | {
                    MaxCountRule?:
                      | {
                          Enabled: {}
                          MaxCount?: {} | undefined
                          DeleteSourceFromS3?: {} | undefined
                        }
                      | undefined
                    MaxAgeRule?:
                      | {
                          Enabled: {}
                          MaxAgeInDays?: {} | undefined
                          DeleteSourceFromS3?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type TooManyApplicationsException = { [x: string]: unknown }
type CreateApplicationMessage = {
  ApplicationName: {}
  Description?: {} | undefined
  ResourceLifecycleConfig?:
    | {
        ServiceRole?: {} | undefined
        VersionLifecycleConfig?:
          | {
              MaxCountRule?:
                | { Enabled: {}; MaxCount?: {} | undefined; DeleteSourceFromS3?: {} | undefined }
                | undefined
              MaxAgeRule?:
                | {
                    Enabled: {}
                    MaxAgeInDays?: {} | undefined
                    DeleteSourceFromS3?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type ApplicationVersionDescriptionMessage = {
  ApplicationVersion?:
    | {
        ApplicationVersionArn?: {} | undefined
        ApplicationName?: {} | undefined
        Description?: {} | undefined
        VersionLabel?: {} | undefined
        SourceBuildInformation?:
          | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
          | undefined
        BuildArn?: {} | undefined
        SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
        DateCreated?: {} | undefined
        DateUpdated?: {} | undefined
        Status?: {} | undefined
      }
    | undefined
}
type TooManyApplicationVersionsException = { [x: string]: unknown }
type S3LocationNotInServiceRegionException = { [x: string]: unknown }
type CodeBuildNotInServiceRegionException = { [x: string]: unknown }
type CreateApplicationVersionMessage = {
  ApplicationName: {}
  VersionLabel: {}
  Description?: {} | undefined
  SourceBuildInformation?: { SourceType: {}; SourceRepository: {}; SourceLocation: {} } | undefined
  SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
  BuildConfiguration?:
    | {
        ArtifactName?: {} | undefined
        CodeBuildServiceRole: {}
        ComputeType?: {} | undefined
        Image: {}
        TimeoutInMinutes?: {} | undefined
      }
    | undefined
  AutoCreateApplication?: {} | undefined
  Process?: {} | undefined
  Tags?: {} | undefined
}
type ConfigurationOptionSetting = {
  ResourceName?: {} | undefined
  Namespace?: {} | undefined
  OptionName?: {} | undefined
  Value?: {} | undefined
}
type ConfigurationSettingsDescription = {
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  ApplicationName?: {} | undefined
  TemplateName?: {} | undefined
  Description?: {} | undefined
  EnvironmentName?: {} | undefined
  DeploymentStatus?: {} | undefined
  DateCreated?: {} | undefined
  DateUpdated?: {} | undefined
  OptionSettings?: {} | undefined
}
type TooManyBucketsException = { [x: string]: unknown }
type TooManyConfigurationTemplatesException = { [x: string]: unknown }
type CreateConfigurationTemplateMessage = {
  ApplicationName: {}
  TemplateName: {}
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  SourceConfiguration?:
    | { ApplicationName?: {} | undefined; TemplateName?: {} | undefined }
    | undefined
  EnvironmentId?: {} | undefined
  Description?: {} | undefined
  OptionSettings?: {} | undefined
  Tags?: {} | undefined
}
type OptionSpecification = {
  ResourceName?: {} | undefined
  Namespace?: {} | undefined
  OptionName?: {} | undefined
}
type EnvironmentDescription = {
  EnvironmentName?: {} | undefined
  EnvironmentId?: {} | undefined
  ApplicationName?: {} | undefined
  VersionLabel?: {} | undefined
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  TemplateName?: {} | undefined
  Description?: {} | undefined
  EndpointURL?: {} | undefined
  CNAME?: {} | undefined
  DateCreated?: {} | undefined
  DateUpdated?: {} | undefined
  Status?: {} | undefined
  AbortableOperationInProgress?: {} | undefined
  Health?: {} | undefined
  HealthStatus?: {} | undefined
  Resources?:
    | {
        LoadBalancer?:
          | {
              LoadBalancerName?: {} | undefined
              Domain?: {} | undefined
              Listeners?: {} | undefined
            }
          | undefined
      }
    | undefined
  Tier?: { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined } | undefined
  EnvironmentLinks?: {} | undefined
  EnvironmentArn?: {} | undefined
  OperationsRole?: {} | undefined
}
type CreateEnvironmentMessage = {
  ApplicationName: {}
  EnvironmentName?: {} | undefined
  GroupName?: {} | undefined
  Description?: {} | undefined
  CNAMEPrefix?: {} | undefined
  Tier?: { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined } | undefined
  Tags?: {} | undefined
  VersionLabel?: {} | undefined
  TemplateName?: {} | undefined
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  OptionSettings?: {} | undefined
  OptionsToRemove?: {} | undefined
  OperationsRole?: {} | undefined
}
type CreatePlatformVersionResult = {
  PlatformSummary?:
    | {
        PlatformArn?: {} | undefined
        PlatformOwner?: {} | undefined
        PlatformStatus?: {} | undefined
        PlatformCategory?: {} | undefined
        OperatingSystemName?: {} | undefined
        OperatingSystemVersion?: {} | undefined
        SupportedTierList?: {} | undefined
        SupportedAddonList?: {} | undefined
        PlatformLifecycleState?: {} | undefined
        PlatformVersion?: {} | undefined
        PlatformBranchName?: {} | undefined
        PlatformBranchLifecycleState?: {} | undefined
      }
    | undefined
  Builder?: { ARN?: {} | undefined } | undefined
}
type TooManyPlatformsException = { [x: string]: unknown }
type CreatePlatformVersionRequest = {
  PlatformName: {}
  PlatformVersion: {}
  PlatformDefinitionBundle: { S3Bucket?: {} | undefined; S3Key?: {} | undefined }
  EnvironmentName?: {} | undefined
  OptionSettings?: {} | undefined
  Tags?: {} | undefined
}
type CreateStorageLocationResultMessage = { S3Bucket?: {} | undefined }
type S3SubscriptionRequiredException = { [x: string]: unknown }
type OperationInProgressException = { [x: string]: unknown }
type DeleteApplicationMessage = { ApplicationName: {}; TerminateEnvByForce?: {} | undefined }
type SourceBundleDeletionException = { [x: string]: unknown }
type DeleteApplicationVersionMessage = {
  ApplicationName: {}
  VersionLabel: {}
  DeleteSourceBundle?: {} | undefined
}
type DeleteConfigurationTemplateMessage = { ApplicationName: {}; TemplateName: {} }
type DeleteEnvironmentConfigurationMessage = { ApplicationName: {}; EnvironmentName: {} }
type DeletePlatformVersionResult = {
  PlatformSummary?:
    | {
        PlatformArn?: {} | undefined
        PlatformOwner?: {} | undefined
        PlatformStatus?: {} | undefined
        PlatformCategory?: {} | undefined
        OperatingSystemName?: {} | undefined
        OperatingSystemVersion?: {} | undefined
        SupportedTierList?: {} | undefined
        SupportedAddonList?: {} | undefined
        PlatformLifecycleState?: {} | undefined
        PlatformVersion?: {} | undefined
        PlatformBranchName?: {} | undefined
        PlatformBranchLifecycleState?: {} | undefined
      }
    | undefined
}
type PlatformVersionStillReferencedException = { [x: string]: unknown }
type DeletePlatformVersionRequest = { PlatformArn?: {} | undefined }
type DescribeAccountAttributesResult = {
  ResourceQuotas?:
    | {
        ApplicationQuota?: { Maximum?: {} | undefined } | undefined
        ApplicationVersionQuota?: { Maximum?: {} | undefined } | undefined
        EnvironmentQuota?: { Maximum?: {} | undefined } | undefined
        ConfigurationTemplateQuota?: { Maximum?: {} | undefined } | undefined
        CustomPlatformQuota?: { Maximum?: {} | undefined } | undefined
      }
    | undefined
}
type ApplicationVersionDescriptionsMessage = {
  ApplicationVersions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeApplicationVersionsMessage = {
  ApplicationName?: {} | undefined
  VersionLabels?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type ApplicationName = string
type ApplicationDescriptionsMessage = { Applications?: {} | undefined }
type DescribeApplicationsMessage = { ApplicationNames?: {} | undefined }
type ConfigurationOptionsDescription = {
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  Options?: {} | undefined
}
type DescribeConfigurationOptionsMessage = {
  ApplicationName?: {} | undefined
  TemplateName?: {} | undefined
  EnvironmentName?: {} | undefined
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  Options?: {} | undefined
}
type ConfigurationSettingsDescriptions = { ConfigurationSettings?: {} | undefined }
type DescribeConfigurationSettingsMessage = {
  ApplicationName: {}
  TemplateName?: {} | undefined
  EnvironmentName?: {} | undefined
}
type EnvironmentHealthAttribute =
  | 'Status'
  | 'Color'
  | 'Causes'
  | 'ApplicationMetrics'
  | 'InstancesHealth'
  | 'All'
  | 'HealthStatus'
  | 'RefreshedAt'
type DescribeEnvironmentHealthResult = {
  EnvironmentName?: {} | undefined
  HealthStatus?: {} | undefined
  Status?: {} | undefined
  Color?: {} | undefined
  Causes?: {} | undefined
  ApplicationMetrics?:
    | {
        Duration?: {} | undefined
        RequestCount?: {} | undefined
        StatusCodes?:
          | {
              Status2xx?: {} | undefined
              Status3xx?: {} | undefined
              Status4xx?: {} | undefined
              Status5xx?: {} | undefined
            }
          | undefined
        Latency?:
          | {
              P999?: {} | undefined
              P99?: {} | undefined
              P95?: {} | undefined
              P90?: {} | undefined
              P85?: {} | undefined
              P75?: {} | undefined
              P50?: {} | undefined
              P10?: {} | undefined
            }
          | undefined
      }
    | undefined
  InstancesHealth?:
    | {
        NoData?: {} | undefined
        Unknown?: {} | undefined
        Pending?: {} | undefined
        Ok?: {} | undefined
        Info?: {} | undefined
        Warning?: {} | undefined
        Degraded?: {} | undefined
        Severe?: {} | undefined
      }
    | undefined
  RefreshedAt?: {} | undefined
}
type InvalidRequestException = { [x: string]: unknown }
type DescribeEnvironmentHealthRequest = {
  EnvironmentName?: {} | undefined
  EnvironmentId?: {} | undefined
  AttributeNames?: {} | undefined
}
type DescribeEnvironmentManagedActionHistoryResult = {
  ManagedActionHistoryItems?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEnvironmentManagedActionHistoryRequest = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
  NextToken?: {} | undefined
  MaxItems?: {} | undefined
}
type DescribeEnvironmentManagedActionsResult = { ManagedActions?: {} | undefined }
type DescribeEnvironmentManagedActionsRequest = {
  EnvironmentName?: {} | undefined
  EnvironmentId?: {} | undefined
  Status?: {} | undefined
}
type EnvironmentResourceDescriptionsMessage = {
  EnvironmentResources?:
    | {
        EnvironmentName?: {} | undefined
        AutoScalingGroups?: {} | undefined
        Instances?: {} | undefined
        LaunchConfigurations?: {} | undefined
        LaunchTemplates?: {} | undefined
        LoadBalancers?: {} | undefined
        Triggers?: {} | undefined
        Queues?: {} | undefined
      }
    | undefined
}
type DescribeEnvironmentResourcesMessage = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
}
type EnvironmentId = string
type EnvironmentName = string
type DescribeEnvironmentsMessage = {
  ApplicationName?: {} | undefined
  VersionLabel?: {} | undefined
  EnvironmentIds?: {} | undefined
  EnvironmentNames?: {} | undefined
  IncludeDeleted?: {} | undefined
  IncludedDeletedBackTo?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type EventDescriptionsMessage = { Events?: {} | undefined; NextToken?: {} | undefined }
type DescribeEventsMessage = {
  ApplicationName?: {} | undefined
  VersionLabel?: {} | undefined
  TemplateName?: {} | undefined
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
  PlatformArn?: {} | undefined
  RequestId?: {} | undefined
  Severity?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type InstancesHealthAttribute =
  | 'HealthStatus'
  | 'Color'
  | 'Causes'
  | 'ApplicationMetrics'
  | 'RefreshedAt'
  | 'LaunchedAt'
  | 'System'
  | 'Deployment'
  | 'AvailabilityZone'
  | 'InstanceType'
  | 'All'
type DescribeInstancesHealthResult = {
  InstanceHealthList?: {} | undefined
  RefreshedAt?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstancesHealthRequest = {
  EnvironmentName?: {} | undefined
  EnvironmentId?: {} | undefined
  AttributeNames?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePlatformVersionResult = {
  PlatformDescription?:
    | {
        PlatformArn?: {} | undefined
        PlatformOwner?: {} | undefined
        PlatformName?: {} | undefined
        PlatformVersion?: {} | undefined
        SolutionStackName?: {} | undefined
        PlatformStatus?: {} | undefined
        DateCreated?: {} | undefined
        DateUpdated?: {} | undefined
        PlatformCategory?: {} | undefined
        Description?: {} | undefined
        Maintainer?: {} | undefined
        OperatingSystemName?: {} | undefined
        OperatingSystemVersion?: {} | undefined
        ProgrammingLanguages?: {} | undefined
        Frameworks?: {} | undefined
        CustomAmiList?: {} | undefined
        SupportedTierList?: {} | undefined
        SupportedAddonList?: {} | undefined
        PlatformLifecycleState?: {} | undefined
        PlatformBranchName?: {} | undefined
        PlatformBranchLifecycleState?: {} | undefined
      }
    | undefined
}
type DescribePlatformVersionRequest = { PlatformArn?: {} | undefined }
type DisassociateEnvironmentOperationsRoleMessage = { EnvironmentName: {} }
type ListAvailableSolutionStacksResultMessage = {
  SolutionStacks?: {} | undefined
  SolutionStackDetails?: {} | undefined
}
type SearchFilter = {
  Attribute?: {} | undefined
  Operator?: {} | undefined
  Values?: {} | undefined
}
type ListPlatformBranchesResult = {
  PlatformBranchSummaryList?: {} | undefined
  NextToken?: {} | undefined
}
type ListPlatformBranchesRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type PlatformFilter = { Type?: {} | undefined; Operator?: {} | undefined; Values?: {} | undefined }
type ListPlatformVersionsResult = {
  PlatformSummaryList?: {} | undefined
  NextToken?: {} | undefined
}
type ListPlatformVersionsRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type ResourceTagsDescriptionMessage = {
  ResourceArn?: {} | undefined
  ResourceTags?: {} | undefined
}
type ResourceNotFoundException = { [x: string]: unknown }
type ResourceTypeNotSupportedException = { [x: string]: unknown }
type ListTagsForResourceMessage = { ResourceArn: {} }
type RebuildEnvironmentMessage = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
}
type RequestEnvironmentInfoMessage = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
  InfoType: {}
}
type RestartAppServerMessage = { EnvironmentId?: {} | undefined; EnvironmentName?: {} | undefined }
type RetrieveEnvironmentInfoResultMessage = { EnvironmentInfo?: {} | undefined }
type RetrieveEnvironmentInfoMessage = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
  InfoType: {}
}
type SwapEnvironmentCNAMEsMessage = {
  SourceEnvironmentId?: {} | undefined
  SourceEnvironmentName?: {} | undefined
  DestinationEnvironmentId?: {} | undefined
  DestinationEnvironmentName?: {} | undefined
}
type TerminateEnvironmentMessage = {
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
  TerminateResources?: {} | undefined
  ForceTerminate?: {} | undefined
}
type UpdateApplicationMessage = { ApplicationName: {}; Description?: {} | undefined }
type ApplicationResourceLifecycleDescriptionMessage = {
  ApplicationName?: {} | undefined
  ResourceLifecycleConfig?:
    | {
        ServiceRole?: {} | undefined
        VersionLifecycleConfig?:
          | {
              MaxCountRule?:
                | { Enabled: {}; MaxCount?: {} | undefined; DeleteSourceFromS3?: {} | undefined }
                | undefined
              MaxAgeRule?:
                | {
                    Enabled: {}
                    MaxAgeInDays?: {} | undefined
                    DeleteSourceFromS3?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateApplicationResourceLifecycleMessage = {
  ApplicationName: {}
  ResourceLifecycleConfig: {
    ServiceRole?: {} | undefined
    VersionLifecycleConfig?:
      | {
          MaxCountRule?:
            | { Enabled: {}; MaxCount?: {} | undefined; DeleteSourceFromS3?: {} | undefined }
            | undefined
          MaxAgeRule?:
            | { Enabled: {}; MaxAgeInDays?: {} | undefined; DeleteSourceFromS3?: {} | undefined }
            | undefined
        }
      | undefined
  }
}
type UpdateApplicationVersionMessage = {
  ApplicationName: {}
  VersionLabel: {}
  Description?: {} | undefined
}
type UpdateConfigurationTemplateMessage = {
  ApplicationName: {}
  TemplateName: {}
  Description?: {} | undefined
  OptionSettings?: {} | undefined
  OptionsToRemove?: {} | undefined
}
type UpdateEnvironmentMessage = {
  ApplicationName?: {} | undefined
  EnvironmentId?: {} | undefined
  EnvironmentName?: {} | undefined
  GroupName?: {} | undefined
  Description?: {} | undefined
  Tier?: { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined } | undefined
  VersionLabel?: {} | undefined
  TemplateName?: {} | undefined
  SolutionStackName?: {} | undefined
  PlatformArn?: {} | undefined
  OptionSettings?: {} | undefined
  OptionsToRemove?: {} | undefined
}
type TagKey = string
type TooManyTagsException = { [x: string]: unknown }
type UpdateTagsForResourceMessage = {
  ResourceArn: {}
  TagsToAdd?: {} | undefined
  TagsToRemove?: {} | undefined
}
type ConfigurationSettingsValidationMessages = { Messages?: {} | undefined }
type ValidateConfigurationSettingsMessage = {
  ApplicationName: {}
  TemplateName?: {} | undefined
  EnvironmentName?: {} | undefined
  OptionSettings: {}
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AbortEnvironmentUpdate': {
      $get:
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'AbortEnvironmentUpdate'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'AbortEnvironmentUpdate'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'AbortEnvironmentUpdate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AbortEnvironmentUpdateMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'AbortEnvironmentUpdate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AbortEnvironmentUpdateMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=ApplyEnvironmentManagedAction': {
      $get:
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                ActionId: string
                Action: 'ApplyEnvironmentManagedAction'
                Version: '2010-12-01'
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
            output: ApplyEnvironmentManagedActionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                ActionId: string
                Action: 'ApplyEnvironmentManagedAction'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                ActionId: string
                Action: 'ApplyEnvironmentManagedAction'
                Version: '2010-12-01'
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
            output: ManagedActionInvalidStateException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ApplyEnvironmentManagedAction'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyEnvironmentManagedActionRequest }
            output: ApplyEnvironmentManagedActionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ApplyEnvironmentManagedAction'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyEnvironmentManagedActionRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ApplyEnvironmentManagedAction'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyEnvironmentManagedActionRequest }
            output: ManagedActionInvalidStateException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=AssociateEnvironmentOperationsRole': {
      $get:
        | {
            input: {
              query: {
                EnvironmentName: string
                OperationsRole: string
                Action: 'AssociateEnvironmentOperationsRole'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentName: string
                OperationsRole: string
                Action: 'AssociateEnvironmentOperationsRole'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'AssociateEnvironmentOperationsRole'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateEnvironmentOperationsRoleMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { Action: 'AssociateEnvironmentOperationsRole'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateEnvironmentOperationsRoleMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=CheckDNSAvailability': {
      $get: {
        input: {
          query: { CNAMEPrefix: string; Action: 'CheckDNSAvailability'; Version: '2010-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CheckDNSAvailabilityResultMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CheckDNSAvailability'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CheckDNSAvailabilityMessage }
        output: CheckDNSAvailabilityResultMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ComposeEnvironments': {
      $get:
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                GroupName?: string | undefined
                VersionLabels?: VersionLabel[] | undefined
                Action: 'ComposeEnvironments'
                Version: '2010-12-01'
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
            output: EnvironmentDescriptionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                GroupName?: string | undefined
                VersionLabels?: VersionLabel[] | undefined
                Action: 'ComposeEnvironments'
                Version: '2010-12-01'
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
            output: TooManyEnvironmentsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                GroupName?: string | undefined
                VersionLabels?: VersionLabel[] | undefined
                Action: 'ComposeEnvironments'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ComposeEnvironments'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ComposeEnvironmentsMessage }
            output: EnvironmentDescriptionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ComposeEnvironments'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ComposeEnvironmentsMessage }
            output: TooManyEnvironmentsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ComposeEnvironments'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ComposeEnvironmentsMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=CreateApplication': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                Description?: string | undefined
                ResourceLifecycleConfig?:
                  | {
                      ServiceRole?: {} | undefined
                      VersionLifecycleConfig?:
                        | {
                            MaxCountRule?:
                              | {
                                  Enabled: {}
                                  MaxCount?: {} | undefined
                                  DeleteSourceFromS3?: {} | undefined
                                }
                              | undefined
                            MaxAgeRule?:
                              | {
                                  Enabled: {}
                                  MaxAgeInDays?: {} | undefined
                                  DeleteSourceFromS3?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplication'
                Version: '2010-12-01'
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
            output: ApplicationDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                Description?: string | undefined
                ResourceLifecycleConfig?:
                  | {
                      ServiceRole?: {} | undefined
                      VersionLifecycleConfig?:
                        | {
                            MaxCountRule?:
                              | {
                                  Enabled: {}
                                  MaxCount?: {} | undefined
                                  DeleteSourceFromS3?: {} | undefined
                                }
                              | undefined
                            MaxAgeRule?:
                              | {
                                  Enabled: {}
                                  MaxAgeInDays?: {} | undefined
                                  DeleteSourceFromS3?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplication'
                Version: '2010-12-01'
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
            output: TooManyApplicationsException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'CreateApplication'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationMessage }
            output: ApplicationDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateApplication'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationMessage }
            output: TooManyApplicationsException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=CreateApplicationVersion': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                Description?: string | undefined
                SourceBuildInformation?:
                  | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
                  | undefined
                SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
                BuildConfiguration?:
                  | {
                      ArtifactName?: {} | undefined
                      CodeBuildServiceRole: {}
                      ComputeType?: {} | undefined
                      Image: {}
                      TimeoutInMinutes?: {} | undefined
                    }
                  | undefined
                AutoCreateApplication?: boolean | undefined
                Process?: boolean | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplicationVersion'
                Version: '2010-12-01'
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
            output: ApplicationVersionDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                Description?: string | undefined
                SourceBuildInformation?:
                  | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
                  | undefined
                SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
                BuildConfiguration?:
                  | {
                      ArtifactName?: {} | undefined
                      CodeBuildServiceRole: {}
                      ComputeType?: {} | undefined
                      Image: {}
                      TimeoutInMinutes?: {} | undefined
                    }
                  | undefined
                AutoCreateApplication?: boolean | undefined
                Process?: boolean | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplicationVersion'
                Version: '2010-12-01'
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
            output: TooManyApplicationsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                Description?: string | undefined
                SourceBuildInformation?:
                  | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
                  | undefined
                SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
                BuildConfiguration?:
                  | {
                      ArtifactName?: {} | undefined
                      CodeBuildServiceRole: {}
                      ComputeType?: {} | undefined
                      Image: {}
                      TimeoutInMinutes?: {} | undefined
                    }
                  | undefined
                AutoCreateApplication?: boolean | undefined
                Process?: boolean | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplicationVersion'
                Version: '2010-12-01'
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
            output: TooManyApplicationVersionsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                Description?: string | undefined
                SourceBuildInformation?:
                  | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
                  | undefined
                SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
                BuildConfiguration?:
                  | {
                      ArtifactName?: {} | undefined
                      CodeBuildServiceRole: {}
                      ComputeType?: {} | undefined
                      Image: {}
                      TimeoutInMinutes?: {} | undefined
                    }
                  | undefined
                AutoCreateApplication?: boolean | undefined
                Process?: boolean | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplicationVersion'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                Description?: string | undefined
                SourceBuildInformation?:
                  | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
                  | undefined
                SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
                BuildConfiguration?:
                  | {
                      ArtifactName?: {} | undefined
                      CodeBuildServiceRole: {}
                      ComputeType?: {} | undefined
                      Image: {}
                      TimeoutInMinutes?: {} | undefined
                    }
                  | undefined
                AutoCreateApplication?: boolean | undefined
                Process?: boolean | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplicationVersion'
                Version: '2010-12-01'
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
            output: S3LocationNotInServiceRegionException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                Description?: string | undefined
                SourceBuildInformation?:
                  | { SourceType: {}; SourceRepository: {}; SourceLocation: {} }
                  | undefined
                SourceBundle?: { S3Bucket?: {} | undefined; S3Key?: {} | undefined } | undefined
                BuildConfiguration?:
                  | {
                      ArtifactName?: {} | undefined
                      CodeBuildServiceRole: {}
                      ComputeType?: {} | undefined
                      Image: {}
                      TimeoutInMinutes?: {} | undefined
                    }
                  | undefined
                AutoCreateApplication?: boolean | undefined
                Process?: boolean | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateApplicationVersion'
                Version: '2010-12-01'
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
            output: CodeBuildNotInServiceRegionException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'CreateApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationVersionMessage }
            output: ApplicationVersionDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationVersionMessage }
            output: TooManyApplicationsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationVersionMessage }
            output: TooManyApplicationVersionsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationVersionMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationVersionMessage }
            output: S3LocationNotInServiceRegionException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationVersionMessage }
            output: CodeBuildNotInServiceRegionException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=CreateConfigurationTemplate': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                SourceConfiguration?:
                  | { ApplicationName?: {} | undefined; TemplateName?: {} | undefined }
                  | undefined
                EnvironmentId?: string | undefined
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: ConfigurationSettingsDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                SourceConfiguration?:
                  | { ApplicationName?: {} | undefined; TemplateName?: {} | undefined }
                  | undefined
                EnvironmentId?: string | undefined
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                SourceConfiguration?:
                  | { ApplicationName?: {} | undefined; TemplateName?: {} | undefined }
                  | undefined
                EnvironmentId?: string | undefined
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                SourceConfiguration?:
                  | { ApplicationName?: {} | undefined; TemplateName?: {} | undefined }
                  | undefined
                EnvironmentId?: string | undefined
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: TooManyConfigurationTemplatesException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CreateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationTemplateMessage }
            output: ConfigurationSettingsDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationTemplateMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationTemplateMessage }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConfigurationTemplateMessage }
            output: TooManyConfigurationTemplatesException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreateEnvironment': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                EnvironmentName?: string | undefined
                GroupName?: string | undefined
                Description?: string | undefined
                CNAMEPrefix?: string | undefined
                Tier?:
                  | { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined }
                  | undefined
                Tags?: Tag[] | undefined
                VersionLabel?: string | undefined
                TemplateName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                OperationsRole?: string | undefined
                Action: 'CreateEnvironment'
                Version: '2010-12-01'
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
            output: EnvironmentDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                EnvironmentName?: string | undefined
                GroupName?: string | undefined
                Description?: string | undefined
                CNAMEPrefix?: string | undefined
                Tier?:
                  | { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined }
                  | undefined
                Tags?: Tag[] | undefined
                VersionLabel?: string | undefined
                TemplateName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                OperationsRole?: string | undefined
                Action: 'CreateEnvironment'
                Version: '2010-12-01'
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
            output: TooManyEnvironmentsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName: string
                EnvironmentName?: string | undefined
                GroupName?: string | undefined
                Description?: string | undefined
                CNAMEPrefix?: string | undefined
                Tier?:
                  | { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined }
                  | undefined
                Tags?: Tag[] | undefined
                VersionLabel?: string | undefined
                TemplateName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                OperationsRole?: string | undefined
                Action: 'CreateEnvironment'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'CreateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEnvironmentMessage }
            output: EnvironmentDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEnvironmentMessage }
            output: TooManyEnvironmentsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEnvironmentMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=CreatePlatformVersion': {
      $get:
        | {
            input: {
              query: {
                PlatformName: string
                PlatformVersion: string
                PlatformDefinitionBundle: { S3Bucket?: {} | undefined; S3Key?: {} | undefined }
                EnvironmentName?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreatePlatformVersion'
                Version: '2010-12-01'
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
            output: CreatePlatformVersionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PlatformName: string
                PlatformVersion: string
                PlatformDefinitionBundle: { S3Bucket?: {} | undefined; S3Key?: {} | undefined }
                EnvironmentName?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreatePlatformVersion'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformName: string
                PlatformVersion: string
                PlatformDefinitionBundle: { S3Bucket?: {} | undefined; S3Key?: {} | undefined }
                EnvironmentName?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreatePlatformVersion'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformName: string
                PlatformVersion: string
                PlatformDefinitionBundle: { S3Bucket?: {} | undefined; S3Key?: {} | undefined }
                EnvironmentName?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreatePlatformVersion'
                Version: '2010-12-01'
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
            output: TooManyPlatformsException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CreatePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformVersionRequest }
            output: CreatePlatformVersionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreatePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformVersionRequest }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreatePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformVersionRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreatePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlatformVersionRequest }
            output: TooManyPlatformsException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreateStorageLocation': {
      $get:
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateStorageLocationResultMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: S3SubscriptionRequiredException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateStorageLocationResultMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: S3SubscriptionRequiredException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateStorageLocation'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeleteApplication': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                TerminateEnvByForce?: boolean | undefined
                Action: 'DeleteApplication'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TerminateEnvByForce?: boolean | undefined
                Action: 'DeleteApplication'
                Version: '2010-12-01'
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
            output: OperationInProgressException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteApplication'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteApplication'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationMessage }
            output: OperationInProgressException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeleteApplicationVersion': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                DeleteSourceBundle?: boolean | undefined
                Action: 'DeleteApplicationVersion'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                DeleteSourceBundle?: boolean | undefined
                Action: 'DeleteApplicationVersion'
                Version: '2010-12-01'
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
            output: SourceBundleDeletionException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                DeleteSourceBundle?: boolean | undefined
                Action: 'DeleteApplicationVersion'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                DeleteSourceBundle?: boolean | undefined
                Action: 'DeleteApplicationVersion'
                Version: '2010-12-01'
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
            output: OperationInProgressException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ApplicationName: string
                VersionLabel: string
                DeleteSourceBundle?: boolean | undefined
                Action: 'DeleteApplicationVersion'
                Version: '2010-12-01'
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
            output: S3LocationNotInServiceRegionException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'DeleteApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationVersionMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationVersionMessage }
            output: SourceBundleDeletionException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationVersionMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationVersionMessage }
            output: OperationInProgressException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteApplicationVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationVersionMessage }
            output: S3LocationNotInServiceRegionException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=DeleteConfigurationTemplate': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                Action: 'DeleteConfigurationTemplate'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                Action: 'DeleteConfigurationTemplate'
                Version: '2010-12-01'
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
            output: OperationInProgressException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationTemplateMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationTemplateMessage }
            output: OperationInProgressException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeleteEnvironmentConfiguration': {
      $get: {
        input: {
          query: {
            ApplicationName: string
            EnvironmentName: string
            Action: 'DeleteEnvironmentConfiguration'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteEnvironmentConfiguration'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentConfigurationMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeletePlatformVersion': {
      $get:
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DeletePlatformVersion'
                Version: '2010-12-01'
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
            output: DeletePlatformVersionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DeletePlatformVersion'
                Version: '2010-12-01'
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
            output: OperationInProgressException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DeletePlatformVersion'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DeletePlatformVersion'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DeletePlatformVersion'
                Version: '2010-12-01'
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
            output: PlatformVersionStillReferencedException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'DeletePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformVersionRequest }
            output: DeletePlatformVersionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeletePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformVersionRequest }
            output: OperationInProgressException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeletePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformVersionRequest }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeletePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformVersionRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeletePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePlatformVersionRequest }
            output: PlatformVersionStillReferencedException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=DescribeAccountAttributes': {
      $get:
        | {
            input: { query: { Action: 'DescribeAccountAttributes'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeAccountAttributesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeAccountAttributes'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeAccountAttributes'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeAccountAttributesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeAccountAttributes'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeApplicationVersions': {
      $get: {
        input: {
          query: {
            ApplicationName?: string | undefined
            VersionLabels?: VersionLabel[] | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeApplicationVersions'
            Version: '2010-12-01'
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
        output: ApplicationVersionDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeApplicationVersions'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationVersionsMessage }
        output: ApplicationVersionDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeApplications': {
      $get: {
        input: {
          query: {
            ApplicationNames?: ApplicationName[] | undefined
            Action: 'DescribeApplications'
            Version: '2010-12-01'
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
        output: ApplicationDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeApplications'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationsMessage }
        output: ApplicationDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeConfigurationOptions': {
      $get:
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                Options?: OptionSpecification[] | undefined
                Action: 'DescribeConfigurationOptions'
                Version: '2010-12-01'
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
            output: ConfigurationOptionsDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                Options?: OptionSpecification[] | undefined
                Action: 'DescribeConfigurationOptions'
                Version: '2010-12-01'
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
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeConfigurationOptions'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationOptionsMessage }
            output: ConfigurationOptionsDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeConfigurationOptions'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationOptionsMessage }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeConfigurationSettings': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'DescribeConfigurationSettings'
                Version: '2010-12-01'
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
            output: ConfigurationSettingsDescriptions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'DescribeConfigurationSettings'
                Version: '2010-12-01'
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
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeConfigurationSettings'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationSettingsMessage }
            output: ConfigurationSettingsDescriptions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeConfigurationSettings'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationSettingsMessage }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeEnvironmentHealth': {
      $get:
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                AttributeNames?: EnvironmentHealthAttribute[] | undefined
                Action: 'DescribeEnvironmentHealth'
                Version: '2010-12-01'
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
            output: DescribeEnvironmentHealthResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                AttributeNames?: EnvironmentHealthAttribute[] | undefined
                Action: 'DescribeEnvironmentHealth'
                Version: '2010-12-01'
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
            output: InvalidRequestException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                AttributeNames?: EnvironmentHealthAttribute[] | undefined
                Action: 'DescribeEnvironmentHealth'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribeEnvironmentHealth'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentHealthRequest }
            output: DescribeEnvironmentHealthResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeEnvironmentHealth'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentHealthRequest }
            output: InvalidRequestException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeEnvironmentHealth'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentHealthRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeEnvironmentManagedActionHistory': {
      $get:
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                NextToken?: string | undefined
                MaxItems?: number | undefined
                Action: 'DescribeEnvironmentManagedActionHistory'
                Version: '2010-12-01'
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
            output: DescribeEnvironmentManagedActionHistoryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                NextToken?: string | undefined
                MaxItems?: number | undefined
                Action: 'DescribeEnvironmentManagedActionHistory'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxItems?: string | undefined
                NextToken?: string | undefined
                Action: 'DescribeEnvironmentManagedActionHistory'
                Version: '2010-12-01'
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
            } & { json: DescribeEnvironmentManagedActionHistoryRequest }
            output: DescribeEnvironmentManagedActionHistoryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxItems?: string | undefined
                NextToken?: string | undefined
                Action: 'DescribeEnvironmentManagedActionHistory'
                Version: '2010-12-01'
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
            } & { json: DescribeEnvironmentManagedActionHistoryRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeEnvironmentManagedActions': {
      $get:
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                Status?: 'Scheduled' | 'Pending' | 'Running' | 'Unknown' | undefined
                Action: 'DescribeEnvironmentManagedActions'
                Version: '2010-12-01'
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
            output: DescribeEnvironmentManagedActionsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                Status?: 'Scheduled' | 'Pending' | 'Running' | 'Unknown' | undefined
                Action: 'DescribeEnvironmentManagedActions'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'DescribeEnvironmentManagedActions'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentManagedActionsRequest }
            output: DescribeEnvironmentManagedActionsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DescribeEnvironmentManagedActions'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentManagedActionsRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeEnvironmentResources': {
      $get:
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'DescribeEnvironmentResources'
                Version: '2010-12-01'
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
            output: EnvironmentResourceDescriptionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'DescribeEnvironmentResources'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeEnvironmentResources'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentResourcesMessage }
            output: EnvironmentResourceDescriptionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeEnvironmentResources'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEnvironmentResourcesMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeEnvironments': {
      $get: {
        input: {
          query: {
            ApplicationName?: string | undefined
            VersionLabel?: string | undefined
            EnvironmentIds?: EnvironmentId[] | undefined
            EnvironmentNames?: EnvironmentName[] | undefined
            IncludeDeleted?: boolean | undefined
            IncludedDeletedBackTo?: string | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeEnvironments'
            Version: '2010-12-01'
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
        output: EnvironmentDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeEnvironments'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEnvironmentsMessage }
        output: EnvironmentDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEvents': {
      $get: {
        input: {
          query: {
            ApplicationName?: string | undefined
            VersionLabel?: string | undefined
            TemplateName?: string | undefined
            EnvironmentId?: string | undefined
            EnvironmentName?: string | undefined
            PlatformArn?: string | undefined
            RequestId?: string | undefined
            Severity?: 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeEvents'
            Version: '2010-12-01'
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
        output: EventDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeEvents'
            Version: '2010-12-01'
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
        } & { json: DescribeEventsMessage }
        output: EventDescriptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeInstancesHealth': {
      $get:
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                AttributeNames?: InstancesHealthAttribute[] | undefined
                NextToken?: string | undefined
                Action: 'DescribeInstancesHealth'
                Version: '2010-12-01'
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
            output: DescribeInstancesHealthResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                AttributeNames?: InstancesHealthAttribute[] | undefined
                NextToken?: string | undefined
                Action: 'DescribeInstancesHealth'
                Version: '2010-12-01'
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
            output: InvalidRequestException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                EnvironmentName?: string | undefined
                EnvironmentId?: string | undefined
                AttributeNames?: InstancesHealthAttribute[] | undefined
                NextToken?: string | undefined
                Action: 'DescribeInstancesHealth'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribeInstancesHealth'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesHealthRequest }
            output: DescribeInstancesHealthResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeInstancesHealth'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesHealthRequest }
            output: InvalidRequestException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeInstancesHealth'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesHealthRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribePlatformVersion': {
      $get:
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DescribePlatformVersion'
                Version: '2010-12-01'
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
            output: DescribePlatformVersionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DescribePlatformVersion'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                PlatformArn?: string | undefined
                Action: 'DescribePlatformVersion'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlatformVersionRequest }
            output: DescribePlatformVersionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlatformVersionRequest }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribePlatformVersion'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlatformVersionRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DisassociateEnvironmentOperationsRole': {
      $get:
        | {
            input: {
              query: {
                EnvironmentName: string
                Action: 'DisassociateEnvironmentOperationsRole'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentName: string
                Action: 'DisassociateEnvironmentOperationsRole'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'DisassociateEnvironmentOperationsRole'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateEnvironmentOperationsRoleMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { Action: 'DisassociateEnvironmentOperationsRole'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateEnvironmentOperationsRoleMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=ListAvailableSolutionStacks': {
      $get: {
        input: { query: { Action: 'ListAvailableSolutionStacks'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAvailableSolutionStacksResultMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListAvailableSolutionStacks'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAvailableSolutionStacksResultMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListPlatformBranches': {
      $get: {
        input: {
          query: {
            Filters?: SearchFilter[] | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'ListPlatformBranches'
            Version: '2010-12-01'
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
        output: ListPlatformBranchesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'ListPlatformBranches'
            Version: '2010-12-01'
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
        } & { json: ListPlatformBranchesRequest }
        output: ListPlatformBranchesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListPlatformVersions': {
      $get:
        | {
            input: {
              query: {
                Filters?: PlatformFilter[] | undefined
                MaxRecords?: number | undefined
                NextToken?: string | undefined
                Action: 'ListPlatformVersions'
                Version: '2010-12-01'
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
            output: ListPlatformVersionsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Filters?: PlatformFilter[] | undefined
                MaxRecords?: number | undefined
                NextToken?: string | undefined
                Action: 'ListPlatformVersions'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Filters?: PlatformFilter[] | undefined
                MaxRecords?: number | undefined
                NextToken?: string | undefined
                Action: 'ListPlatformVersions'
                Version: '2010-12-01'
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
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                NextToken?: string | undefined
                Action: 'ListPlatformVersions'
                Version: '2010-12-01'
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
            } & { json: ListPlatformVersionsRequest }
            output: ListPlatformVersionsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                NextToken?: string | undefined
                Action: 'ListPlatformVersions'
                Version: '2010-12-01'
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
            } & { json: ListPlatformVersionsRequest }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                NextToken?: string | undefined
                Action: 'ListPlatformVersions'
                Version: '2010-12-01'
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
            } & { json: ListPlatformVersionsRequest }
            output: ElasticBeanstalkServiceException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get:
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceTagsDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-12-01' }
            } & {
              header: {
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
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { ResourceArn: string; Action: 'ListTagsForResource'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceTypeNotSupportedException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceMessage }
            output: ResourceTagsDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceMessage }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceMessage }
            output: ResourceTypeNotSupportedException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=RebuildEnvironment': {
      $get:
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'RebuildEnvironment'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                Action: 'RebuildEnvironment'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'RebuildEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebuildEnvironmentMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'RebuildEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebuildEnvironmentMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=RequestEnvironmentInfo': {
      $get: {
        input: {
          query: {
            EnvironmentId?: string | undefined
            EnvironmentName?: string | undefined
            InfoType: 'tail' | 'bundle'
            Action: 'RequestEnvironmentInfo'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'RequestEnvironmentInfo'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RequestEnvironmentInfoMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RestartAppServer': {
      $get: {
        input: {
          query: {
            EnvironmentId?: string | undefined
            EnvironmentName?: string | undefined
            Action: 'RestartAppServer'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'RestartAppServer'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestartAppServerMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RetrieveEnvironmentInfo': {
      $get: {
        input: {
          query: {
            EnvironmentId?: string | undefined
            EnvironmentName?: string | undefined
            InfoType: 'tail' | 'bundle'
            Action: 'RetrieveEnvironmentInfo'
            Version: '2010-12-01'
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
        output: RetrieveEnvironmentInfoResultMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RetrieveEnvironmentInfo'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetrieveEnvironmentInfoMessage }
        output: RetrieveEnvironmentInfoResultMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SwapEnvironmentCNAMEs': {
      $get: {
        input: {
          query: {
            SourceEnvironmentId?: string | undefined
            SourceEnvironmentName?: string | undefined
            DestinationEnvironmentId?: string | undefined
            DestinationEnvironmentName?: string | undefined
            Action: 'SwapEnvironmentCNAMEs'
            Version: '2010-12-01'
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
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'SwapEnvironmentCNAMEs'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SwapEnvironmentCNAMEsMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TerminateEnvironment': {
      $get:
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                TerminateResources?: boolean | undefined
                ForceTerminate?: boolean | undefined
                Action: 'TerminateEnvironment'
                Version: '2010-12-01'
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
            output: EnvironmentDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                TerminateResources?: boolean | undefined
                ForceTerminate?: boolean | undefined
                Action: 'TerminateEnvironment'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'TerminateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TerminateEnvironmentMessage }
            output: EnvironmentDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'TerminateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TerminateEnvironmentMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=UpdateApplication': {
      $get: {
        input: {
          query: {
            ApplicationName: string
            Description?: string | undefined
            Action: 'UpdateApplication'
            Version: '2010-12-01'
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
        output: ApplicationDescriptionMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateApplication'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApplicationMessage }
        output: ApplicationDescriptionMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateApplicationResourceLifecycle': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                ResourceLifecycleConfig: {
                  ServiceRole?: {} | undefined
                  VersionLifecycleConfig?:
                    | {
                        MaxCountRule?:
                          | {
                              Enabled: {}
                              MaxCount?: {} | undefined
                              DeleteSourceFromS3?: {} | undefined
                            }
                          | undefined
                        MaxAgeRule?:
                          | {
                              Enabled: {}
                              MaxAgeInDays?: {} | undefined
                              DeleteSourceFromS3?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                Action: 'UpdateApplicationResourceLifecycle'
                Version: '2010-12-01'
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
            output: ApplicationResourceLifecycleDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                ResourceLifecycleConfig: {
                  ServiceRole?: {} | undefined
                  VersionLifecycleConfig?:
                    | {
                        MaxCountRule?:
                          | {
                              Enabled: {}
                              MaxCount?: {} | undefined
                              DeleteSourceFromS3?: {} | undefined
                            }
                          | undefined
                        MaxAgeRule?:
                          | {
                              Enabled: {}
                              MaxAgeInDays?: {} | undefined
                              DeleteSourceFromS3?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                Action: 'UpdateApplicationResourceLifecycle'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'UpdateApplicationResourceLifecycle'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationResourceLifecycleMessage }
            output: ApplicationResourceLifecycleDescriptionMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'UpdateApplicationResourceLifecycle'; Version: '2010-12-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationResourceLifecycleMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=UpdateApplicationVersion': {
      $get: {
        input: {
          query: {
            ApplicationName: string
            VersionLabel: string
            Description?: string | undefined
            Action: 'UpdateApplicationVersion'
            Version: '2010-12-01'
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
        output: ApplicationVersionDescriptionMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateApplicationVersion'; Version: '2010-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApplicationVersionMessage }
        output: ApplicationVersionDescriptionMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateConfigurationTemplate': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                Action: 'UpdateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: ConfigurationSettingsDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                Action: 'UpdateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName: string
                Description?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                Action: 'UpdateConfigurationTemplate'
                Version: '2010-12-01'
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
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'UpdateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateConfigurationTemplateMessage }
            output: ConfigurationSettingsDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateConfigurationTemplateMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateConfigurationTemplate'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateConfigurationTemplateMessage }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=UpdateEnvironment': {
      $get:
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                GroupName?: string | undefined
                Description?: string | undefined
                Tier?:
                  | { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined }
                  | undefined
                VersionLabel?: string | undefined
                TemplateName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                Action: 'UpdateEnvironment'
                Version: '2010-12-01'
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
            output: EnvironmentDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                GroupName?: string | undefined
                Description?: string | undefined
                Tier?:
                  | { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined }
                  | undefined
                VersionLabel?: string | undefined
                TemplateName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                Action: 'UpdateEnvironment'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName?: string | undefined
                EnvironmentId?: string | undefined
                EnvironmentName?: string | undefined
                GroupName?: string | undefined
                Description?: string | undefined
                Tier?:
                  | { Name?: {} | undefined; Type?: {} | undefined; Version?: {} | undefined }
                  | undefined
                VersionLabel?: string | undefined
                TemplateName?: string | undefined
                SolutionStackName?: string | undefined
                PlatformArn?: string | undefined
                OptionSettings?: ConfigurationOptionSetting[] | undefined
                OptionsToRemove?: OptionSpecification[] | undefined
                Action: 'UpdateEnvironment'
                Version: '2010-12-01'
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
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'UpdateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEnvironmentMessage }
            output: EnvironmentDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEnvironmentMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateEnvironment'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateEnvironmentMessage }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=UpdateTagsForResource': {
      $get:
        | {
            input: {
              query: {
                ResourceArn: string
                TagsToAdd?: Tag[] | undefined
                TagsToRemove?: TagKey[] | undefined
                Action: 'UpdateTagsForResource'
                Version: '2010-12-01'
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagsToAdd?: Tag[] | undefined
                TagsToRemove?: TagKey[] | undefined
                Action: 'UpdateTagsForResource'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagsToAdd?: Tag[] | undefined
                TagsToRemove?: TagKey[] | undefined
                Action: 'UpdateTagsForResource'
                Version: '2010-12-01'
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
            output: OperationInProgressException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagsToAdd?: Tag[] | undefined
                TagsToRemove?: TagKey[] | undefined
                Action: 'UpdateTagsForResource'
                Version: '2010-12-01'
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
            output: TooManyTagsException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagsToAdd?: Tag[] | undefined
                TagsToRemove?: TagKey[] | undefined
                Action: 'UpdateTagsForResource'
                Version: '2010-12-01'
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
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArn: string
                TagsToAdd?: Tag[] | undefined
                TagsToRemove?: TagKey[] | undefined
                Action: 'UpdateTagsForResource'
                Version: '2010-12-01'
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
            output: ResourceTypeNotSupportedException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'UpdateTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForResourceMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForResourceMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForResourceMessage }
            output: OperationInProgressException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UpdateTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForResourceMessage }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UpdateTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForResourceMessage }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UpdateTagsForResource'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTagsForResourceMessage }
            output: ResourceTypeNotSupportedException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ValidateConfigurationSettings': {
      $get:
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                OptionSettings: ConfigurationOptionSetting[]
                Action: 'ValidateConfigurationSettings'
                Version: '2010-12-01'
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
            output: ConfigurationSettingsValidationMessages
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                OptionSettings: ConfigurationOptionSetting[]
                Action: 'ValidateConfigurationSettings'
                Version: '2010-12-01'
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
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ApplicationName: string
                TemplateName?: string | undefined
                EnvironmentName?: string | undefined
                OptionSettings: ConfigurationOptionSetting[]
                Action: 'ValidateConfigurationSettings'
                Version: '2010-12-01'
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
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ValidateConfigurationSettings'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateConfigurationSettingsMessage }
            output: ConfigurationSettingsValidationMessages
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ValidateConfigurationSettings'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateConfigurationSettingsMessage }
            output: InsufficientPrivilegesException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ValidateConfigurationSettings'; Version: '2010-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateConfigurationSettingsMessage }
            output: TooManyBucketsException
            outputFormat: 'text'
            status: 481
          }
    }
  },
  '/'
>
export default routes
