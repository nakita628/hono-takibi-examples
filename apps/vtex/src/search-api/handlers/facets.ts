import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubFacetsCategoryCategoryIdRoute,
  getApiCatalogSystemPubFacetsSearchTermRoute,
} from '../routes'

const app = new OpenAPIHono()

export const facetsHandler = app
  .openapi(getApiCatalogSystemPubFacetsCategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubFacetsSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
