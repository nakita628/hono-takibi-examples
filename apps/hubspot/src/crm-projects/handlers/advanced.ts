import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ObjectTypeGdprDeleteRoute,
  postCrmObjects202609ProjectsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609ProjectsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
