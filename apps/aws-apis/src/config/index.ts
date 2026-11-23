import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigHandler,
  xAmzTargetStarlingDoveServiceBatchGetResourceConfigHandler,
  xAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationHandler,
  xAmzTargetStarlingDoveServiceDeleteConfigRuleHandler,
  xAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorHandler,
  xAmzTargetStarlingDoveServiceDeleteConfigurationRecorderHandler,
  xAmzTargetStarlingDoveServiceDeleteConformancePackHandler,
  xAmzTargetStarlingDoveServiceDeleteDeliveryChannelHandler,
  xAmzTargetStarlingDoveServiceDeleteEvaluationResultsHandler,
  xAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleHandler,
  xAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackHandler,
  xAmzTargetStarlingDoveServiceDeletePendingAggregationRequestHandler,
  xAmzTargetStarlingDoveServiceDeleteRemediationConfigurationHandler,
  xAmzTargetStarlingDoveServiceDeleteRemediationExceptionsHandler,
  xAmzTargetStarlingDoveServiceDeleteResourceConfigHandler,
  xAmzTargetStarlingDoveServiceDeleteRetentionConfigurationHandler,
  xAmzTargetStarlingDoveServiceDeleteStoredQueryHandler,
  xAmzTargetStarlingDoveServiceDeliverConfigSnapshotHandler,
  xAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesHandler,
  xAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksHandler,
  xAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsHandler,
  xAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleHandler,
  xAmzTargetStarlingDoveServiceDescribeComplianceByResourceHandler,
  xAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusHandler,
  xAmzTargetStarlingDoveServiceDescribeConfigRulesHandler,
  xAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsHandler,
  xAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusHandler,
  xAmzTargetStarlingDoveServiceDescribeConfigurationRecordersHandler,
  xAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusHandler,
  xAmzTargetStarlingDoveServiceDescribeConformancePackComplianceHandler,
  xAmzTargetStarlingDoveServiceDescribeConformancePacksHandler,
  xAmzTargetStarlingDoveServiceDescribeConformancePackStatusHandler,
  xAmzTargetStarlingDoveServiceDescribeDeliveryChannelsHandler,
  xAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusHandler,
  xAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesHandler,
  xAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesHandler,
  xAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksHandler,
  xAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesHandler,
  xAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsHandler,
  xAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsHandler,
  xAmzTargetStarlingDoveServiceDescribeRemediationExceptionsHandler,
  xAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusHandler,
  xAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsHandler,
  xAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleHandler,
  xAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryHandler,
  xAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryHandler,
  xAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsHandler,
  xAmzTargetStarlingDoveServiceGetAggregateResourceConfigHandler,
  xAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleHandler,
  xAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceHandler,
  xAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleHandler,
  xAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeHandler,
  xAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsHandler,
  xAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryHandler,
  xAmzTargetStarlingDoveServiceGetCustomRulePolicyHandler,
  xAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsHandler,
  xAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusHandler,
  xAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusHandler,
  xAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyHandler,
  xAmzTargetStarlingDoveServiceGetResourceConfigHistoryHandler,
  xAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryHandler,
  xAmzTargetStarlingDoveServiceGetStoredQueryHandler,
  xAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesHandler,
  xAmzTargetStarlingDoveServiceListConformancePackComplianceScoresHandler,
  xAmzTargetStarlingDoveServiceListDiscoveredResourcesHandler,
  xAmzTargetStarlingDoveServiceListResourceEvaluationsHandler,
  xAmzTargetStarlingDoveServiceListStoredQueriesHandler,
  xAmzTargetStarlingDoveServiceListTagsForResourceHandler,
  xAmzTargetStarlingDoveServicePutAggregationAuthorizationHandler,
  xAmzTargetStarlingDoveServicePutConfigRuleHandler,
  xAmzTargetStarlingDoveServicePutConfigurationAggregatorHandler,
  xAmzTargetStarlingDoveServicePutConfigurationRecorderHandler,
  xAmzTargetStarlingDoveServicePutConformancePackHandler,
  xAmzTargetStarlingDoveServicePutDeliveryChannelHandler,
  xAmzTargetStarlingDoveServicePutEvaluationsHandler,
  xAmzTargetStarlingDoveServicePutExternalEvaluationHandler,
  xAmzTargetStarlingDoveServicePutOrganizationConfigRuleHandler,
  xAmzTargetStarlingDoveServicePutOrganizationConformancePackHandler,
  xAmzTargetStarlingDoveServicePutRemediationConfigurationsHandler,
  xAmzTargetStarlingDoveServicePutRemediationExceptionsHandler,
  xAmzTargetStarlingDoveServicePutResourceConfigHandler,
  xAmzTargetStarlingDoveServicePutRetentionConfigurationHandler,
  xAmzTargetStarlingDoveServicePutStoredQueryHandler,
  xAmzTargetStarlingDoveServiceSelectAggregateResourceConfigHandler,
  xAmzTargetStarlingDoveServiceSelectResourceConfigHandler,
  xAmzTargetStarlingDoveServiceStartConfigRulesEvaluationHandler,
  xAmzTargetStarlingDoveServiceStartConfigurationRecorderHandler,
  xAmzTargetStarlingDoveServiceStartRemediationExecutionHandler,
  xAmzTargetStarlingDoveServiceStartResourceEvaluationHandler,
  xAmzTargetStarlingDoveServiceStopConfigurationRecorderHandler,
  xAmzTargetStarlingDoveServiceTagResourceHandler,
  xAmzTargetStarlingDoveServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServiceBatchGetResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteConfigurationRecorderHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteConformancePackHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteDeliveryChannelHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteEvaluationResultsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeletePendingAggregationRequestHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteRemediationConfigurationHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteRemediationExceptionsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteRetentionConfigurationHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeleteStoredQueryHandler)
  .route('/', xAmzTargetStarlingDoveServiceDeliverConfigSnapshotHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeComplianceByResourceHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConfigRulesHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConfigurationRecordersHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConformancePackComplianceHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConformancePackStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeConformancePacksHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeDeliveryChannelsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeRemediationExceptionsHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetAggregateResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetCustomRulePolicyHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetResourceConfigHistoryHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryHandler)
  .route('/', xAmzTargetStarlingDoveServiceGetStoredQueryHandler)
  .route('/', xAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesHandler)
  .route('/', xAmzTargetStarlingDoveServiceListConformancePackComplianceScoresHandler)
  .route('/', xAmzTargetStarlingDoveServiceListDiscoveredResourcesHandler)
  .route('/', xAmzTargetStarlingDoveServiceListResourceEvaluationsHandler)
  .route('/', xAmzTargetStarlingDoveServiceListStoredQueriesHandler)
  .route('/', xAmzTargetStarlingDoveServiceListTagsForResourceHandler)
  .route('/', xAmzTargetStarlingDoveServicePutAggregationAuthorizationHandler)
  .route('/', xAmzTargetStarlingDoveServicePutConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServicePutConfigurationAggregatorHandler)
  .route('/', xAmzTargetStarlingDoveServicePutConfigurationRecorderHandler)
  .route('/', xAmzTargetStarlingDoveServicePutConformancePackHandler)
  .route('/', xAmzTargetStarlingDoveServicePutDeliveryChannelHandler)
  .route('/', xAmzTargetStarlingDoveServicePutEvaluationsHandler)
  .route('/', xAmzTargetStarlingDoveServicePutExternalEvaluationHandler)
  .route('/', xAmzTargetStarlingDoveServicePutOrganizationConfigRuleHandler)
  .route('/', xAmzTargetStarlingDoveServicePutOrganizationConformancePackHandler)
  .route('/', xAmzTargetStarlingDoveServicePutRemediationConfigurationsHandler)
  .route('/', xAmzTargetStarlingDoveServicePutRemediationExceptionsHandler)
  .route('/', xAmzTargetStarlingDoveServicePutResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServicePutRetentionConfigurationHandler)
  .route('/', xAmzTargetStarlingDoveServicePutStoredQueryHandler)
  .route('/', xAmzTargetStarlingDoveServiceSelectAggregateResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServiceSelectResourceConfigHandler)
  .route('/', xAmzTargetStarlingDoveServiceStartConfigRulesEvaluationHandler)
  .route('/', xAmzTargetStarlingDoveServiceStartConfigurationRecorderHandler)
  .route('/', xAmzTargetStarlingDoveServiceStartRemediationExecutionHandler)
  .route('/', xAmzTargetStarlingDoveServiceStartResourceEvaluationHandler)
  .route('/', xAmzTargetStarlingDoveServiceStopConfigurationRecorderHandler)
  .route('/', xAmzTargetStarlingDoveServiceTagResourceHandler)
  .route('/', xAmzTargetStarlingDoveServiceUntagResourceHandler)

export default app
