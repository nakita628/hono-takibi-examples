import { OpenAPIHono } from '@hono/zod-openapi'
import { getIntervalsRoute } from '../routes'

const app = new OpenAPIHono()

export const intervalsHandler = app.openapi(getIntervalsRoute, (c) => {
  throw new Error('Not implemented')
})
