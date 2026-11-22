import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  getSellerRegisterPvtSellersSellerIdCommissionsRoute,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sellerCommissionsHandler = app
  .openapi(getSellerRegisterPvtSellersSellerIdCommissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
