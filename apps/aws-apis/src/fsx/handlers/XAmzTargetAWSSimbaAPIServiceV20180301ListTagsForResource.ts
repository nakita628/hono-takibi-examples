import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
