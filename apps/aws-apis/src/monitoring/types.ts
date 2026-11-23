type AlarmName = string
type DeleteAlarmsInput = { AlarmNames: {} }
type Dimension = { Name: {}; Value: {} }
type DeleteAnomalyDetectorOutput = { [x: string]: unknown }
type DeleteAnomalyDetectorInput = {
  Namespace?: {} | undefined
  MetricName?: {} | undefined
  Dimensions?: {} | undefined
  Stat?: {} | undefined
  SingleMetricAnomalyDetector?:
    | {
        Namespace?: {} | undefined
        MetricName?: {} | undefined
        Dimensions?: {} | undefined
        Stat?: {} | undefined
      }
    | undefined
  MetricMathAnomalyDetector?: { MetricDataQueries?: {} | undefined } | undefined
}
type DashboardName = string
type DeleteDashboardsOutput = { [x: string]: unknown }
type DeleteDashboardsInput = { DashboardNames: {} }
type InsightRuleName = string
type DeleteInsightRulesOutput = { Failures?: {} | undefined }
type DeleteInsightRulesInput = { RuleNames: {} }
type DeleteMetricStreamOutput = { [x: string]: unknown }
type DeleteMetricStreamInput = { Name: {} }
type AlarmType = 'CompositeAlarm' | 'MetricAlarm'
type DescribeAlarmHistoryOutput = { AlarmHistoryItems?: {} | undefined; NextToken?: {} | undefined }
type DescribeAlarmHistoryInput = {
  AlarmName?: {} | undefined
  AlarmTypes?: {} | undefined
  HistoryItemType?: {} | undefined
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
  ScanBy?: {} | undefined
}
type DescribeAlarmsOutput = {
  CompositeAlarms?: {} | undefined
  MetricAlarms?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAlarmsInput = {
  AlarmNames?: {} | undefined
  AlarmNamePrefix?: {} | undefined
  AlarmTypes?: {} | undefined
  ChildrenOfAlarmName?: {} | undefined
  ParentsOfAlarmName?: {} | undefined
  StateValue?: {} | undefined
  ActionPrefix?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAlarmsForMetricOutput = { MetricAlarms?: {} | undefined }
type DescribeAlarmsForMetricInput = {
  MetricName: {}
  Namespace: {}
  Statistic?: {} | undefined
  ExtendedStatistic?: {} | undefined
  Dimensions?: {} | undefined
  Period?: {} | undefined
  Unit?: {} | undefined
}
type AnomalyDetectorType = 'SINGLE_METRIC' | 'METRIC_MATH'
type DescribeAnomalyDetectorsOutput = {
  AnomalyDetectors?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAnomalyDetectorsInput = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Namespace?: {} | undefined
  MetricName?: {} | undefined
  Dimensions?: {} | undefined
  AnomalyDetectorTypes?: {} | undefined
}
type DescribeInsightRulesOutput = { NextToken?: {} | undefined; InsightRules?: {} | undefined }
type DescribeInsightRulesInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type DisableAlarmActionsInput = { AlarmNames: {} }
type DisableInsightRulesOutput = { Failures?: {} | undefined }
type DisableInsightRulesInput = { RuleNames: {} }
type EnableAlarmActionsInput = { AlarmNames: {} }
type EnableInsightRulesOutput = { Failures?: {} | undefined }
type EnableInsightRulesInput = { RuleNames: {} }
type GetDashboardOutput = {
  DashboardArn?: {} | undefined
  DashboardBody?: {} | undefined
  DashboardName?: {} | undefined
}
type GetDashboardInput = { DashboardName: {} }
type InsightRuleMetricName = string
type GetInsightRuleReportOutput = {
  KeyLabels?: {} | undefined
  AggregationStatistic?: {} | undefined
  AggregateValue?: {} | undefined
  ApproximateUniqueCount?: {} | undefined
  Contributors?: {} | undefined
  MetricDatapoints?: {} | undefined
}
type GetInsightRuleReportInput = {
  RuleName: {}
  StartTime: {}
  EndTime: {}
  Period: {}
  MaxContributorCount?: {} | undefined
  Metrics?: {} | undefined
  OrderBy?: {} | undefined
}
type MetricDataQuery = {
  Id: {}
  MetricStat?:
    | {
        Metric: {
          Namespace?: {} | undefined
          MetricName?: {} | undefined
          Dimensions?: {} | undefined
        }
        Period: {}
        Stat: {}
        Unit?: {} | undefined
      }
    | undefined
  Expression?: {} | undefined
  Label?: {} | undefined
  ReturnData?: {} | undefined
  Period?: {} | undefined
  AccountId?: {} | undefined
}
type GetMetricDataOutput = {
  MetricDataResults?: {} | undefined
  NextToken?: {} | undefined
  Messages?: {} | undefined
}
type GetMetricDataInput = {
  MetricDataQueries: {}
  StartTime: {}
  EndTime: {}
  NextToken?: {} | undefined
  ScanBy?: {} | undefined
  MaxDatapoints?: {} | undefined
  LabelOptions?: { Timezone?: {} | undefined } | undefined
}
type Statistic = 'SampleCount' | 'Average' | 'Sum' | 'Minimum' | 'Maximum'
type ExtendedStatistic = string
type GetMetricStatisticsOutput = { Label?: {} | undefined; Datapoints?: {} | undefined }
type GetMetricStatisticsInput = {
  Namespace: {}
  MetricName: {}
  Dimensions?: {} | undefined
  StartTime: {}
  EndTime: {}
  Period: {}
  Statistics?: {} | undefined
  ExtendedStatistics?: {} | undefined
  Unit?: {} | undefined
}
type GetMetricStreamOutput = {
  Arn?: {} | undefined
  Name?: {} | undefined
  IncludeFilters?: {} | undefined
  ExcludeFilters?: {} | undefined
  FirehoseArn?: {} | undefined
  RoleArn?: {} | undefined
  State?: {} | undefined
  CreationDate?: {} | undefined
  LastUpdateDate?: {} | undefined
  OutputFormat?: {} | undefined
  StatisticsConfigurations?: {} | undefined
  IncludeLinkedAccountsMetrics?: {} | undefined
}
type GetMetricStreamInput = { Name: {} }
type GetMetricWidgetImageOutput = { MetricWidgetImage?: {} | undefined }
type GetMetricWidgetImageInput = { MetricWidget: {}; OutputFormat?: {} | undefined }
type ListDashboardsOutput = { DashboardEntries?: {} | undefined; NextToken?: {} | undefined }
type ListDashboardsInput = { DashboardNamePrefix?: {} | undefined; NextToken?: {} | undefined }
type ListManagedInsightRulesOutput = { ManagedRules?: {} | undefined; NextToken?: {} | undefined }
type ListManagedInsightRulesInput = {
  ResourceARN: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListMetricStreamsOutput = { NextToken?: {} | undefined; Entries?: {} | undefined }
type ListMetricStreamsInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type DimensionFilter = { Name: {}; Value?: {} | undefined }
type ListMetricsOutput = {
  Metrics?: {} | undefined
  NextToken?: {} | undefined
  OwningAccounts?: {} | undefined
}
type ListMetricsInput = {
  Namespace?: {} | undefined
  MetricName?: {} | undefined
  Dimensions?: {} | undefined
  NextToken?: {} | undefined
  RecentlyActive?: {} | undefined
  IncludeLinkedAccounts?: {} | undefined
  OwningAccount?: {} | undefined
}
type ListTagsForResourceOutput = { Tags?: {} | undefined }
type ListTagsForResourceInput = { ResourceARN: {} }
type PutAnomalyDetectorOutput = { [x: string]: unknown }
type PutAnomalyDetectorInput = {
  Namespace?: {} | undefined
  MetricName?: {} | undefined
  Dimensions?: {} | undefined
  Stat?: {} | undefined
  Configuration?:
    | { ExcludedTimeRanges?: {} | undefined; MetricTimezone?: {} | undefined }
    | undefined
  SingleMetricAnomalyDetector?:
    | {
        Namespace?: {} | undefined
        MetricName?: {} | undefined
        Dimensions?: {} | undefined
        Stat?: {} | undefined
      }
    | undefined
  MetricMathAnomalyDetector?: { MetricDataQueries?: {} | undefined } | undefined
}
type ResourceName = string
type Tag = { Key: {}; Value: {} }
type PutCompositeAlarmInput = {
  ActionsEnabled?: {} | undefined
  AlarmActions?: {} | undefined
  AlarmDescription?: {} | undefined
  AlarmName: {}
  AlarmRule: {}
  InsufficientDataActions?: {} | undefined
  OKActions?: {} | undefined
  Tags?: {} | undefined
  ActionsSuppressor?: {} | undefined
  ActionsSuppressorWaitPeriod?: {} | undefined
  ActionsSuppressorExtensionPeriod?: {} | undefined
}
type PutDashboardOutput = { DashboardValidationMessages?: {} | undefined }
type PutDashboardInput = { DashboardName: {}; DashboardBody: {} }
type PutInsightRuleOutput = { [x: string]: unknown }
type PutInsightRuleInput = {
  RuleName: {}
  RuleState?: {} | undefined
  RuleDefinition: {}
  Tags?: {} | undefined
}
type ManagedRule = { TemplateName: {}; ResourceARN: {}; Tags?: {} | undefined }
type PutManagedInsightRulesOutput = { Failures?: {} | undefined }
type PutManagedInsightRulesInput = { ManagedRules: {} }
type PutMetricAlarmInput = {
  AlarmName: {}
  AlarmDescription?: {} | undefined
  ActionsEnabled?: {} | undefined
  OKActions?: {} | undefined
  AlarmActions?: {} | undefined
  InsufficientDataActions?: {} | undefined
  MetricName?: {} | undefined
  Namespace?: {} | undefined
  Statistic?: {} | undefined
  ExtendedStatistic?: {} | undefined
  Dimensions?: {} | undefined
  Period?: {} | undefined
  Unit?: {} | undefined
  EvaluationPeriods: {}
  DatapointsToAlarm?: {} | undefined
  Threshold?: {} | undefined
  ComparisonOperator: {}
  TreatMissingData?: {} | undefined
  EvaluateLowSampleCountPercentile?: {} | undefined
  Metrics?: {} | undefined
  Tags?: {} | undefined
  ThresholdMetricId?: {} | undefined
}
type MetricDatum = {
  MetricName: {}
  Dimensions?: {} | undefined
  Timestamp?: {} | undefined
  Value?: {} | undefined
  StatisticValues?: { SampleCount: {}; Sum: {}; Minimum: {}; Maximum: {} } | undefined
  Values?: {} | undefined
  Counts?: {} | undefined
  Unit?: {} | undefined
  StorageResolution?: {} | undefined
}
type PutMetricDataInput = { Namespace: {}; MetricData: {} }
type MetricStreamFilter = { Namespace?: {} | undefined; MetricNames?: {} | undefined }
type MetricStreamStatisticsConfiguration = { IncludeMetrics: {}; AdditionalStatistics: {} }
type PutMetricStreamOutput = { Arn?: {} | undefined }
type PutMetricStreamInput = {
  Name: {}
  IncludeFilters?: {} | undefined
  ExcludeFilters?: {} | undefined
  FirehoseArn: {}
  RoleArn: {}
  OutputFormat: {}
  Tags?: {} | undefined
  StatisticsConfigurations?: {} | undefined
  IncludeLinkedAccountsMetrics?: {} | undefined
}
type SetAlarmStateInput = {
  AlarmName: {}
  StateValue: {}
  StateReason: {}
  StateReasonData?: {} | undefined
}
type MetricStreamName = string
type StartMetricStreamsOutput = { [x: string]: unknown }
type StartMetricStreamsInput = { Names: {} }
type StopMetricStreamsOutput = { [x: string]: unknown }
type StopMetricStreamsInput = { Names: {} }
type TagResourceOutput = { [x: string]: unknown }
type TagResourceInput = { ResourceARN: {}; Tags: {} }
type TagKey = string
type UntagResourceOutput = { [x: string]: unknown }
type UntagResourceInput = { ResourceARN: {}; TagKeys: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=DeleteAlarms': {
      $get: {
        input: {
          query: { AlarmNames: AlarmName[]; Action: 'DeleteAlarms'; Version: '2010-08-01' }
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
        input: { query: { Action: 'DeleteAlarms'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAlarmsInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteAnomalyDetector': {
      $get: {
        input: {
          query: {
            Namespace?: string | undefined
            MetricName?: string | undefined
            Dimensions?: Dimension[] | undefined
            Stat?: string | undefined
            SingleMetricAnomalyDetector?:
              | {
                  Namespace?: {} | undefined
                  MetricName?: {} | undefined
                  Dimensions?: {} | undefined
                  Stat?: {} | undefined
                }
              | undefined
            MetricMathAnomalyDetector?: { MetricDataQueries?: {} | undefined } | undefined
            Action: 'DeleteAnomalyDetector'
            Version: '2010-08-01'
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
        output: DeleteAnomalyDetectorOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteAnomalyDetector'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAnomalyDetectorInput }
        output: DeleteAnomalyDetectorOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDashboards': {
      $get: {
        input: {
          query: {
            DashboardNames: DashboardName[]
            Action: 'DeleteDashboards'
            Version: '2010-08-01'
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
        output: DeleteDashboardsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteDashboards'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDashboardsInput }
        output: DeleteDashboardsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteInsightRules': {
      $get: {
        input: {
          query: {
            RuleNames: InsightRuleName[]
            Action: 'DeleteInsightRules'
            Version: '2010-08-01'
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
        output: DeleteInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteInsightRules'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInsightRulesInput }
        output: DeleteInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteMetricStream': {
      $get: {
        input: { query: { Name: string; Action: 'DeleteMetricStream'; Version: '2010-08-01' } } & {
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
        output: DeleteMetricStreamOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteMetricStream'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMetricStreamInput }
        output: DeleteMetricStreamOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAlarmHistory': {
      $get: {
        input: {
          query: {
            AlarmName?: string | undefined
            AlarmTypes?: AlarmType[] | undefined
            HistoryItemType?: 'ConfigurationUpdate' | 'StateUpdate' | 'Action' | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            ScanBy?: 'TimestampDescending' | 'TimestampAscending' | undefined
            Action: 'DescribeAlarmHistory'
            Version: '2010-08-01'
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
        output: DescribeAlarmHistoryOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeAlarmHistory'
            Version: '2010-08-01'
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
        } & { json: DescribeAlarmHistoryInput }
        output: DescribeAlarmHistoryOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAlarms': {
      $get: {
        input: {
          query: {
            AlarmNames?: AlarmName[] | undefined
            AlarmNamePrefix?: string | undefined
            AlarmTypes?: AlarmType[] | undefined
            ChildrenOfAlarmName?: string | undefined
            ParentsOfAlarmName?: string | undefined
            StateValue?: 'OK' | 'ALARM' | 'INSUFFICIENT_DATA' | undefined
            ActionPrefix?: string | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeAlarms'
            Version: '2010-08-01'
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
        output: DescribeAlarmsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeAlarms'
            Version: '2010-08-01'
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
        } & { json: DescribeAlarmsInput }
        output: DescribeAlarmsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAlarmsForMetric': {
      $get: {
        input: {
          query: {
            MetricName: string
            Namespace: string
            Statistic?: 'SampleCount' | 'Average' | 'Sum' | 'Minimum' | 'Maximum' | undefined
            ExtendedStatistic?: string | undefined
            Dimensions?: Dimension[] | undefined
            Period?: number | undefined
            Unit?:
              | 'Seconds'
              | 'Microseconds'
              | 'Milliseconds'
              | 'Bytes'
              | 'Kilobytes'
              | 'Megabytes'
              | 'Gigabytes'
              | 'Terabytes'
              | 'Bits'
              | 'Kilobits'
              | 'Megabits'
              | 'Gigabits'
              | 'Terabits'
              | 'Percent'
              | 'Count'
              | 'Bytes/Second'
              | 'Kilobytes/Second'
              | 'Megabytes/Second'
              | 'Gigabytes/Second'
              | 'Terabytes/Second'
              | 'Bits/Second'
              | 'Kilobits/Second'
              | 'Megabits/Second'
              | 'Gigabits/Second'
              | 'Terabits/Second'
              | 'Count/Second'
              | 'None'
              | undefined
            Action: 'DescribeAlarmsForMetric'
            Version: '2010-08-01'
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
        output: DescribeAlarmsForMetricOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAlarmsForMetric'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAlarmsForMetricInput }
        output: DescribeAlarmsForMetricOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAnomalyDetectors': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Namespace?: string | undefined
            MetricName?: string | undefined
            Dimensions?: Dimension[] | undefined
            AnomalyDetectorTypes?: AnomalyDetectorType[] | undefined
            Action: 'DescribeAnomalyDetectors'
            Version: '2010-08-01'
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
        output: DescribeAnomalyDetectorsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeAnomalyDetectors'
            Version: '2010-08-01'
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
        } & { json: DescribeAnomalyDetectorsInput }
        output: DescribeAnomalyDetectorsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeInsightRules': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'DescribeInsightRules'
            Version: '2010-08-01'
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
        output: DescribeInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeInsightRules'
            Version: '2010-08-01'
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
        } & { json: DescribeInsightRulesInput }
        output: DescribeInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DisableAlarmActions': {
      $get: {
        input: {
          query: { AlarmNames: AlarmName[]; Action: 'DisableAlarmActions'; Version: '2010-08-01' }
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
        input: { query: { Action: 'DisableAlarmActions'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableAlarmActionsInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DisableInsightRules': {
      $get: {
        input: {
          query: {
            RuleNames: InsightRuleName[]
            Action: 'DisableInsightRules'
            Version: '2010-08-01'
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
        output: DisableInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DisableInsightRules'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableInsightRulesInput }
        output: DisableInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=EnableAlarmActions': {
      $get: {
        input: {
          query: { AlarmNames: AlarmName[]; Action: 'EnableAlarmActions'; Version: '2010-08-01' }
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
        input: { query: { Action: 'EnableAlarmActions'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableAlarmActionsInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=EnableInsightRules': {
      $get: {
        input: {
          query: {
            RuleNames: InsightRuleName[]
            Action: 'EnableInsightRules'
            Version: '2010-08-01'
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
        output: EnableInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'EnableInsightRules'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableInsightRulesInput }
        output: EnableInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetDashboard': {
      $get: {
        input: {
          query: { DashboardName: string; Action: 'GetDashboard'; Version: '2010-08-01' }
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
        output: GetDashboardOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetDashboard'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDashboardInput }
        output: GetDashboardOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetInsightRuleReport': {
      $get: {
        input: {
          query: {
            RuleName: string
            StartTime: string
            EndTime: string
            Period: number
            MaxContributorCount?: number | undefined
            Metrics?: InsightRuleMetricName[] | undefined
            OrderBy?: string | undefined
            Action: 'GetInsightRuleReport'
            Version: '2010-08-01'
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
        output: GetInsightRuleReportOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetInsightRuleReport'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInsightRuleReportInput }
        output: GetInsightRuleReportOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetMetricData': {
      $get: {
        input: {
          query: {
            MetricDataQueries: MetricDataQuery[]
            StartTime: string
            EndTime: string
            NextToken?: string | undefined
            ScanBy?: 'TimestampDescending' | 'TimestampAscending' | undefined
            MaxDatapoints?: number | undefined
            LabelOptions?: { Timezone?: {} | undefined } | undefined
            Action: 'GetMetricData'
            Version: '2010-08-01'
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
        output: GetMetricDataOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxDatapoints?: string | undefined
            NextToken?: string | undefined
            Action: 'GetMetricData'
            Version: '2010-08-01'
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
        } & { json: GetMetricDataInput }
        output: GetMetricDataOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetMetricStatistics': {
      $get: {
        input: {
          query: {
            Namespace: string
            MetricName: string
            Dimensions?: Dimension[] | undefined
            StartTime: string
            EndTime: string
            Period: number
            Statistics?: Statistic[] | undefined
            ExtendedStatistics?: ExtendedStatistic[] | undefined
            Unit?:
              | 'Seconds'
              | 'Microseconds'
              | 'Milliseconds'
              | 'Bytes'
              | 'Kilobytes'
              | 'Megabytes'
              | 'Gigabytes'
              | 'Terabytes'
              | 'Bits'
              | 'Kilobits'
              | 'Megabits'
              | 'Gigabits'
              | 'Terabits'
              | 'Percent'
              | 'Count'
              | 'Bytes/Second'
              | 'Kilobytes/Second'
              | 'Megabytes/Second'
              | 'Gigabytes/Second'
              | 'Terabytes/Second'
              | 'Bits/Second'
              | 'Kilobits/Second'
              | 'Megabits/Second'
              | 'Gigabits/Second'
              | 'Terabits/Second'
              | 'Count/Second'
              | 'None'
              | undefined
            Action: 'GetMetricStatistics'
            Version: '2010-08-01'
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
        output: GetMetricStatisticsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetMetricStatistics'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMetricStatisticsInput }
        output: GetMetricStatisticsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetMetricStream': {
      $get: {
        input: { query: { Name: string; Action: 'GetMetricStream'; Version: '2010-08-01' } } & {
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
        output: GetMetricStreamOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetMetricStream'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMetricStreamInput }
        output: GetMetricStreamOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetMetricWidgetImage': {
      $get: {
        input: {
          query: {
            MetricWidget: string
            OutputFormat?: string | undefined
            Action: 'GetMetricWidgetImage'
            Version: '2010-08-01'
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
        output: GetMetricWidgetImageOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetMetricWidgetImage'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMetricWidgetImageInput }
        output: GetMetricWidgetImageOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListDashboards': {
      $get: {
        input: {
          query: {
            DashboardNamePrefix?: string | undefined
            NextToken?: string | undefined
            Action: 'ListDashboards'
            Version: '2010-08-01'
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
        output: ListDashboardsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListDashboards'; Version: '2010-08-01' }
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
        } & { json: ListDashboardsInput }
        output: ListDashboardsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListManagedInsightRules': {
      $get: {
        input: {
          query: {
            ResourceARN: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'ListManagedInsightRules'
            Version: '2010-08-01'
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
        output: ListManagedInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListManagedInsightRules'
            Version: '2010-08-01'
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
        } & { json: ListManagedInsightRulesInput }
        output: ListManagedInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListMetricStreams': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'ListMetricStreams'
            Version: '2010-08-01'
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
        output: ListMetricStreamsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListMetricStreams'
            Version: '2010-08-01'
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
        } & { json: ListMetricStreamsInput }
        output: ListMetricStreamsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListMetrics': {
      $get: {
        input: {
          query: {
            Namespace?: string | undefined
            MetricName?: string | undefined
            Dimensions?: DimensionFilter[] | undefined
            NextToken?: string | undefined
            RecentlyActive?: 'PT3H' | undefined
            IncludeLinkedAccounts?: boolean | undefined
            OwningAccount?: string | undefined
            Action: 'ListMetrics'
            Version: '2010-08-01'
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
        output: ListMetricsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListMetrics'; Version: '2010-08-01' }
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
        } & { json: ListMetricsInput }
        output: ListMetricsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get: {
        input: {
          query: { ResourceARN: string; Action: 'ListTagsForResource'; Version: '2010-08-01' }
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
        output: ListTagsForResourceOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListTagsForResource'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceInput }
        output: ListTagsForResourceOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutAnomalyDetector': {
      $get: {
        input: {
          query: {
            Namespace?: string | undefined
            MetricName?: string | undefined
            Dimensions?: Dimension[] | undefined
            Stat?: string | undefined
            Configuration?:
              | { ExcludedTimeRanges?: {} | undefined; MetricTimezone?: {} | undefined }
              | undefined
            SingleMetricAnomalyDetector?:
              | {
                  Namespace?: {} | undefined
                  MetricName?: {} | undefined
                  Dimensions?: {} | undefined
                  Stat?: {} | undefined
                }
              | undefined
            MetricMathAnomalyDetector?: { MetricDataQueries?: {} | undefined } | undefined
            Action: 'PutAnomalyDetector'
            Version: '2010-08-01'
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
        output: PutAnomalyDetectorOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutAnomalyDetector'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAnomalyDetectorInput }
        output: PutAnomalyDetectorOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutCompositeAlarm': {
      $get: {
        input: {
          query: {
            ActionsEnabled?: boolean | undefined
            AlarmActions?: ResourceName[] | undefined
            AlarmDescription?: string | undefined
            AlarmName: string
            AlarmRule: string
            InsufficientDataActions?: ResourceName[] | undefined
            OKActions?: ResourceName[] | undefined
            Tags?: Tag[] | undefined
            ActionsSuppressor?: string | undefined
            ActionsSuppressorWaitPeriod?: number | undefined
            ActionsSuppressorExtensionPeriod?: number | undefined
            Action: 'PutCompositeAlarm'
            Version: '2010-08-01'
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
        input: { query: { Action: 'PutCompositeAlarm'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutCompositeAlarmInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutDashboard': {
      $get: {
        input: {
          query: {
            DashboardName: string
            DashboardBody: string
            Action: 'PutDashboard'
            Version: '2010-08-01'
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
        output: PutDashboardOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutDashboard'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutDashboardInput }
        output: PutDashboardOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutInsightRule': {
      $get: {
        input: {
          query: {
            RuleName: string
            RuleState?: string | undefined
            RuleDefinition: string
            Tags?: Tag[] | undefined
            Action: 'PutInsightRule'
            Version: '2010-08-01'
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
        output: PutInsightRuleOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutInsightRule'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInsightRuleInput }
        output: PutInsightRuleOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutManagedInsightRules': {
      $get: {
        input: {
          query: {
            ManagedRules: ManagedRule[]
            Action: 'PutManagedInsightRules'
            Version: '2010-08-01'
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
        output: PutManagedInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutManagedInsightRules'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutManagedInsightRulesInput }
        output: PutManagedInsightRulesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutMetricAlarm': {
      $get: {
        input: {
          query: {
            AlarmName: string
            AlarmDescription?: string | undefined
            ActionsEnabled?: boolean | undefined
            OKActions?: ResourceName[] | undefined
            AlarmActions?: ResourceName[] | undefined
            InsufficientDataActions?: ResourceName[] | undefined
            MetricName?: string | undefined
            Namespace?: string | undefined
            Statistic?: 'SampleCount' | 'Average' | 'Sum' | 'Minimum' | 'Maximum' | undefined
            ExtendedStatistic?: string | undefined
            Dimensions?: Dimension[] | undefined
            Period?: number | undefined
            Unit?:
              | 'Seconds'
              | 'Microseconds'
              | 'Milliseconds'
              | 'Bytes'
              | 'Kilobytes'
              | 'Megabytes'
              | 'Gigabytes'
              | 'Terabytes'
              | 'Bits'
              | 'Kilobits'
              | 'Megabits'
              | 'Gigabits'
              | 'Terabits'
              | 'Percent'
              | 'Count'
              | 'Bytes/Second'
              | 'Kilobytes/Second'
              | 'Megabytes/Second'
              | 'Gigabytes/Second'
              | 'Terabytes/Second'
              | 'Bits/Second'
              | 'Kilobits/Second'
              | 'Megabits/Second'
              | 'Gigabits/Second'
              | 'Terabits/Second'
              | 'Count/Second'
              | 'None'
              | undefined
            EvaluationPeriods: number
            DatapointsToAlarm?: number | undefined
            Threshold?: number | undefined
            ComparisonOperator:
              | 'GreaterThanOrEqualToThreshold'
              | 'GreaterThanThreshold'
              | 'LessThanThreshold'
              | 'LessThanOrEqualToThreshold'
              | 'LessThanLowerOrGreaterThanUpperThreshold'
              | 'LessThanLowerThreshold'
              | 'GreaterThanUpperThreshold'
            TreatMissingData?: string | undefined
            EvaluateLowSampleCountPercentile?: string | undefined
            Metrics?: MetricDataQuery[] | undefined
            Tags?: Tag[] | undefined
            ThresholdMetricId?: string | undefined
            Action: 'PutMetricAlarm'
            Version: '2010-08-01'
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
        input: { query: { Action: 'PutMetricAlarm'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutMetricAlarmInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutMetricData': {
      $get: {
        input: {
          query: {
            Namespace: string
            MetricData: MetricDatum[]
            Action: 'PutMetricData'
            Version: '2010-08-01'
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
        input: { query: { Action: 'PutMetricData'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutMetricDataInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutMetricStream': {
      $get: {
        input: {
          query: {
            Name: string
            IncludeFilters?: MetricStreamFilter[] | undefined
            ExcludeFilters?: MetricStreamFilter[] | undefined
            FirehoseArn: string
            RoleArn: string
            OutputFormat: 'json' | 'opentelemetry0.7'
            Tags?: Tag[] | undefined
            StatisticsConfigurations?: MetricStreamStatisticsConfiguration[] | undefined
            IncludeLinkedAccountsMetrics?: boolean | undefined
            Action: 'PutMetricStream'
            Version: '2010-08-01'
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
        output: PutMetricStreamOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutMetricStream'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutMetricStreamInput }
        output: PutMetricStreamOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetAlarmState': {
      $get: {
        input: {
          query: {
            AlarmName: string
            StateValue: 'OK' | 'ALARM' | 'INSUFFICIENT_DATA'
            StateReason: string
            StateReasonData?: string | undefined
            Action: 'SetAlarmState'
            Version: '2010-08-01'
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
        input: { query: { Action: 'SetAlarmState'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetAlarmStateInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=StartMetricStreams': {
      $get: {
        input: {
          query: { Names: MetricStreamName[]; Action: 'StartMetricStreams'; Version: '2010-08-01' }
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
        output: StartMetricStreamsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartMetricStreams'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartMetricStreamsInput }
        output: StartMetricStreamsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StopMetricStreams': {
      $get: {
        input: {
          query: { Names: MetricStreamName[]; Action: 'StopMetricStreams'; Version: '2010-08-01' }
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
        output: StopMetricStreamsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StopMetricStreams'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopMetricStreamsInput }
        output: StopMetricStreamsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=TagResource': {
      $get: {
        input: {
          query: { ResourceARN: string; Tags: Tag[]; Action: 'TagResource'; Version: '2010-08-01' }
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
        output: TagResourceOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'TagResource'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceInput }
        output: TagResourceOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UntagResource': {
      $get: {
        input: {
          query: {
            ResourceARN: string
            TagKeys: TagKey[]
            Action: 'UntagResource'
            Version: '2010-08-01'
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
        output: UntagResourceOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UntagResource'; Version: '2010-08-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceInput }
        output: UntagResourceOutput
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
