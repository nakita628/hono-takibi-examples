import { OpenAPIHono } from '@hono/zod-openapi'
import { getMuseumHoursRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(getMuseumHoursRoute, (c) => {
  throw new Error('Not implemented')
})
