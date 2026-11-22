import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsAttributeSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsHandler = app.openapi(postV1ProductsAttributeSetsRoute, (c) => {
  throw new Error('Not implemented')
})
