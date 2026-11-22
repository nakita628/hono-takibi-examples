import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
