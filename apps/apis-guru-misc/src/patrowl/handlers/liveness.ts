import { OpenAPIHono } from '@hono/zod-openapi'
import { getLivenessRoute } from '../routes'

const app = new OpenAPIHono()

export const livenessHandler = app.openapi(getLivenessRoute, (c) => {
  throw new Error('Not implemented')
})
