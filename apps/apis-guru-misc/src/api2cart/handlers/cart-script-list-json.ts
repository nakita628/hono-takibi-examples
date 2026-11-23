import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartScriptListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartScriptListJsonHandler = app.openapi(getCartScriptListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
