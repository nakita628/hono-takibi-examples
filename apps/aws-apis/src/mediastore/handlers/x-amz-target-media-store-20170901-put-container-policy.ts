import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901PutContainerPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901PutContainerPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901PutContainerPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
