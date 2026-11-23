import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const userAgentHandler = app.openapi(getUserAgentRoute, (c) => {
  throw new Error('Not implemented')
})
