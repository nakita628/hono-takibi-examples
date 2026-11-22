import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdRoute,
  getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crossSellingHandler = app
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
