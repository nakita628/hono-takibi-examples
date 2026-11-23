import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationAnalyticsCategoryRatedAreasRoute } from '../routes'

const app = new OpenAPIHono()

export const locationHandler = app.openapi(getLocationAnalyticsCategoryRatedAreasRoute, (c) => {
  throw new Error('Not implemented')
})
