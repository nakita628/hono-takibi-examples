import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2DataEvmTokenBalancesNetworkAddressRoute,
  getV2DataEvmTokenOwnershipNetworkAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onchainDataHandler = app
  .openapi(getV2DataEvmTokenOwnershipNetworkAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataEvmTokenBalancesNetworkAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
