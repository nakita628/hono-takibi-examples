import { OpenAPIHono } from '@hono/zod-openapi'
import { getProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const protectionHandler = app.openapi(getProtectionRoute, (c) => {
  throw new Error('Not implemented')
})
