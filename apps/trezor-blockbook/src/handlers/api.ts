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
  postApiV1SendtxIndexRoute,
  postApiV2SendtxIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BlockIndexHeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RawblockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BlockFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TxSpecificTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRawtxTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SendtxHexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SendtxIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AddressAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2XpubXpubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UtxoDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BalancehistoryDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContractContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EstimatefeeBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeestatsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TickersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MultiTickersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TickersListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
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
