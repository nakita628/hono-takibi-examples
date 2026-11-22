import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609EmailsGdprDeleteRoute,
  postCrmObjects202609EmailsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609EmailsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
