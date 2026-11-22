import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRawtxTxidRoute,
  getApiV2SendtxHexRoute,
  getApiV2TxSpecificTxidRoute,
  getApiV2TxTxidRoute,
  postApiV2SendtxIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
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
