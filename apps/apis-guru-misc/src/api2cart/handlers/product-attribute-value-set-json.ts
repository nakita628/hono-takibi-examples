import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductAttributeValueSetJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productAttributeValueSetJsonHandler = app.openapi(
  postProductAttributeValueSetJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
