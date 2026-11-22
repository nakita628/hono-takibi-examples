import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdWatermarkRoute,
  putV21AccountsAccountIdWatermarkPreviewRoute,
  putV21AccountsAccountIdWatermarkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountWatermarksHandler = app
  .openapi(getV21AccountsAccountIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWatermarkPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
