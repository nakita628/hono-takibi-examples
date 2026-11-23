import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
