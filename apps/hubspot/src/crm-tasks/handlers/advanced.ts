import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609TasksGdprDeleteRoute,
  postCrmObjects202609TasksMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609TasksGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TasksMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
