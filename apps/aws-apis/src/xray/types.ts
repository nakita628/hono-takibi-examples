type TraceId = string
type BatchGetTracesResult = {
  Traces?: {} | undefined
  UnprocessedTraceIds?: {} | undefined
  NextToken?: {} | undefined
}
type Tag = { Key: {}; Value: {} }
type CreateGroupResult = {
  Group?:
    | {
        GroupName?: {} | undefined
        GroupARN?: {} | undefined
        FilterExpression?: {} | undefined
        InsightsConfiguration?:
          | { InsightsEnabled?: {} | undefined; NotificationsEnabled?: {} | undefined }
          | undefined
      }
    | undefined
}
type CreateSamplingRuleResult = {
  SamplingRuleRecord?:
    | {
        SamplingRule?:
          | {
              RuleName?: {} | undefined
              RuleARN?: {} | undefined
              ResourceARN: {}
              Priority: {}
              FixedRate: {}
              ReservoirSize: {}
              ServiceName: {}
              ServiceType: {}
              Host: {}
              HTTPMethod: {}
              URLPath: {}
              Version: {}
              Attributes?: {} | undefined
            }
          | undefined
        CreatedAt?: {} | undefined
        ModifiedAt?: {} | undefined
      }
    | undefined
}
type DeleteGroupResult = { [x: string]: unknown }
type DeleteResourcePolicyResult = { [x: string]: unknown }
type DeleteSamplingRuleResult = {
  SamplingRuleRecord?:
    | {
        SamplingRule?:
          | {
              RuleName?: {} | undefined
              RuleARN?: {} | undefined
              ResourceARN: {}
              Priority: {}
              FixedRate: {}
              ReservoirSize: {}
              ServiceName: {}
              ServiceType: {}
              Host: {}
              HTTPMethod: {}
              URLPath: {}
              Version: {}
              Attributes?: {} | undefined
            }
          | undefined
        CreatedAt?: {} | undefined
        ModifiedAt?: {} | undefined
      }
    | undefined
}
type GetEncryptionConfigResult = {
  EncryptionConfig?:
    | { KeyId?: {} | undefined; Status?: {} | undefined; Type?: {} | undefined }
    | undefined
}
type GetGroupResult = {
  Group?:
    | {
        GroupName?: {} | undefined
        GroupARN?: {} | undefined
        FilterExpression?: {} | undefined
        InsightsConfiguration?:
          | { InsightsEnabled?: {} | undefined; NotificationsEnabled?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetGroupsResult = { Groups?: {} | undefined; NextToken?: {} | undefined }
type ServiceId = {
  Name?: {} | undefined
  Names?: {} | undefined
  AccountId?: {} | undefined
  Type?: {} | undefined
}
type GetInsightResult = {
  Insight?:
    | {
        InsightId?: {} | undefined
        GroupARN?: {} | undefined
        GroupName?: {} | undefined
        RootCauseServiceId?: ServiceId | undefined
        Categories?: {} | undefined
        State?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        Summary?: {} | undefined
        ClientRequestImpactStatistics?:
          | { FaultCount?: {} | undefined; OkCount?: {} | undefined; TotalCount?: {} | undefined }
          | undefined
        RootCauseServiceRequestImpactStatistics?:
          | { FaultCount?: {} | undefined; OkCount?: {} | undefined; TotalCount?: {} | undefined }
          | undefined
        TopAnomalousServices?: {} | undefined
      }
    | undefined
}
type GetInsightEventsResult = { InsightEvents?: {} | undefined; NextToken?: {} | undefined }
type GetInsightImpactGraphResult = {
  InsightId?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  ServiceGraphStartTime?: {} | undefined
  ServiceGraphEndTime?: {} | undefined
  Services?: {} | undefined
  NextToken?: {} | undefined
}
type InsightState = 'ACTIVE' | 'CLOSED'
type GetInsightSummariesResult = { InsightSummaries?: {} | undefined; NextToken?: {} | undefined }
type GetSamplingRulesResult = { SamplingRuleRecords?: {} | undefined; NextToken?: {} | undefined }
type GetSamplingStatisticSummariesResult = {
  SamplingStatisticSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type SamplingStatisticsDocument = {
  RuleName: {}
  ClientID: {}
  Timestamp: {}
  RequestCount: {}
  SampledCount: {}
  BorrowCount?: {} | undefined
}
type GetSamplingTargetsResult = {
  SamplingTargetDocuments?: {} | undefined
  LastRuleModification?: {} | undefined
  UnprocessedStatistics?: {} | undefined
}
type GetServiceGraphResult = {
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Services?: {} | undefined
  ContainsOldGroupVersions?: {} | undefined
  NextToken?: {} | undefined
}
type GetTimeSeriesServiceStatisticsResult = {
  TimeSeriesServiceStatistics?: {} | undefined
  ContainsOldGroupVersions?: {} | undefined
  NextToken?: {} | undefined
}
type GetTraceGraphResult = { Services?: {} | undefined; NextToken?: {} | undefined }
type GetTraceSummariesResult = {
  TraceSummaries?: {} | undefined
  ApproximateTime?: {} | undefined
  TracesProcessedCount?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourcePoliciesResult = { ResourcePolicies?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type PutEncryptionConfigResult = {
  EncryptionConfig?:
    | { KeyId?: {} | undefined; Status?: {} | undefined; Type?: {} | undefined }
    | undefined
}
type PutResourcePolicyResult = {
  ResourcePolicy?:
    | {
        PolicyName?: {} | undefined
        PolicyDocument?: {} | undefined
        PolicyRevisionId?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type TelemetryRecord = {
  Timestamp: {}
  SegmentsReceivedCount?: {} | undefined
  SegmentsSentCount?: {} | undefined
  SegmentsSpilloverCount?: {} | undefined
  SegmentsRejectedCount?: {} | undefined
  BackendConnectionErrors?:
    | {
        TimeoutCount?: {} | undefined
        ConnectionRefusedCount?: {} | undefined
        HTTPCode4XXCount?: {} | undefined
        HTTPCode5XXCount?: {} | undefined
        UnknownHostCount?: {} | undefined
        OtherCount?: {} | undefined
      }
    | undefined
}
type PutTelemetryRecordsResult = { [x: string]: unknown }
type TraceSegmentDocument = string
type PutTraceSegmentsResult = { UnprocessedTraceSegments?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateGroupResult = {
  Group?:
    | {
        GroupName?: {} | undefined
        GroupARN?: {} | undefined
        FilterExpression?: {} | undefined
        InsightsConfiguration?:
          | { InsightsEnabled?: {} | undefined; NotificationsEnabled?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdateSamplingRuleResult = {
  SamplingRuleRecord?:
    | {
        SamplingRule?:
          | {
              RuleName?: {} | undefined
              RuleARN?: {} | undefined
              ResourceARN: {}
              Priority: {}
              FixedRate: {}
              ReservoirSize: {}
              ServiceName: {}
              ServiceType: {}
              Host: {}
              HTTPMethod: {}
              URLPath: {}
              Version: {}
              Attributes?: {} | undefined
            }
          | undefined
        CreatedAt?: {} | undefined
        ModifiedAt?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Traces': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TraceIds: TraceId[]; NextToken?: string | undefined } }
        output: BatchGetTracesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateGroup': {
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
            GroupName: string
            FilterExpression?: string | undefined
            InsightsConfiguration?:
              | { InsightsEnabled?: {} | undefined; NotificationsEnabled?: {} | undefined }
              | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateSamplingRule': {
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
            SamplingRule: {
              RuleName?: {} | undefined
              RuleARN?: {} | undefined
              ResourceARN?: {} | undefined
              Priority?: {} | undefined
              FixedRate?: {} | undefined
              ReservoirSize?: {} | undefined
              ServiceName?: {} | undefined
              ServiceType?: {} | undefined
              Host?: {} | undefined
              HTTPMethod?: {} | undefined
              URLPath?: {} | undefined
              Version?: {} | undefined
              Attributes?: {} | undefined
            }
            Tags?: Tag[] | undefined
          }
        }
        output: CreateSamplingRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteGroup': {
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
        } & { json: { GroupName?: string | undefined; GroupARN?: string | undefined } }
        output: DeleteGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteResourcePolicy': {
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
        } & { json: { PolicyName: string; PolicyRevisionId?: string | undefined } }
        output: DeleteResourcePolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteSamplingRule': {
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
        } & { json: { RuleName?: string | undefined; RuleARN?: string | undefined } }
        output: DeleteSamplingRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/EncryptionConfig': {
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
        }
        output: GetEncryptionConfigResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetGroup': {
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
        } & { json: { GroupName?: string | undefined; GroupARN?: string | undefined } }
        output: GetGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Groups': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined } }
        output: GetGroupsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Insight': {
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
        } & { json: { InsightId: string } }
        output: GetInsightResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/InsightEvents': {
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
            InsightId: string
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: GetInsightEventsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/InsightImpactGraph': {
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
            InsightId: string
            StartTime: string
            EndTime: string
            NextToken?: string | undefined
          }
        }
        output: GetInsightImpactGraphResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/InsightSummaries': {
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
            States?: InsightState[] | undefined
            GroupARN?: string | undefined
            GroupName?: string | undefined
            StartTime: string
            EndTime: string
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: GetInsightSummariesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetSamplingRules': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined } }
        output: GetSamplingRulesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/SamplingStatisticSummaries': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined } }
        output: GetSamplingStatisticSummariesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/SamplingTargets': {
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
        } & { json: { SamplingStatisticsDocuments: SamplingStatisticsDocument[] } }
        output: GetSamplingTargetsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ServiceGraph': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            StartTime: string
            EndTime: string
            GroupName?: string | undefined
            GroupARN?: string | undefined
            NextToken?: string | undefined
          }
        }
        output: GetServiceGraphResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TimeSeriesServiceStatistics': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            StartTime: string
            EndTime: string
            GroupName?: string | undefined
            GroupARN?: string | undefined
            EntitySelectorExpression?: string | undefined
            Period?: number | undefined
            ForecastStatistics?: boolean | undefined
            NextToken?: string | undefined
          }
        }
        output: GetTimeSeriesServiceStatisticsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TraceGraph': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TraceIds: TraceId[]; NextToken?: string | undefined } }
        output: GetTraceGraphResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TraceSummaries': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            StartTime: string
            EndTime: string
            TimeRangeType?: 'TraceId' | 'Event' | undefined
            Sampling?: boolean | undefined
            SamplingStrategy?: { Name?: {} | undefined; Value?: {} | undefined } | undefined
            FilterExpression?: string | undefined
            NextToken?: string | undefined
          }
        }
        output: GetTraceSummariesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListResourcePolicies': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined } }
        output: ListResourcePoliciesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListTagsForResource': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceARN: string; NextToken?: string | undefined } }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutEncryptionConfig': {
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
        } & { json: { KeyId?: string | undefined; Type: 'NONE' | 'KMS' } }
        output: PutEncryptionConfigResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutResourcePolicy': {
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
            PolicyName: string
            PolicyDocument: string
            PolicyRevisionId?: string | undefined
            BypassPolicyLockoutCheck?: boolean | undefined
          }
        }
        output: PutResourcePolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TelemetryRecords': {
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
            TelemetryRecords: TelemetryRecord[]
            EC2InstanceId?: string | undefined
            Hostname?: string | undefined
            ResourceARN?: string | undefined
          }
        }
        output: PutTelemetryRecordsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TraceSegments': {
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
        } & { json: { TraceSegmentDocuments: TraceSegmentDocument[] } }
        output: PutTraceSegmentsResult
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
        output: TagResourceResponse
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
        } & { json: { ResourceARN: string; TagKeys: TagKey[] } }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateGroup': {
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
            GroupName?: string | undefined
            GroupARN?: string | undefined
            FilterExpression?: string | undefined
            InsightsConfiguration?:
              | { InsightsEnabled?: {} | undefined; NotificationsEnabled?: {} | undefined }
              | undefined
          }
        }
        output: UpdateGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateSamplingRule': {
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
            SamplingRuleUpdate: {
              RuleName?: {} | undefined
              RuleARN?: {} | undefined
              ResourceARN?: {} | undefined
              Priority?: {} | undefined
              FixedRate?: {} | undefined
              ReservoirSize?: {} | undefined
              Host?: {} | undefined
              ServiceName?: {} | undefined
              ServiceType?: {} | undefined
              HTTPMethod?: {} | undefined
              URLPath?: {} | undefined
              Attributes?: {} | undefined
            }
          }
        }
        output: UpdateSamplingRuleResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
