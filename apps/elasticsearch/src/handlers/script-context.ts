import { OpenAPIHono } from '@hono/zod-openapi'
import { getScriptContextRoute } from '../routes'

const app = new OpenAPIHono()

export const scriptContextHandler = app.openapi(getScriptContextRoute, (c) => {
  throw new Error('Not implemented')
})
