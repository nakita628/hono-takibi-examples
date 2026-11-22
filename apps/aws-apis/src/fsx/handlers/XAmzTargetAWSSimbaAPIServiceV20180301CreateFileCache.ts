import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
