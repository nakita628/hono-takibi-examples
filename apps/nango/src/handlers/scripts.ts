import { OpenAPIHono } from '@hono/zod-openapi'
import { getScriptsConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app.openapi(getScriptsConfigRoute, (c) => {
  throw new Error('Not implemented')
})
