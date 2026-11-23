import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpBlocklistRoute } from '../routes'

const app = new OpenAPIHono()

export const ipBlocklistHandler = app.openapi(getIpBlocklistRoute, (c) => {
  throw new Error('Not implemented')
})
