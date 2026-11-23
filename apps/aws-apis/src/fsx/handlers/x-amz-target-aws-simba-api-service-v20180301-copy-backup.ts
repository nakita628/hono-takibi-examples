import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301CopyBackupHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
