import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
