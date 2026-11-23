import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901UntagResourceHandler = app.openapi(
  postXAmzTargetMediaStore20170901UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
