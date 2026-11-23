import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionOnChangeCallbackPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionOnChangeCallbackPathPlaceholderHandler = app.openapi(
  postActionOnChangeCallbackPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
