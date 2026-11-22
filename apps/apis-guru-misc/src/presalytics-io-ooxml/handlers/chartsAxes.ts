import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsAxesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsAxesHandler = app.openapi(getChartsAxesIdRoute, (c) => {
  throw new Error('Not implemented')
})
