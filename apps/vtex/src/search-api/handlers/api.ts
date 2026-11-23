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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiCatalogSystemPubFacetsCategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubFacetsSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsOffersProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsSearchProductTextLinkPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsSearchSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
