import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CallsGdprDeleteRoute,
  postCrmObjects202609CallsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609CallsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
