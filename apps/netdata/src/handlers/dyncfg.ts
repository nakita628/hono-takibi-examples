import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ConfigRoute, postApiV1ConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const dyncfgHandler = app
  .openapi(getApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
