import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1QueueGrabBulkRoute, postApiV1QueueGrabIdRoute } from '../routes'

const app = new OpenAPIHono()

export const queueActionHandler = app
  .openapi(postApiV1QueueGrabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QueueGrabBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
