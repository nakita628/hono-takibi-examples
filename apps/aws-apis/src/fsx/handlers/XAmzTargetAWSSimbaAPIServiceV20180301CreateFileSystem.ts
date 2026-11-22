import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
