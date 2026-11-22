import { OpenAPIHono } from '@hono/zod-openapi'
import { postListAnomalyGroupTimeSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListAnomalyGroupTimeSeriesHandler = app.openapi(
  postListAnomalyGroupTimeSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
