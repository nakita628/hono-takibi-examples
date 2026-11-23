import { OpenAPIHono } from '@hono/zod-openapi'
import { getSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const summaryHandler = app.openapi(getSummaryRoute, (c) => {
  throw new Error('Not implemented')
})
