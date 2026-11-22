import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CatalogProductProductIdRoute,
  getV1CatalogProductsRoute,
  postV1CatalogProductsProductIdShareRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app
  .openapi(getV1CatalogProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CatalogProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CatalogProductsProductIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
