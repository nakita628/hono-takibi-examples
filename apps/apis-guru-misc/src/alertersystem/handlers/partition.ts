import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPartitionIdRoute,
  getApiPartitionIdRoute,
  getApiPartitionRoute,
  postApiPartitionRoute,
  putApiPartitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partitionHandler = app
  .openapi(getApiPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPartitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
