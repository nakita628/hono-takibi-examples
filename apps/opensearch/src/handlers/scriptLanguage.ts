import { OpenAPIHono } from '@hono/zod-openapi'
import { getScriptLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const scriptLanguageHandler = app.openapi(getScriptLanguageRoute, (c) => {
  throw new Error('Not implemented')
})
