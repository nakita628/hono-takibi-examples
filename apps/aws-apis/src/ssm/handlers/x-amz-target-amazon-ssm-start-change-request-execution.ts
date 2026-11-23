import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartChangeRequestExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmStartChangeRequestExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMStartChangeRequestExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
