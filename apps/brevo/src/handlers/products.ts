import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductsIdRoute,
  getProductsRoute,
  postProductsBatchRoute,
  postProductsIdAlertsTypeRoute,
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
  .openapi(postProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsIdAlertsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
