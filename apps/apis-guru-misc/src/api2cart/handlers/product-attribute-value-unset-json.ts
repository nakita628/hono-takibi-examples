import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductAttributeValueUnsetJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productAttributeValueUnsetJsonHandler = app.openapi(
  postProductAttributeValueUnsetJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
