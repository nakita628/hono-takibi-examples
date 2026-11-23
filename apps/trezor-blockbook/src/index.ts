import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiIndexRoute,
  getApiRawtxTxidRoute,
  getApiStatusRoute,
  getApiV1AddressAddressRoute,
  getApiV1BlockBlockIdRoute,
  getApiV1BlockIndexHeightRoute,
  getApiV1EstimatefeeBlocksRoute,
  getApiV1SendtxHexRoute,
  getApiV1TxTxidRoute,
  getApiV1UtxoAddressRoute,
  getApiV2AddressAddressRoute,
  getApiV2BalancehistoryDescriptorRoute,
  getApiV2BlockBlockIdRoute,
  getApiV2BlockFiltersIndexRoute,
  getApiV2BlockIndexHeightRoute,
  getApiV2ContractContractRoute,
  getApiV2EstimatefeeBlocksRoute,
  getApiV2FeestatsBlockIdRoute,
  getApiV2MultiTickersIndexRoute,
  getApiV2RawblockBlockIdRoute,
  getApiV2SendtxHexRoute,
  getApiV2TickersIndexRoute,
  getApiV2TickersListIndexRoute,
  getApiV2TxSpecificTxidRoute,
  getApiV2TxTxidRoute,
  getApiV2UtxoDescriptorRoute,
  getApiV2XpubXpubRoute,
  getWebsocketRoute,
  postApiV1SendtxIndexRoute,
  postApiV2SendtxIndexRoute,
} from './routes'
import {
  getApiIndexRouteHandler,
  getApiRawtxTxidRouteHandler,
  getApiStatusRouteHandler,
  getApiV1AddressAddressRouteHandler,
  getApiV1BlockBlockIdRouteHandler,
  getApiV1BlockIndexHeightRouteHandler,
  getApiV1EstimatefeeBlocksRouteHandler,
  getApiV1SendtxHexRouteHandler,
  getApiV1TxTxidRouteHandler,
  getApiV1UtxoAddressRouteHandler,
  getApiV2AddressAddressRouteHandler,
  getApiV2BalancehistoryDescriptorRouteHandler,
  getApiV2BlockBlockIdRouteHandler,
  getApiV2BlockFiltersIndexRouteHandler,
  getApiV2BlockIndexHeightRouteHandler,
  getApiV2ContractContractRouteHandler,
  getApiV2EstimatefeeBlocksRouteHandler,
  getApiV2FeestatsBlockIdRouteHandler,
  getApiV2MultiTickersIndexRouteHandler,
  getApiV2RawblockBlockIdRouteHandler,
  getApiV2SendtxHexRouteHandler,
  getApiV2TickersIndexRouteHandler,
  getApiV2TickersListIndexRouteHandler,
  getApiV2TxSpecificTxidRouteHandler,
  getApiV2TxTxidRouteHandler,
  getApiV2UtxoDescriptorRouteHandler,
  getApiV2XpubXpubRouteHandler,
  getWebsocketRouteHandler,
  postApiV1SendtxIndexRouteHandler,
  postApiV2SendtxIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiStatusRoute, getApiStatusRouteHandler)
  .openapi(getApiIndexRoute, getApiIndexRouteHandler)
  .openapi(getApiV2BlockIndexHeightRoute, getApiV2BlockIndexHeightRouteHandler)
  .openapi(getApiV2BlockBlockIdRoute, getApiV2BlockBlockIdRouteHandler)
  .openapi(getApiV2RawblockBlockIdRoute, getApiV2RawblockBlockIdRouteHandler)
  .openapi(getApiV2BlockFiltersIndexRoute, getApiV2BlockFiltersIndexRouteHandler)
  .openapi(getApiV2TxTxidRoute, getApiV2TxTxidRouteHandler)
  .openapi(getApiV2TxSpecificTxidRoute, getApiV2TxSpecificTxidRouteHandler)
  .openapi(getApiRawtxTxidRoute, getApiRawtxTxidRouteHandler)
  .openapi(getApiV2SendtxHexRoute, getApiV2SendtxHexRouteHandler)
  .openapi(postApiV2SendtxIndexRoute, postApiV2SendtxIndexRouteHandler)
  .openapi(getApiV2AddressAddressRoute, getApiV2AddressAddressRouteHandler)
  .openapi(getApiV2XpubXpubRoute, getApiV2XpubXpubRouteHandler)
  .openapi(getApiV2UtxoDescriptorRoute, getApiV2UtxoDescriptorRouteHandler)
  .openapi(getApiV2BalancehistoryDescriptorRoute, getApiV2BalancehistoryDescriptorRouteHandler)
  .openapi(getApiV2ContractContractRoute, getApiV2ContractContractRouteHandler)
  .openapi(getApiV2EstimatefeeBlocksRoute, getApiV2EstimatefeeBlocksRouteHandler)
  .openapi(getApiV2FeestatsBlockIdRoute, getApiV2FeestatsBlockIdRouteHandler)
  .openapi(getApiV2TickersIndexRoute, getApiV2TickersIndexRouteHandler)
  .openapi(getApiV2MultiTickersIndexRoute, getApiV2MultiTickersIndexRouteHandler)
  .openapi(getApiV2TickersListIndexRoute, getApiV2TickersListIndexRouteHandler)
  .openapi(getApiV1BlockIndexHeightRoute, getApiV1BlockIndexHeightRouteHandler)
  .openapi(getApiV1TxTxidRoute, getApiV1TxTxidRouteHandler)
  .openapi(getApiV1AddressAddressRoute, getApiV1AddressAddressRouteHandler)
  .openapi(getApiV1UtxoAddressRoute, getApiV1UtxoAddressRouteHandler)
  .openapi(getApiV1BlockBlockIdRoute, getApiV1BlockBlockIdRouteHandler)
  .openapi(getApiV1EstimatefeeBlocksRoute, getApiV1EstimatefeeBlocksRouteHandler)
  .openapi(getApiV1SendtxHexRoute, getApiV1SendtxHexRouteHandler)
  .openapi(postApiV1SendtxIndexRoute, postApiV1SendtxIndexRouteHandler)
  .openapi(getWebsocketRoute, getWebsocketRouteHandler)

export default app
