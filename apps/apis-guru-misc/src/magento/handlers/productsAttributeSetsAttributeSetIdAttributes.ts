import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsAttributeSetsAttributeSetIdAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsAttributeSetIdAttributesHandler = app.openapi(
  getV1ProductsAttributeSetsAttributeSetIdAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
