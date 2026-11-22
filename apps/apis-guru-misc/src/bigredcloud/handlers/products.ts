import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsIdRoute,
  getV1ProductsIdRoute,
  getV1ProductsRoute,
  postV1ProductsRoute,
  putV1ProductsBatchRoute,
  putV1ProductsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
