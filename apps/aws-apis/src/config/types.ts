type BatchGetAggregateResourceConfigRequest = {
  ConfigurationAggregatorName: {}
  ResourceIdentifiers: {}
}
type BatchGetAggregateResourceConfigResponse = {
  BaseConfigurationItems?: {} | undefined
  UnprocessedResourceIdentifiers?: {} | undefined
}
type ValidationException = { [x: string]: unknown }
type NoSuchConfigurationAggregatorException = { [x: string]: unknown }
type BatchGetResourceConfigRequest = { resourceKeys: {} }
type BatchGetResourceConfigResponse = {
  baseConfigurationItems?: {} | undefined
  unprocessedResourceKeys?: {} | undefined
}
type NoAvailableConfigurationRecorderException = { [x: string]: unknown }
type DeleteAggregationAuthorizationRequest = { AuthorizedAccountId: {}; AuthorizedAwsRegion: {} }
type InvalidParameterValueException = { [x: string]: unknown }
type DeleteConfigRuleRequest = { ConfigRuleName: {} }
type NoSuchConfigRuleException = { [x: string]: unknown }
type ResourceInUseException = { [x: string]: unknown }
type DeleteConfigurationAggregatorRequest = { ConfigurationAggregatorName: {} }
type DeleteConfigurationRecorderRequest = { ConfigurationRecorderName: {} }
type NoSuchConfigurationRecorderException = { [x: string]: unknown }
type DeleteConformancePackRequest = { ConformancePackName: {} }
type NoSuchConformancePackException = { [x: string]: unknown }
type DeleteDeliveryChannelRequest = { DeliveryChannelName: {} }
type NoSuchDeliveryChannelException = { [x: string]: unknown }
type LastDeliveryChannelDeleteFailedException = { [x: string]: unknown }
type DeleteEvaluationResultsRequest = { ConfigRuleName: {} }
type DeleteEvaluationResultsResponse = { [x: string]: unknown }
type DeleteOrganizationConfigRuleRequest = { OrganizationConfigRuleName: {} }
type NoSuchOrganizationConfigRuleException = { [x: string]: unknown }
type OrganizationAccessDeniedException = { [x: string]: unknown }
type DeleteOrganizationConformancePackRequest = { OrganizationConformancePackName: {} }
type NoSuchOrganizationConformancePackException = { [x: string]: unknown }
type DeletePendingAggregationRequestRequest = { RequesterAccountId: {}; RequesterAwsRegion: {} }
type DeleteRemediationConfigurationRequest = { ConfigRuleName: {}; ResourceType?: {} | undefined }
type DeleteRemediationConfigurationResponse = { [x: string]: unknown }
type NoSuchRemediationConfigurationException = { [x: string]: unknown }
type RemediationInProgressException = { [x: string]: unknown }
type InsufficientPermissionsException = { [x: string]: unknown }
type DeleteRemediationExceptionsRequest = { ConfigRuleName: {}; ResourceKeys: {} }
type DeleteRemediationExceptionsResponse = { FailedBatches?: {} | undefined }
type NoSuchRemediationExceptionException = { [x: string]: unknown }
type DeleteResourceConfigRequest = { ResourceType: {}; ResourceId: {} }
type NoRunningConfigurationRecorderException = { [x: string]: unknown }
type DeleteRetentionConfigurationRequest = { RetentionConfigurationName: {} }
type NoSuchRetentionConfigurationException = { [x: string]: unknown }
type DeleteStoredQueryRequest = { QueryName: {} }
type DeleteStoredQueryResponse = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type DeliverConfigSnapshotRequest = { deliveryChannelName: {} }
type DeliverConfigSnapshotResponse = { configSnapshotId?: {} | undefined }
type DescribeAggregateComplianceByConfigRulesRequest = {
  ConfigurationAggregatorName: {}
  Filters?:
    | {
        ConfigRuleName?: {} | undefined
        ComplianceType?: {} | undefined
        AccountId?: {} | undefined
        AwsRegion?: {} | undefined
      }
    | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAggregateComplianceByConfigRulesResponse = {
  AggregateComplianceByConfigRules?: {} | undefined
  NextToken?: {} | undefined
}
type InvalidLimitException = { [x: string]: unknown }
type InvalidNextTokenException = { [x: string]: unknown }
type DescribeAggregateComplianceByConformancePacksRequest = {
  ConfigurationAggregatorName: {}
  Filters?:
    | {
        ConformancePackName?: {} | undefined
        ComplianceType?: {} | undefined
        AccountId?: {} | undefined
        AwsRegion?: {} | undefined
      }
    | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAggregateComplianceByConformancePacksResponse = {
  AggregateComplianceByConformancePacks?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAggregationAuthorizationsRequest = {
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAggregationAuthorizationsResponse = {
  AggregationAuthorizations?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeComplianceByConfigRuleRequest = {
  ConfigRuleNames?: {} | undefined
  ComplianceTypes?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeComplianceByConfigRuleResponse = {
  ComplianceByConfigRules?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeComplianceByResourceRequest = {
  ResourceType?: {} | undefined
  ResourceId?: {} | undefined
  ComplianceTypes?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeComplianceByResourceResponse = {
  ComplianceByResources?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConfigRuleEvaluationStatusRequest = {
  ConfigRuleNames?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeConfigRuleEvaluationStatusResponse = {
  ConfigRulesEvaluationStatus?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConfigRulesRequest = {
  ConfigRuleNames?: {} | undefined
  NextToken?: {} | undefined
  Filters?: { EvaluationMode?: {} | undefined } | undefined
}
type DescribeConfigRulesResponse = { ConfigRules?: {} | undefined; NextToken?: {} | undefined }
type DescribeConfigurationAggregatorSourcesStatusRequest = {
  ConfigurationAggregatorName: {}
  UpdateStatus?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeConfigurationAggregatorSourcesStatusResponse = {
  AggregatedSourceStatusList?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConfigurationAggregatorsRequest = {
  ConfigurationAggregatorNames?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeConfigurationAggregatorsResponse = {
  ConfigurationAggregators?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConfigurationRecorderStatusRequest = { ConfigurationRecorderNames?: {} | undefined }
type DescribeConfigurationRecorderStatusResponse = { ConfigurationRecordersStatus?: {} | undefined }
type DescribeConfigurationRecordersRequest = { ConfigurationRecorderNames?: {} | undefined }
type DescribeConfigurationRecordersResponse = { ConfigurationRecorders?: {} | undefined }
type DescribeConformancePackComplianceRequest = {
  ConformancePackName: {}
  Filters?: { ConfigRuleNames?: {} | undefined; ComplianceType?: {} | undefined } | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConformancePackComplianceResponse = {
  ConformancePackName: {}
  ConformancePackRuleComplianceList: {}
  NextToken?: {} | undefined
}
type NoSuchConfigRuleInConformancePackException = { [x: string]: unknown }
type DescribeConformancePackStatusRequest = {
  ConformancePackNames?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConformancePackStatusResponse = {
  ConformancePackStatusDetails?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConformancePacksRequest = {
  ConformancePackNames?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConformancePacksResponse = {
  ConformancePackDetails?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeDeliveryChannelStatusRequest = { DeliveryChannelNames?: {} | undefined }
type DescribeDeliveryChannelStatusResponse = { DeliveryChannelsStatus?: {} | undefined }
type DescribeDeliveryChannelsRequest = { DeliveryChannelNames?: {} | undefined }
type DescribeDeliveryChannelsResponse = { DeliveryChannels?: {} | undefined }
type DescribeOrganizationConfigRuleStatusesRequest = {
  OrganizationConfigRuleNames?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConfigRuleStatusesResponse = {
  OrganizationConfigRuleStatuses?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConfigRulesRequest = {
  OrganizationConfigRuleNames?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConfigRulesResponse = {
  OrganizationConfigRules?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConformancePackStatusesRequest = {
  OrganizationConformancePackNames?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConformancePackStatusesResponse = {
  OrganizationConformancePackStatuses?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConformancePacksRequest = {
  OrganizationConformancePackNames?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrganizationConformancePacksResponse = {
  OrganizationConformancePacks?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePendingAggregationRequestsRequest = {
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePendingAggregationRequestsResponse = {
  PendingAggregationRequests?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRemediationConfigurationsRequest = { ConfigRuleNames: {} }
type DescribeRemediationConfigurationsResponse = { RemediationConfigurations?: {} | undefined }
type DescribeRemediationExceptionsRequest = {
  ConfigRuleName: {}
  ResourceKeys?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRemediationExceptionsResponse = {
  RemediationExceptions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRemediationExecutionStatusRequest = {
  ConfigRuleName: {}
  ResourceKeys?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRemediationExecutionStatusResponse = {
  RemediationExecutionStatuses?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRetentionConfigurationsRequest = {
  RetentionConfigurationNames?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRetentionConfigurationsResponse = {
  RetentionConfigurations?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateComplianceDetailsByConfigRuleRequest = {
  ConfigurationAggregatorName: {}
  ConfigRuleName: {}
  AccountId: {}
  AwsRegion: {}
  ComplianceType?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateComplianceDetailsByConfigRuleResponse = {
  AggregateEvaluationResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateConfigRuleComplianceSummaryRequest = {
  ConfigurationAggregatorName: {}
  Filters?: { AccountId?: {} | undefined; AwsRegion?: {} | undefined } | undefined
  GroupByKey?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateConfigRuleComplianceSummaryResponse = {
  GroupByKey?: {} | undefined
  AggregateComplianceCounts?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateConformancePackComplianceSummaryRequest = {
  ConfigurationAggregatorName: {}
  Filters?: { AccountId?: {} | undefined; AwsRegion?: {} | undefined } | undefined
  GroupByKey?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateConformancePackComplianceSummaryResponse = {
  AggregateConformancePackComplianceSummaries?: {} | undefined
  GroupByKey?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateDiscoveredResourceCountsRequest = {
  ConfigurationAggregatorName: {}
  Filters?:
    | { ResourceType?: {} | undefined; AccountId?: {} | undefined; Region?: {} | undefined }
    | undefined
  GroupByKey?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateDiscoveredResourceCountsResponse = {
  TotalDiscoveredResources: {}
  GroupByKey?: {} | undefined
  GroupedResourceCounts?: {} | undefined
  NextToken?: {} | undefined
}
type GetAggregateResourceConfigRequest = {
  ConfigurationAggregatorName: {}
  ResourceIdentifier: {
    SourceAccountId: {}
    SourceRegion: {}
    ResourceId: {}
    ResourceType: {}
    ResourceName?: {} | undefined
  }
}
type GetAggregateResourceConfigResponse = {
  ConfigurationItem?:
    | {
        version?: {} | undefined
        accountId?: {} | undefined
        configurationItemCaptureTime?: {} | undefined
        configurationItemStatus?: {} | undefined
        configurationStateId?: {} | undefined
        configurationItemMD5Hash?: {} | undefined
        arn?: {} | undefined
        resourceType?: {} | undefined
        resourceId?: {} | undefined
        resourceName?: {} | undefined
        awsRegion?: {} | undefined
        availabilityZone?: {} | undefined
        resourceCreationTime?: {} | undefined
        tags?: {} | undefined
        relatedEvents?: {} | undefined
        relationships?: {} | undefined
        configuration?: {} | undefined
        supplementaryConfiguration?: {} | undefined
      }
    | undefined
}
type OversizedConfigurationItemException = { [x: string]: unknown }
type ResourceNotDiscoveredException = { [x: string]: unknown }
type GetComplianceDetailsByConfigRuleRequest = {
  ConfigRuleName: {}
  ComplianceTypes?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetComplianceDetailsByConfigRuleResponse = {
  EvaluationResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetComplianceDetailsByResourceRequest = {
  ResourceType?: {} | undefined
  ResourceId?: {} | undefined
  ComplianceTypes?: {} | undefined
  NextToken?: {} | undefined
  ResourceEvaluationId?: {} | undefined
}
type GetComplianceDetailsByResourceResponse = {
  EvaluationResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetComplianceSummaryByConfigRuleResponse = {
  ComplianceSummary?:
    | {
        CompliantResourceCount?:
          | { CappedCount?: {} | undefined; CapExceeded?: {} | undefined }
          | undefined
        NonCompliantResourceCount?:
          | { CappedCount?: {} | undefined; CapExceeded?: {} | undefined }
          | undefined
        ComplianceSummaryTimestamp?: {} | undefined
      }
    | undefined
}
type GetComplianceSummaryByResourceTypeRequest = { ResourceTypes?: {} | undefined }
type GetComplianceSummaryByResourceTypeResponse = {
  ComplianceSummariesByResourceType?: {} | undefined
}
type GetConformancePackComplianceDetailsRequest = {
  ConformancePackName: {}
  Filters?:
    | {
        ConfigRuleNames?: {} | undefined
        ComplianceType?: {} | undefined
        ResourceType?: {} | undefined
        ResourceIds?: {} | undefined
      }
    | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetConformancePackComplianceDetailsResponse = {
  ConformancePackName: {}
  ConformancePackRuleEvaluationResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetConformancePackComplianceSummaryRequest = {
  ConformancePackNames: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetConformancePackComplianceSummaryResponse = {
  ConformancePackComplianceSummaryList?: {} | undefined
  NextToken?: {} | undefined
}
type GetCustomRulePolicyRequest = { ConfigRuleName?: {} | undefined }
type GetCustomRulePolicyResponse = { PolicyText?: {} | undefined }
type GetDiscoveredResourceCountsRequest = {
  resourceTypes?: {} | undefined
  limit?: {} | undefined
  nextToken?: {} | undefined
}
type GetDiscoveredResourceCountsResponse = {
  totalDiscoveredResources?: {} | undefined
  resourceCounts?: {} | undefined
  nextToken?: {} | undefined
}
type GetOrganizationConfigRuleDetailedStatusRequest = {
  OrganizationConfigRuleName: {}
  Filters?: { AccountId?: {} | undefined; MemberAccountRuleStatus?: {} | undefined } | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetOrganizationConfigRuleDetailedStatusResponse = {
  OrganizationConfigRuleDetailedStatus?: {} | undefined
  NextToken?: {} | undefined
}
type GetOrganizationConformancePackDetailedStatusRequest = {
  OrganizationConformancePackName: {}
  Filters?: { AccountId?: {} | undefined; Status?: {} | undefined } | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type GetOrganizationConformancePackDetailedStatusResponse = {
  OrganizationConformancePackDetailedStatuses?: {} | undefined
  NextToken?: {} | undefined
}
type GetOrganizationCustomRulePolicyRequest = { OrganizationConfigRuleName: {} }
type GetOrganizationCustomRulePolicyResponse = { PolicyText?: {} | undefined }
type GetResourceConfigHistoryRequest = {
  resourceType: {}
  resourceId: {}
  laterTime?: {} | undefined
  earlierTime?: {} | undefined
  chronologicalOrder?: {} | undefined
  limit?: {} | undefined
  nextToken?: {} | undefined
}
type GetResourceConfigHistoryResponse = {
  configurationItems?: {} | undefined
  nextToken?: {} | undefined
}
type InvalidTimeRangeException = { [x: string]: unknown }
type GetResourceEvaluationSummaryRequest = { ResourceEvaluationId: {} }
type GetResourceEvaluationSummaryResponse = {
  ResourceEvaluationId?: {} | undefined
  EvaluationMode?: {} | undefined
  EvaluationStatus?: { Status: {}; FailureReason?: {} | undefined } | undefined
  EvaluationStartTimestamp?: {} | undefined
  Compliance?: {} | undefined
  EvaluationContext?: { EvaluationContextIdentifier?: {} | undefined } | undefined
  ResourceDetails?:
    | {
        ResourceId: {}
        ResourceType: {}
        ResourceConfiguration: {}
        ResourceConfigurationSchemaType?: {} | undefined
      }
    | undefined
}
type GetStoredQueryRequest = { QueryName: {} }
type GetStoredQueryResponse = {
  StoredQuery?:
    | {
        QueryId?: {} | undefined
        QueryArn?: {} | undefined
        QueryName: {}
        Description?: {} | undefined
        Expression?: {} | undefined
      }
    | undefined
}
type ListAggregateDiscoveredResourcesRequest = {
  ConfigurationAggregatorName: {}
  ResourceType: {}
  Filters?:
    | {
        AccountId?: {} | undefined
        ResourceId?: {} | undefined
        ResourceName?: {} | undefined
        Region?: {} | undefined
      }
    | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListAggregateDiscoveredResourcesResponse = {
  ResourceIdentifiers?: {} | undefined
  NextToken?: {} | undefined
}
type ListConformancePackComplianceScoresRequest = {
  Filters?: { ConformancePackNames: {} } | undefined
  SortOrder?: {} | undefined
  SortBy?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListConformancePackComplianceScoresResponse = {
  NextToken?: {} | undefined
  ConformancePackComplianceScores: {}
}
type ListDiscoveredResourcesRequest = {
  resourceType: {}
  resourceIds?: {} | undefined
  resourceName?: {} | undefined
  limit?: {} | undefined
  includeDeletedResources?: {} | undefined
  nextToken?: {} | undefined
}
type ListDiscoveredResourcesResponse = {
  resourceIdentifiers?: {} | undefined
  nextToken?: {} | undefined
}
type ListResourceEvaluationsRequest = {
  Filters?:
    | {
        EvaluationMode?: {} | undefined
        TimeWindow?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
        EvaluationContextIdentifier?: {} | undefined
      }
    | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourceEvaluationsResponse = {
  ResourceEvaluations?: {} | undefined
  NextToken?: {} | undefined
}
type ListStoredQueriesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListStoredQueriesResponse = {
  StoredQueryMetadata?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = {
  ResourceArn: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type PutAggregationAuthorizationRequest = {
  AuthorizedAccountId: {}
  AuthorizedAwsRegion: {}
  Tags?: {} | undefined
}
type PutAggregationAuthorizationResponse = {
  AggregationAuthorization?:
    | {
        AggregationAuthorizationArn?: {} | undefined
        AuthorizedAccountId?: {} | undefined
        AuthorizedAwsRegion?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type PutConfigRuleRequest = {
  ConfigRule: {
    ConfigRuleName?: {} | undefined
    ConfigRuleArn?: {} | undefined
    ConfigRuleId?: {} | undefined
    Description?: {} | undefined
    Scope?:
      | {
          ComplianceResourceTypes?: {} | undefined
          TagKey?: {} | undefined
          TagValue?: {} | undefined
          ComplianceResourceId?: {} | undefined
        }
      | undefined
    Source: {
      Owner: {}
      SourceIdentifier?: {} | undefined
      SourceDetails?: {} | undefined
      CustomPolicyDetails?:
        | { PolicyRuntime: {}; PolicyText: {}; EnableDebugLogDelivery?: {} | undefined }
        | undefined
    }
    InputParameters?: {} | undefined
    MaximumExecutionFrequency?: {} | undefined
    ConfigRuleState?: {} | undefined
    CreatedBy?: {} | undefined
    EvaluationModes?: {} | undefined
  }
  Tags?: {} | undefined
}
type MaxNumberOfConfigRulesExceededException = { [x: string]: unknown }
type PutConfigurationAggregatorRequest = {
  ConfigurationAggregatorName: {}
  AccountAggregationSources?: {} | undefined
  OrganizationAggregationSource?:
    | { RoleArn: {}; AwsRegions?: {} | undefined; AllAwsRegions?: {} | undefined }
    | undefined
  Tags?: {} | undefined
}
type PutConfigurationAggregatorResponse = {
  ConfigurationAggregator?:
    | {
        ConfigurationAggregatorName?: {} | undefined
        ConfigurationAggregatorArn?: {} | undefined
        AccountAggregationSources?: {} | undefined
        OrganizationAggregationSource?:
          | { RoleArn: {}; AwsRegions?: {} | undefined; AllAwsRegions?: {} | undefined }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        CreatedBy?: {} | undefined
      }
    | undefined
}
type LimitExceededException = { [x: string]: unknown }
type InvalidRoleException = { [x: string]: unknown }
type NoAvailableOrganizationException = { [x: string]: unknown }
type OrganizationAllFeaturesNotEnabledException = { [x: string]: unknown }
type PutConfigurationRecorderRequest = {
  ConfigurationRecorder: {
    name?: {} | undefined
    roleARN?: {} | undefined
    recordingGroup?:
      | {
          allSupported?: {} | undefined
          includeGlobalResourceTypes?: {} | undefined
          resourceTypes?: {} | undefined
        }
      | undefined
  }
}
type MaxNumberOfConfigurationRecordersExceededException = { [x: string]: unknown }
type InvalidConfigurationRecorderNameException = { [x: string]: unknown }
type InvalidRecordingGroupException = { [x: string]: unknown }
type PutConformancePackRequest = {
  ConformancePackName: {}
  TemplateS3Uri?: {} | undefined
  TemplateBody?: {} | undefined
  DeliveryS3Bucket?: {} | undefined
  DeliveryS3KeyPrefix?: {} | undefined
  ConformancePackInputParameters?: {} | undefined
  TemplateSSMDocumentDetails?: { DocumentName: {}; DocumentVersion?: {} | undefined } | undefined
}
type PutConformancePackResponse = { ConformancePackArn?: {} | undefined }
type ConformancePackTemplateValidationException = { [x: string]: unknown }
type MaxNumberOfConformancePacksExceededException = { [x: string]: unknown }
type PutDeliveryChannelRequest = {
  DeliveryChannel: {
    name?: {} | undefined
    s3BucketName?: {} | undefined
    s3KeyPrefix?: {} | undefined
    s3KmsKeyArn?: {} | undefined
    snsTopicARN?: {} | undefined
    configSnapshotDeliveryProperties?: { deliveryFrequency?: {} | undefined } | undefined
  }
}
type MaxNumberOfDeliveryChannelsExceededException = { [x: string]: unknown }
type InvalidDeliveryChannelNameException = { [x: string]: unknown }
type NoSuchBucketException = { [x: string]: unknown }
type InvalidS3KeyPrefixException = { [x: string]: unknown }
type InvalidS3KmsKeyArnException = { [x: string]: unknown }
type InvalidSNSTopicARNException = { [x: string]: unknown }
type InsufficientDeliveryPolicyException = { [x: string]: unknown }
type PutEvaluationsRequest = {
  Evaluations?: {} | undefined
  ResultToken: {}
  TestMode?: {} | undefined
}
type PutEvaluationsResponse = { FailedEvaluations?: {} | undefined }
type InvalidResultTokenException = { [x: string]: unknown }
type PutExternalEvaluationRequest = {
  ConfigRuleName: {}
  ExternalEvaluation: {
    ComplianceResourceType: {}
    ComplianceResourceId: {}
    ComplianceType: {}
    Annotation?: {} | undefined
    OrderingTimestamp: {}
  }
}
type PutExternalEvaluationResponse = { [x: string]: unknown }
type PutOrganizationConfigRuleRequest = {
  OrganizationConfigRuleName: {}
  OrganizationManagedRuleMetadata?:
    | {
        Description?: {} | undefined
        RuleIdentifier: {}
        InputParameters?: {} | undefined
        MaximumExecutionFrequency?: {} | undefined
        ResourceTypesScope?: {} | undefined
        ResourceIdScope?: {} | undefined
        TagKeyScope?: {} | undefined
        TagValueScope?: {} | undefined
      }
    | undefined
  OrganizationCustomRuleMetadata?:
    | {
        Description?: {} | undefined
        LambdaFunctionArn: {}
        OrganizationConfigRuleTriggerTypes: {}
        InputParameters?: {} | undefined
        MaximumExecutionFrequency?: {} | undefined
        ResourceTypesScope?: {} | undefined
        ResourceIdScope?: {} | undefined
        TagKeyScope?: {} | undefined
        TagValueScope?: {} | undefined
      }
    | undefined
  ExcludedAccounts?: {} | undefined
  OrganizationCustomPolicyRuleMetadata?:
    | {
        Description?: {} | undefined
        OrganizationConfigRuleTriggerTypes?: {} | undefined
        InputParameters?: {} | undefined
        MaximumExecutionFrequency?: {} | undefined
        ResourceTypesScope?: {} | undefined
        ResourceIdScope?: {} | undefined
        TagKeyScope?: {} | undefined
        TagValueScope?: {} | undefined
        PolicyRuntime: {}
        PolicyText: {}
        DebugLogDeliveryAccounts?: {} | undefined
      }
    | undefined
}
type PutOrganizationConfigRuleResponse = { OrganizationConfigRuleArn?: {} | undefined }
type MaxNumberOfOrganizationConfigRulesExceededException = { [x: string]: unknown }
type PutOrganizationConformancePackRequest = {
  OrganizationConformancePackName: {}
  TemplateS3Uri?: {} | undefined
  TemplateBody?: {} | undefined
  DeliveryS3Bucket?: {} | undefined
  DeliveryS3KeyPrefix?: {} | undefined
  ConformancePackInputParameters?: {} | undefined
  ExcludedAccounts?: {} | undefined
}
type PutOrganizationConformancePackResponse = { OrganizationConformancePackArn?: {} | undefined }
type MaxNumberOfOrganizationConformancePacksExceededException = { [x: string]: unknown }
type OrganizationConformancePackTemplateValidationException = { [x: string]: unknown }
type PutRemediationConfigurationsRequest = { RemediationConfigurations: {} }
type PutRemediationConfigurationsResponse = { FailedBatches?: {} | undefined }
type PutRemediationExceptionsRequest = {
  ConfigRuleName: {}
  ResourceKeys: {}
  Message?: {} | undefined
  ExpirationTime?: {} | undefined
}
type PutRemediationExceptionsResponse = { FailedBatches?: {} | undefined }
type PutResourceConfigRequest = {
  ResourceType: {}
  SchemaVersionId: {}
  ResourceId: {}
  ResourceName?: {} | undefined
  Configuration: {}
  Tags?: {} | undefined
}
type MaxActiveResourcesExceededException = { [x: string]: unknown }
type PutRetentionConfigurationRequest = { RetentionPeriodInDays: {} }
type PutRetentionConfigurationResponse = {
  RetentionConfiguration?: { Name: {}; RetentionPeriodInDays: {} } | undefined
}
type MaxNumberOfRetentionConfigurationsExceededException = { [x: string]: unknown }
type PutStoredQueryRequest = {
  StoredQuery: {
    QueryId?: {} | undefined
    QueryArn?: {} | undefined
    QueryName: {}
    Description?: {} | undefined
    Expression?: {} | undefined
  }
  Tags?: {} | undefined
}
type PutStoredQueryResponse = { QueryArn?: {} | undefined }
type TooManyTagsException = { [x: string]: unknown }
type ResourceConcurrentModificationException = { [x: string]: unknown }
type SelectAggregateResourceConfigRequest = {
  Expression: {}
  ConfigurationAggregatorName: {}
  Limit?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type QueryInfo = { SelectFields?: {} | undefined }
type SelectAggregateResourceConfigResponse = {
  Results?: {} | undefined
  QueryInfo?: QueryInfo | undefined
  NextToken?: {} | undefined
}
type InvalidExpressionException = { [x: string]: unknown }
type SelectResourceConfigRequest = {
  Expression: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type SelectResourceConfigResponse = {
  Results?: {} | undefined
  QueryInfo?: { SelectFields?: {} | undefined } | undefined
  NextToken?: {} | undefined
}
type StartConfigRulesEvaluationRequest = { ConfigRuleNames?: {} | undefined }
type StartConfigRulesEvaluationResponse = { [x: string]: unknown }
type StartConfigurationRecorderRequest = { ConfigurationRecorderName: {} }
type NoAvailableDeliveryChannelException = { [x: string]: unknown }
type StartRemediationExecutionRequest = { ConfigRuleName: {}; ResourceKeys: {} }
type StartRemediationExecutionResponse = {
  FailureMessage?: {} | undefined
  FailedItems?: {} | undefined
}
type StartResourceEvaluationRequest = {
  ResourceDetails: {
    ResourceId: {}
    ResourceType: {}
    ResourceConfiguration: {}
    ResourceConfigurationSchemaType?: {} | undefined
  }
  EvaluationContext?: { EvaluationContextIdentifier?: {} | undefined } | undefined
  EvaluationMode: {}
  EvaluationTimeout?: {} | undefined
  ClientToken?: {} | undefined
}
type StartResourceEvaluationResponse = { ResourceEvaluationId?: {} | undefined }
type IdempotentParameterMismatch = { [x: string]: unknown }
type StopConfigurationRecorderRequest = { ConfigurationRecorderName: {} }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.BatchGetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetAggregateResourceConfigRequest }
            output: BatchGetAggregateResourceConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.BatchGetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetAggregateResourceConfigRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.BatchGetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetAggregateResourceConfigRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.BatchGetResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetResourceConfigRequest }
            output: BatchGetResourceConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.BatchGetResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetResourceConfigRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.BatchGetResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetResourceConfigRequest }
            output: NoAvailableConfigurationRecorderException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteAggregationAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAggregationAuthorizationRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteAggregationAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAggregationAuthorizationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigRule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigRuleRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigRuleRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigRuleRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationAggregatorRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationAggregatorRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationRecorderRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConfigurationRecorderRequest }
            output: NoSuchConfigurationRecorderException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteConformancePack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConformancePackRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConformancePackRequest }
            output: NoSuchConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConformancePackRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeliveryChannelRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeliveryChannelRequest }
            output: NoSuchDeliveryChannelException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeliveryChannelRequest }
            output: LastDeliveryChannelDeleteFailedException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteEvaluationResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationResultsRequest }
            output: DeleteEvaluationResultsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteEvaluationResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationResultsRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteEvaluationResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEvaluationResultsRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConfigRuleRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConfigRuleRequest }
            output: NoSuchOrganizationConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConfigRuleRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConfigRuleRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConformancePackRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConformancePackRequest }
            output: NoSuchOrganizationConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConformancePackRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteOrganizationConformancePackRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeletePendingAggregationRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePendingAggregationRequestRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeletePendingAggregationRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePendingAggregationRequestRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationConfigurationRequest }
            output: DeleteRemediationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationConfigurationRequest }
            output: NoSuchRemediationConfigurationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationConfigurationRequest }
            output: RemediationInProgressException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationConfigurationRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationConfigurationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationExceptionsRequest }
            output: DeleteRemediationExceptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemediationExceptionsRequest }
            output: NoSuchRemediationExceptionException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteResourceConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceConfigRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceConfigRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceConfigRequest }
            output: NoRunningConfigurationRecorderException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRetentionConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRetentionConfigurationRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRetentionConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRetentionConfigurationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteRetentionConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRetentionConfigurationRequest }
            output: NoSuchRetentionConfigurationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeleteStoredQuery': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStoredQueryRequest }
            output: DeleteStoredQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStoredQueryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeleteStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStoredQueryRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeliverConfigSnapshot'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeliverConfigSnapshotRequest }
            output: DeliverConfigSnapshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeliverConfigSnapshot'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeliverConfigSnapshotRequest }
            output: NoSuchDeliveryChannelException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeliverConfigSnapshot'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeliverConfigSnapshotRequest }
            output: NoAvailableConfigurationRecorderException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DeliverConfigSnapshot'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeliverConfigSnapshotRequest }
            output: NoRunningConfigurationRecorderException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConfigRulesRequest }
            output: DescribeAggregateComplianceByConfigRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConfigRulesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConfigRulesRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConfigRulesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConfigRulesRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConformancePacksRequest }
            output: DescribeAggregateComplianceByConformancePacksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConformancePacksRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConformancePacksRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConformancePacksRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregateComplianceByConformancePacksRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregationAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregationAuthorizationsRequest }
            output: DescribeAggregationAuthorizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregationAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregationAuthorizationsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregationAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregationAuthorizationsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeAggregationAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAggregationAuthorizationsRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule': {
      $post:
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByConfigRuleRequest }
            output: DescribeComplianceByConfigRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByConfigRuleRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByConfigRuleRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByConfigRuleRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByResourceRequest }
            output: DescribeComplianceByResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByResourceRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeComplianceByResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComplianceByResourceRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRuleEvaluationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRuleEvaluationStatusRequest }
            output: DescribeConfigRuleEvaluationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRuleEvaluationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRuleEvaluationStatusRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRuleEvaluationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRuleEvaluationStatusRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRuleEvaluationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRuleEvaluationStatusRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigRules': {
      $post:
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRulesRequest }
            output: DescribeConfigRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRulesRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRulesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigRulesRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorSourcesStatusRequest }
            output: DescribeConfigurationAggregatorSourcesStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorSourcesStatusRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorSourcesStatusRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorSourcesStatusRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorSourcesStatusRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregators'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorsRequest }
            output: DescribeConfigurationAggregatorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregators'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregators'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorsRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregators'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationAggregators'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationAggregatorsRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationRecorderStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationRecorderStatusRequest }
            output: DescribeConfigurationRecorderStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationRecorderStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationRecorderStatusRequest }
            output: NoSuchConfigurationRecorderException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationRecorders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationRecordersRequest }
            output: DescribeConfigurationRecordersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConfigurationRecorders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConfigurationRecordersRequest }
            output: NoSuchConfigurationRecorderException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackCompliance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackComplianceRequest }
            output: DescribeConformancePackComplianceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackCompliance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackComplianceRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackCompliance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackComplianceRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackCompliance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackComplianceRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackCompliance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackComplianceRequest }
            output: NoSuchConfigRuleInConformancePackException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackCompliance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackComplianceRequest }
            output: NoSuchConformancePackException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackStatusRequest }
            output: DescribeConformancePackStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackStatusRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackStatusRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePackStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePackStatusRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePacks': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePacksRequest }
            output: DescribeConformancePacksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePacksRequest }
            output: NoSuchConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePacksRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePacksRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConformancePacksRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeDeliveryChannelStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeliveryChannelStatusRequest }
            output: DescribeDeliveryChannelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeDeliveryChannelStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeliveryChannelStatusRequest }
            output: NoSuchDeliveryChannelException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeDeliveryChannels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeliveryChannelsRequest }
            output: DescribeDeliveryChannelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeDeliveryChannels'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeliveryChannelsRequest }
            output: NoSuchDeliveryChannelException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRuleStatusesRequest }
            output: DescribeOrganizationConfigRuleStatusesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRuleStatusesRequest }
            output: NoSuchOrganizationConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRuleStatusesRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRuleStatusesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRuleStatusesRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRulesRequest }
            output: DescribeOrganizationConfigRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRulesRequest }
            output: NoSuchOrganizationConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRulesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRulesRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConfigRules'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConfigRulesRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePackStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePackStatusesRequest }
            output: DescribeOrganizationConformancePackStatusesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePackStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePackStatusesRequest }
            output: NoSuchOrganizationConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePackStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePackStatusesRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePackStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePackStatusesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePackStatuses'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePackStatusesRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePacksRequest }
            output: DescribeOrganizationConformancePacksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePacksRequest }
            output: NoSuchOrganizationConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePacksRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePacksRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeOrganizationConformancePacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeOrganizationConformancePacksRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribePendingAggregationRequests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePendingAggregationRequestsRequest }
            output: DescribePendingAggregationRequestsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribePendingAggregationRequests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePendingAggregationRequestsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribePendingAggregationRequests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePendingAggregationRequestsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribePendingAggregationRequests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePendingAggregationRequestsRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StarlingDoveService.DescribeRemediationConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRemediationConfigurationsRequest }
        output: DescribeRemediationConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExceptionsRequest }
            output: DescribeRemediationExceptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExceptionsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExceptionsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExecutionStatusRequest }
            output: DescribeRemediationExecutionStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExecutionStatusRequest }
            output: NoSuchRemediationConfigurationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExecutionStatusRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRemediationExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRemediationExecutionStatusRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations': {
      $post:
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRetentionConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRetentionConfigurationsRequest }
            output: DescribeRetentionConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRetentionConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRetentionConfigurationsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRetentionConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRetentionConfigurationsRequest }
            output: NoSuchRetentionConfigurationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.DescribeRetentionConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRetentionConfigurationsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateComplianceDetailsByConfigRuleRequest }
            output: GetAggregateComplianceDetailsByConfigRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateComplianceDetailsByConfigRuleRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateComplianceDetailsByConfigRuleRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateComplianceDetailsByConfigRuleRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateComplianceDetailsByConfigRuleRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConfigRuleComplianceSummaryRequest }
            output: GetAggregateConfigRuleComplianceSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConfigRuleComplianceSummaryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConfigRuleComplianceSummaryRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConfigRuleComplianceSummaryRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConfigRuleComplianceSummaryRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConformancePackComplianceSummaryRequest }
            output: GetAggregateConformancePackComplianceSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConformancePackComplianceSummaryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConformancePackComplianceSummaryRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConformancePackComplianceSummaryRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateConformancePackComplianceSummaryRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateDiscoveredResourceCountsRequest }
            output: GetAggregateDiscoveredResourceCountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateDiscoveredResourceCountsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateDiscoveredResourceCountsRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateDiscoveredResourceCountsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateDiscoveredResourceCountsRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateResourceConfigRequest }
            output: GetAggregateResourceConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateResourceConfigRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateResourceConfigRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateResourceConfigRequest }
            output: OversizedConfigurationItemException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAggregateResourceConfigRequest }
            output: ResourceNotDiscoveredException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailsByConfigRuleRequest }
            output: GetComplianceDetailsByConfigRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailsByConfigRuleRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailsByConfigRuleRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceDetailsByConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailsByConfigRuleRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource': {
      $post:
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceDetailsByResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailsByResourceRequest }
            output: GetComplianceDetailsByResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceDetailsByResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailsByResourceRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StarlingDoveService.GetComplianceSummaryByConfigRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetComplianceSummaryByConfigRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceSummaryByResourceType'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceSummaryByResourceTypeRequest }
            output: GetComplianceSummaryByResourceTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetComplianceSummaryByResourceType'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceSummaryByResourceTypeRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceDetailsRequest }
            output: GetConformancePackComplianceDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceDetailsRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceDetailsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceDetailsRequest }
            output: NoSuchConformancePackException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceDetailsRequest }
            output: NoSuchConfigRuleInConformancePackException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceDetailsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceSummaryRequest }
            output: GetConformancePackComplianceSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceSummaryRequest }
            output: NoSuchConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceSummaryRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetConformancePackComplianceSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetConformancePackComplianceSummaryRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetCustomRulePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCustomRulePolicyRequest }
            output: GetCustomRulePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetCustomRulePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetCustomRulePolicyRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts': {
      $post:
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDiscoveredResourceCountsRequest }
            output: GetDiscoveredResourceCountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDiscoveredResourceCountsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDiscoveredResourceCountsRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetDiscoveredResourceCounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDiscoveredResourceCountsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConfigRuleDetailedStatusRequest }
            output: GetOrganizationConfigRuleDetailedStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConfigRuleDetailedStatusRequest }
            output: NoSuchOrganizationConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConfigRuleDetailedStatusRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConfigRuleDetailedStatusRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConfigRuleDetailedStatusRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConformancePackDetailedStatusRequest }
            output: GetOrganizationConformancePackDetailedStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConformancePackDetailedStatusRequest }
            output: NoSuchOrganizationConformancePackException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConformancePackDetailedStatusRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConformancePackDetailedStatusRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationConformancePackDetailedStatusRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationCustomRulePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationCustomRulePolicyRequest }
            output: GetOrganizationCustomRulePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationCustomRulePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationCustomRulePolicyRequest }
            output: NoSuchOrganizationConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetOrganizationCustomRulePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOrganizationCustomRulePolicyRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory': {
      $post:
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: GetResourceConfigHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: InvalidTimeRangeException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: NoAvailableConfigurationRecorderException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceConfigHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceConfigHistoryRequest }
            output: ResourceNotDiscoveredException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceEvaluationSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceEvaluationSummaryRequest }
            output: GetResourceEvaluationSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetResourceEvaluationSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceEvaluationSummaryRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.GetStoredQuery': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetStoredQueryRequest }
            output: GetStoredQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetStoredQueryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.GetStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetStoredQueryRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListAggregateDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAggregateDiscoveredResourcesRequest }
            output: ListAggregateDiscoveredResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListAggregateDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAggregateDiscoveredResourcesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListAggregateDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAggregateDiscoveredResourcesRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListAggregateDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAggregateDiscoveredResourcesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListAggregateDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAggregateDiscoveredResourcesRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListConformancePackComplianceScores'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConformancePackComplianceScoresRequest }
            output: ListConformancePackComplianceScoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListConformancePackComplianceScores'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConformancePackComplianceScoresRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListConformancePackComplianceScores'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConformancePackComplianceScoresRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListConformancePackComplianceScores'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListConformancePackComplianceScoresRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.ListDiscoveredResources': {
      $post:
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: ListDiscoveredResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: NoAvailableConfigurationRecorderException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.ListResourceEvaluations': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListResourceEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceEvaluationsRequest }
            output: ListResourceEvaluationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListResourceEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceEvaluationsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListResourceEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceEvaluationsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListResourceEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceEvaluationsRequest }
            output: InvalidTimeRangeException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.ListStoredQueries': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListStoredQueries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStoredQueriesRequest }
            output: ListStoredQueriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListStoredQueries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStoredQueriesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListStoredQueries'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStoredQueriesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.ListTagsForResource': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListTagsForResource'
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
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListTagsForResource'
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
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListTagsForResource'
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
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutAggregationAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAggregationAuthorizationRequest }
            output: PutAggregationAuthorizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutAggregationAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAggregationAuthorizationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutConfigRule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigRuleRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigRuleRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigRuleRequest }
            output: MaxNumberOfConfigRulesExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigRuleRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigRuleRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigRuleRequest }
            output: NoAvailableConfigurationRecorderException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: PutConfigurationAggregatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: NoAvailableOrganizationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationAggregator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationAggregatorRequest }
            output: OrganizationAllFeaturesNotEnabledException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationRecorderRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationRecorderRequest }
            output: MaxNumberOfConfigurationRecordersExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationRecorderRequest }
            output: InvalidConfigurationRecorderNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationRecorderRequest }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConfigurationRecorderRequest }
            output: InvalidRecordingGroupException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutConformancePack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConformancePackRequest }
            output: PutConformancePackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConformancePackRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConformancePackRequest }
            output: ConformancePackTemplateValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConformancePackRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConformancePackRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutConformancePackRequest }
            output: MaxNumberOfConformancePacksExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutDeliveryChannel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: MaxNumberOfDeliveryChannelsExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: NoAvailableConfigurationRecorderException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: InvalidDeliveryChannelNameException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: NoSuchBucketException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: InvalidS3KeyPrefixException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: InvalidS3KmsKeyArnException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: InvalidSNSTopicARNException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutDeliveryChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutDeliveryChannelRequest }
            output: InsufficientDeliveryPolicyException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutEvaluations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutEvaluationsRequest }
            output: PutEvaluationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutEvaluationsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutEvaluationsRequest }
            output: InvalidResultTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutEvaluations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutEvaluationsRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutExternalEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutExternalEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutExternalEvaluationRequest }
            output: PutExternalEvaluationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutExternalEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutExternalEvaluationRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutExternalEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutExternalEvaluationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: PutOrganizationConfigRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: MaxNumberOfOrganizationConfigRulesExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: NoAvailableOrganizationException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: OrganizationAllFeaturesNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConfigRule'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConfigRuleRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: PutOrganizationConformancePackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: MaxNumberOfOrganizationConformancePacksExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: OrganizationAccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: OrganizationConformancePackTemplateValidationException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: OrganizationAllFeaturesNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutOrganizationConformancePack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutOrganizationConformancePackRequest }
            output: NoAvailableOrganizationException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRemediationConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRemediationConfigurationsRequest }
            output: PutRemediationConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRemediationConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRemediationConfigurationsRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRemediationConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRemediationConfigurationsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutRemediationExceptions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRemediationExceptionsRequest }
            output: PutRemediationExceptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRemediationExceptionsRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRemediationExceptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRemediationExceptionsRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutResourceConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceConfigRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceConfigRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceConfigRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceConfigRequest }
            output: NoRunningConfigurationRecorderException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceConfigRequest }
            output: MaxActiveResourcesExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRetentionConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRetentionConfigurationRequest }
            output: PutRetentionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRetentionConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRetentionConfigurationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutRetentionConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRetentionConfigurationRequest }
            output: MaxNumberOfRetentionConfigurationsExceededException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.PutStoredQuery': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutStoredQueryRequest }
            output: PutStoredQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutStoredQueryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutStoredQueryRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.PutStoredQuery'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutStoredQueryRequest }
            output: ResourceConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectAggregateResourceConfigRequest }
            output: SelectAggregateResourceConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectAggregateResourceConfigRequest }
            output: InvalidExpressionException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectAggregateResourceConfigRequest }
            output: NoSuchConfigurationAggregatorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectAggregateResourceConfigRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectAggregateResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectAggregateResourceConfigRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.SelectResourceConfig': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectResourceConfigRequest }
            output: SelectResourceConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectResourceConfigRequest }
            output: InvalidExpressionException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectResourceConfigRequest }
            output: InvalidLimitException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'StarlingDoveService.SelectResourceConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SelectResourceConfigRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigRulesEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigRulesEvaluationRequest }
            output: StartConfigRulesEvaluationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigRulesEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigRulesEvaluationRequest }
            output: NoSuchConfigRuleException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigRulesEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigRulesEvaluationRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigRulesEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigRulesEvaluationRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigRulesEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigRulesEvaluationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigurationRecorderRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigurationRecorderRequest }
            output: NoSuchConfigurationRecorderException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartConfigurationRecorderRequest }
            output: NoAvailableDeliveryChannelException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.StartRemediationExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartRemediationExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRemediationExecutionRequest }
            output: StartRemediationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartRemediationExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRemediationExecutionRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartRemediationExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRemediationExecutionRequest }
            output: InsufficientPermissionsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartRemediationExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRemediationExecutionRequest }
            output: NoSuchRemediationConfigurationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.StartResourceEvaluation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartResourceEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartResourceEvaluationRequest }
            output: StartResourceEvaluationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartResourceEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartResourceEvaluationRequest }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StartResourceEvaluation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartResourceEvaluationRequest }
            output: IdempotentParameterMismatch
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StopConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopConfigurationRecorderRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.StopConfigurationRecorder'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopConfigurationRecorderRequest }
            output: NoSuchConfigurationRecorderException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.TagResource'
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
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.TagResource'
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
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.TagResource'
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
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=StarlingDoveService.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.UntagResource'
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
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'StarlingDoveService.UntagResource'
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
            status: 481
          }
    }
  },
  '/'
>
export default routes
