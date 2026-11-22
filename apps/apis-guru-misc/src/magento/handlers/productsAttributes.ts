import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsAttributesRoute, postV1ProductsAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributesHandler = app
  .openapi(getV1ProductsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
