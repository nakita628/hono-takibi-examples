import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimePeriodsRoute, getTimePeriodsTimePeriodGidRoute } from '../routes'

const app = new OpenAPIHono()

export const timePeriodsHandler = app
  .openapi(getTimePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimePeriodsTimePeriodGidRoute, (c) => {
    throw new Error('Not implemented')
  })
