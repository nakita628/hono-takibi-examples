import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetResourceSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101GetResourceSetHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetResourceSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
