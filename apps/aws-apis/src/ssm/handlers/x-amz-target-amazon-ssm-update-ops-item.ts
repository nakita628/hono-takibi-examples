import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateOpsItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateOpsItemHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateOpsItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
