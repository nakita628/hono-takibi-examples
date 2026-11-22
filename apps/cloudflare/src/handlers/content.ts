import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdDataSecurityPostureContentRoute } from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app.openapi(
  getAccountsAccountIdDataSecurityPostureContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
