import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttributeAssignGroupJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeAssignGroupJsonHandler = app.openapi(
  postAttributeAssignGroupJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
