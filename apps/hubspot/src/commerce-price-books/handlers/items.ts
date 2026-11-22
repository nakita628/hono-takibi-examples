import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
  getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
  getCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute,
  patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
