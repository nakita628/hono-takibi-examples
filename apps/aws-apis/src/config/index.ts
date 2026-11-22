import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigHandler,
  XAmzTargetStarlingDoveServiceBatchGetResourceConfigHandler,
  XAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationHandler,
  XAmzTargetStarlingDoveServiceDeleteConfigRuleHandler,
  XAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorHandler,
  XAmzTargetStarlingDoveServiceDeleteConfigurationRecorderHandler,
  XAmzTargetStarlingDoveServiceDeleteConformancePackHandler,
  XAmzTargetStarlingDoveServiceDeleteDeliveryChannelHandler,
  XAmzTargetStarlingDoveServiceDeleteEvaluationResultsHandler,
  XAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleHandler,
  XAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackHandler,
  XAmzTargetStarlingDoveServiceDeletePendingAggregationRequestHandler,
  XAmzTargetStarlingDoveServiceDeleteRemediationConfigurationHandler,
  XAmzTargetStarlingDoveServiceDeleteRemediationExceptionsHandler,
  XAmzTargetStarlingDoveServiceDeleteResourceConfigHandler,
  XAmzTargetStarlingDoveServiceDeleteRetentionConfigurationHandler,
  XAmzTargetStarlingDoveServiceDeleteStoredQueryHandler,
  XAmzTargetStarlingDoveServiceDeliverConfigSnapshotHandler,
  XAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesHandler,
  XAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksHandler,
  XAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsHandler,
  XAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleHandler,
  XAmzTargetStarlingDoveServiceDescribeComplianceByResourceHandler,
  XAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusHandler,
  XAmzTargetStarlingDoveServiceDescribeConfigRulesHandler,
  XAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsHandler,
  XAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusHandler,
  XAmzTargetStarlingDoveServiceDescribeConfigurationRecordersHandler,
  XAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusHandler,
  XAmzTargetStarlingDoveServiceDescribeConformancePackComplianceHandler,
  XAmzTargetStarlingDoveServiceDescribeConformancePacksHandler,
  XAmzTargetStarlingDoveServiceDescribeConformancePackStatusHandler,
  XAmzTargetStarlingDoveServiceDescribeDeliveryChannelsHandler,
  XAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusHandler,
  XAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesHandler,
  XAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesHandler,
  XAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksHandler,
  XAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesHandler,
  XAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsHandler,
  XAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsHandler,
  XAmzTargetStarlingDoveServiceDescribeRemediationExceptionsHandler,
  XAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusHandler,
  XAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsHandler,
  XAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleHandler,
  XAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryHandler,
  XAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryHandler,
  XAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsHandler,
  XAmzTargetStarlingDoveServiceGetAggregateResourceConfigHandler,
  XAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleHandler,
  XAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceHandler,
  XAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleHandler,
  XAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeHandler,
  XAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsHandler,
  XAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryHandler,
  XAmzTargetStarlingDoveServiceGetCustomRulePolicyHandler,
  XAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsHandler,
  XAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusHandler,
  XAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusHandler,
  XAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyHandler,
  XAmzTargetStarlingDoveServiceGetResourceConfigHistoryHandler,
  XAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryHandler,
  XAmzTargetStarlingDoveServiceGetStoredQueryHandler,
  XAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesHandler,
  XAmzTargetStarlingDoveServiceListConformancePackComplianceScoresHandler,
  XAmzTargetStarlingDoveServiceListDiscoveredResourcesHandler,
  XAmzTargetStarlingDoveServiceListResourceEvaluationsHandler,
  XAmzTargetStarlingDoveServiceListStoredQueriesHandler,
  XAmzTargetStarlingDoveServiceListTagsForResourceHandler,
  XAmzTargetStarlingDoveServicePutAggregationAuthorizationHandler,
  XAmzTargetStarlingDoveServicePutConfigRuleHandler,
  XAmzTargetStarlingDoveServicePutConfigurationAggregatorHandler,
  XAmzTargetStarlingDoveServicePutConfigurationRecorderHandler,
  XAmzTargetStarlingDoveServicePutConformancePackHandler,
  XAmzTargetStarlingDoveServicePutDeliveryChannelHandler,
  XAmzTargetStarlingDoveServicePutEvaluationsHandler,
  XAmzTargetStarlingDoveServicePutExternalEvaluationHandler,
  XAmzTargetStarlingDoveServicePutOrganizationConfigRuleHandler,
  XAmzTargetStarlingDoveServicePutOrganizationConformancePackHandler,
  XAmzTargetStarlingDoveServicePutRemediationConfigurationsHandler,
  XAmzTargetStarlingDoveServicePutRemediationExceptionsHandler,
  XAmzTargetStarlingDoveServicePutResourceConfigHandler,
  XAmzTargetStarlingDoveServicePutRetentionConfigurationHandler,
  XAmzTargetStarlingDoveServicePutStoredQueryHandler,
  XAmzTargetStarlingDoveServiceSelectAggregateResourceConfigHandler,
  XAmzTargetStarlingDoveServiceSelectResourceConfigHandler,
  XAmzTargetStarlingDoveServiceStartConfigRulesEvaluationHandler,
  XAmzTargetStarlingDoveServiceStartConfigurationRecorderHandler,
  XAmzTargetStarlingDoveServiceStartRemediationExecutionHandler,
  XAmzTargetStarlingDoveServiceStartResourceEvaluationHandler,
  XAmzTargetStarlingDoveServiceStopConfigurationRecorderHandler,
  XAmzTargetStarlingDoveServiceTagResourceHandler,
  XAmzTargetStarlingDoveServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServiceBatchGetResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteConfigurationRecorderHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteConformancePackHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteDeliveryChannelHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteEvaluationResultsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeletePendingAggregationRequestHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteRemediationConfigurationHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteRemediationExceptionsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteRetentionConfigurationHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeleteStoredQueryHandler)
  .route('/', XAmzTargetStarlingDoveServiceDeliverConfigSnapshotHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeComplianceByResourceHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConfigRulesHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConfigurationRecordersHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConformancePackComplianceHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConformancePackStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeConformancePacksHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeDeliveryChannelsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeRemediationExceptionsHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetAggregateResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetCustomRulePolicyHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetResourceConfigHistoryHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryHandler)
  .route('/', XAmzTargetStarlingDoveServiceGetStoredQueryHandler)
  .route('/', XAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesHandler)
  .route('/', XAmzTargetStarlingDoveServiceListConformancePackComplianceScoresHandler)
  .route('/', XAmzTargetStarlingDoveServiceListDiscoveredResourcesHandler)
  .route('/', XAmzTargetStarlingDoveServiceListResourceEvaluationsHandler)
  .route('/', XAmzTargetStarlingDoveServiceListStoredQueriesHandler)
  .route('/', XAmzTargetStarlingDoveServiceListTagsForResourceHandler)
  .route('/', XAmzTargetStarlingDoveServicePutAggregationAuthorizationHandler)
  .route('/', XAmzTargetStarlingDoveServicePutConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServicePutConfigurationAggregatorHandler)
  .route('/', XAmzTargetStarlingDoveServicePutConfigurationRecorderHandler)
  .route('/', XAmzTargetStarlingDoveServicePutConformancePackHandler)
  .route('/', XAmzTargetStarlingDoveServicePutDeliveryChannelHandler)
  .route('/', XAmzTargetStarlingDoveServicePutEvaluationsHandler)
  .route('/', XAmzTargetStarlingDoveServicePutExternalEvaluationHandler)
  .route('/', XAmzTargetStarlingDoveServicePutOrganizationConfigRuleHandler)
  .route('/', XAmzTargetStarlingDoveServicePutOrganizationConformancePackHandler)
  .route('/', XAmzTargetStarlingDoveServicePutRemediationConfigurationsHandler)
  .route('/', XAmzTargetStarlingDoveServicePutRemediationExceptionsHandler)
  .route('/', XAmzTargetStarlingDoveServicePutResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServicePutRetentionConfigurationHandler)
  .route('/', XAmzTargetStarlingDoveServicePutStoredQueryHandler)
  .route('/', XAmzTargetStarlingDoveServiceSelectAggregateResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServiceSelectResourceConfigHandler)
  .route('/', XAmzTargetStarlingDoveServiceStartConfigRulesEvaluationHandler)
  .route('/', XAmzTargetStarlingDoveServiceStartConfigurationRecorderHandler)
  .route('/', XAmzTargetStarlingDoveServiceStartRemediationExecutionHandler)
  .route('/', XAmzTargetStarlingDoveServiceStartResourceEvaluationHandler)
  .route('/', XAmzTargetStarlingDoveServiceStopConfigurationRecorderHandler)
  .route('/', XAmzTargetStarlingDoveServiceTagResourceHandler)
  .route('/', XAmzTargetStarlingDoveServiceUntagResourceHandler)

export default app
