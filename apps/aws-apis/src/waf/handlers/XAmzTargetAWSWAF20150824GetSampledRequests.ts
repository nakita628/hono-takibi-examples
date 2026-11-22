import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetSampledRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetSampledRequestsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetSampledRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
