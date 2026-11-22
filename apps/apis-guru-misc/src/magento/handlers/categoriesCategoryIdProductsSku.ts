import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CategoriesCategoryIdProductsSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesCategoryIdProductsSkuHandler = app.openapi(
  deleteV1CategoriesCategoryIdProductsSkuRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
