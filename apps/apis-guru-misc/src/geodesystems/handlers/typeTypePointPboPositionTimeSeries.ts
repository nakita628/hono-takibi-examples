import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointPboPositionTimeSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointPboPositionTimeSeriesHandler = app.openapi(
  getRepositorySearchTypeTypePointPboPositionTimeSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
