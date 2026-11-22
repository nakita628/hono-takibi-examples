import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1AccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const todoSecurityHandler = app.openapi(postApiV1AccountsRoute, (c) => {
  throw new Error('Not implemented')
})
