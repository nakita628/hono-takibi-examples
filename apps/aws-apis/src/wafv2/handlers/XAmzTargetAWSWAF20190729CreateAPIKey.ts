import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CreateAPIKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729CreateAPIKeyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CreateAPIKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
