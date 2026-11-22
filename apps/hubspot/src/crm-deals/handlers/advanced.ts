import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects20260903GdprDeleteRoute, postCrmObjects20260903MergeRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects20260903GdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903MergeRoute, (c) => {
    throw new Error('Not implemented')
  })
