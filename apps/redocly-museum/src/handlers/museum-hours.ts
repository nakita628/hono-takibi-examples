import { OpenAPIHono } from '@hono/zod-openapi'
import { getMuseumHoursRoute } from '../routes'

const app = new OpenAPIHono()

export const museumHoursHandler = app.openapi(getMuseumHoursRoute, (c) => {
  throw new Error('Not implemented')
})
