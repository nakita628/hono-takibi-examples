import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionOnSubmitCallbackPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionOnSubmitCallbackPathPlaceholderHandler = app.openapi(
  postActionOnSubmitCallbackPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
