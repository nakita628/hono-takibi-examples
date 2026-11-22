import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminPriceListsIdRoute,
  getAdminPriceListsIdPricesRoute,
  getAdminPriceListsIdRoute,
  getAdminPriceListsRoute,
  postAdminPriceListsIdPricesBatchRoute,
  postAdminPriceListsIdProductsRoute,
  postAdminPriceListsIdRoute,
  postAdminPriceListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priceListsHandler = app
  .openapi(getAdminPriceListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPriceListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPriceListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPriceListsIdPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsIdPricesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
