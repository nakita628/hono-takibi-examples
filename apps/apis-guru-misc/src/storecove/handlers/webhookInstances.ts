import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWebhookInstancesGuidRoute, getWebhookInstancesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookInstancesHandler = app
  .openapi(getWebhookInstancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookInstancesGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
