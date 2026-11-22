import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3QueueGrabBulkRoute, postApiV3QueueGrabIdRoute } from '../routes'

const app = new OpenAPIHono()

export const queueActionHandler = app
  .openapi(postApiV3QueueGrabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3QueueGrabBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
