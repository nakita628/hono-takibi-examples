import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CategoriesCategoryIdRoute, getV1CategoriesCategoryIdRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesCategoryIdHandler = app
  .openapi(deleteV1CategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
