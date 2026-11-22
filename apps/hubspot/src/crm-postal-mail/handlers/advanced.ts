import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609PostalMailGdprDeleteRoute,
  postCrmObjects202609PostalMailMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609PostalMailGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
