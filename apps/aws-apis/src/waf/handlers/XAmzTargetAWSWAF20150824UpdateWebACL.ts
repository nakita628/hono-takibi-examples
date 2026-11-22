import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824UpdateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
