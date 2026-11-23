import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetComplianceDetailRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101GetComplianceDetailHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetComplianceDetailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
