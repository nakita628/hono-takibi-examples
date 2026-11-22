import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoriesAttributesAttributeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesAttributesAttributeCodeHandler = app.openapi(
  getV1CategoriesAttributesAttributeCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
