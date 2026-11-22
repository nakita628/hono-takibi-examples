import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdGatewayDnsDestinationIpsRoute } from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayDNSDestinationIPv4AddressPairsHandler = app.openapi(
  getAccountsAccountIdGatewayDnsDestinationIpsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
