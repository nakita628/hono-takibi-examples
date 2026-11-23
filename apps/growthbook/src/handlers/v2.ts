import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2FeaturesIdRevisionsVersionLogLogIdRoute,
  deleteV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute,
  deleteV2FeaturesIdRevisionsVersionRulesRuleIdRoute,
  deleteV2FeaturesIdRoute,
  getV2FeatureKeysRoute,
  getV2FeatureRevisionsRoute,
  getV2FeaturesIdRevisionsLatestRoute,
  getV2FeaturesIdRevisionsRoute,
  getV2FeaturesIdRevisionsVersionDiffRoute,
  getV2FeaturesIdRevisionsVersionLogRoute,
  getV2FeaturesIdRevisionsVersionMergeStatusRoute,
  getV2FeaturesIdRevisionsVersionRoute,
  getV2FeaturesIdRoute,
  getV2FeaturesRoute,
  getV2StaleFeaturesRoute,
  postV2DashboardsRoute,
  postV2FeaturesIdRevertRoute,
  postV2FeaturesIdRevisionsRoute,
  postV2FeaturesIdRevisionsVersionDiscardRoute,
  postV2FeaturesIdRevisionsVersionPublishRoute,
  postV2FeaturesIdRevisionsVersionRebasePreviewRoute,
  postV2FeaturesIdRevisionsVersionRebaseRoute,
  postV2FeaturesIdRevisionsVersionRecallReviewRoute,
  postV2FeaturesIdRevisionsVersionReopenRoute,
  postV2FeaturesIdRevisionsVersionRequestReviewRoute,
  postV2FeaturesIdRevisionsVersionRevertRoute,
  postV2FeaturesIdRevisionsVersionRulesReorderRoute,
  postV2FeaturesIdRevisionsVersionRulesRoute,
  postV2FeaturesIdRevisionsVersionSchedulePublishRoute,
  postV2FeaturesIdRevisionsVersionSubmitReviewRoute,
  postV2FeaturesIdRevisionsVersionToggleRoute,
  postV2FeaturesIdRevisionsVersionUndoReviewRoute,
  postV2FeaturesIdRoute,
  postV2FeaturesIdToggleRoute,
  postV2FeaturesRoute,
  putV2FeaturesIdRevisionsVersionArchiveRoute,
  putV2FeaturesIdRevisionsVersionDefaultValueRoute,
  putV2FeaturesIdRevisionsVersionHoldoutRoute,
  putV2FeaturesIdRevisionsVersionLogLogIdRoute,
  putV2FeaturesIdRevisionsVersionMetadataRoute,
  putV2FeaturesIdRevisionsVersionPrerequisitesRoute,
  putV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute,
  putV2FeaturesIdRevisionsVersionRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeatureKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StaleFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeatureRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRevisionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRevisionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRevisionsVersionDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionPrerequisitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionHoldoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FeaturesIdRevisionsVersionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRevisionsVersionLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FeaturesIdRevisionsVersionLogLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FeaturesIdRevisionsVersionLogLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRevisionsVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRebasePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevisionsVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
