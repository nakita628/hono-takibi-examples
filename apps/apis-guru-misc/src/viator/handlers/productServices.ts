import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductPhotosRoute,
  getProductReviewsRoute,
  getProductRoute,
  postAvailableProductsRoute,
  postSearchFreetextRoute,
  postSearchProductsCodesRoute,
  postSearchProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productServicesHandler = app
  .openapi(postAvailableProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchFreetextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchProductsCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
