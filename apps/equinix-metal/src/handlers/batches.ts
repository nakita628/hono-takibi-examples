import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBatchesIdRoute,
  getBatchesIdRoute,
  getProjectsIdBatchesRoute,
  postProjectsIdDevicesBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchesHandler = app
  .openapi(deleteBatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdDevicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
