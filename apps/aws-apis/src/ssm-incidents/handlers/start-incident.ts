import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartIncidentRoute } from '../routes'

const app = new OpenAPIHono()

export const startIncidentHandler = app.openapi(postStartIncidentRoute, (c) => {
  throw new Error('Not implemented')
})
