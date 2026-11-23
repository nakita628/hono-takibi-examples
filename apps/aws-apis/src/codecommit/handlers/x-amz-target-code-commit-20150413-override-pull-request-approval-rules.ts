import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
