import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
