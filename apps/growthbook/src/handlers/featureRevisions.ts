import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute,
  deleteV1FeaturesIdRevisionsVersionRulesRuleIdRoute,
  getV1FeaturesIdRevisionsLatestRoute,
  getV1FeaturesIdRevisionsRoute,
  getV1FeaturesIdRevisionsVersionMergeStatusRoute,
  getV1FeaturesIdRevisionsVersionRoute,
  getV1RevisionsRoute,
  postV1FeaturesIdRevisionsRoute,
  postV1FeaturesIdRevisionsVersionDiscardRoute,
  postV1FeaturesIdRevisionsVersionPublishRoute,
  postV1FeaturesIdRevisionsVersionRebaseRoute,
  postV1FeaturesIdRevisionsVersionRequestReviewRoute,
  postV1FeaturesIdRevisionsVersionRevertRoute,
  postV1FeaturesIdRevisionsVersionRulesReorderRoute,
  postV1FeaturesIdRevisionsVersionRulesRoute,
  postV1FeaturesIdRevisionsVersionSubmitReviewRoute,
  postV1FeaturesIdRevisionsVersionToggleRoute,
  putV1FeaturesIdRevisionsVersionArchiveRoute,
  putV1FeaturesIdRevisionsVersionDefaultValueRoute,
  putV1FeaturesIdRevisionsVersionHoldoutRoute,
  putV1FeaturesIdRevisionsVersionMetadataRoute,
  putV1FeaturesIdRevisionsVersionPrerequisitesRoute,
  putV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute,
  putV1FeaturesIdRevisionsVersionRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureRevisionsHandler = app
  .openapi(getV1RevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionPrerequisitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionHoldoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FeaturesIdRevisionsVersionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
