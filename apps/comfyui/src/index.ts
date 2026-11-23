import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAssetsIdRoute,
  deleteApiAssetsIdTagsRoute,
  deleteApiUserdataFileRoute,
  deleteApiWorkflowsWorkflowIdRoute,
  getApiAssetsIdContentRoute,
  getApiAssetsIdRoute,
  getApiAssetsRoute,
  getApiAssetsSeedStatusRoute,
  getApiAssetsTagsRefineRoute,
  getApiBillingChurnkeyAuthRoute,
  getApiDefaultWorkflowRoute,
  getApiDeploySummaryRoute,
  getApiEmbeddingsRoute,
  getApiExperimentModelsFolderRoute,
  getApiExperimentModelsRoute,
  getApiExtensionsRoute,
  getApiFeaturesRoute,
  getApiFilesMaskLayersRoute,
  getApiGlobalSubgraphsIdRoute,
  getApiGlobalSubgraphsRoute,
  getApiHistoryV2PromptIdRoute,
  getApiHistoryV2Route,
  getApiI18nRoute,
  getApiJobJobIdStatusRoute,
  getApiJobsJobIdAssetsRoute,
  getApiJobsJobIdRoute,
  getApiJobsRoute,
  getApiNodeReplacementsRoute,
  getApiObjectInfoRoute,
  getApiPromptRoute,
  getApiQueueRoute,
  getApiSettingsIdRoute,
  getApiSettingsRoute,
  getApiSystemStatsRoute,
  getApiTagsRoute,
  getApiTasksRoute,
  getApiTasksTaskIdRoute,
  getApiUserdataFilePublishRoute,
  getApiUserdataFileRoute,
  getApiUserdataRoute,
  getApiUserRoute,
  getApiUsersRoute,
  getApiVhsQueryvideoRoute,
  getApiViewRoute,
  getApiWorkflowsPublishedShareIdRoute,
  getApiWorkflowsRoute,
  getApiWorkflowsWorkflowIdContentRoute,
  getApiWorkflowsWorkflowIdRoute,
  getApiWorkflowTemplatesRoute,
  getHealthRoute,
  getInternalFolderPathsRoute,
  getInternalLogsRawRoute,
  getInternalLogsRoute,
  headApiAssetsHashHashRoute,
  patchApiWorkflowsWorkflowIdRoute,
  patchInternalLogsSubscribeRoute,
  postApiAssetsFromHashRoute,
  postApiAssetsIdTagsRoute,
  postApiAssetsPruneRoute,
  postApiAssetsRoute,
  postApiAssetsSeedCancelRoute,
  postApiAssetsSeedRoute,
  postApiDeployBundleRoute,
  postApiFeedbackRoute,
  postApiFreeRoute,
  postApiHistoryRoute,
  postApiInterruptRoute,
  postApiJobsCancelRoute,
  postApiJobsJobIdCancelRoute,
  postApiPromptRoute,
  postApiQueueRoute,
  postApiSettingsIdRoute,
  postApiSettingsRoute,
  postApiUploadImageRoute,
  postApiUploadMaskRoute,
  postApiUserdataFileMoveDestRoute,
  postApiUserdataFilePublishRoute,
  postApiUserdataFileRoute,
  postApiWorkflowsRoute,
  postApiWorkflowsWorkflowIdForkRoute,
  postApiWorkflowsWorkflowIdVersionsRoute,
  putApiAssetsIdRoute,
} from './routes'
import {
  deleteApiAssetsIdRouteHandler,
  deleteApiAssetsIdTagsRouteHandler,
  deleteApiUserdataFileRouteHandler,
  deleteApiWorkflowsWorkflowIdRouteHandler,
  getApiAssetsIdContentRouteHandler,
  getApiAssetsIdRouteHandler,
  getApiAssetsRouteHandler,
  getApiAssetsSeedStatusRouteHandler,
  getApiAssetsTagsRefineRouteHandler,
  getApiBillingChurnkeyAuthRouteHandler,
  getApiDefaultWorkflowRouteHandler,
  getApiDeploySummaryRouteHandler,
  getApiEmbeddingsRouteHandler,
  getApiExperimentModelsFolderRouteHandler,
  getApiExperimentModelsRouteHandler,
  getApiExtensionsRouteHandler,
  getApiFeaturesRouteHandler,
  getApiFilesMaskLayersRouteHandler,
  getApiGlobalSubgraphsIdRouteHandler,
  getApiGlobalSubgraphsRouteHandler,
  getApiHistoryV2PromptIdRouteHandler,
  getApiHistoryV2RouteHandler,
  getApiI18nRouteHandler,
  getApiJobJobIdStatusRouteHandler,
  getApiJobsJobIdAssetsRouteHandler,
  getApiJobsJobIdRouteHandler,
  getApiJobsRouteHandler,
  getApiNodeReplacementsRouteHandler,
  getApiObjectInfoRouteHandler,
  getApiPromptRouteHandler,
  getApiQueueRouteHandler,
  getApiSettingsIdRouteHandler,
  getApiSettingsRouteHandler,
  getApiSystemStatsRouteHandler,
  getApiTagsRouteHandler,
  getApiTasksRouteHandler,
  getApiTasksTaskIdRouteHandler,
  getApiUserdataFilePublishRouteHandler,
  getApiUserdataFileRouteHandler,
  getApiUserdataRouteHandler,
  getApiUserRouteHandler,
  getApiUsersRouteHandler,
  getApiVhsQueryvideoRouteHandler,
  getApiViewRouteHandler,
  getApiWorkflowsPublishedShareIdRouteHandler,
  getApiWorkflowsRouteHandler,
  getApiWorkflowsWorkflowIdContentRouteHandler,
  getApiWorkflowsWorkflowIdRouteHandler,
  getApiWorkflowTemplatesRouteHandler,
  getHealthRouteHandler,
  getInternalFolderPathsRouteHandler,
  getInternalLogsRawRouteHandler,
  getInternalLogsRouteHandler,
  headApiAssetsHashHashRouteHandler,
  patchApiWorkflowsWorkflowIdRouteHandler,
  patchInternalLogsSubscribeRouteHandler,
  postApiAssetsFromHashRouteHandler,
  postApiAssetsIdTagsRouteHandler,
  postApiAssetsPruneRouteHandler,
  postApiAssetsRouteHandler,
  postApiAssetsSeedCancelRouteHandler,
  postApiAssetsSeedRouteHandler,
  postApiDeployBundleRouteHandler,
  postApiFeedbackRouteHandler,
  postApiFreeRouteHandler,
  postApiHistoryRouteHandler,
  postApiInterruptRouteHandler,
  postApiJobsCancelRouteHandler,
  postApiJobsJobIdCancelRouteHandler,
  postApiPromptRouteHandler,
  postApiQueueRouteHandler,
  postApiSettingsIdRouteHandler,
  postApiSettingsRouteHandler,
  postApiUploadImageRouteHandler,
  postApiUploadMaskRouteHandler,
  postApiUserdataFileMoveDestRouteHandler,
  postApiUserdataFilePublishRouteHandler,
  postApiUserdataFileRouteHandler,
  postApiWorkflowsRouteHandler,
  postApiWorkflowsWorkflowIdForkRouteHandler,
  postApiWorkflowsWorkflowIdVersionsRouteHandler,
  putApiAssetsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAssetsRoute, getApiAssetsRouteHandler)
  .openapi(postApiAssetsRoute, postApiAssetsRouteHandler)
  .openapi(deleteApiAssetsIdRoute, deleteApiAssetsIdRouteHandler)
  .openapi(getApiAssetsIdRoute, getApiAssetsIdRouteHandler)
  .openapi(putApiAssetsIdRoute, putApiAssetsIdRouteHandler)
  .openapi(getApiAssetsIdContentRoute, getApiAssetsIdContentRouteHandler)
  .openapi(deleteApiAssetsIdTagsRoute, deleteApiAssetsIdTagsRouteHandler)
  .openapi(postApiAssetsIdTagsRoute, postApiAssetsIdTagsRouteHandler)
  .openapi(postApiAssetsFromHashRoute, postApiAssetsFromHashRouteHandler)
  .openapi(headApiAssetsHashHashRoute, headApiAssetsHashHashRouteHandler)
  .openapi(postApiAssetsPruneRoute, postApiAssetsPruneRouteHandler)
  .openapi(postApiAssetsSeedRoute, postApiAssetsSeedRouteHandler)
  .openapi(postApiAssetsSeedCancelRoute, postApiAssetsSeedCancelRouteHandler)
  .openapi(getApiAssetsSeedStatusRoute, getApiAssetsSeedStatusRouteHandler)
  .openapi(getApiAssetsTagsRefineRoute, getApiAssetsTagsRefineRouteHandler)
  .openapi(getApiBillingChurnkeyAuthRoute, getApiBillingChurnkeyAuthRouteHandler)
  .openapi(getApiDefaultWorkflowRoute, getApiDefaultWorkflowRouteHandler)
  .openapi(postApiDeployBundleRoute, postApiDeployBundleRouteHandler)
  .openapi(getApiDeploySummaryRoute, getApiDeploySummaryRouteHandler)
  .openapi(getApiEmbeddingsRoute, getApiEmbeddingsRouteHandler)
  .openapi(getApiExperimentModelsRoute, getApiExperimentModelsRouteHandler)
  .openapi(getApiExperimentModelsFolderRoute, getApiExperimentModelsFolderRouteHandler)
  .openapi(getApiExtensionsRoute, getApiExtensionsRouteHandler)
  .openapi(getApiFeaturesRoute, getApiFeaturesRouteHandler)
  .openapi(postApiFeedbackRoute, postApiFeedbackRouteHandler)
  .openapi(getApiFilesMaskLayersRoute, getApiFilesMaskLayersRouteHandler)
  .openapi(postApiFreeRoute, postApiFreeRouteHandler)
  .openapi(getApiGlobalSubgraphsRoute, getApiGlobalSubgraphsRouteHandler)
  .openapi(getApiGlobalSubgraphsIdRoute, getApiGlobalSubgraphsIdRouteHandler)
  .openapi(postApiHistoryRoute, postApiHistoryRouteHandler)
  .openapi(getApiHistoryV2Route, getApiHistoryV2RouteHandler)
  .openapi(getApiHistoryV2PromptIdRoute, getApiHistoryV2PromptIdRouteHandler)
  .openapi(getApiI18nRoute, getApiI18nRouteHandler)
  .openapi(postApiInterruptRoute, postApiInterruptRouteHandler)
  .openapi(getApiJobJobIdStatusRoute, getApiJobJobIdStatusRouteHandler)
  .openapi(getApiJobsRoute, getApiJobsRouteHandler)
  .openapi(getApiJobsJobIdRoute, getApiJobsJobIdRouteHandler)
  .openapi(getApiJobsJobIdAssetsRoute, getApiJobsJobIdAssetsRouteHandler)
  .openapi(postApiJobsJobIdCancelRoute, postApiJobsJobIdCancelRouteHandler)
  .openapi(postApiJobsCancelRoute, postApiJobsCancelRouteHandler)
  .openapi(getApiNodeReplacementsRoute, getApiNodeReplacementsRouteHandler)
  .openapi(getApiObjectInfoRoute, getApiObjectInfoRouteHandler)
  .openapi(getApiPromptRoute, getApiPromptRouteHandler)
  .openapi(postApiPromptRoute, postApiPromptRouteHandler)
  .openapi(getApiQueueRoute, getApiQueueRouteHandler)
  .openapi(postApiQueueRoute, postApiQueueRouteHandler)
  .openapi(getApiSettingsRoute, getApiSettingsRouteHandler)
  .openapi(postApiSettingsRoute, postApiSettingsRouteHandler)
  .openapi(getApiSettingsIdRoute, getApiSettingsIdRouteHandler)
  .openapi(postApiSettingsIdRoute, postApiSettingsIdRouteHandler)
  .openapi(getApiSystemStatsRoute, getApiSystemStatsRouteHandler)
  .openapi(getApiTagsRoute, getApiTagsRouteHandler)
  .openapi(getApiTasksRoute, getApiTasksRouteHandler)
  .openapi(getApiTasksTaskIdRoute, getApiTasksTaskIdRouteHandler)
  .openapi(postApiUploadImageRoute, postApiUploadImageRouteHandler)
  .openapi(postApiUploadMaskRoute, postApiUploadMaskRouteHandler)
  .openapi(getApiUserRoute, getApiUserRouteHandler)
  .openapi(getApiUserdataRoute, getApiUserdataRouteHandler)
  .openapi(deleteApiUserdataFileRoute, deleteApiUserdataFileRouteHandler)
  .openapi(getApiUserdataFileRoute, getApiUserdataFileRouteHandler)
  .openapi(postApiUserdataFileRoute, postApiUserdataFileRouteHandler)
  .openapi(postApiUserdataFileMoveDestRoute, postApiUserdataFileMoveDestRouteHandler)
  .openapi(getApiUserdataFilePublishRoute, getApiUserdataFilePublishRouteHandler)
  .openapi(postApiUserdataFilePublishRoute, postApiUserdataFilePublishRouteHandler)
  .openapi(getApiUsersRoute, getApiUsersRouteHandler)
  .openapi(getApiVhsQueryvideoRoute, getApiVhsQueryvideoRouteHandler)
  .openapi(getApiViewRoute, getApiViewRouteHandler)
  .openapi(getApiWorkflowTemplatesRoute, getApiWorkflowTemplatesRouteHandler)
  .openapi(getApiWorkflowsRoute, getApiWorkflowsRouteHandler)
  .openapi(postApiWorkflowsRoute, postApiWorkflowsRouteHandler)
  .openapi(deleteApiWorkflowsWorkflowIdRoute, deleteApiWorkflowsWorkflowIdRouteHandler)
  .openapi(getApiWorkflowsWorkflowIdRoute, getApiWorkflowsWorkflowIdRouteHandler)
  .openapi(patchApiWorkflowsWorkflowIdRoute, patchApiWorkflowsWorkflowIdRouteHandler)
  .openapi(getApiWorkflowsWorkflowIdContentRoute, getApiWorkflowsWorkflowIdContentRouteHandler)
  .openapi(postApiWorkflowsWorkflowIdForkRoute, postApiWorkflowsWorkflowIdForkRouteHandler)
  .openapi(postApiWorkflowsWorkflowIdVersionsRoute, postApiWorkflowsWorkflowIdVersionsRouteHandler)
  .openapi(getApiWorkflowsPublishedShareIdRoute, getApiWorkflowsPublishedShareIdRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getInternalFolderPathsRoute, getInternalFolderPathsRouteHandler)
  .openapi(getInternalLogsRoute, getInternalLogsRouteHandler)
  .openapi(getInternalLogsRawRoute, getInternalLogsRawRouteHandler)
  .openapi(patchInternalLogsSubscribeRoute, patchInternalLogsSubscribeRouteHandler)

export default app
