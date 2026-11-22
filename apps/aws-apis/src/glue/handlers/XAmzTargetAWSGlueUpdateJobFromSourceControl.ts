import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateJobFromSourceControlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateJobFromSourceControlHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateJobFromSourceControlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
