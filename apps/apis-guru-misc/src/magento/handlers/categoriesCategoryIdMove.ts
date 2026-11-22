import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CategoriesCategoryIdMoveRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesCategoryIdMoveHandler = app.openapi(
  putV1CategoriesCategoryIdMoveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
