import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901GetLifecyclePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901GetLifecyclePolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901GetLifecyclePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
