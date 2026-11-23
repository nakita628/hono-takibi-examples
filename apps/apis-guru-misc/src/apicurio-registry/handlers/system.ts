import { OpenAPIHono } from '@hono/zod-openapi'
import { getSystemInfoRoute, getSystemLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
