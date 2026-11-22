import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
  putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesChannelMappingHandler = app
  .openapi(getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
