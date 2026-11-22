import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListOpsItemEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListOpsItemEventsHandler = app.openapi(
  postXAmzTargetAmazonSSMListOpsItemEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
