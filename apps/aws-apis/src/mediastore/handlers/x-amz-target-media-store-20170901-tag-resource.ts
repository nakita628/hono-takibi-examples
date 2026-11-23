import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901TagResourceHandler = app.openapi(
  postXAmzTargetMediaStore20170901TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
