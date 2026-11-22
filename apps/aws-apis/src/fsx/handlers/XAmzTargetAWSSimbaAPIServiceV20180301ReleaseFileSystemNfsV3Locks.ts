import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
