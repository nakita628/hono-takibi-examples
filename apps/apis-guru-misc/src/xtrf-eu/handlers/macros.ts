import { OpenAPIHono } from '@hono/zod-openapi'
import { postMacrosMacroIdRunRoute } from '../routes'

const app = new OpenAPIHono()

export const macrosHandler = app.openapi(postMacrosMacroIdRunRoute, (c) => {
  throw new Error('Not implemented')
})
