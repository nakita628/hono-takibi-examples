import { OpenAPIHono } from '@hono/zod-openapi'
import { getActivitySessionRoute, getActivityWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app
  .openapi(getActivitySessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivityWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
