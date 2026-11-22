import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901DeleteLifecyclePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901DeleteLifecyclePolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901DeleteLifecyclePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
