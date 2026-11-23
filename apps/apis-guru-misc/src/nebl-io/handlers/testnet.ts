import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTestnetFaucetRoute,
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
  getTestnetNtp1AddressinfoAddressRoute,
  getTestnetNtp1StakeholdersTokenidRoute,
  getTestnetNtp1TokenidTokensymbolRoute,
  getTestnetNtp1TokenmetadataTokenidRoute,
  getTestnetNtp1TokenmetadataTokenidUtxoRoute,
  getTestnetNtp1TransactioninfoTxidRoute,
  postTestnetInsTxSendRoute,
  postTestnetNtp1BroadcastRoute,
  postTestnetNtp1BurntokenRoute,
  postTestnetNtp1IssueRoute,
  postTestnetNtp1SendtokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const testnetHandler = app
  .openapi(getTestnetFaucetRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getTestnetNtp1AddressinfoAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1BroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1BurntokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1IssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1SendtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1StakeholdersTokenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TokenidTokensymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TokenmetadataTokenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TokenmetadataTokenidUtxoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TransactioninfoTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
