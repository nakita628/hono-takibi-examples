import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProductProductNumberRoute,
  getProductProductNumberRoute,
  getProductRoute,
  postProductProductNumberRoute,
  postProductRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(getProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductProductNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductProductNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductProductNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
