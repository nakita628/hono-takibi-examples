import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609LeadsGdprDeleteRoute,
  postCrmObjects202609LeadsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609LeadsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
