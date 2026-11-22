import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceHandler,
  XAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesHandler,
  XAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentHandler,
  XAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetHandler,
  XAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusHandler,
  XAmzTargetAWSKendraFrontendServiceBatchPutDocumentHandler,
  XAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsHandler,
  XAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationHandler,
  XAmzTargetAWSKendraFrontendServiceCreateDataSourceHandler,
  XAmzTargetAWSKendraFrontendServiceCreateExperienceHandler,
  XAmzTargetAWSKendraFrontendServiceCreateFaqHandler,
  XAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetHandler,
  XAmzTargetAWSKendraFrontendServiceCreateIndexHandler,
  XAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListHandler,
  XAmzTargetAWSKendraFrontendServiceCreateThesaurusHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteDataSourceHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteExperienceHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteFaqHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteIndexHandler,
  XAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListHandler,
  XAmzTargetAWSKendraFrontendServiceDeleteThesaurusHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeDataSourceHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeExperienceHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeFaqHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeIndexHandler,
  XAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigHandler,
  XAmzTargetAWSKendraFrontendServiceDescribeThesaurusHandler,
  XAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceHandler,
  XAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesHandler,
  XAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsHandler,
  XAmzTargetAWSKendraFrontendServiceGetSnapshotsHandler,
  XAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsHandler,
  XAmzTargetAWSKendraFrontendServiceListDataSourcesHandler,
  XAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsHandler,
  XAmzTargetAWSKendraFrontendServiceListEntityPersonasHandler,
  XAmzTargetAWSKendraFrontendServiceListExperienceEntitiesHandler,
  XAmzTargetAWSKendraFrontendServiceListExperiencesHandler,
  XAmzTargetAWSKendraFrontendServiceListFaqsHandler,
  XAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsHandler,
  XAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdHandler,
  XAmzTargetAWSKendraFrontendServiceListIndicesHandler,
  XAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsHandler,
  XAmzTargetAWSKendraFrontendServiceListTagsForResourceHandler,
  XAmzTargetAWSKendraFrontendServiceListThesauriHandler,
  XAmzTargetAWSKendraFrontendServicePutPrincipalMappingHandler,
  XAmzTargetAWSKendraFrontendServiceQueryHandler,
  XAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobHandler,
  XAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobHandler,
  XAmzTargetAWSKendraFrontendServiceSubmitFeedbackHandler,
  XAmzTargetAWSKendraFrontendServiceTagResourceHandler,
  XAmzTargetAWSKendraFrontendServiceUntagResourceHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateDataSourceHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateExperienceHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateIndexHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigHandler,
  XAmzTargetAWSKendraFrontendServiceUpdateThesaurusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceBatchPutDocumentHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateDataSourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateExperienceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateFaqHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateIndexHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceCreateThesaurusHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteDataSourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteExperienceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteFaqHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteIndexHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDeleteThesaurusHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeDataSourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeExperienceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeFaqHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeIndexHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDescribeThesaurusHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceGetSnapshotsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListDataSourcesHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListEntityPersonasHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListExperienceEntitiesHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListExperiencesHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListFaqsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListIndicesHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListTagsForResourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceListThesauriHandler)
  .route('/', XAmzTargetAWSKendraFrontendServicePutPrincipalMappingHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceQueryHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceSubmitFeedbackHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceTagResourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUntagResourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateDataSourceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateExperienceHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateIndexHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigHandler)
  .route('/', XAmzTargetAWSKendraFrontendServiceUpdateThesaurusHandler)

export default app
