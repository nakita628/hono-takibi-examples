import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdGatewayAppTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayApplicationAndApplicationTypeMappingsHandler = app.openapi(
  getAccountsAccountIdGatewayAppTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
