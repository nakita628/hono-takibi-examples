import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectorConnectorIdRoute,
  deleteConnectorSyncJobConnectorSyncJobIdRoute,
  getConnectorConnectorIdRoute,
  getConnectorRoute,
  getConnectorSyncJobConnectorSyncJobIdRoute,
  getConnectorSyncJobRoute,
  postConnectorRoute,
  postConnectorSyncJobRoute,
  putConnectorConnectorIdApiKeyIdRoute,
  putConnectorConnectorIdCheckInRoute,
  putConnectorConnectorIdConfigurationRoute,
  putConnectorConnectorIdErrorRoute,
  putConnectorConnectorIdFeaturesRoute,
  putConnectorConnectorIdFilteringActivateRoute,
  putConnectorConnectorIdFilteringRoute,
  putConnectorConnectorIdFilteringValidationRoute,
  putConnectorConnectorIdIndexNameRoute,
  putConnectorConnectorIdNameRoute,
  putConnectorConnectorIdNativeRoute,
  putConnectorConnectorIdPipelineRoute,
  putConnectorConnectorIdRoute,
  putConnectorConnectorIdSchedulingRoute,
  putConnectorConnectorIdServiceTypeRoute,
  putConnectorConnectorIdStatusRoute,
  putConnectorRoute,
  putConnectorSyncJobConnectorSyncJobIdCancelRoute,
  putConnectorSyncJobConnectorSyncJobIdCheckInRoute,
  putConnectorSyncJobConnectorSyncJobIdClaimRoute,
  putConnectorSyncJobConnectorSyncJobIdErrorRoute,
  putConnectorSyncJobConnectorSyncJobIdStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorHandler = app
  .openapi(putConnectorConnectorIdCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectorConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorSyncJobConnectorSyncJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorSyncJobConnectorSyncJobIdCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorSyncJobConnectorSyncJobIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorSyncJobConnectorSyncJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectorSyncJobConnectorSyncJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorSyncJobConnectorSyncJobIdErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorSyncJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectorSyncJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorSyncJobConnectorSyncJobIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdFilteringActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdFilteringValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdNativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdSchedulingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorConnectorIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
