import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDInsightPreferenceDateRoute } from '../routes'

const app = new OpenAPIHono()

export const insightPreferenceDateHandler = app.openapi(
  getUserUserIDInsightPreferenceDateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
