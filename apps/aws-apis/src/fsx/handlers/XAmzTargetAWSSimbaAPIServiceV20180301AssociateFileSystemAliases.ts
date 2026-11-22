import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
