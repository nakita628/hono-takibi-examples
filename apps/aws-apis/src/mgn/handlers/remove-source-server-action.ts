import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemoveSourceServerActionRoute } from '../routes'

const app = new OpenAPIHono()

export const removeSourceServerActionHandler = app.openapi(
  postRemoveSourceServerActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
