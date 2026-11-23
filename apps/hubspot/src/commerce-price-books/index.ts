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
} from './routes'
import {
  deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRouteHandler,
  deleteCommercePriceBooks202609PriceBooksPriceBookIdRouteHandler,
  getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRouteHandler,
  getCommercePriceBooks202609PriceBooksPriceBookIdItemsRouteHandler,
  getCommercePriceBooks202609PriceBooksPriceBookIdRouteHandler,
  getCommercePriceBooks202609PriceBooksRouteHandler,
  patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRouteHandler,
  patchCommercePriceBooks202609PriceBooksPriceBookIdRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdActivateRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsRouteHandler,
  postCommercePriceBooks202609PriceBooksPriceBookIdValidateRouteHandler,
  postCommercePriceBooks202609PriceBooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCommercePriceBooks202609PriceBooksRoute,
    getCommercePriceBooks202609PriceBooksRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksRoute,
    postCommercePriceBooks202609PriceBooksRouteHandler,
  )
  .openapi(
    getCommercePriceBooks202609PriceBooksPriceBookIdRoute,
    getCommercePriceBooks202609PriceBooksPriceBookIdRouteHandler,
  )
  .openapi(
    deleteCommercePriceBooks202609PriceBooksPriceBookIdRoute,
    deleteCommercePriceBooks202609PriceBooksPriceBookIdRouteHandler,
  )
  .openapi(
    patchCommercePriceBooks202609PriceBooksPriceBookIdRoute,
    patchCommercePriceBooks202609PriceBooksPriceBookIdRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdActivateRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdActivateRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdDeactivateRouteHandler,
  )
  .openapi(
    getCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute,
    getCommercePriceBooks202609PriceBooksPriceBookIdItemsRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRouteHandler,
  )
  .openapi(
    getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
    getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRouteHandler,
  )
  .openapi(
    deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
    deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRouteHandler,
  )
  .openapi(
    patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRoute,
    patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdRouteHandler,
  )
  .openapi(
    postCommercePriceBooks202609PriceBooksPriceBookIdValidateRoute,
    postCommercePriceBooks202609PriceBooksPriceBookIdValidateRouteHandler,
  )

export default app
