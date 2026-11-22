import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CreateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729CreateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CreateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
