import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigRoute,
  getV1ConfigRoute,
  postV1ConfigRoute,
  putV1ConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customTypeHandler = app
  .openapi(deleteV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
