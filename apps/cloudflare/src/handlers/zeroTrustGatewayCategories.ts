import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdGatewayCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayCategoriesHandler = app.openapi(
  getAccountsAccountIdGatewayCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
