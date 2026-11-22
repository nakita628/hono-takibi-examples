import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CartsGdprDeleteRoute,
  postCrmObjects202609CartsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609CartsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
