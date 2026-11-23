import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1IntegrationsGetRoute,
  getApiV1IntegrationsHistoryRoute,
  getApiV1IntegrationsListRoute,
  getApiV1OauthAppsGetRoute,
  getApiV1OauthAppsListRoute,
  postApiV1IntegrationsClearHistoryRoute,
  postApiV1IntegrationsCreateRoute,
  postApiV1IntegrationsRemoveRoute,
  postApiV1IntegrationsReplayOutgoingRoute,
  postApiV1OauthAppsCreateRoute,
  postApiV1OauthAppsDeleteRoute,
  postApiV1OauthAppsUpdateRoute,
  putApiV1IntegrationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
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
  .openapi(postApiV1OauthAppsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OauthAppsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OauthAppsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OauthAppsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OauthAppsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
