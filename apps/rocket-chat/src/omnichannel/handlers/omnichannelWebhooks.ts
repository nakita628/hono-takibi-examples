import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1LivechatWebhookTestRoute, postApiV1OmnichannelIntegrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const omnichannelWebhooksHandler = app
  .openapi(postApiV1OmnichannelIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatWebhookTestRoute, (c) => {
    throw new Error('Not implemented')
  })
