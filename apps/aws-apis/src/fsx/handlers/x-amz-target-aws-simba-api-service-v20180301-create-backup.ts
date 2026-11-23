import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301CreateBackupHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
