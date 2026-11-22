import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesHandler =
  app.openapi(postXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
