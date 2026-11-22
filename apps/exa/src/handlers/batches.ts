import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBatchesIdRoute,
  getBatchesIdRoute,
  getBatchesRoute,
  postBatchesIdCancelRoute,
  postBatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchesHandler = app
  .openapi(postBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
