import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
