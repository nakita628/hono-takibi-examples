import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreProductCategoriesIdRoute, getStoreProductCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const productCategoriesHandler = app
  .openapi(getStoreProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
