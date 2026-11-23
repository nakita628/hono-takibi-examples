import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301CreateVolumeFromBackupHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
