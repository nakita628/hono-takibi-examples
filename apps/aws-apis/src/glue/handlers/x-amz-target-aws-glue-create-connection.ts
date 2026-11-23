import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateConnectionHandler = app.openapi(
  postXAmzTargetAWSGlueCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
