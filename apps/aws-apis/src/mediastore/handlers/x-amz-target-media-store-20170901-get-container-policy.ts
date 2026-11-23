import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901GetContainerPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901GetContainerPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901GetContainerPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
