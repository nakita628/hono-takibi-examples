import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ConfigCustomRoute,
  getApiV1ConfigAboutRoute,
  getApiV1ConfigCustomRoute,
  getApiV1ConfigRoute,
  putApiV1ConfigCustomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
