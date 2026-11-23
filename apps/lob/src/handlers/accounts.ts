import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(getAccountsRoute, (c) => {
  throw new Error('Not implemented')
})
