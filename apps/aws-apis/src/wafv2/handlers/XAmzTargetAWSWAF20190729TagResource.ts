import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729TagResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20190729TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
