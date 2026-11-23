import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DeleteFileSystemHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
