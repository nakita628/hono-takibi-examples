import { OpenAPIHono } from '@hono/zod-openapi'
import { postEvents202609EventDefinitionsEventNamePropertyRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(
  postEvents202609EventDefinitionsEventNamePropertyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
