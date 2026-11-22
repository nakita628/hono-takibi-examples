import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AddressAddressRoute,
  getApiV1BlockBlockIdRoute,
  getApiV1BlockIndexHeightRoute,
  getApiV1EstimatefeeBlocksRoute,
  getApiV1SendtxHexRoute,
  getApiV1TxTxidRoute,
  getApiV1UtxoAddressRoute,
  postApiV1SendtxIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legacyHandler = app
  .openapi(getApiV1BlockIndexHeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AddressAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UtxoAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EstimatefeeBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SendtxHexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SendtxIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
