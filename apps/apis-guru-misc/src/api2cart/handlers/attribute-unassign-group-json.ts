import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttributeUnassignGroupJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeUnassignGroupJsonHandler = app.openapi(
  postAttributeUnassignGroupJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
