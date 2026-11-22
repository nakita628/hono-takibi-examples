import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1ProductsOptionsOptionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsOptionsOptionIdHandler = app.openapi(
  putV1ProductsOptionsOptionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
