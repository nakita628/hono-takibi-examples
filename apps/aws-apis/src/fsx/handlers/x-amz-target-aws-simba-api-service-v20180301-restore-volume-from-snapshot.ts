import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301RestoreVolumeFromSnapshotHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
