import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute,
  getV1DeploymentsDeploymentIdFeatureFlagsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsLabelsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute,
  getV1TeamsTeamIdFeatureFlagsFlagsRoute,
  getV1TeamsTeamIdFeatureFlagsSettingsRoute,
  getV2ProjectsProjectIdOrNameFeatureFlagsFlagsRoute,
  getV2TeamsTeamIdFeatureFlagsFlagsRoute,
  patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute,
  patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute,
  patchV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute,
  postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupRoute,
  postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsHandler = app
  .openapi(postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdOrNameFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
