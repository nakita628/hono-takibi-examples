import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtProductProductIdSpecificationRoute,
  deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRoute,
  getApiCatalogPvtProductProductIdSpecificationRoute,
  getApiCatalogSystemPvtProductsProductIdSpecificationRoute,
  postApiCatalogPvtProductProductIdSpecificationRoute,
  postApiCatalogSystemPvtProductsProductIdSpecificationRoute,
  putApiCatalogPvtProductProductIdSpecificationvalueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productSpecificationHandler = app
  .openapi(deleteApiCatalogPvtProductProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtProductProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtProductProductIdSpecificationvalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtProductsProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
