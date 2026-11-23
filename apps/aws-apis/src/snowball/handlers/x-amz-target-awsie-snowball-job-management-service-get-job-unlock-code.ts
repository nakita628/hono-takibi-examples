import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceGetJobUnlockCodeHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
