import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListsBestSellersHistoryJsonRoute,
  getListsDateListJsonRoute,
  getListsFormatRoute,
  getListsNamesFormatRoute,
  getListsOverviewFormatRoute,
  getReviewsFormatRoute,
} from './routes'
import {
  getListsBestSellersHistoryJsonRouteHandler,
  getListsDateListJsonRouteHandler,
  getListsFormatRouteHandler,
  getListsNamesFormatRouteHandler,
  getListsOverviewFormatRouteHandler,
  getReviewsFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getListsFormatRoute, getListsFormatRouteHandler)
  .openapi(getListsBestSellersHistoryJsonRoute, getListsBestSellersHistoryJsonRouteHandler)
  .openapi(getListsNamesFormatRoute, getListsNamesFormatRouteHandler)
  .openapi(getListsOverviewFormatRoute, getListsOverviewFormatRouteHandler)
  .openapi(getListsDateListJsonRoute, getListsDateListJsonRouteHandler)
  .openapi(getReviewsFormatRoute, getReviewsFormatRouteHandler)

export default app
