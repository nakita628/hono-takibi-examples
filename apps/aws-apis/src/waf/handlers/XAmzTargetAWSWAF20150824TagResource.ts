import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824TagResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20150824TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
