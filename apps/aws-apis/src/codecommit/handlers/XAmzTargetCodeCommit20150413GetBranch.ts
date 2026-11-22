import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetBranchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetBranchHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetBranchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
