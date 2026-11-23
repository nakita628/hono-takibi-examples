import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetastoreSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const metastoreSummaryHandler = app.openapi(getMetastoreSummaryRoute, (c) => {
  throw new Error('Not implemented')
})
