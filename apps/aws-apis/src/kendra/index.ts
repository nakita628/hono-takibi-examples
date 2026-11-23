import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsKendraFrontendServiceAssociateEntitiesToExperienceHandler,
  xAmzTargetAwsKendraFrontendServiceAssociatePersonasToEntitiesHandler,
  xAmzTargetAwsKendraFrontendServiceBatchDeleteDocumentHandler,
  xAmzTargetAwsKendraFrontendServiceBatchDeleteFeaturedResultsSetHandler,
  xAmzTargetAwsKendraFrontendServiceBatchGetDocumentStatusHandler,
  xAmzTargetAwsKendraFrontendServiceBatchPutDocumentHandler,
  xAmzTargetAwsKendraFrontendServiceClearQuerySuggestionsHandler,
  xAmzTargetAwsKendraFrontendServiceCreateAccessControlConfigurationHandler,
  xAmzTargetAwsKendraFrontendServiceCreateDataSourceHandler,
  xAmzTargetAwsKendraFrontendServiceCreateExperienceHandler,
  xAmzTargetAwsKendraFrontendServiceCreateFaqHandler,
  xAmzTargetAwsKendraFrontendServiceCreateFeaturedResultsSetHandler,
  xAmzTargetAwsKendraFrontendServiceCreateIndexHandler,
  xAmzTargetAwsKendraFrontendServiceCreateQuerySuggestionsBlockListHandler,
  xAmzTargetAwsKendraFrontendServiceCreateThesaurusHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteAccessControlConfigurationHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteDataSourceHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteExperienceHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteFaqHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteIndexHandler,
  xAmzTargetAwsKendraFrontendServiceDeletePrincipalMappingHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteQuerySuggestionsBlockListHandler,
  xAmzTargetAwsKendraFrontendServiceDeleteThesaurusHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeAccessControlConfigurationHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeDataSourceHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeExperienceHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeFaqHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeFeaturedResultsSetHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeIndexHandler,
  xAmzTargetAwsKendraFrontendServiceDescribePrincipalMappingHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeQuerySuggestionsBlockListHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeQuerySuggestionsConfigHandler,
  xAmzTargetAwsKendraFrontendServiceDescribeThesaurusHandler,
  xAmzTargetAwsKendraFrontendServiceDisassociateEntitiesFromExperienceHandler,
  xAmzTargetAwsKendraFrontendServiceDisassociatePersonasFromEntitiesHandler,
  xAmzTargetAwsKendraFrontendServiceGetQuerySuggestionsHandler,
  xAmzTargetAwsKendraFrontendServiceGetSnapshotsHandler,
  xAmzTargetAwsKendraFrontendServiceListAccessControlConfigurationsHandler,
  xAmzTargetAwsKendraFrontendServiceListDataSourcesHandler,
  xAmzTargetAwsKendraFrontendServiceListDataSourceSyncJobsHandler,
  xAmzTargetAwsKendraFrontendServiceListEntityPersonasHandler,
  xAmzTargetAwsKendraFrontendServiceListExperienceEntitiesHandler,
  xAmzTargetAwsKendraFrontendServiceListExperiencesHandler,
  xAmzTargetAwsKendraFrontendServiceListFaqsHandler,
  xAmzTargetAwsKendraFrontendServiceListFeaturedResultsSetsHandler,
  xAmzTargetAwsKendraFrontendServiceListGroupsOlderThanOrderingIdHandler,
  xAmzTargetAwsKendraFrontendServiceListIndicesHandler,
  xAmzTargetAwsKendraFrontendServiceListQuerySuggestionsBlockListsHandler,
  xAmzTargetAwsKendraFrontendServiceListTagsForResourceHandler,
  xAmzTargetAwsKendraFrontendServiceListThesauriHandler,
  xAmzTargetAwsKendraFrontendServicePutPrincipalMappingHandler,
  xAmzTargetAwsKendraFrontendServiceQueryHandler,
  xAmzTargetAwsKendraFrontendServiceStartDataSourceSyncJobHandler,
  xAmzTargetAwsKendraFrontendServiceStopDataSourceSyncJobHandler,
  xAmzTargetAwsKendraFrontendServiceSubmitFeedbackHandler,
  xAmzTargetAwsKendraFrontendServiceTagResourceHandler,
  xAmzTargetAwsKendraFrontendServiceUntagResourceHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateAccessControlConfigurationHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateDataSourceHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateExperienceHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateFeaturedResultsSetHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateIndexHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateQuerySuggestionsBlockListHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateQuerySuggestionsConfigHandler,
  xAmzTargetAwsKendraFrontendServiceUpdateThesaurusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsKendraFrontendServiceAssociateEntitiesToExperienceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceAssociatePersonasToEntitiesHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceBatchDeleteDocumentHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceBatchDeleteFeaturedResultsSetHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceBatchGetDocumentStatusHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceBatchPutDocumentHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceClearQuerySuggestionsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateAccessControlConfigurationHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateDataSourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateExperienceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateFaqHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateFeaturedResultsSetHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateIndexHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateQuerySuggestionsBlockListHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceCreateThesaurusHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteAccessControlConfigurationHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteDataSourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteExperienceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteFaqHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteIndexHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeletePrincipalMappingHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteQuerySuggestionsBlockListHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDeleteThesaurusHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeAccessControlConfigurationHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeDataSourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeExperienceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeFaqHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeFeaturedResultsSetHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeIndexHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribePrincipalMappingHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeQuerySuggestionsBlockListHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeQuerySuggestionsConfigHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDescribeThesaurusHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDisassociateEntitiesFromExperienceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceDisassociatePersonasFromEntitiesHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceGetQuerySuggestionsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceGetSnapshotsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListAccessControlConfigurationsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListDataSourceSyncJobsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListDataSourcesHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListEntityPersonasHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListExperienceEntitiesHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListExperiencesHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListFaqsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListFeaturedResultsSetsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListGroupsOlderThanOrderingIdHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListIndicesHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListQuerySuggestionsBlockListsHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListTagsForResourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceListThesauriHandler)
  .route('/', xAmzTargetAwsKendraFrontendServicePutPrincipalMappingHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceQueryHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceStartDataSourceSyncJobHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceStopDataSourceSyncJobHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceSubmitFeedbackHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceTagResourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUntagResourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateAccessControlConfigurationHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateDataSourceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateExperienceHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateFeaturedResultsSetHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateIndexHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateQuerySuggestionsBlockListHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateQuerySuggestionsConfigHandler)
  .route('/', xAmzTargetAwsKendraFrontendServiceUpdateThesaurusHandler)

export default app
