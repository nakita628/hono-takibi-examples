import { OpenAPIHono } from '@hono/zod-openapi'
import { getAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app.openapi(getAliasesRoute, (c) => {
  throw new Error('Not implemented')
})
