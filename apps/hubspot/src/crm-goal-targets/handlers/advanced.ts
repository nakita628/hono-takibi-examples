import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609GoalTargetsGdprDeleteRoute,
  postCrmObjects202609GoalTargetsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609GoalTargetsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
