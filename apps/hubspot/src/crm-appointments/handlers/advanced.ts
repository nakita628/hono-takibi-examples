import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ObjectTypeMergeRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(postCrmObjects202609ObjectTypeMergeRoute, (c) => {
  throw new Error('Not implemented')
})
