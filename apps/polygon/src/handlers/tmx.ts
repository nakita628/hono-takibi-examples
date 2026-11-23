import { OpenAPIHono } from '@hono/zod-openapi'
import { getTmxV1CorporateEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const tmxHandler = app.openapi(getTmxV1CorporateEventsRoute, (c) => {
  throw new Error('Not implemented')
})
