import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DeleteSnapshotHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
