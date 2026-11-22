import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
