import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutocompleteSuggestionsRoute,
  getBannersFacetsRoute,
  getCorrectionSearchRoute,
  getFacetsFacetsRoute,
  getProductSearchFacetsRoute,
  getSearchSuggestionsRoute,
  getTopSearchesRoute,
} from './routes'
import {
  getAutocompleteSuggestionsRouteHandler,
  getBannersFacetsRouteHandler,
  getCorrectionSearchRouteHandler,
  getFacetsFacetsRouteHandler,
  getProductSearchFacetsRouteHandler,
  getSearchSuggestionsRouteHandler,
  getTopSearchesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAutocompleteSuggestionsRoute, getAutocompleteSuggestionsRouteHandler)
  .openapi(getBannersFacetsRoute, getBannersFacetsRouteHandler)
  .openapi(getCorrectionSearchRoute, getCorrectionSearchRouteHandler)
  .openapi(getFacetsFacetsRoute, getFacetsFacetsRouteHandler)
  .openapi(getProductSearchFacetsRoute, getProductSearchFacetsRouteHandler)
  .openapi(getSearchSuggestionsRoute, getSearchSuggestionsRouteHandler)
  .openapi(getTopSearchesRoute, getTopSearchesRouteHandler)

export default app
