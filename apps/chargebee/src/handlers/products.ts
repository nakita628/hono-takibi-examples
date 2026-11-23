import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductsProductIdRoute,
  getProductsProductIdVariantsRoute,
  getProductsRoute,
  postProductsProductIdDeleteRoute,
  postProductsProductIdRoute,
  postProductsProductIdUpdateOptionsRoute,
  postProductsProductIdVariantsRoute,
  postProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsProductIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsProductIdUpdateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsProductIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsProductIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
