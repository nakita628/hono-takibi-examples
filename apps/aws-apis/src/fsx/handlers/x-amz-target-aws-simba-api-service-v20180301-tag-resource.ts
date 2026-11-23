import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301TagResourceHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
