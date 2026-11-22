import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgOrgIdWebhooksWebhookIdRoute,
  getOrgOrgIdWebhooksRoute,
  getOrgOrgIdWebhooksWebhookIdRoute,
  postOrgOrgIdWebhooksRoute,
  postOrgOrgIdWebhooksWebhookIdPingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getOrgOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdWebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
