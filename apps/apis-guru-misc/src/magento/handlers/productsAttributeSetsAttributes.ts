import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsAttributeSetsAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsAttributesHandler = app.openapi(
  postV1ProductsAttributeSetsAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
