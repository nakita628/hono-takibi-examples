import { OpenAPIHono } from '@hono/zod-openapi'
import { postAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app.openapi(postAliasesRoute, (c) => {
  throw new Error('Not implemented')
})
