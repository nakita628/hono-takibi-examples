import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsIntegrationIdRoute,
  getV1IntegrationsActiveRoute,
  getV1IntegrationsRoute,
  postV1IntegrationsChannelConnectionsOauthRoute,
  postV1IntegrationsChannelEndpointsLinkRoute,
  postV1IntegrationsChannelEndpointsOauthRoute,
  postV1IntegrationsChatOauthRoute,
  postV1IntegrationsIntegrationIdAutoConfigureRoute,
  postV1IntegrationsIntegrationIdentifierMobileLinkRoute,
  postV1IntegrationsIntegrationIdentifierWebhookConfigureRoute,
  postV1IntegrationsIntegrationIdSetPrimaryRoute,
  postV1IntegrationsRoute,
  putV1IntegrationsIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getV1IntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1IntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdAutoConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdSetPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChatOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChannelConnectionsOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChannelEndpointsOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsChannelEndpointsLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdentifierWebhookConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsIntegrationIdentifierMobileLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
