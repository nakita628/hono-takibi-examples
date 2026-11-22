import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserCustomerStoresStoreIdSharesUserIdRoute,
  getV2UserCustomerStoresStoreIdSharesRoute,
  postV2UserCustomerStoresStoreIdSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customer__SharesHandler = app
  .openapi(getV2UserCustomerStoresStoreIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerStoresStoreIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCustomerStoresStoreIdSharesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
