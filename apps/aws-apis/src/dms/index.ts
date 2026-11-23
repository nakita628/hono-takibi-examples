import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonDmSv20160101AddTagsToResourceHandler,
  xAmzTargetAmazonDmSv20160101ApplyPendingMaintenanceActionHandler,
  xAmzTargetAmazonDmSv20160101BatchStartRecommendationsHandler,
  xAmzTargetAmazonDmSv20160101CancelReplicationTaskAssessmentRunHandler,
  xAmzTargetAmazonDmSv20160101CreateEndpointHandler,
  xAmzTargetAmazonDmSv20160101CreateEventSubscriptionHandler,
  xAmzTargetAmazonDmSv20160101CreateFleetAdvisorCollectorHandler,
  xAmzTargetAmazonDmSv20160101CreateReplicationInstanceHandler,
  xAmzTargetAmazonDmSv20160101CreateReplicationSubnetGroupHandler,
  xAmzTargetAmazonDmSv20160101CreateReplicationTaskHandler,
  xAmzTargetAmazonDmSv20160101DeleteCertificateHandler,
  xAmzTargetAmazonDmSv20160101DeleteConnectionHandler,
  xAmzTargetAmazonDmSv20160101DeleteEndpointHandler,
  xAmzTargetAmazonDmSv20160101DeleteEventSubscriptionHandler,
  xAmzTargetAmazonDmSv20160101DeleteFleetAdvisorCollectorHandler,
  xAmzTargetAmazonDmSv20160101DeleteFleetAdvisorDatabasesHandler,
  xAmzTargetAmazonDmSv20160101DeleteReplicationInstanceHandler,
  xAmzTargetAmazonDmSv20160101DeleteReplicationSubnetGroupHandler,
  xAmzTargetAmazonDmSv20160101DeleteReplicationTaskAssessmentRunHandler,
  xAmzTargetAmazonDmSv20160101DeleteReplicationTaskHandler,
  xAmzTargetAmazonDmSv20160101DescribeAccountAttributesHandler,
  xAmzTargetAmazonDmSv20160101DescribeApplicableIndividualAssessmentsHandler,
  xAmzTargetAmazonDmSv20160101DescribeCertificatesHandler,
  xAmzTargetAmazonDmSv20160101DescribeConnectionsHandler,
  xAmzTargetAmazonDmSv20160101DescribeEndpointSettingsHandler,
  xAmzTargetAmazonDmSv20160101DescribeEndpointsHandler,
  xAmzTargetAmazonDmSv20160101DescribeEndpointTypesHandler,
  xAmzTargetAmazonDmSv20160101DescribeEventCategoriesHandler,
  xAmzTargetAmazonDmSv20160101DescribeEventsHandler,
  xAmzTargetAmazonDmSv20160101DescribeEventSubscriptionsHandler,
  xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorCollectorsHandler,
  xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorDatabasesHandler,
  xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorLsaAnalysisHandler,
  xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorSchemaObjectSummaryHandler,
  xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorSchemasHandler,
  xAmzTargetAmazonDmSv20160101DescribeOrderableReplicationInstancesHandler,
  xAmzTargetAmazonDmSv20160101DescribePendingMaintenanceActionsHandler,
  xAmzTargetAmazonDmSv20160101DescribeRecommendationLimitationsHandler,
  xAmzTargetAmazonDmSv20160101DescribeRecommendationsHandler,
  xAmzTargetAmazonDmSv20160101DescribeRefreshSchemasStatusHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationInstancesHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationInstanceTaskLogsHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationSubnetGroupsHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationTaskAssessmentResultsHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationTaskAssessmentRunsHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationTaskIndividualAssessmentsHandler,
  xAmzTargetAmazonDmSv20160101DescribeReplicationTasksHandler,
  xAmzTargetAmazonDmSv20160101DescribeSchemasHandler,
  xAmzTargetAmazonDmSv20160101DescribeTableStatisticsHandler,
  xAmzTargetAmazonDmSv20160101ImportCertificateHandler,
  xAmzTargetAmazonDmSv20160101ListTagsForResourceHandler,
  xAmzTargetAmazonDmSv20160101ModifyEndpointHandler,
  xAmzTargetAmazonDmSv20160101ModifyEventSubscriptionHandler,
  xAmzTargetAmazonDmSv20160101ModifyReplicationInstanceHandler,
  xAmzTargetAmazonDmSv20160101ModifyReplicationSubnetGroupHandler,
  xAmzTargetAmazonDmSv20160101ModifyReplicationTaskHandler,
  xAmzTargetAmazonDmSv20160101MoveReplicationTaskHandler,
  xAmzTargetAmazonDmSv20160101RebootReplicationInstanceHandler,
  xAmzTargetAmazonDmSv20160101RefreshSchemasHandler,
  xAmzTargetAmazonDmSv20160101ReloadTablesHandler,
  xAmzTargetAmazonDmSv20160101RemoveTagsFromResourceHandler,
  xAmzTargetAmazonDmSv20160101RunFleetAdvisorLsaAnalysisHandler,
  xAmzTargetAmazonDmSv20160101StartRecommendationsHandler,
  xAmzTargetAmazonDmSv20160101StartReplicationTaskAssessmentHandler,
  xAmzTargetAmazonDmSv20160101StartReplicationTaskAssessmentRunHandler,
  xAmzTargetAmazonDmSv20160101StartReplicationTaskHandler,
  xAmzTargetAmazonDmSv20160101StopReplicationTaskHandler,
  xAmzTargetAmazonDmSv20160101TestConnectionHandler,
  xAmzTargetAmazonDmSv20160101UpdateSubscriptionsToEventBridgeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonDmSv20160101AddTagsToResourceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ApplyPendingMaintenanceActionHandler)
  .route('/', xAmzTargetAmazonDmSv20160101BatchStartRecommendationsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CancelReplicationTaskAssessmentRunHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CreateEndpointHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CreateEventSubscriptionHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CreateFleetAdvisorCollectorHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CreateReplicationInstanceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CreateReplicationSubnetGroupHandler)
  .route('/', xAmzTargetAmazonDmSv20160101CreateReplicationTaskHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteCertificateHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteConnectionHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteEndpointHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteEventSubscriptionHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteFleetAdvisorCollectorHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteFleetAdvisorDatabasesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteReplicationInstanceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteReplicationSubnetGroupHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteReplicationTaskHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DeleteReplicationTaskAssessmentRunHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeAccountAttributesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeApplicableIndividualAssessmentsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeCertificatesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeConnectionsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeEndpointSettingsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeEndpointTypesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeEndpointsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeEventCategoriesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeEventSubscriptionsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeEventsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorCollectorsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorDatabasesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorLsaAnalysisHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorSchemaObjectSummaryHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorSchemasHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeOrderableReplicationInstancesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribePendingMaintenanceActionsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeRecommendationLimitationsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeRecommendationsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeRefreshSchemasStatusHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationInstanceTaskLogsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationInstancesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationSubnetGroupsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationTaskAssessmentResultsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationTaskAssessmentRunsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationTaskIndividualAssessmentsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeReplicationTasksHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeSchemasHandler)
  .route('/', xAmzTargetAmazonDmSv20160101DescribeTableStatisticsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ImportCertificateHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ListTagsForResourceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ModifyEndpointHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ModifyEventSubscriptionHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ModifyReplicationInstanceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ModifyReplicationSubnetGroupHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ModifyReplicationTaskHandler)
  .route('/', xAmzTargetAmazonDmSv20160101MoveReplicationTaskHandler)
  .route('/', xAmzTargetAmazonDmSv20160101RebootReplicationInstanceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101RefreshSchemasHandler)
  .route('/', xAmzTargetAmazonDmSv20160101ReloadTablesHandler)
  .route('/', xAmzTargetAmazonDmSv20160101RemoveTagsFromResourceHandler)
  .route('/', xAmzTargetAmazonDmSv20160101RunFleetAdvisorLsaAnalysisHandler)
  .route('/', xAmzTargetAmazonDmSv20160101StartRecommendationsHandler)
  .route('/', xAmzTargetAmazonDmSv20160101StartReplicationTaskHandler)
  .route('/', xAmzTargetAmazonDmSv20160101StartReplicationTaskAssessmentHandler)
  .route('/', xAmzTargetAmazonDmSv20160101StartReplicationTaskAssessmentRunHandler)
  .route('/', xAmzTargetAmazonDmSv20160101StopReplicationTaskHandler)
  .route('/', xAmzTargetAmazonDmSv20160101TestConnectionHandler)
  .route('/', xAmzTargetAmazonDmSv20160101UpdateSubscriptionsToEventBridgeHandler)

export default app
