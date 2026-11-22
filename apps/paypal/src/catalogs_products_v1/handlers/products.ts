import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CatalogsProductsProductIdRoute,
  getV1CatalogsProductsRoute,
  patchV1CatalogsProductsProductIdRoute,
  postV1CatalogsProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(postV1CatalogsProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CatalogsProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CatalogsProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CatalogsProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
