import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DeleteBranchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413DeleteBranchHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DeleteBranchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
