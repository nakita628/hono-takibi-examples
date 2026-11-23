import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueuesNameJobsRoute,
  getQueuesNameJobsRoute,
  getQueuesNameRoute,
  getQueuesRoute,
  putQueuesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queuesHandler = app
  .openapi(getQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueuesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueuesNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
