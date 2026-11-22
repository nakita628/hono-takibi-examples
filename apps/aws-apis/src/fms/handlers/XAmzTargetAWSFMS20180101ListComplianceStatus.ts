import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListComplianceStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListComplianceStatusHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListComplianceStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
