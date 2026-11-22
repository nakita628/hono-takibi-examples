import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoriesAttributesAttributeCodeOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesAttributesAttributeCodeOptionsHandler = app.openapi(
  getV1CategoriesAttributesAttributeCodeOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
