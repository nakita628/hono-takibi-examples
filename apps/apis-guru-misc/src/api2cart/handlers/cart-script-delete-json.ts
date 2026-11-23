import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCartScriptDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartScriptDeleteJsonHandler = app.openapi(deleteCartScriptDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
