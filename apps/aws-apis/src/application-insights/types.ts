type CreateApplicationRequest = {
  ResourceGroupName?: {} | undefined
  OpsCenterEnabled?: {} | undefined
  CWEMonitorEnabled?: {} | undefined
  OpsItemSNSTopicArn?: {} | undefined
  Tags?: {} | undefined
  AutoConfigEnabled?: {} | undefined
  AutoCreate?: {} | undefined
  GroupingType?: {} | undefined
}
type CreateApplicationResponse = {
  ApplicationInfo?:
    | {
        ResourceGroupName?: {} | undefined
        LifeCycle?: {} | undefined
        OpsItemSNSTopicArn?: {} | undefined
        OpsCenterEnabled?: {} | undefined
        CWEMonitorEnabled?: {} | undefined
        Remarks?: {} | undefined
        AutoConfigEnabled?: {} | undefined
        DiscoveryType?: {} | undefined
      }
    | undefined
}
type ResourceInUseException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type TagsAlreadyExistException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type CreateComponentRequest = { ResourceGroupName: {}; ComponentName: {}; ResourceList: {} }
type CreateComponentResponse = { [x: string]: unknown }
type CreateLogPatternRequest = {
  ResourceGroupName: {}
  PatternSetName: {}
  PatternName: {}
  Pattern: {}
  Rank: {}
}
type CreateLogPatternResponse = {
  LogPattern?:
    | {
        PatternSetName?: {} | undefined
        PatternName?: {} | undefined
        Pattern?: {} | undefined
        Rank?: {} | undefined
      }
    | undefined
  ResourceGroupName?: {} | undefined
}
type DeleteApplicationRequest = { ResourceGroupName: {} }
type DeleteApplicationResponse = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type DeleteComponentRequest = { ResourceGroupName: {}; ComponentName: {} }
type DeleteComponentResponse = { [x: string]: unknown }
type DeleteLogPatternRequest = { ResourceGroupName: {}; PatternSetName: {}; PatternName: {} }
type DeleteLogPatternResponse = { [x: string]: unknown }
type DescribeApplicationRequest = { ResourceGroupName: {} }
type DescribeApplicationResponse = {
  ApplicationInfo?:
    | {
        ResourceGroupName?: {} | undefined
        LifeCycle?: {} | undefined
        OpsItemSNSTopicArn?: {} | undefined
        OpsCenterEnabled?: {} | undefined
        CWEMonitorEnabled?: {} | undefined
        Remarks?: {} | undefined
        AutoConfigEnabled?: {} | undefined
        DiscoveryType?: {} | undefined
      }
    | undefined
}
type DescribeComponentRequest = { ResourceGroupName: {}; ComponentName: {} }
type ApplicationComponent = {
  ComponentName?: {} | undefined
  ComponentRemarks?: {} | undefined
  ResourceType?: {} | undefined
  OsType?: {} | undefined
  Tier?: {} | undefined
  Monitor?: {} | undefined
  DetectedWorkload?: {} | undefined
}
type DescribeComponentResponse = {
  ApplicationComponent?: ApplicationComponent | undefined
  ResourceList?: {} | undefined
}
type DescribeComponentConfigurationRequest = { ResourceGroupName: {}; ComponentName: {} }
type DescribeComponentConfigurationResponse = {
  Monitor?: {} | undefined
  Tier?: {} | undefined
  ComponentConfiguration?: {} | undefined
}
type DescribeComponentConfigurationRecommendationRequest = {
  ResourceGroupName: {}
  ComponentName: {}
  Tier: {}
}
type DescribeComponentConfigurationRecommendationResponse = {
  ComponentConfiguration?: {} | undefined
}
type DescribeLogPatternRequest = { ResourceGroupName: {}; PatternSetName: {}; PatternName: {} }
type DescribeLogPatternResponse = {
  ResourceGroupName?: {} | undefined
  LogPattern?:
    | {
        PatternSetName?: {} | undefined
        PatternName?: {} | undefined
        Pattern?: {} | undefined
        Rank?: {} | undefined
      }
    | undefined
}
type DescribeObservationRequest = { ObservationId: {} }
type DescribeObservationResponse = {
  Observation?:
    | {
        Id?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        SourceType?: {} | undefined
        SourceARN?: {} | undefined
        LogGroup?: {} | undefined
        LineTime?: {} | undefined
        LogText?: {} | undefined
        LogFilter?: {} | undefined
        MetricNamespace?: {} | undefined
        MetricName?: {} | undefined
        Unit?: {} | undefined
        Value?: {} | undefined
        CloudWatchEventId?: {} | undefined
        CloudWatchEventSource?: {} | undefined
        CloudWatchEventDetailType?: {} | undefined
        HealthEventArn?: {} | undefined
        HealthService?: {} | undefined
        HealthEventTypeCode?: {} | undefined
        HealthEventTypeCategory?: {} | undefined
        HealthEventDescription?: {} | undefined
        CodeDeployDeploymentId?: {} | undefined
        CodeDeployDeploymentGroup?: {} | undefined
        CodeDeployState?: {} | undefined
        CodeDeployApplication?: {} | undefined
        CodeDeployInstanceGroupId?: {} | undefined
        Ec2State?: {} | undefined
        RdsEventCategories?: {} | undefined
        RdsEventMessage?: {} | undefined
        S3EventName?: {} | undefined
        StatesExecutionArn?: {} | undefined
        StatesArn?: {} | undefined
        StatesStatus?: {} | undefined
        StatesInput?: {} | undefined
        EbsEvent?: {} | undefined
        EbsResult?: {} | undefined
        EbsCause?: {} | undefined
        EbsRequestId?: {} | undefined
        XRayFaultPercent?: {} | undefined
        XRayThrottlePercent?: {} | undefined
        XRayErrorPercent?: {} | undefined
        XRayRequestCount?: {} | undefined
        XRayRequestAverageLatency?: {} | undefined
        XRayNodeName?: {} | undefined
        XRayNodeType?: {} | undefined
      }
    | undefined
}
type DescribeProblemRequest = { ProblemId: {} }
type DescribeProblemResponse = {
  Problem?:
    | {
        Id?: {} | undefined
        Title?: {} | undefined
        Insights?: {} | undefined
        Status?: {} | undefined
        AffectedResource?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        SeverityLevel?: {} | undefined
        ResourceGroupName?: {} | undefined
        Feedback?: {} | undefined
        RecurringCount?: {} | undefined
        LastRecurrenceTime?: {} | undefined
      }
    | undefined
}
type DescribeProblemObservationsRequest = { ProblemId: {} }
type DescribeProblemObservationsResponse = {
  RelatedObservations?: { ObservationList?: {} | undefined } | undefined
}
type ListApplicationsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListApplicationsResponse = { ApplicationInfoList?: {} | undefined; NextToken?: {} | undefined }
type ListComponentsRequest = {
  ResourceGroupName: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListComponentsResponse = {
  ApplicationComponentList?: {} | undefined
  NextToken?: {} | undefined
}
type ListConfigurationHistoryRequest = {
  ResourceGroupName?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  EventStatus?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListConfigurationHistoryResponse = { EventList?: {} | undefined; NextToken?: {} | undefined }
type ListLogPatternSetsRequest = {
  ResourceGroupName: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListLogPatternSetsResponse = {
  ResourceGroupName?: {} | undefined
  LogPatternSets?: {} | undefined
  NextToken?: {} | undefined
}
type ListLogPatternsRequest = {
  ResourceGroupName: {}
  PatternSetName?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListLogPatternsResponse = {
  ResourceGroupName?: {} | undefined
  LogPatterns?: {} | undefined
  NextToken?: {} | undefined
}
type ListProblemsRequest = {
  ResourceGroupName?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  ComponentName?: {} | undefined
}
type ListProblemsResponse = {
  ProblemList?: {} | undefined
  NextToken?: {} | undefined
  ResourceGroupName?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateApplicationRequest = {
  ResourceGroupName: {}
  OpsCenterEnabled?: {} | undefined
  CWEMonitorEnabled?: {} | undefined
  OpsItemSNSTopicArn?: {} | undefined
  RemoveSNSTopic?: {} | undefined
  AutoConfigEnabled?: {} | undefined
}
type UpdateApplicationResponse = {
  ApplicationInfo?:
    | {
        ResourceGroupName?: {} | undefined
        LifeCycle?: {} | undefined
        OpsItemSNSTopicArn?: {} | undefined
        OpsCenterEnabled?: {} | undefined
        CWEMonitorEnabled?: {} | undefined
        Remarks?: {} | undefined
        AutoConfigEnabled?: {} | undefined
        DiscoveryType?: {} | undefined
      }
    | undefined
}
type UpdateComponentRequest = {
  ResourceGroupName: {}
  ComponentName: {}
  NewComponentName?: {} | undefined
  ResourceList?: {} | undefined
}
type UpdateComponentResponse = { [x: string]: unknown }
type UpdateComponentConfigurationRequest = {
  ResourceGroupName: {}
  ComponentName: {}
  Monitor?: {} | undefined
  Tier?: {} | undefined
  ComponentConfiguration?: {} | undefined
  AutoConfigEnabled?: {} | undefined
}
type UpdateComponentConfigurationResponse = { [x: string]: unknown }
type UpdateLogPatternRequest = {
  ResourceGroupName: {}
  PatternSetName: {}
  PatternName: {}
  Pattern?: {} | undefined
  Rank?: {} | undefined
}
type UpdateLogPatternResponse = {
  ResourceGroupName?: {} | undefined
  LogPattern?:
    | {
        PatternSetName?: {} | undefined
        PatternName?: {} | undefined
        Pattern?: {} | undefined
        Rank?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationRequest }
            output: TagsAlreadyExistException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateComponentRequest }
            output: CreateComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateComponentRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateComponentRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateComponentRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateComponentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLogPatternRequest }
            output: CreateLogPatternResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLogPatternRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLogPatternRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLogPatternRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.CreateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLogPatternRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteApplication'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationRequest }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteComponentRequest }
            output: DeleteComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteComponentRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteComponentRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteComponentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLogPatternRequest }
            output: DeleteLogPatternResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLogPatternRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLogPatternRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLogPatternRequest }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DeleteLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLogPatternRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeApplication'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentRequest }
            output: DescribeComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRequest }
            output: DescribeComponentConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRecommendationRequest }
            output: DescribeComponentConfigurationRecommendationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRecommendationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRecommendationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComponentConfigurationRecommendationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLogPatternRequest }
            output: DescribeLogPatternResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLogPatternRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLogPatternRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLogPatternRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeObservation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeObservationRequest }
            output: DescribeObservationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeObservation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeObservationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeObservation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeObservationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeObservation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeObservationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemRequest }
            output: DescribeProblemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblemObservations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemObservationsRequest }
            output: DescribeProblemObservationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblemObservations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemObservationsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblemObservations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemObservationsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.DescribeProblemObservations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeProblemObservationsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListApplications': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListApplications'
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListComponents': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListComponents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComponentsRequest }
            output: ListComponentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListComponents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComponentsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListComponents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComponentsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListComponents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComponentsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListConfigurationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConfigurationHistoryRequest }
            output: ListConfigurationHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListConfigurationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConfigurationHistoryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListConfigurationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConfigurationHistoryRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListConfigurationHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConfigurationHistoryRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatternSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternSetsRequest }
            output: ListLogPatternSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatternSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternSetsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatternSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternSetsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatternSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternSetsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatterns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternsRequest }
            output: ListLogPatternsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatterns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatterns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListLogPatterns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLogPatternsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListProblems': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProblemsRequest }
            output: ListProblemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProblemsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProblemsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProblemsRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListTagsForResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.TagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UntagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateApplication'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentRequest }
            output: UpdateComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentConfigurationRequest }
            output: UpdateComponentConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentConfigurationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentConfigurationRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateComponentConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateComponentConfigurationRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLogPatternRequest }
            output: UpdateLogPatternResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLogPatternRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLogPatternRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLogPatternRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'EC2WindowsBarleyService.UpdateLogPattern'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLogPatternRequest }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
