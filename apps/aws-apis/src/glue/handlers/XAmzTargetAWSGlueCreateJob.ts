import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateJobHandler = app.openapi(
  postXAmzTargetAWSGlueCreateJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
