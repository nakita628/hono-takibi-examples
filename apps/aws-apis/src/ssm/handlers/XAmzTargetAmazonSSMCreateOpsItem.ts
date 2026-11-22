import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateOpsItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreateOpsItemHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateOpsItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
