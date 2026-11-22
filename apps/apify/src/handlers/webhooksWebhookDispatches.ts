import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2WebhookDispatchesDispatchIdRoute, getV2WebhookDispatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksWebhookDispatchesHandler = app
  .openapi(getV2WebhookDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhookDispatchesDispatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
