import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ListingsGdprDeleteRoute,
  postCrmObjects202609ListingsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609ListingsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ListingsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
