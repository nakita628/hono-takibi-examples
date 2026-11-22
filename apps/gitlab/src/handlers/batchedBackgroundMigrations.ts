import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminBatchedBackgroundMigrationsIdRoute,
  getApiV4AdminBatchedBackgroundMigrationsRoute,
  putApiV4AdminBatchedBackgroundMigrationsIdPauseRoute,
  putApiV4AdminBatchedBackgroundMigrationsIdResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchedBackgroundMigrationsHandler = app
  .openapi(getApiV4AdminBatchedBackgroundMigrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminBatchedBackgroundMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminBatchedBackgroundMigrationsIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminBatchedBackgroundMigrationsIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
