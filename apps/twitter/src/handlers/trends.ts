import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get2TrendsByWoeidWoeidRoute,
  get2TrendsLocationsRoute,
  get2UsersPersonalizedTrendsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trendsHandler = app
  .openapi(get2TrendsByWoeidWoeidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TrendsLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersPersonalizedTrendsRoute, (c) => {
    throw new Error('Not implemented')
  })
