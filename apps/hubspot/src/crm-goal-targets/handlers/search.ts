import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609GoalTargetsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609GoalTargetsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
