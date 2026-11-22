import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
