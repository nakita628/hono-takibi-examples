import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsAttributeSetIdAttributesAttributeCodeHandler = app.openapi(
  deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
