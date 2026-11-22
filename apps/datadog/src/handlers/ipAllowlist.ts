import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2IpAllowlistRoute, patchApiV2IpAllowlistRoute } from '../routes'

const app = new OpenAPIHono()

export const ipAllowlistHandler = app
  .openapi(getApiV2IpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
