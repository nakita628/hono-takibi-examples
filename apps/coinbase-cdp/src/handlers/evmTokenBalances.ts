import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2EvmTokenBalancesNetworkAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const evmTokenBalancesHandler = app.openapi(
  getV2EvmTokenBalancesNetworkAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
