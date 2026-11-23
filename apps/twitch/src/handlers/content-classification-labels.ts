import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentClassificationLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const contentClassificationLabelsHandler = app.openapi(
  getContentClassificationLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
