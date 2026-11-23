import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729PutLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729PutLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAF20190729PutLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
