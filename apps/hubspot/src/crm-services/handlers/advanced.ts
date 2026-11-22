import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ServicesGdprDeleteRoute,
  postCrmObjects202609ServicesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609ServicesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ServicesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
