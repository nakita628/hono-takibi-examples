import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729PutPermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729PutPermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729PutPermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
