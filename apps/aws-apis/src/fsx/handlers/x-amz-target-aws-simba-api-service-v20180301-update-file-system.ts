import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301UpdateFileSystemHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
