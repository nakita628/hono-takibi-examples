import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdIntelMiscategorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const miscategorizationHandler = app.openapi(
  postAccountsAccountIdIntelMiscategorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
