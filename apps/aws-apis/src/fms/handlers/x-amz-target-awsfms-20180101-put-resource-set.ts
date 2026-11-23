import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101PutResourceSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101PutResourceSetHandler = app.openapi(
  postXAmzTargetAWSFMS20180101PutResourceSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
