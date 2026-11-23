import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
