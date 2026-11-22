import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2SolanaTokenBalancesNetworkAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const solanaTokenBalancesHandler = app.openapi(
  getV2SolanaTokenBalancesNetworkAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
