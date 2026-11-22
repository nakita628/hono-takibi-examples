import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdStoresRoute,
  getMerchantsMerchantIdStoresStoreIdRoute,
  getStoresRoute,
  getStoresStoreIdRoute,
  patchMerchantsMerchantIdStoresStoreIdRoute,
  patchStoresStoreIdRoute,
  postMerchantsMerchantIdStoresRoute,
  postStoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const account__storeLevelHandler = app
  .openapi(getMerchantsMerchantIdStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
