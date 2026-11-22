import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NotificationsWebhooksEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksEventTypesHandler = app.openapi(
  getV1NotificationsWebhooksEventTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
