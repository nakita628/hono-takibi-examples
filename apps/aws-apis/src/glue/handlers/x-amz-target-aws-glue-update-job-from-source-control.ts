import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateJobFromSourceControlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateJobFromSourceControlHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateJobFromSourceControlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
