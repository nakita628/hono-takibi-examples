import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsAttributesAttributeCodeOptionsOptionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributesAttributeCodeOptionsOptionIdHandler = app.openapi(
  deleteV1ProductsAttributesAttributeCodeOptionsOptionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
