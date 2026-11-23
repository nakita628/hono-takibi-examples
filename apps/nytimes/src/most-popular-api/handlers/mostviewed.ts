import { OpenAPIHono } from '@hono/zod-openapi'
import { getMostviewedSectionTimePeriodJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const mostviewedHandler = app.openapi(getMostviewedSectionTimePeriodJsonRoute, (c) => {
  throw new Error('Not implemented')
})
