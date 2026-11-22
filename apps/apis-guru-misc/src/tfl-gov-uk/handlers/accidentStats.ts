import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccidentStatsYearRoute } from '../routes'

const app = new OpenAPIHono()

export const accidentStatsHandler = app.openapi(getAccidentStatsYearRoute, (c) => {
  throw new Error('Not implemented')
})
