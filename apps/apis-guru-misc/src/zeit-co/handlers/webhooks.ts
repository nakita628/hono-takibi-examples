import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsWebhooksIdRoute,
  getV1IntegrationsWebhooksRoute,
  postV1IntegrationsWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV1IntegrationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
