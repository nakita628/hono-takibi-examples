import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProductsIdRoute,
  getProductsIdRoute,
  getProductsRoute,
  postProductsRoute,
  putProductsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
