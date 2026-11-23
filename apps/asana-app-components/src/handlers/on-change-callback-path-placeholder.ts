import { OpenAPIHono } from '@hono/zod-openapi'
import { postOnChangeCallbackPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const onChangeCallbackPathPlaceholderHandler = app.openapi(
  postOnChangeCallbackPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
