import { OpenAPIHono } from '@hono/zod-openapi'
import { postListAnomalyGroupRelatedMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const listAnomalyGroupRelatedMetricsHandler = app.openapi(
  postListAnomalyGroupRelatedMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
