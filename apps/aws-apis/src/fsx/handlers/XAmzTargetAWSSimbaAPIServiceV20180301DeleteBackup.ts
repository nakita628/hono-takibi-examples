import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
