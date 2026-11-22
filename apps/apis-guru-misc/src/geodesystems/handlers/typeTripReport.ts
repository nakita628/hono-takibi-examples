import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTripReportRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTripReportHandler = app.openapi(getRepositorySearchTypeTripReportRoute, (c) => {
  throw new Error('Not implemented')
})
