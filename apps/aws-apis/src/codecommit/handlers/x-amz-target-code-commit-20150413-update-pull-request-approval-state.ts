import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
