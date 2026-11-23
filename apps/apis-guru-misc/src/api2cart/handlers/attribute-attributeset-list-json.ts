import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttributeAttributesetListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeAttributesetListJsonHandler = app.openapi(
  getAttributeAttributesetListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
