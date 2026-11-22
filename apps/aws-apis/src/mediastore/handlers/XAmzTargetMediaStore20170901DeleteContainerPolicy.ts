import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901DeleteContainerPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901DeleteContainerPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901DeleteContainerPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
