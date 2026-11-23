type CostCategoryName = string
type Expression = {
  Or?: {} | undefined
  And?: {} | undefined
  Not?: {} | undefined
  Dimensions?:
    | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
    | undefined
  Tags?:
    | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
    | undefined
  CostCategories?:
    | { Key?: CostCategoryName | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
    | undefined
}
type CreateAnomalyMonitorRequest = {
  AnomalyMonitor: {
    MonitorArn?: {} | undefined
    MonitorName: {}
    CreationDate?: {} | undefined
    LastUpdatedDate?: {} | undefined
    LastEvaluatedDate?: {} | undefined
    MonitorType: {}
    MonitorDimension?: {} | undefined
    MonitorSpecification?: Expression | undefined
    DimensionalValueCount?: {} | undefined
  }
  ResourceTags?: {} | undefined
}
type CreateAnomalyMonitorResponse = { MonitorArn: {} }
type CreateAnomalySubscriptionRequest = {
  AnomalySubscription: {
    SubscriptionArn?: {} | undefined
    AccountId?: {} | undefined
    MonitorArnList: {}
    Subscribers: {}
    Threshold?: {} | undefined
    Frequency: {}
    SubscriptionName: {}
    ThresholdExpression?:
      | {
          Or?: {} | undefined
          And?: {} | undefined
          Not?: {} | undefined
          Dimensions?:
            | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
            | undefined
          Tags?:
            | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
            | undefined
          CostCategories?:
            | {
                Key?: CostCategoryName | undefined
                Values?: {} | undefined
                MatchOptions?: {} | undefined
              }
            | undefined
        }
      | undefined
  }
  ResourceTags?: {} | undefined
}
type CreateAnomalySubscriptionResponse = { SubscriptionArn: {} }
type CostCategoryRuleVersion = 'CostCategoryExpression.v1'
type CostCategoryValue = string
type CreateCostCategoryDefinitionRequest = {
  Name: CostCategoryName
  EffectiveStart?: {} | undefined
  RuleVersion: CostCategoryRuleVersion
  Rules: {}
  DefaultValue?: CostCategoryValue | undefined
  SplitChargeRules?: {} | undefined
  ResourceTags?: {} | undefined
}
type CreateCostCategoryDefinitionResponse = {
  CostCategoryArn?: {} | undefined
  EffectiveStart?: {} | undefined
}
type DeleteAnomalyMonitorRequest = { MonitorArn: {} }
type DeleteAnomalyMonitorResponse = { [x: string]: unknown }
type DeleteAnomalySubscriptionRequest = { SubscriptionArn: {} }
type DeleteAnomalySubscriptionResponse = { [x: string]: unknown }
type DeleteCostCategoryDefinitionRequest = { CostCategoryArn: {} }
type DeleteCostCategoryDefinitionResponse = {
  CostCategoryArn?: {} | undefined
  EffectiveEnd?: {} | undefined
}
type DescribeCostCategoryDefinitionRequest = { CostCategoryArn: {}; EffectiveOn?: {} | undefined }
type CostCategory = {
  CostCategoryArn: {}
  EffectiveStart: {}
  EffectiveEnd?: {} | undefined
  Name: CostCategoryName
  RuleVersion: CostCategoryRuleVersion
  Rules: {}
  SplitChargeRules?: {} | undefined
  ProcessingStatus?: {} | undefined
  DefaultValue?: CostCategoryValue | undefined
}
type DescribeCostCategoryDefinitionResponse = { CostCategory?: CostCategory | undefined }
type GetAnomaliesRequest = {
  MonitorArn?: {} | undefined
  DateInterval: { StartDate: {}; EndDate?: {} | undefined }
  Feedback?: {} | undefined
  TotalImpact?: { NumericOperator: {}; StartValue: {}; EndValue?: {} | undefined } | undefined
  NextPageToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetAnomaliesResponse = { Anomalies: {}; NextPageToken?: {} | undefined }
type GetAnomalyMonitorsRequest = {
  MonitorArnList?: {} | undefined
  NextPageToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetAnomalyMonitorsResponse = { AnomalyMonitors: {}; NextPageToken?: {} | undefined }
type GetAnomalySubscriptionsRequest = {
  SubscriptionArnList?: {} | undefined
  MonitorArn?: {} | undefined
  NextPageToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetAnomalySubscriptionsResponse = { AnomalySubscriptions: {}; NextPageToken?: {} | undefined }
type GetCostAndUsageRequest = {
  TimePeriod: { Start: {}; End: {} }
  Granularity: {}
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  Metrics: {}
  GroupBy?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetCostAndUsageResponse = {
  NextPageToken?: {} | undefined
  GroupDefinitions?: {} | undefined
  ResultsByTime?: {} | undefined
  DimensionValueAttributes?: {} | undefined
}
type GetCostAndUsageWithResourcesRequest = {
  TimePeriod: { Start: {}; End: {} }
  Granularity: {}
  Filter: {
    Or?: {} | undefined
    And?: {} | undefined
    Not?: {} | undefined
    Dimensions?:
      | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
      | undefined
    Tags?:
      | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
      | undefined
    CostCategories?:
      | {
          Key?: CostCategoryName | undefined
          Values?: {} | undefined
          MatchOptions?: {} | undefined
        }
      | undefined
  }
  Metrics?: {} | undefined
  GroupBy?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetCostAndUsageWithResourcesResponse = {
  NextPageToken?: {} | undefined
  GroupDefinitions?: {} | undefined
  ResultsByTime?: {} | undefined
  DimensionValueAttributes?: {} | undefined
}
type DateInterval = { Start: {}; End: {} }
type GetCostCategoriesRequest = {
  SearchString?: {} | undefined
  TimePeriod: DateInterval
  CostCategoryName?: CostCategoryName | undefined
  Filter?: Expression | undefined
  SortBy?: {} | undefined
  MaxResults?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetCostCategoriesResponse = {
  NextPageToken?: {} | undefined
  CostCategoryNames?: {} | undefined
  CostCategoryValues?: {} | undefined
  ReturnSize: {}
  TotalSize: {}
}
type GetCostForecastRequest = {
  TimePeriod: { Start: {}; End: {} }
  Metric: {}
  Granularity: {}
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  PredictionIntervalLevel?: {} | undefined
}
type GetCostForecastResponse = {
  Total?: { Amount?: {} | undefined; Unit?: {} | undefined } | undefined
  ForecastResultsByTime?: {} | undefined
}
type GetDimensionValuesRequest = {
  SearchString?: {} | undefined
  TimePeriod: { Start: {}; End: {} }
  Dimension: {}
  Context?: {} | undefined
  Filter?: Expression | undefined
  SortBy?: {} | undefined
  MaxResults?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetDimensionValuesResponse = {
  DimensionValues: {}
  ReturnSize: {}
  TotalSize: {}
  NextPageToken?: {} | undefined
}
type GetReservationCoverageRequest = {
  TimePeriod: { Start: {}; End: {} }
  GroupBy?: {} | undefined
  Granularity?: {} | undefined
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  Metrics?: {} | undefined
  NextPageToken?: {} | undefined
  SortBy?: { Key: {}; SortOrder?: {} | undefined } | undefined
  MaxResults?: {} | undefined
}
type GetReservationCoverageResponse = {
  CoveragesByTime: {}
  Total?:
    | {
        CoverageHours?:
          | {
              OnDemandHours?: {} | undefined
              ReservedHours?: {} | undefined
              TotalRunningHours?: {} | undefined
              CoverageHoursPercentage?: {} | undefined
            }
          | undefined
        CoverageNormalizedUnits?:
          | {
              OnDemandNormalizedUnits?: {} | undefined
              ReservedNormalizedUnits?: {} | undefined
              TotalRunningNormalizedUnits?: {} | undefined
              CoverageNormalizedUnitsPercentage?: {} | undefined
            }
          | undefined
        CoverageCost?: { OnDemandCost?: {} | undefined } | undefined
      }
    | undefined
  NextPageToken?: {} | undefined
}
type GetReservationPurchaseRecommendationRequest = {
  AccountId?: {} | undefined
  Service: {}
  Filter?: Expression | undefined
  AccountScope?: {} | undefined
  LookbackPeriodInDays?: {} | undefined
  TermInYears?: {} | undefined
  PaymentOption?: {} | undefined
  ServiceSpecification?:
    | { EC2Specification?: { OfferingClass?: {} | undefined } | undefined }
    | undefined
  PageSize?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetReservationPurchaseRecommendationResponse = {
  Metadata?: { RecommendationId?: {} | undefined; GenerationTimestamp?: {} | undefined } | undefined
  Recommendations?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetReservationUtilizationRequest = {
  TimePeriod: { Start: {}; End: {} }
  GroupBy?: {} | undefined
  Granularity?: {} | undefined
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  SortBy?: { Key: {}; SortOrder?: {} | undefined } | undefined
  NextPageToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetReservationUtilizationResponse = {
  UtilizationsByTime: {}
  Total?:
    | {
        UtilizationPercentage?: {} | undefined
        UtilizationPercentageInUnits?: {} | undefined
        PurchasedHours?: {} | undefined
        PurchasedUnits?: {} | undefined
        TotalActualHours?: {} | undefined
        TotalActualUnits?: {} | undefined
        UnusedHours?: {} | undefined
        UnusedUnits?: {} | undefined
        OnDemandCostOfRIHoursUsed?: {} | undefined
        NetRISavings?: {} | undefined
        TotalPotentialRISavings?: {} | undefined
        AmortizedUpfrontFee?: {} | undefined
        AmortizedRecurringFee?: {} | undefined
        TotalAmortizedFee?: {} | undefined
        RICostForUnusedHours?: {} | undefined
        RealizedSavings?: {} | undefined
        UnrealizedSavings?: {} | undefined
      }
    | undefined
  NextPageToken?: {} | undefined
}
type GetRightsizingRecommendationRequest = {
  Filter?: Expression | undefined
  Configuration?: { RecommendationTarget: {}; BenefitsConsidered: {} } | undefined
  Service: {}
  PageSize?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetRightsizingRecommendationResponse = {
  Metadata?:
    | {
        RecommendationId?: {} | undefined
        GenerationTimestamp?: {} | undefined
        LookbackPeriodInDays?: {} | undefined
        AdditionalMetadata?: {} | undefined
      }
    | undefined
  Summary?:
    | {
        TotalRecommendationCount?: {} | undefined
        EstimatedTotalMonthlySavingsAmount?: {} | undefined
        SavingsCurrencyCode?: {} | undefined
        SavingsPercentage?: {} | undefined
      }
    | undefined
  RightsizingRecommendations?: {} | undefined
  NextPageToken?: {} | undefined
  Configuration?: { RecommendationTarget: {}; BenefitsConsidered: {} } | undefined
}
type GetSavingsPlansCoverageRequest = {
  TimePeriod: { Start: {}; End: {} }
  GroupBy?: {} | undefined
  Granularity?: {} | undefined
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  Metrics?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortBy?: { Key: {}; SortOrder?: {} | undefined } | undefined
}
type GetSavingsPlansCoverageResponse = { SavingsPlansCoverages: {}; NextToken?: {} | undefined }
type GetSavingsPlansPurchaseRecommendationRequest = {
  SavingsPlansType: {}
  TermInYears: {}
  PaymentOption: {}
  AccountScope?: {} | undefined
  NextPageToken?: {} | undefined
  PageSize?: {} | undefined
  LookbackPeriodInDays: {}
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetSavingsPlansPurchaseRecommendationResponse = {
  Metadata?:
    | {
        RecommendationId?: {} | undefined
        GenerationTimestamp?: {} | undefined
        AdditionalMetadata?: {} | undefined
      }
    | undefined
  SavingsPlansPurchaseRecommendation?:
    | {
        AccountScope?: {} | undefined
        SavingsPlansType?: {} | undefined
        TermInYears?: {} | undefined
        PaymentOption?: {} | undefined
        LookbackPeriodInDays?: {} | undefined
        SavingsPlansPurchaseRecommendationDetails?: {} | undefined
        SavingsPlansPurchaseRecommendationSummary?:
          | {
              EstimatedROI?: {} | undefined
              CurrencyCode?: {} | undefined
              EstimatedTotalCost?: {} | undefined
              CurrentOnDemandSpend?: {} | undefined
              EstimatedSavingsAmount?: {} | undefined
              TotalRecommendationCount?: {} | undefined
              DailyCommitmentToPurchase?: {} | undefined
              HourlyCommitmentToPurchase?: {} | undefined
              EstimatedSavingsPercentage?: {} | undefined
              EstimatedMonthlySavingsAmount?: {} | undefined
              EstimatedOnDemandCostWithCurrentCommitment?: {} | undefined
            }
          | undefined
      }
    | undefined
  NextPageToken?: {} | undefined
}
type GetSavingsPlansUtilizationRequest = {
  TimePeriod: { Start: {}; End: {} }
  Granularity?: {} | undefined
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  SortBy?: { Key: {}; SortOrder?: {} | undefined } | undefined
}
type GetSavingsPlansUtilizationResponse = {
  SavingsPlansUtilizationsByTime?: {} | undefined
  Total: {
    Utilization: {
      TotalCommitment?: {} | undefined
      UsedCommitment?: {} | undefined
      UnusedCommitment?: {} | undefined
      UtilizationPercentage?: {} | undefined
    }
    Savings?: { NetSavings?: {} | undefined; OnDemandCostEquivalent?: {} | undefined } | undefined
    AmortizedCommitment?:
      | {
          AmortizedRecurringCommitment?: {} | undefined
          AmortizedUpfrontCommitment?: {} | undefined
          TotalAmortizedCommitment?: {} | undefined
        }
      | undefined
  }
}
type GetSavingsPlansUtilizationDetailsRequest = {
  TimePeriod: { Start: {}; End: {} }
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  DataType?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  SortBy?: { Key: {}; SortOrder?: {} | undefined } | undefined
}
type GetSavingsPlansUtilizationDetailsResponse = {
  SavingsPlansUtilizationDetails: {}
  Total?:
    | {
        Utilization: {
          TotalCommitment?: {} | undefined
          UsedCommitment?: {} | undefined
          UnusedCommitment?: {} | undefined
          UtilizationPercentage?: {} | undefined
        }
        Savings?:
          | { NetSavings?: {} | undefined; OnDemandCostEquivalent?: {} | undefined }
          | undefined
        AmortizedCommitment?:
          | {
              AmortizedRecurringCommitment?: {} | undefined
              AmortizedUpfrontCommitment?: {} | undefined
              TotalAmortizedCommitment?: {} | undefined
            }
          | undefined
      }
    | undefined
  TimePeriod: DateInterval
  NextToken?: {} | undefined
}
type GetTagsRequest = {
  SearchString?: {} | undefined
  TimePeriod: { Start: {}; End: {} }
  TagKey?: {} | undefined
  Filter?: Expression | undefined
  SortBy?: {} | undefined
  MaxResults?: {} | undefined
  NextPageToken?: {} | undefined
}
type GetTagsResponse = { NextPageToken?: {} | undefined; Tags: {}; ReturnSize: {}; TotalSize: {} }
type GetUsageForecastRequest = {
  TimePeriod: { Start: {}; End: {} }
  Metric: {}
  Granularity: {}
  Filter?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
  PredictionIntervalLevel?: {} | undefined
}
type GetUsageForecastResponse = {
  Total?: { Amount?: {} | undefined; Unit?: {} | undefined } | undefined
  ForecastResultsByTime?: {} | undefined
}
type ListCostAllocationTagsRequest = {
  Status?: {} | undefined
  TagKeys?: {} | undefined
  Type?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListCostAllocationTagsResponse = {
  CostAllocationTags?: {} | undefined
  NextToken?: {} | undefined
}
type ListCostCategoryDefinitionsRequest = {
  EffectiveOn?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListCostCategoryDefinitionsResponse = {
  CostCategoryReferences?: {} | undefined
  NextToken?: {} | undefined
}
type ListSavingsPlansPurchaseRecommendationGenerationRequest = {
  GenerationStatus?: {} | undefined
  RecommendationIds?: {} | undefined
  PageSize?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListSavingsPlansPurchaseRecommendationGenerationResponse = {
  GenerationSummaryList?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { ResourceTags?: {} | undefined }
type ProvideAnomalyFeedbackRequest = { AnomalyId: {}; Feedback: {} }
type ProvideAnomalyFeedbackResponse = { AnomalyId: {} }
type StartSavingsPlansPurchaseRecommendationGenerationRequest = { [x: string]: unknown }
type StartSavingsPlansPurchaseRecommendationGenerationResponse = {
  RecommendationId?: {} | undefined
  GenerationStartedTime?: {} | undefined
  EstimatedCompletionTime?: {} | undefined
}
type TagResourceRequest = { ResourceArn: {}; ResourceTags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; ResourceTagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAnomalyMonitorRequest = { MonitorArn: {}; MonitorName?: {} | undefined }
type UpdateAnomalyMonitorResponse = { MonitorArn: {} }
type UpdateAnomalySubscriptionRequest = {
  SubscriptionArn: {}
  Threshold?: {} | undefined
  Frequency?: {} | undefined
  MonitorArnList?: {} | undefined
  Subscribers?: {} | undefined
  SubscriptionName?: {} | undefined
  ThresholdExpression?:
    | {
        Or?: {} | undefined
        And?: {} | undefined
        Not?: {} | undefined
        Dimensions?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        Tags?:
          | { Key?: {} | undefined; Values?: {} | undefined; MatchOptions?: {} | undefined }
          | undefined
        CostCategories?:
          | {
              Key?: CostCategoryName | undefined
              Values?: {} | undefined
              MatchOptions?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateAnomalySubscriptionResponse = { SubscriptionArn: {} }
type UpdateCostAllocationTagsStatusRequest = { CostAllocationTagsStatus: {} }
type UpdateCostAllocationTagsStatusResponse = { Errors?: {} | undefined }
type UpdateCostCategoryDefinitionRequest = {
  CostCategoryArn: {}
  EffectiveStart?: {} | undefined
  RuleVersion: CostCategoryRuleVersion
  Rules: {}
  DefaultValue?: CostCategoryValue | undefined
  SplitChargeRules?: {} | undefined
}
type UpdateCostCategoryDefinitionResponse = {
  CostCategoryArn?: {} | undefined
  EffectiveStart?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.CreateAnomalyMonitor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAnomalyMonitorRequest }
        output: CreateAnomalyMonitorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.CreateAnomalySubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAnomalySubscriptionRequest }
        output: CreateAnomalySubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.CreateCostCategoryDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCostCategoryDefinitionRequest }
        output: CreateCostCategoryDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.DeleteAnomalyMonitor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAnomalyMonitorRequest }
        output: DeleteAnomalyMonitorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.DeleteAnomalySubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAnomalySubscriptionRequest }
        output: DeleteAnomalySubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.DeleteCostCategoryDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCostCategoryDefinitionRequest }
        output: DeleteCostCategoryDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.DescribeCostCategoryDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCostCategoryDefinitionRequest }
        output: DescribeCostCategoryDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalies': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetAnomalies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAnomaliesRequest }
        output: GetAnomaliesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetAnomalyMonitors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAnomalyMonitorsRequest }
        output: GetAnomalyMonitorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetAnomalySubscriptions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAnomalySubscriptionsRequest }
        output: GetAnomalySubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetCostAndUsage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCostAndUsageRequest }
        output: GetCostAndUsageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetCostAndUsageWithResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCostAndUsageWithResourcesRequest }
        output: GetCostAndUsageWithResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostCategories': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetCostCategories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCostCategoriesRequest }
        output: GetCostCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetCostForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCostForecastRequest }
        output: GetCostForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetDimensionValues'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDimensionValuesRequest }
        output: GetDimensionValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetReservationCoverage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReservationCoverageRequest }
        output: GetReservationCoverageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetReservationPurchaseRecommendation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReservationPurchaseRecommendationRequest }
        output: GetReservationPurchaseRecommendationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetReservationUtilization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReservationUtilizationRequest }
        output: GetReservationUtilizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetRightsizingRecommendation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRightsizingRecommendationRequest }
        output: GetRightsizingRecommendationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetSavingsPlansCoverage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSavingsPlansCoverageRequest }
        output: GetSavingsPlansCoverageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSavingsPlansPurchaseRecommendationRequest }
        output: GetSavingsPlansPurchaseRecommendationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetSavingsPlansUtilization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSavingsPlansUtilizationRequest }
        output: GetSavingsPlansUtilizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetSavingsPlansUtilizationDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSavingsPlansUtilizationDetailsRequest }
        output: GetSavingsPlansUtilizationDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTagsRequest }
        output: GetTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.GetUsageForecast'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUsageForecastRequest }
        output: GetUsageForecastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.ListCostAllocationTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCostAllocationTagsRequest }
        output: ListCostAllocationTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.ListCostCategoryDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCostCategoryDefinitionsRequest }
        output: ListCostCategoryDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSavingsPlansPurchaseRecommendationGenerationRequest }
        output: ListSavingsPlansPurchaseRecommendationGenerationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.ListTagsForResource'
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
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.ProvideAnomalyFeedback'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ProvideAnomalyFeedbackRequest }
        output: ProvideAnomalyFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSavingsPlansPurchaseRecommendationGenerationRequest }
        output: StartSavingsPlansPurchaseRecommendationGenerationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.TagResource'
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
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.UntagResource'
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
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.UpdateAnomalyMonitor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAnomalyMonitorRequest }
        output: UpdateAnomalyMonitorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.UpdateAnomalySubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAnomalySubscriptionRequest }
        output: UpdateAnomalySubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.UpdateCostAllocationTagsStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCostAllocationTagsStatusRequest }
        output: UpdateCostAllocationTagsStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSInsightsIndexService.UpdateCostCategoryDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCostCategoryDefinitionRequest }
        output: UpdateCostCategoryDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
