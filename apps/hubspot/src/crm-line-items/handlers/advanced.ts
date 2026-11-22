import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609LineItemsGdprDeleteRoute,
  postCrmObjects202609LineItemsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609LineItemsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
