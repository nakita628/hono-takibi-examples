import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
