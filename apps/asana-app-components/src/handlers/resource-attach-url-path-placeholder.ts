import { OpenAPIHono } from '@hono/zod-openapi'
import { postResourceAttachUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceAttachUrlPathPlaceholderHandler = app.openapi(
  postResourceAttachUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
