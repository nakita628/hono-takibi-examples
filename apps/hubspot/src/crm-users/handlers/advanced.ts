import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609UsersGdprDeleteRoute,
  postCrmObjects202609UsersMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609UsersGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
