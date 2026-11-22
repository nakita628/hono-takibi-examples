import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetApprovalRuleTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetApprovalRuleTemplateHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetApprovalRuleTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
