import { OpenAPIHono } from '@hono/zod-openapi'
import { getOutlineSchemaSchemaVersionStoryOutlineJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const outlineSchemaHandler = app.openapi(
  getOutlineSchemaSchemaVersionStoryOutlineJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
