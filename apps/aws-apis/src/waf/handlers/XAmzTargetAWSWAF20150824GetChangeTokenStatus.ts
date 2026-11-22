import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetChangeTokenStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetChangeTokenStatusHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetChangeTokenStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
