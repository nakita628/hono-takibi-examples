import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
