import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductPhotosRoute, getProductReviewsRoute, getProductRoute } from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(getProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
