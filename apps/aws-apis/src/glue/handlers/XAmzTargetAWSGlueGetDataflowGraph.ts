import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataflowGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetDataflowGraphHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataflowGraphRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
