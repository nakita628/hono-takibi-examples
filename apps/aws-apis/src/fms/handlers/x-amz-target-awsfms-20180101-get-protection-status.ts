import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetProtectionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101GetProtectionStatusHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetProtectionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
