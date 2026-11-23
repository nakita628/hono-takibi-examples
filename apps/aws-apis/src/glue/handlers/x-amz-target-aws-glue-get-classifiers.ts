import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetClassifiersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetClassifiersHandler = app.openapi(
  postXAmzTargetAWSGlueGetClassifiersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
