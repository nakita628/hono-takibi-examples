type AddNotificationChannelResponse = { Id: {} }
type ListNotificationChannelsResponse = { Channels?: {} | undefined; NextToken?: {} | undefined }
type DeleteInsightResponse = { [x: string]: unknown }
type InsightTimeRange = { StartTime: {}; EndTime?: {} | undefined }
type PredictionTimeRange = { StartTime: {}; EndTime?: {} | undefined }
type ResourceCollection = {
  CloudFormation?: { StackNames?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type DescribeInsightResponse = {
  ProactiveInsight?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Severity?: {} | undefined
        Status?: {} | undefined
        InsightTimeRange?: InsightTimeRange | undefined
        PredictionTimeRange?: PredictionTimeRange | undefined
        ResourceCollection?: ResourceCollection | undefined
        SsmOpsItemId?: {} | undefined
        Description?: {} | undefined
      }
    | undefined
  ReactiveInsight?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Severity?: {} | undefined
        Status?: {} | undefined
        InsightTimeRange?: InsightTimeRange | undefined
        ResourceCollection?: ResourceCollection | undefined
        SsmOpsItemId?: {} | undefined
        Description?: {} | undefined
      }
    | undefined
}
type DescribeAccountHealthResponse = {
  OpenReactiveInsights: {}
  OpenProactiveInsights: {}
  MetricsAnalyzed: {}
  ResourceHours: {}
  AnalyzedResourceCount?: {} | undefined
}
type DescribeAccountOverviewResponse = {
  ReactiveInsights: {}
  ProactiveInsights: {}
  MeanTimeToRecoverInMilliseconds: {}
}
type AnomalyTimeRange = { StartTime: {}; EndTime?: {} | undefined }
type DescribeAnomalyResponse = {
  ProactiveAnomaly?:
    | {
        Id?: {} | undefined
        Severity?: {} | undefined
        Status?: {} | undefined
        UpdateTime?: {} | undefined
        AnomalyTimeRange?: AnomalyTimeRange | undefined
        AnomalyReportedTimeRange?: { OpenTime: {}; CloseTime?: {} | undefined } | undefined
        PredictionTimeRange?: PredictionTimeRange | undefined
        SourceDetails?:
          | { CloudWatchMetrics?: {} | undefined; PerformanceInsightsMetrics?: {} | undefined }
          | undefined
        AssociatedInsightId?: {} | undefined
        ResourceCollection?: ResourceCollection | undefined
        Limit?: {} | undefined
        SourceMetadata?:
          | {
              Source?: {} | undefined
              SourceResourceName?: {} | undefined
              SourceResourceType?: {} | undefined
            }
          | undefined
        AnomalyResources?: {} | undefined
        Description?: {} | undefined
      }
    | undefined
  ReactiveAnomaly?:
    | {
        Id?: {} | undefined
        Severity?: {} | undefined
        Status?: {} | undefined
        AnomalyTimeRange?: AnomalyTimeRange | undefined
        AnomalyReportedTimeRange?: { OpenTime: {}; CloseTime?: {} | undefined } | undefined
        SourceDetails?:
          | { CloudWatchMetrics?: {} | undefined; PerformanceInsightsMetrics?: {} | undefined }
          | undefined
        AssociatedInsightId?: {} | undefined
        ResourceCollection?: ResourceCollection | undefined
        Type?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        CausalAnomalyId?: {} | undefined
        AnomalyResources?: {} | undefined
      }
    | undefined
}
type DescribeEventSourcesConfigResponse = {
  EventSources?: { AmazonCodeGuruProfiler?: { Status?: {} | undefined } | undefined } | undefined
}
type UpdateEventSourcesConfigResponse = { [x: string]: unknown }
type InsightFeedback = { Id?: {} | undefined; Feedback?: {} | undefined }
type DescribeFeedbackResponse = { InsightFeedback?: InsightFeedback | undefined }
type PutFeedbackResponse = { [x: string]: unknown }
type AwsAccountId = string
type OrganizationalUnitId = string
type DescribeOrganizationHealthResponse = {
  OpenReactiveInsights: {}
  OpenProactiveInsights: {}
  MetricsAnalyzed: {}
  ResourceHours: {}
}
type DescribeOrganizationOverviewResponse = { ReactiveInsights: {}; ProactiveInsights: {} }
type DescribeOrganizationResourceCollectionHealthResponse = {
  CloudFormation?: {} | undefined
  Service?: {} | undefined
  Account?: {} | undefined
  NextToken?: {} | undefined
  Tags?: {} | undefined
}
type DescribeResourceCollectionHealthResponse = {
  CloudFormation?: {} | undefined
  Service?: {} | undefined
  NextToken?: {} | undefined
  Tags?: {} | undefined
}
type ServiceIntegrationConfig = {
  OpsCenter?: { OptInStatus?: {} | undefined } | undefined
  LogsAnomalyDetection?: { OptInStatus?: {} | undefined } | undefined
}
type DescribeServiceIntegrationResponse = {
  ServiceIntegration?: ServiceIntegrationConfig | undefined
}
type OpsCenterIntegrationConfig = { OptInStatus?: {} | undefined }
type UpdateServiceIntegrationResponse = { [x: string]: unknown }
type GetCostEstimationResponse = {
  ResourceCollection?:
    | { CloudFormation?: { StackNames?: {} | undefined } | undefined; Tags?: {} | undefined }
    | undefined
  Status?: {} | undefined
  Costs?: {} | undefined
  TimeRange?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  TotalCost?: {} | undefined
  NextToken?: {} | undefined
}
type StartCostEstimationResponse = { [x: string]: unknown }
type GetResourceCollectionResponse = {
  ResourceCollection?:
    | { CloudFormation?: { StackNames?: {} | undefined } | undefined; Tags?: {} | undefined }
    | undefined
  NextToken?: {} | undefined
}
type ServiceCollection = { ServiceNames?: {} | undefined }
type ListAnomaliesForInsightResponse = {
  ProactiveAnomalies?: {} | undefined
  ReactiveAnomalies?: {} | undefined
  NextToken?: {} | undefined
}
type ListAnomalousLogGroupsResponse = {
  InsightId: {}
  AnomalousLogGroups: {}
  NextToken?: {} | undefined
}
type ListEventsResponse = { Events: {}; NextToken?: {} | undefined }
type ListInsightsResponse = {
  ProactiveInsights?: {} | undefined
  ReactiveInsights?: {} | undefined
  NextToken?: {} | undefined
}
type ListMonitoredResourcesResponse = {
  MonitoredResourceIdentifiers: {}
  NextToken?: {} | undefined
}
type ListOrganizationInsightsResponse = {
  ProactiveInsights?: {} | undefined
  ReactiveInsights?: {} | undefined
  NextToken?: {} | undefined
}
type ListRecommendationsResponse = { Recommendations?: {} | undefined; NextToken?: {} | undefined }
type RemoveNotificationChannelResponse = { [x: string]: unknown }
type SearchInsightsResponse = {
  ProactiveInsights?: {} | undefined
  ReactiveInsights?: {} | undefined
  NextToken?: {} | undefined
}
type SearchOrganizationInsightsResponse = {
  ProactiveInsights?: {} | undefined
  ReactiveInsights?: {} | undefined
  NextToken?: {} | undefined
}
type UpdateResourceCollectionResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/channels': {
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
            Config: {
              Sns?: { TopicArn?: {} | undefined } | undefined
              Filters?: { Severities?: {} | undefined; MessageTypes?: {} | undefined } | undefined
            }
          }
        }
        output: AddNotificationChannelResponse
        outputFormat: 'json'
        status: 200
      }
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
        output: ListNotificationChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
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
        output: DeleteInsightResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { Id: string } } & { query: { AccountId?: string | undefined } } & {
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
        output: DescribeInsightResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/health': {
      $get: {
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
        output: DescribeAccountHealthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/overview': {
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
        } & { json: { FromTime: string; ToTime?: string | undefined } }
        output: DescribeAccountOverviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/anomalies/:Id': {
      $get: {
        input: { param: { Id: string } } & { query: { AccountId?: string | undefined } } & {
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
        output: DescribeAnomalyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/event-sources': {
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
        output: DescribeEventSourcesConfigResponse
        outputFormat: 'json'
        status: 200
      }
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
            EventSources?:
              | { AmazonCodeGuruProfiler?: { Status?: {} | undefined } | undefined }
              | undefined
          }
        }
        output: UpdateEventSourcesConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/feedback': {
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
        } & { json: { InsightId?: string | undefined } }
        output: DescribeFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
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
          json: { InsightFeedback?: { Id?: {} | undefined; Feedback?: {} | undefined } | undefined }
        }
        output: PutFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/health': {
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
            AccountIds?: AwsAccountId[] | undefined
            OrganizationalUnitIds?: OrganizationalUnitId[] | undefined
          }
        }
        output: DescribeOrganizationHealthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/overview': {
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
            FromTime: string
            ToTime?: string | undefined
            AccountIds?: AwsAccountId[] | undefined
            OrganizationalUnitIds?: OrganizationalUnitId[] | undefined
          }
        }
        output: DescribeOrganizationOverviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/health/resource-collection': {
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
            OrganizationResourceCollectionType:
              | 'AWS_CLOUD_FORMATION'
              | 'AWS_SERVICE'
              | 'AWS_ACCOUNT'
              | 'AWS_TAGS'
            AccountIds?: AwsAccountId[] | undefined
            OrganizationalUnitIds?: OrganizationalUnitId[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: DescribeOrganizationResourceCollectionHealthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/health/resource-collection/:ResourceCollectionType': {
      $get: {
        input: {
          param: { ResourceCollectionType: 'AWS_CLOUD_FORMATION' | 'AWS_SERVICE' | 'AWS_TAGS' }
        } & { query: { NextToken?: string | undefined } } & {
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
        output: DescribeResourceCollectionHealthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service-integrations': {
      $get: {
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
        output: DescribeServiceIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
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
            ServiceIntegration: {
              OpsCenter?: OpsCenterIntegrationConfig | undefined
              LogsAnomalyDetection?: { OptInStatus?: {} | undefined } | undefined
            }
          }
        }
        output: UpdateServiceIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cost-estimation': {
      $get: {
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
        }
        output: GetCostEstimationResponse
        outputFormat: 'json'
        status: 200
      }
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
            ResourceCollection: {
              CloudFormation?: { StackNames?: {} | undefined } | undefined
              Tags?: {} | undefined
            }
            ClientToken?: string | undefined
          }
        }
        output: StartCostEstimationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource-collections/:ResourceCollectionType': {
      $get: {
        input: {
          param: { ResourceCollectionType: 'AWS_CLOUD_FORMATION' | 'AWS_SERVICE' | 'AWS_TAGS' }
        } & { query: { NextToken?: string | undefined } } & {
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
        output: GetResourceCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/anomalies/insight/:InsightId': {
      $post: {
        input: { param: { InsightId: string } } & {
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
            StartTimeRange?: { FromTime?: {} | undefined; ToTime?: {} | undefined } | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            AccountId?: string | undefined
            Filters?: { ServiceCollection?: ServiceCollection | undefined } | undefined
          }
        }
        output: ListAnomaliesForInsightResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list-log-anomalies': {
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
        output: ListAnomalousLogGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events': {
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
            Filters: {
              InsightId?: {} | undefined
              EventTimeRange?: { FromTime: {}; ToTime: {} } | undefined
              EventClass?: {} | undefined
              EventSource?: {} | undefined
              DataSource?: {} | undefined
              ResourceCollection?: ResourceCollection | undefined
            }
            MaxResults?: number | undefined
            NextToken?: string | undefined
            AccountId?: string | undefined
          }
        }
        output: ListEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights': {
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
            StatusFilter: {
              Ongoing?: { Type: {} } | undefined
              Closed?:
                | { Type: {}; EndTimeRange: { FromTime?: {} | undefined; ToTime?: {} | undefined } }
                | undefined
              Any?:
                | {
                    Type: {}
                    StartTimeRange: { FromTime?: {} | undefined; ToTime?: {} | undefined }
                  }
                | undefined
            }
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/monitoredResources': {
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
            Filters?:
              | { ResourcePermission?: {} | undefined; ResourceTypeFilters?: {} | undefined }
              | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListMonitoredResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/insights': {
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
            StatusFilter: {
              Ongoing?: { Type: {} } | undefined
              Closed?:
                | { Type: {}; EndTimeRange: { FromTime?: {} | undefined; ToTime?: {} | undefined } }
                | undefined
              Any?:
                | {
                    Type: {}
                    StartTimeRange: { FromTime?: {} | undefined; ToTime?: {} | undefined }
                  }
                | undefined
            }
            MaxResults?: number | undefined
            AccountIds?: AwsAccountId[] | undefined
            OrganizationalUnitIds?: OrganizationalUnitId[] | undefined
            NextToken?: string | undefined
          }
        }
        output: ListOrganizationInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/recommendations': {
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
            InsightId: string
            NextToken?: string | undefined
            Locale?:
              | 'DE_DE'
              | 'EN_US'
              | 'EN_GB'
              | 'ES_ES'
              | 'FR_FR'
              | 'IT_IT'
              | 'JA_JP'
              | 'KO_KR'
              | 'PT_BR'
              | 'ZH_CN'
              | 'ZH_TW'
              | undefined
            AccountId?: string | undefined
          }
        }
        output: ListRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
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
        output: RemoveNotificationChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights/search': {
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
            StartTimeRange: { FromTime?: {} | undefined; ToTime?: {} | undefined }
            Filters?:
              | {
                  Severities?: {} | undefined
                  Statuses?: {} | undefined
                  ResourceCollection?: ResourceCollection | undefined
                  ServiceCollection?: { ServiceNames?: {} | undefined } | undefined
                }
              | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            Type: 'REACTIVE' | 'PROACTIVE'
          }
        }
        output: SearchInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/insights/search': {
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
            AccountIds: AwsAccountId[]
            StartTimeRange: { FromTime?: {} | undefined; ToTime?: {} | undefined }
            Filters?:
              | {
                  Severities?: {} | undefined
                  Statuses?: {} | undefined
                  ResourceCollection?: ResourceCollection | undefined
                  ServiceCollection?: ServiceCollection | undefined
                }
              | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            Type: 'REACTIVE' | 'PROACTIVE'
          }
        }
        output: SearchOrganizationInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource-collections': {
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
            Action: 'ADD' | 'REMOVE'
            ResourceCollection: {
              CloudFormation?: { StackNames?: {} | undefined } | undefined
              Tags?: {} | undefined
            }
          }
        }
        output: UpdateResourceCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
