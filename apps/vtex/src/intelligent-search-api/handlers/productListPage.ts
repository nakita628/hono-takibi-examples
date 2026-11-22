import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBannersFacetsRoute,
  getCorrectionSearchRoute,
  getFacetsFacetsRoute,
  getProductSearchFacetsRoute,
  getSearchSuggestionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productListPageHandler = app
  .openapi(getBannersFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorrectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFacetsFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductSearchFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
