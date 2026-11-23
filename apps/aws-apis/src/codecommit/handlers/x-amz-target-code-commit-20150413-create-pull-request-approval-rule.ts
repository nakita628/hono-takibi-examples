import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
