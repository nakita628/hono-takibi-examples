import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAddressesAddressExtendedRoute,
  getAddressesAddressRoute,
  getAddressesAddressTotalRoute,
  getAddressesAddressTransactionsRoute,
  getAddressesAddressTxsRoute,
  getAddressesAddressUtxosAssetRoute,
  getAddressesAddressUtxosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressExtendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressUtxosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressUtxosAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressTxsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
