import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountTypeHandler = app.openapi(getAccountsTypesRoute, (c) => {
  throw new Error('Not implemented')
})
