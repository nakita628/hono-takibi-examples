import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsRowsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsRowsHandler = app.openapi(getChartsRowsIdRoute, (c) => {
  throw new Error('Not implemented')
})
