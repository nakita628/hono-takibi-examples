import { OpenAPIHono } from '@hono/zod-openapi'
import { getHoursOfOperationsSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const hoursOfOperationsSummaryHandler = app.openapi(
  getHoursOfOperationsSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
