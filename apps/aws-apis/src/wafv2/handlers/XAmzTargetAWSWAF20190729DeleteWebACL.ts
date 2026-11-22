import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729DeleteWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
