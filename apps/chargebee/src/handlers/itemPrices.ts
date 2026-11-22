import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemPricesItemPriceIdApplicableItemPricesRoute,
  getItemPricesItemPriceIdApplicableItemsRoute,
  getItemPricesItemPriceIdRoute,
  getItemPricesRoute,
  postItemPricesItemPriceIdDeleteRoute,
  postItemPricesItemPriceIdDifferentialPricesRoute,
  postItemPricesItemPriceIdRoute,
  postItemPricesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemPricesHandler = app
  .openapi(getItemPricesItemPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPricesItemPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPricesItemPriceIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemPricesItemPriceIdApplicableItemPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemPricesItemPriceIdApplicableItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPricesItemPriceIdDifferentialPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
