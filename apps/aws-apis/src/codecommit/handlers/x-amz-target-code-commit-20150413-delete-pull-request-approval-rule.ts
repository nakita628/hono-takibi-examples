import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
