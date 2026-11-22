import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetViolationDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101GetViolationDetailsHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetViolationDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
