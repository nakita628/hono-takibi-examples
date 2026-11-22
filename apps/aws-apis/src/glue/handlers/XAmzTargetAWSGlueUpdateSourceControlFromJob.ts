import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateSourceControlFromJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateSourceControlFromJobHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateSourceControlFromJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
