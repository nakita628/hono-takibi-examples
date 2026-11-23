import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionChangeMessageVisibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const actionChangeMessageVisibilityHandler = app.openapi(
  postActionChangeMessageVisibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
