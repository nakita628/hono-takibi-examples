import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonDMSv20160101AddTagsToResourceHandler,
  XAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionHandler,
  XAmzTargetAmazonDMSv20160101BatchStartRecommendationsHandler,
  XAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunHandler,
  XAmzTargetAmazonDMSv20160101CreateEndpointHandler,
  XAmzTargetAmazonDMSv20160101CreateEventSubscriptionHandler,
  XAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorHandler,
  XAmzTargetAmazonDMSv20160101CreateReplicationInstanceHandler,
  XAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupHandler,
  XAmzTargetAmazonDMSv20160101CreateReplicationTaskHandler,
  XAmzTargetAmazonDMSv20160101DeleteCertificateHandler,
  XAmzTargetAmazonDMSv20160101DeleteConnectionHandler,
  XAmzTargetAmazonDMSv20160101DeleteEndpointHandler,
  XAmzTargetAmazonDMSv20160101DeleteEventSubscriptionHandler,
  XAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorHandler,
  XAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesHandler,
  XAmzTargetAmazonDMSv20160101DeleteReplicationInstanceHandler,
  XAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupHandler,
  XAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunHandler,
  XAmzTargetAmazonDMSv20160101DeleteReplicationTaskHandler,
  XAmzTargetAmazonDMSv20160101DescribeAccountAttributesHandler,
  XAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsHandler,
  XAmzTargetAmazonDMSv20160101DescribeCertificatesHandler,
  XAmzTargetAmazonDMSv20160101DescribeConnectionsHandler,
  XAmzTargetAmazonDMSv20160101DescribeEndpointSettingsHandler,
  XAmzTargetAmazonDMSv20160101DescribeEndpointsHandler,
  XAmzTargetAmazonDMSv20160101DescribeEndpointTypesHandler,
  XAmzTargetAmazonDMSv20160101DescribeEventCategoriesHandler,
  XAmzTargetAmazonDMSv20160101DescribeEventsHandler,
  XAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsHandler,
  XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsHandler,
  XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesHandler,
  XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisHandler,
  XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryHandler,
  XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasHandler,
  XAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesHandler,
  XAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsHandler,
  XAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsHandler,
  XAmzTargetAmazonDMSv20160101DescribeRecommendationsHandler,
  XAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationInstancesHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsHandler,
  XAmzTargetAmazonDMSv20160101DescribeReplicationTasksHandler,
  XAmzTargetAmazonDMSv20160101DescribeSchemasHandler,
  XAmzTargetAmazonDMSv20160101DescribeTableStatisticsHandler,
  XAmzTargetAmazonDMSv20160101ImportCertificateHandler,
  XAmzTargetAmazonDMSv20160101ListTagsForResourceHandler,
  XAmzTargetAmazonDMSv20160101ModifyEndpointHandler,
  XAmzTargetAmazonDMSv20160101ModifyEventSubscriptionHandler,
  XAmzTargetAmazonDMSv20160101ModifyReplicationInstanceHandler,
  XAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupHandler,
  XAmzTargetAmazonDMSv20160101ModifyReplicationTaskHandler,
  XAmzTargetAmazonDMSv20160101MoveReplicationTaskHandler,
  XAmzTargetAmazonDMSv20160101RebootReplicationInstanceHandler,
  XAmzTargetAmazonDMSv20160101RefreshSchemasHandler,
  XAmzTargetAmazonDMSv20160101ReloadTablesHandler,
  XAmzTargetAmazonDMSv20160101RemoveTagsFromResourceHandler,
  XAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisHandler,
  XAmzTargetAmazonDMSv20160101StartRecommendationsHandler,
  XAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentHandler,
  XAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunHandler,
  XAmzTargetAmazonDMSv20160101StartReplicationTaskHandler,
  XAmzTargetAmazonDMSv20160101StopReplicationTaskHandler,
  XAmzTargetAmazonDMSv20160101TestConnectionHandler,
  XAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonDMSv20160101AddTagsToResourceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionHandler)
  .route('/', XAmzTargetAmazonDMSv20160101BatchStartRecommendationsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CreateEndpointHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CreateEventSubscriptionHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CreateReplicationInstanceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupHandler)
  .route('/', XAmzTargetAmazonDMSv20160101CreateReplicationTaskHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteCertificateHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteConnectionHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteEndpointHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteEventSubscriptionHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteReplicationInstanceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteReplicationTaskHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeAccountAttributesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeCertificatesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeConnectionsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeEndpointSettingsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeEndpointTypesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeEndpointsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeEventCategoriesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeEventsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeRecommendationsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationInstancesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeReplicationTasksHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeSchemasHandler)
  .route('/', XAmzTargetAmazonDMSv20160101DescribeTableStatisticsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ImportCertificateHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ListTagsForResourceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ModifyEndpointHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ModifyEventSubscriptionHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ModifyReplicationInstanceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ModifyReplicationTaskHandler)
  .route('/', XAmzTargetAmazonDMSv20160101MoveReplicationTaskHandler)
  .route('/', XAmzTargetAmazonDMSv20160101RebootReplicationInstanceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101RefreshSchemasHandler)
  .route('/', XAmzTargetAmazonDMSv20160101ReloadTablesHandler)
  .route('/', XAmzTargetAmazonDMSv20160101RemoveTagsFromResourceHandler)
  .route('/', XAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisHandler)
  .route('/', XAmzTargetAmazonDMSv20160101StartRecommendationsHandler)
  .route('/', XAmzTargetAmazonDMSv20160101StartReplicationTaskHandler)
  .route('/', XAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentHandler)
  .route('/', XAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunHandler)
  .route('/', XAmzTargetAmazonDMSv20160101StopReplicationTaskHandler)
  .route('/', XAmzTargetAmazonDMSv20160101TestConnectionHandler)
  .route('/', XAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeHandler)

export default app
