import { OpenAPIHono } from '@hono/zod-openapi'
import { postRunActionUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const runActionUrlPathPlaceholderHandler = app.openapi(
  postRunActionUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
