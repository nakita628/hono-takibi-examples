import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartScriptAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartScriptAddJsonHandler = app.openapi(postCartScriptAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
