import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
