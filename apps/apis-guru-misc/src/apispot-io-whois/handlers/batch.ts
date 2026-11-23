import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBatchIdRoute, getBatchIdRoute, getBatchRoute, postBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(getBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
