import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemoveSourceServerActionRoute } from '../routes'

const app = new OpenAPIHono()

export const RemoveSourceServerActionHandler = app.openapi(
  postRemoveSourceServerActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
