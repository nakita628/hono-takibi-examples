import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ScriptsScriptIdRunRoute } from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app.openapi(postV1ScriptsScriptIdRunRoute, (c) => {
  throw new Error('Not implemented')
})
