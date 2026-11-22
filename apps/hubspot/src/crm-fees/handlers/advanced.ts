import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609FeesGdprDeleteRoute,
  postCrmObjects202609FeesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609FeesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
