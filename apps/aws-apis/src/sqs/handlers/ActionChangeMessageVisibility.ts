import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionChangeMessageVisibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionChangeMessageVisibilityHandler = app.openapi(
  postActionChangeMessageVisibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
