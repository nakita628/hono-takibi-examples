import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInsAddrAddressBalanceRoute,
  getInsAddrAddressRoute,
  getInsAddrAddressTotalReceivedRoute,
  getInsAddrAddressTotalSentRoute,
  getInsAddrAddressUnconfirmedBalanceRoute,
  getInsAddrAddressUtxoRoute,
  getInsBlockBlockhashRoute,
  getInsBlockIndexBlockindexRoute,
  getInsRawtxTxidRoute,
  getInsStatusRoute,
  getInsSyncRoute,
  getInsTxsRoute,
  getInsTxTxidRoute,
  postInsTxSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightHandler = app
  .openapi(getInsAddrAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsAddrAddressBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsAddrAddressTotalReceivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsAddrAddressTotalSentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsAddrAddressUnconfirmedBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsAddrAddressUtxoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsBlockIndexBlockindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsBlockBlockhashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsRawtxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInsTxSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsTxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsTxsRoute, (c) => {
    throw new Error('Not implemented')
  })
