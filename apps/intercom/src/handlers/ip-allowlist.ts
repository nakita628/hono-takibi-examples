import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpAllowlistRoute, putIpAllowlistRoute } from '../routes'

const app = new OpenAPIHono()

export const ipAllowlistHandler = app
  .openapi(getIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
