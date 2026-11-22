import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTestnetInsAddrAddressBalanceRoute,
  getTestnetInsAddrAddressRoute,
  getTestnetInsAddrAddressTotalReceivedRoute,
  getTestnetInsAddrAddressTotalSentRoute,
  getTestnetInsAddrAddressUnconfirmedBalanceRoute,
  getTestnetInsAddrAddressUtxoRoute,
  getTestnetInsBlockBlockhashRoute,
  getTestnetInsBlockIndexBlockindexRoute,
  getTestnetInsRawtxTxidRoute,
  getTestnetInsStatusRoute,
  getTestnetInsSyncRoute,
  getTestnetInsTxsRoute,
  getTestnetInsTxTxidRoute,
  postTestnetInsTxSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const testnetInsightHandler = app
  .openapi(getTestnetInsAddrAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsAddrAddressBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsAddrAddressTotalReceivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsAddrAddressTotalSentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsAddrAddressUnconfirmedBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsAddrAddressUtxoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsBlockIndexBlockindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsBlockBlockhashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsRawtxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetInsTxSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsTxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetInsTxsRoute, (c) => {
    throw new Error('Not implemented')
  })
