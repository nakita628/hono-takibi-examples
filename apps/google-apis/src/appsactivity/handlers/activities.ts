import { OpenAPIHono } from '@hono/zod-openapi'
import { getActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app.openapi(getActivitiesRoute, (c) => {
  throw new Error('Not implemented')
})
