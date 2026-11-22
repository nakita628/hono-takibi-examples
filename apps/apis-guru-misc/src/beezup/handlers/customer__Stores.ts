import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserCustomerStoresStoreIdRoute,
  getV2UserCustomerStoresRoute,
  getV2UserCustomerStoresStoreIdRoute,
  patchV2UserCustomerStoresStoreIdRoute,
  postV2UserCustomerStoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customer__StoresHandler = app
  .openapi(getV2UserCustomerStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCustomerStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2UserCustomerStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
