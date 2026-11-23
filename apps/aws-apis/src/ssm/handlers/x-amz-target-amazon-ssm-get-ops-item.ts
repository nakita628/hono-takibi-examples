import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetOpsItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetOpsItemHandler = app.openapi(
  postXAmzTargetAmazonSSMGetOpsItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
