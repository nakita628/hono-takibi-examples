import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSalesSaleIdListingsRoute,
  getSalesReverbRoute,
  getSalesSellerRoute,
  getSalesSlugRoute,
  postSalesSaleIdListingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesHandler = app
  .openapi(getSalesReverbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSalesSaleIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSalesSaleIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
