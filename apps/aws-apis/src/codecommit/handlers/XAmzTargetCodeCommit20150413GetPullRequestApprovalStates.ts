import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetPullRequestApprovalStatesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
