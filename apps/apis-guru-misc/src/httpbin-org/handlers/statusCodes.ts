import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStatusCodesRoute,
  getStatusCodesRoute,
  patchStatusCodesRoute,
  postStatusCodesRoute,
  putStatusCodesRoute,
  traceStatusCodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusCodesHandler = app
  .openapi(deleteStatusCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStatusCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatusCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStatusCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(traceStatusCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
