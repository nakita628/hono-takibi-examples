import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimePeriodsRoute, getTimePeriodsTimePeriodGidRoute } from '../routes'

const app = new OpenAPIHono()

export const timePeriodsHandler = app
  .openapi(getTimePeriodsTimePeriodGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
