import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetOpsItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetOpsItemHandler = app.openapi(
  postXAmzTargetAmazonSSMGetOpsItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
