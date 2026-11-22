import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ProductsGdprDeleteRoute,
  postCrmObjects202609ProductsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609ProductsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProductsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
