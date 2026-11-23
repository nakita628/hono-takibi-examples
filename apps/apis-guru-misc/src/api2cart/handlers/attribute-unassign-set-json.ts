import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttributeUnassignSetJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeUnassignSetJsonHandler = app.openapi(
  postAttributeUnassignSetJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
