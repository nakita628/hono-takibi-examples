import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtBrandBrandIdRoute,
  getApiCatalogPvtBrandBrandIdRoute,
  getApiCatalogSystemPvtBrandBrandIdRoute,
  getApiCatalogSystemPvtBrandListRoute,
  getApiCatalogSystemPvtBrandPagedlistRoute,
  postApiCatalogPvtBrandRoute,
  putApiCatalogPvtBrandBrandIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandHandler = app
  .openapi(postApiCatalogPvtBrandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtBrandListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtBrandPagedlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
