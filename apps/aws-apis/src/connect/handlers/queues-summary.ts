import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueuesSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const queuesSummaryHandler = app.openapi(getQueuesSummaryInstanceIdRoute, (c) => {
  throw new Error('Not implemented')
})
