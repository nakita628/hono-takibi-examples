import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSellerRegisterPvtSellersRoute,
  getSellerRegisterPvtSellersSellerIdRoute,
  patchSellerRegisterPvtSellersSellerIdRoute,
  postSellerRegisterPvtSellersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sellersHandler = app
  .openapi(getSellerRegisterPvtSellersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSellerRegisterPvtSellersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSellerRegisterPvtSellersSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
