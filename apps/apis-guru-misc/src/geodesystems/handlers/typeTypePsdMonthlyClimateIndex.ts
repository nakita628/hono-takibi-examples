import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePsdMonthlyClimateIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePsdMonthlyClimateIndexHandler = app.openapi(
  getRepositorySearchTypeTypePsdMonthlyClimateIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
