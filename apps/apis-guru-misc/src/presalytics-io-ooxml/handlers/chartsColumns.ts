import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsColumnsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsColumnsHandler = app.openapi(getChartsColumnsIdRoute, (c) => {
  throw new Error('Not implemented')
})
