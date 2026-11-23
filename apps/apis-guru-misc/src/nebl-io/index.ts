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
  getNtp1AddressinfoAddressRoute,
  getNtp1StakeholdersTokenidRoute,
  getNtp1TokenidTokensymbolRoute,
  getNtp1TokenmetadataTokenidRoute,
  getNtp1TokenmetadataTokenidUtxoRoute,
  getNtp1TransactioninfoTxidRoute,
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
  postInsTxSendRoute,
  postNtp1BroadcastRoute,
  postNtp1BurntokenRoute,
  postNtp1IssueRoute,
  postNtp1SendtokenRoute,
  postRoute,
  postTestnetInsTxSendRoute,
  postTestnetNtp1BroadcastRoute,
  postTestnetNtp1BurntokenRoute,
  postTestnetNtp1IssueRoute,
  postTestnetNtp1SendtokenRoute,
} from './routes'
import {
  getInsAddrAddressBalanceRouteHandler,
  getInsAddrAddressRouteHandler,
  getInsAddrAddressTotalReceivedRouteHandler,
  getInsAddrAddressTotalSentRouteHandler,
  getInsAddrAddressUnconfirmedBalanceRouteHandler,
  getInsAddrAddressUtxoRouteHandler,
  getInsBlockBlockhashRouteHandler,
  getInsBlockIndexBlockindexRouteHandler,
  getInsRawtxTxidRouteHandler,
  getInsStatusRouteHandler,
  getInsSyncRouteHandler,
  getInsTxsRouteHandler,
  getInsTxTxidRouteHandler,
  getNtp1AddressinfoAddressRouteHandler,
  getNtp1StakeholdersTokenidRouteHandler,
  getNtp1TokenidTokensymbolRouteHandler,
  getNtp1TokenmetadataTokenidRouteHandler,
  getNtp1TokenmetadataTokenidUtxoRouteHandler,
  getNtp1TransactioninfoTxidRouteHandler,
  getTestnetFaucetRouteHandler,
  getTestnetInsAddrAddressBalanceRouteHandler,
  getTestnetInsAddrAddressRouteHandler,
  getTestnetInsAddrAddressTotalReceivedRouteHandler,
  getTestnetInsAddrAddressTotalSentRouteHandler,
  getTestnetInsAddrAddressUnconfirmedBalanceRouteHandler,
  getTestnetInsAddrAddressUtxoRouteHandler,
  getTestnetInsBlockBlockhashRouteHandler,
  getTestnetInsBlockIndexBlockindexRouteHandler,
  getTestnetInsRawtxTxidRouteHandler,
  getTestnetInsStatusRouteHandler,
  getTestnetInsSyncRouteHandler,
  getTestnetInsTxsRouteHandler,
  getTestnetInsTxTxidRouteHandler,
  getTestnetNtp1AddressinfoAddressRouteHandler,
  getTestnetNtp1StakeholdersTokenidRouteHandler,
  getTestnetNtp1TokenidTokensymbolRouteHandler,
  getTestnetNtp1TokenmetadataTokenidRouteHandler,
  getTestnetNtp1TokenmetadataTokenidUtxoRouteHandler,
  getTestnetNtp1TransactioninfoTxidRouteHandler,
  postInsTxSendRouteHandler,
  postNtp1BroadcastRouteHandler,
  postNtp1BurntokenRouteHandler,
  postNtp1IssueRouteHandler,
  postNtp1SendtokenRouteHandler,
  postRouteHandler,
  postTestnetInsTxSendRouteHandler,
  postTestnetNtp1BroadcastRouteHandler,
  postTestnetNtp1BurntokenRouteHandler,
  postTestnetNtp1IssueRouteHandler,
  postTestnetNtp1SendtokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRoute, postRouteHandler)
  .openapi(getInsAddrAddressRoute, getInsAddrAddressRouteHandler)
  .openapi(getInsAddrAddressBalanceRoute, getInsAddrAddressBalanceRouteHandler)
  .openapi(getInsAddrAddressTotalReceivedRoute, getInsAddrAddressTotalReceivedRouteHandler)
  .openapi(getInsAddrAddressTotalSentRoute, getInsAddrAddressTotalSentRouteHandler)
  .openapi(
    getInsAddrAddressUnconfirmedBalanceRoute,
    getInsAddrAddressUnconfirmedBalanceRouteHandler,
  )
  .openapi(getInsAddrAddressUtxoRoute, getInsAddrAddressUtxoRouteHandler)
  .openapi(getInsBlockIndexBlockindexRoute, getInsBlockIndexBlockindexRouteHandler)
  .openapi(getInsBlockBlockhashRoute, getInsBlockBlockhashRouteHandler)
  .openapi(getInsRawtxTxidRoute, getInsRawtxTxidRouteHandler)
  .openapi(getInsStatusRoute, getInsStatusRouteHandler)
  .openapi(getInsSyncRoute, getInsSyncRouteHandler)
  .openapi(postInsTxSendRoute, postInsTxSendRouteHandler)
  .openapi(getInsTxTxidRoute, getInsTxTxidRouteHandler)
  .openapi(getInsTxsRoute, getInsTxsRouteHandler)
  .openapi(getNtp1AddressinfoAddressRoute, getNtp1AddressinfoAddressRouteHandler)
  .openapi(postNtp1BroadcastRoute, postNtp1BroadcastRouteHandler)
  .openapi(postNtp1BurntokenRoute, postNtp1BurntokenRouteHandler)
  .openapi(postNtp1IssueRoute, postNtp1IssueRouteHandler)
  .openapi(postNtp1SendtokenRoute, postNtp1SendtokenRouteHandler)
  .openapi(getNtp1StakeholdersTokenidRoute, getNtp1StakeholdersTokenidRouteHandler)
  .openapi(getNtp1TokenidTokensymbolRoute, getNtp1TokenidTokensymbolRouteHandler)
  .openapi(getNtp1TokenmetadataTokenidRoute, getNtp1TokenmetadataTokenidRouteHandler)
  .openapi(getNtp1TokenmetadataTokenidUtxoRoute, getNtp1TokenmetadataTokenidUtxoRouteHandler)
  .openapi(getNtp1TransactioninfoTxidRoute, getNtp1TransactioninfoTxidRouteHandler)
  .openapi(getTestnetFaucetRoute, getTestnetFaucetRouteHandler)
  .openapi(getTestnetInsAddrAddressRoute, getTestnetInsAddrAddressRouteHandler)
  .openapi(getTestnetInsAddrAddressBalanceRoute, getTestnetInsAddrAddressBalanceRouteHandler)
  .openapi(
    getTestnetInsAddrAddressTotalReceivedRoute,
    getTestnetInsAddrAddressTotalReceivedRouteHandler,
  )
  .openapi(getTestnetInsAddrAddressTotalSentRoute, getTestnetInsAddrAddressTotalSentRouteHandler)
  .openapi(
    getTestnetInsAddrAddressUnconfirmedBalanceRoute,
    getTestnetInsAddrAddressUnconfirmedBalanceRouteHandler,
  )
  .openapi(getTestnetInsAddrAddressUtxoRoute, getTestnetInsAddrAddressUtxoRouteHandler)
  .openapi(getTestnetInsBlockIndexBlockindexRoute, getTestnetInsBlockIndexBlockindexRouteHandler)
  .openapi(getTestnetInsBlockBlockhashRoute, getTestnetInsBlockBlockhashRouteHandler)
  .openapi(getTestnetInsRawtxTxidRoute, getTestnetInsRawtxTxidRouteHandler)
  .openapi(getTestnetInsStatusRoute, getTestnetInsStatusRouteHandler)
  .openapi(getTestnetInsSyncRoute, getTestnetInsSyncRouteHandler)
  .openapi(postTestnetInsTxSendRoute, postTestnetInsTxSendRouteHandler)
  .openapi(getTestnetInsTxTxidRoute, getTestnetInsTxTxidRouteHandler)
  .openapi(getTestnetInsTxsRoute, getTestnetInsTxsRouteHandler)
  .openapi(getTestnetNtp1AddressinfoAddressRoute, getTestnetNtp1AddressinfoAddressRouteHandler)
  .openapi(postTestnetNtp1BroadcastRoute, postTestnetNtp1BroadcastRouteHandler)
  .openapi(postTestnetNtp1BurntokenRoute, postTestnetNtp1BurntokenRouteHandler)
  .openapi(postTestnetNtp1IssueRoute, postTestnetNtp1IssueRouteHandler)
  .openapi(postTestnetNtp1SendtokenRoute, postTestnetNtp1SendtokenRouteHandler)
  .openapi(getTestnetNtp1StakeholdersTokenidRoute, getTestnetNtp1StakeholdersTokenidRouteHandler)
  .openapi(getTestnetNtp1TokenidTokensymbolRoute, getTestnetNtp1TokenidTokensymbolRouteHandler)
  .openapi(getTestnetNtp1TokenmetadataTokenidRoute, getTestnetNtp1TokenmetadataTokenidRouteHandler)
  .openapi(
    getTestnetNtp1TokenmetadataTokenidUtxoRoute,
    getTestnetNtp1TokenmetadataTokenidUtxoRouteHandler,
  )
  .openapi(getTestnetNtp1TransactioninfoTxidRoute, getTestnetNtp1TransactioninfoTxidRouteHandler)

export default app
