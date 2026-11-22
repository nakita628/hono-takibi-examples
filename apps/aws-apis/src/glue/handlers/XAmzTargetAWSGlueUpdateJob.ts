import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateJobHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
