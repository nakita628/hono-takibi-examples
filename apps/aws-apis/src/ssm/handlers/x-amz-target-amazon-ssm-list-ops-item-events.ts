import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListOpsItemEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListOpsItemEventsHandler = app.openapi(
  postXAmzTargetAmazonSSMListOpsItemEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
