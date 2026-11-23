import { OpenAPIHono } from '@hono/zod-openapi'
import { getMostsharedSectionTimePeriodJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const mostsharedHandler = app.openapi(getMostsharedSectionTimePeriodJsonRoute, (c) => {
  throw new Error('Not implemented')
})
