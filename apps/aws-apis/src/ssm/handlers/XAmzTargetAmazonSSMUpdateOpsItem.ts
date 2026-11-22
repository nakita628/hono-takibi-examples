import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateOpsItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateOpsItemHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateOpsItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
