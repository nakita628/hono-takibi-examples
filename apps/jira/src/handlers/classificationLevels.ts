import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3ClassificationLevelsRoute } from '../routes'

const app = new OpenAPIHono()

export const classificationLevelsHandler = app.openapi(
  getRestApi3ClassificationLevelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
