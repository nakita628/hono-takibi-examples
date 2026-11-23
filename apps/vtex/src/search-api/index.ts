import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubFacetsCategoryCategoryIdRoute,
  getApiCatalogSystemPubFacetsSearchTermRoute,
  getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdRoute,
  getApiCatalogSystemPubProductsOffersProductIdRoute,
  getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRoute,
  getApiCatalogSystemPubProductsSearchProductTextLinkPRoute,
  getApiCatalogSystemPubProductsSearchRoute,
  getApiCatalogSystemPubProductsSearchSearchRoute,
  getBuscaautocompleteRoute,
} from './routes'
import {
  getApiCatalogSystemPubFacetsCategoryCategoryIdRouteHandler,
  getApiCatalogSystemPubFacetsSearchTermRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdRouteHandler,
  getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdRouteHandler,
  getApiCatalogSystemPubProductsOffersProductIdRouteHandler,
  getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRouteHandler,
  getApiCatalogSystemPubProductsSearchProductTextLinkPRouteHandler,
  getApiCatalogSystemPubProductsSearchRouteHandler,
  getApiCatalogSystemPubProductsSearchSearchRouteHandler,
  getBuscaautocompleteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiCatalogSystemPubFacetsCategoryCategoryIdRoute,
    getApiCatalogSystemPubFacetsCategoryCategoryIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubFacetsSearchTermRoute,
    getApiCatalogSystemPubFacetsSearchTermRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdRoute,
    getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsOffersProductIdRoute,
    getApiCatalogSystemPubProductsOffersProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRoute,
    getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsSearchRoute,
    getApiCatalogSystemPubProductsSearchRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsSearchProductTextLinkPRoute,
    getApiCatalogSystemPubProductsSearchProductTextLinkPRouteHandler,
  )
  .openapi(
    getApiCatalogSystemPubProductsSearchSearchRoute,
    getApiCatalogSystemPubProductsSearchSearchRouteHandler,
  )
  .openapi(getBuscaautocompleteRoute, getBuscaautocompleteRouteHandler)

export default app
