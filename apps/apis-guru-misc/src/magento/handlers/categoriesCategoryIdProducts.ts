import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CategoriesCategoryIdProductsRoute,
  postV1CategoriesCategoryIdProductsRoute,
  putV1CategoriesCategoryIdProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesCategoryIdProductsHandler = app
  .openapi(getV1CategoriesCategoryIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CategoriesCategoryIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CategoriesCategoryIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
