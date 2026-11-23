import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
  deleteCommercePriceBooks202609PriceBooksPriceBookIdRoute,
  getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
  getCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute,
  getCommercePriceBooks202609PriceBooksPriceBookIdRoute,
  getCommercePriceBooks202609PriceBooksRoute,
  patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
  patchCommercePriceBooks202609PriceBooksPriceBookIdRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdActivateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdValidateRoute,
  postCommercePriceBooks202609PriceBooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commerceHandler = app
  .openapi(getCommercePriceBooks202609PriceBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommercePriceBooks202609PriceBooksPriceBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommercePriceBooks202609PriceBooksPriceBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommercePriceBooks202609PriceBooksPriceBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRoute, (c) => {
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
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
