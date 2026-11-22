import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301UntagResourceHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
