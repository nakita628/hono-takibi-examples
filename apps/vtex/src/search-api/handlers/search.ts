import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubProductsSearchProductTextLinkPRoute,
  getApiCatalogSystemPubProductsSearchRoute,
  getApiCatalogSystemPubProductsSearchSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getApiCatalogSystemPubProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsSearchProductTextLinkPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsSearchSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
