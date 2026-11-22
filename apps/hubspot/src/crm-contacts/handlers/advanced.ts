import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ContactsGdprDeleteRoute,
  postCrmObjects202609ContactsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609ContactsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
