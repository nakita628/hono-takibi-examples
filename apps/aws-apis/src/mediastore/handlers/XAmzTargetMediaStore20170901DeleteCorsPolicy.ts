import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901DeleteCorsPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901DeleteCorsPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901DeleteCorsPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
