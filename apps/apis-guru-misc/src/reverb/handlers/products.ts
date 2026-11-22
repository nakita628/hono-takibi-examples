import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductsReviewsIdRoute,
  getProductsSlugReviewsRoute,
  postProductsSlugReviewsRoute,
  putProductsReviewsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsReviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductsReviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsSlugReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductsSlugReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
