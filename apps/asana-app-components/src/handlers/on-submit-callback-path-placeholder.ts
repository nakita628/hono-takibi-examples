import { OpenAPIHono } from '@hono/zod-openapi'
import { postOnSubmitCallbackPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const onSubmitCallbackPathPlaceholderHandler = app.openapi(
  postOnSubmitCallbackPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
