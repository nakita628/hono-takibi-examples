import { OpenAPIHono } from '@hono/zod-openapi'
import { getTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const totalsHandler = app.openapi(getTotalsRoute, (c) => {
  throw new Error('Not implemented')
})
