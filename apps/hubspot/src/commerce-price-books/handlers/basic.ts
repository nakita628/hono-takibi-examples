import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommercePriceBooks202609PriceBooksPriceBookIdRoute,
  getCommercePriceBooks202609PriceBooksPriceBookIdRoute,
  patchCommercePriceBooks202609PriceBooksPriceBookIdRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdActivateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdValidateRoute,
  postCommercePriceBooks202609PriceBooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
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
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
