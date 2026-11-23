import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
