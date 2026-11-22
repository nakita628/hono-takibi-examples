import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ProductsIdRoute,
  getApiV1ProductsCreateRoute,
  getApiV1ProductsIdEditRoute,
  getApiV1ProductsIdRoute,
  getApiV1ProductsRoute,
  postApiV1ProductsBulkRoute,
  postApiV1ProductsIdUploadRoute,
  postApiV1ProductsRoute,
  putApiV1ProductsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getApiV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
