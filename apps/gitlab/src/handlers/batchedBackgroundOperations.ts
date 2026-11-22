import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminBatchedBackgroundOperationsIdRoute,
  getApiV4AdminBatchedBackgroundOperationsRoute,
  putApiV4AdminBatchedBackgroundOperationsIdRestartRoute,
  putApiV4AdminBatchedBackgroundOperationsIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchedBackgroundOperationsHandler = app
  .openapi(getApiV4AdminBatchedBackgroundOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminBatchedBackgroundOperationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminBatchedBackgroundOperationsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminBatchedBackgroundOperationsIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
