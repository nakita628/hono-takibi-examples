import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UpdateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729UpdateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UpdateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
