import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV3QueueBulkRoute, deleteApiV3QueueIdRoute, getApiV3QueueRoute } from '../routes'

const app = new OpenAPIHono()

export const queueHandler = app
  .openapi(deleteApiV3QueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3QueueBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QueueRoute, (c) => {
    throw new Error('Not implemented')
  })
