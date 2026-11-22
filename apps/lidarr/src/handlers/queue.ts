import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1QueueBulkRoute, deleteApiV1QueueIdRoute, getApiV1QueueRoute } from '../routes'

const app = new OpenAPIHono()

export const queueHandler = app
  .openapi(deleteApiV1QueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QueueBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueueRoute, (c) => {
    throw new Error('Not implemented')
  })
