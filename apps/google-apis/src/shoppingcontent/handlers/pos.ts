import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
  getMerchantIdPosTargetMerchantIdStoreRoute,
  getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
  postMerchantIdPosTargetMerchantIdInventoryRoute,
  postMerchantIdPosTargetMerchantIdSaleRoute,
  postMerchantIdPosTargetMerchantIdStoreRoute,
  postPosBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const posHandler = app
  .openapi(postPosBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPosTargetMerchantIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPosTargetMerchantIdSaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPosTargetMerchantIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPosTargetMerchantIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
