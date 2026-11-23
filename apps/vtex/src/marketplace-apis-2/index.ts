import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuggestionsSellerIdSellerSkuIdRoute,
  getSuggestionsConfigurationAutoapprovalToggleRoute,
  getSuggestionsConfigurationRoute,
  getSuggestionsConfigurationSellerSellerIdRoute,
  getSuggestionsRoute,
  getSuggestionsSellerIdSellerSkuIdRoute,
  getSuggestionsSellerIdSellerskuidVersionsRoute,
  getSuggestionsSellerIdSellerskuidVersionsVersionRoute,
  putSuggestionsConfigurationAutoapprovalToggleRoute,
  putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRoute,
  putSuggestionsConfigurationRoute,
  putSuggestionsConfigurationSellerSellerIdRoute,
  putSuggestionsMatchesActionActionNameRoute,
  putSuggestionsSellerIdSellerSkuIdRoute,
  putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute,
} from './routes'
import {
  deleteSuggestionsSellerIdSellerSkuIdRouteHandler,
  getSuggestionsConfigurationAutoapprovalToggleRouteHandler,
  getSuggestionsConfigurationRouteHandler,
  getSuggestionsConfigurationSellerSellerIdRouteHandler,
  getSuggestionsRouteHandler,
  getSuggestionsSellerIdSellerSkuIdRouteHandler,
  getSuggestionsSellerIdSellerskuidVersionsRouteHandler,
  getSuggestionsSellerIdSellerskuidVersionsVersionRouteHandler,
  putSuggestionsConfigurationAutoapprovalToggleRouteHandler,
  putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRouteHandler,
  putSuggestionsConfigurationRouteHandler,
  putSuggestionsConfigurationSellerSellerIdRouteHandler,
  putSuggestionsMatchesActionActionNameRouteHandler,
  putSuggestionsSellerIdSellerSkuIdRouteHandler,
  putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSuggestionsRoute, getSuggestionsRouteHandler)
  .openapi(getSuggestionsConfigurationRoute, getSuggestionsConfigurationRouteHandler)
  .openapi(putSuggestionsConfigurationRoute, putSuggestionsConfigurationRouteHandler)
  .openapi(
    getSuggestionsConfigurationAutoapprovalToggleRoute,
    getSuggestionsConfigurationAutoapprovalToggleRouteHandler,
  )
  .openapi(
    putSuggestionsConfigurationAutoapprovalToggleRoute,
    putSuggestionsConfigurationAutoapprovalToggleRouteHandler,
  )
  .openapi(
    putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRoute,
    putSuggestionsConfigurationAutoapprovalToggleSellerSellerIdRouteHandler,
  )
  .openapi(
    getSuggestionsConfigurationSellerSellerIdRoute,
    getSuggestionsConfigurationSellerSellerIdRouteHandler,
  )
  .openapi(
    putSuggestionsConfigurationSellerSellerIdRoute,
    putSuggestionsConfigurationSellerSellerIdRouteHandler,
  )
  .openapi(
    putSuggestionsMatchesActionActionNameRoute,
    putSuggestionsMatchesActionActionNameRouteHandler,
  )
  .openapi(
    deleteSuggestionsSellerIdSellerSkuIdRoute,
    deleteSuggestionsSellerIdSellerSkuIdRouteHandler,
  )
  .openapi(getSuggestionsSellerIdSellerSkuIdRoute, getSuggestionsSellerIdSellerSkuIdRouteHandler)
  .openapi(putSuggestionsSellerIdSellerSkuIdRoute, putSuggestionsSellerIdSellerSkuIdRouteHandler)
  .openapi(
    getSuggestionsSellerIdSellerskuidVersionsRoute,
    getSuggestionsSellerIdSellerskuidVersionsRouteHandler,
  )
  .openapi(
    getSuggestionsSellerIdSellerskuidVersionsVersionRoute,
    getSuggestionsSellerIdSellerskuidVersionsVersionRouteHandler,
  )
  .openapi(
    putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRoute,
    putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidRouteHandler,
  )

export default app
