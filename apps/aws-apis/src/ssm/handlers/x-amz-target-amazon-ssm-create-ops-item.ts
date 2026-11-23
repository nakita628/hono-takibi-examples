import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateOpsItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreateOpsItemHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateOpsItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
