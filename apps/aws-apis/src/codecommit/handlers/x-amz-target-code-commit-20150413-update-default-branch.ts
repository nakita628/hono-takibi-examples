import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateDefaultBranchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdateDefaultBranchHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateDefaultBranchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
