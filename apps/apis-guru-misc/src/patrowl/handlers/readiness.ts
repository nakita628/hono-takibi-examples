import { OpenAPIHono } from '@hono/zod-openapi'
import { getReadinessRoute } from '../routes'

const app = new OpenAPIHono()

export const readinessHandler = app.openapi(getReadinessRoute, (c) => {
  throw new Error('Not implemented')
})
