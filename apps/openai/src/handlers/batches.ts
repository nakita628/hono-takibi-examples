import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBatchesBatchIdRoute,
  getBatchesRoute,
  postBatchesBatchIdCancelRoute,
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
  .openapi(getBatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchesBatchIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
