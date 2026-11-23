import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DeleteFileCacheHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
