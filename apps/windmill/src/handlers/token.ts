import { OpenAPIHono } from '@hono/zod-openapi'
import { getTokensListScopesRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenHandler = app.openapi(getTokensListScopesRoute, (c) => {
  throw new Error('Not implemented')
})
