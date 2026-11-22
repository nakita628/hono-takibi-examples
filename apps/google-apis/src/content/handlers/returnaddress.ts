import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdReturnaddressReturnAddressIdRoute,
  getMerchantIdReturnaddressReturnAddressIdRoute,
  getMerchantIdReturnaddressRoute,
  postMerchantIdReturnaddressRoute,
  postReturnaddressBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const returnaddressHandler = app
  .openapi(postReturnaddressBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReturnaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdReturnaddressReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnaddressReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
