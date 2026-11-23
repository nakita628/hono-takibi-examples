import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductsProductIdRoute,
  getProductsRoute,
  patchProductsProductIdRoute,
  postProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
