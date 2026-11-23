import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413ListBranchesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413ListBranchesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413ListBranchesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
