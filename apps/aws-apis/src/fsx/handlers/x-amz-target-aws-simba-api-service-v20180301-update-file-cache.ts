import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301UpdateFileCacheHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
