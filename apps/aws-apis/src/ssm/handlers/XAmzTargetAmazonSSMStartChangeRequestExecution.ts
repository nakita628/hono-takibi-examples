import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartChangeRequestExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMStartChangeRequestExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMStartChangeRequestExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
