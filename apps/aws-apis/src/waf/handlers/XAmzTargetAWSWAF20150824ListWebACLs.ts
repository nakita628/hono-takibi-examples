import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListWebACLsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListWebACLsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListWebACLsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
