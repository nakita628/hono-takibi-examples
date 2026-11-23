import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssetsAssetAddressesRoute,
  getAssetsAssetHistoryRoute,
  getAssetsAssetRoute,
  getAssetsAssetTransactionsRoute,
  getAssetsAssetTxsRoute,
  getAssetsAssetUtxosRoute,
  getAssetsPolicyPolicyIdRoute,
  getAssetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetTxsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetUtxosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
