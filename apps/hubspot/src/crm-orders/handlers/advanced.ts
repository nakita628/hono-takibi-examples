import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609OrdersGdprDeleteRoute,
  postCrmObjects202609OrdersMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609OrdersGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
