import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DeleteResourceSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101DeleteResourceSetHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DeleteResourceSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
