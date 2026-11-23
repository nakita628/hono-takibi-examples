import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartQueryPlanningRoute } from '../routes'

const app = new OpenAPIHono()

export const startQueryPlanningHandler = app.openapi(postStartQueryPlanningRoute, (c) => {
  throw new Error('Not implemented')
})
