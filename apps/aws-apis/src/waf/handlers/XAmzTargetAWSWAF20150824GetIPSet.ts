import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetIPSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
