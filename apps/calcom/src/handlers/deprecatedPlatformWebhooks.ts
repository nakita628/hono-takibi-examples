import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2OauthClientsClientIdWebhooksRoute,
  deleteV2OauthClientsClientIdWebhooksWebhookIdRoute,
  getV2OauthClientsClientIdWebhooksRoute,
  getV2OauthClientsClientIdWebhooksWebhookIdRoute,
  patchV2OauthClientsClientIdWebhooksWebhookIdRoute,
  postV2OauthClientsClientIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deprecatedPlatformWebhooksHandler = app
  .openapi(postV2OauthClientsClientIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OauthClientsClientIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
