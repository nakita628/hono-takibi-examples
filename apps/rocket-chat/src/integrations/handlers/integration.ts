import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1IntegrationsGetRoute,
  getApiV1IntegrationsHistoryRoute,
  getApiV1IntegrationsListRoute,
  postApiV1IntegrationsClearHistoryRoute,
  postApiV1IntegrationsCreateRoute,
  postApiV1IntegrationsRemoveRoute,
  postApiV1IntegrationsReplayOutgoingRoute,
  putApiV1IntegrationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationHandler = app
  .openapi(postApiV1IntegrationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IntegrationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IntegrationsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IntegrationsClearHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IntegrationsReplayOutgoingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IntegrationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IntegrationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IntegrationsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
