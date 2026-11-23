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
  headApiAssetsHashHashRoute,
  patchApiWorkflowsWorkflowIdRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAssetsIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsFromHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiAssetsHashHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsPruneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsSeedCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsSeedStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsTagsRefineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBillingChurnkeyAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDefaultWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeployBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeploySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExperimentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExperimentModelsFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilesMaskLayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGlobalSubgraphsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGlobalSubgraphsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHistoryV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHistoryV2PromptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiI18nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInterruptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsJobIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNodeReplacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiObjectInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPromptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPromptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserdataFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserdataFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserdataFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserdataFileMoveDestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserdataFilePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserdataFilePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVhsQueryvideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsWorkflowIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorkflowsWorkflowIdForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorkflowsWorkflowIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorkflowsPublishedShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
