import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
