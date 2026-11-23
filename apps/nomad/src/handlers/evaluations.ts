import { OpenAPIHono } from '@hono/zod-openapi'
import { getEvaluationsRoute } from '../routes'

const app = new OpenAPIHono()

export const evaluationsHandler = app.openapi(getEvaluationsRoute, (c) => {
  throw new Error('Not implemented')
})
