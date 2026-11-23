import { OpenAPIHono } from '@hono/zod-openapi'
import { getSummariesImagetagsRoute } from '../routes'

const app = new OpenAPIHono()

export const summariesHandler = app.openapi(getSummariesImagetagsRoute, (c) => {
  throw new Error('Not implemented')
})
