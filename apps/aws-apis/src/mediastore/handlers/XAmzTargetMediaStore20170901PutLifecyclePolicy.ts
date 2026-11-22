import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901PutLifecyclePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901PutLifecyclePolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901PutLifecyclePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
