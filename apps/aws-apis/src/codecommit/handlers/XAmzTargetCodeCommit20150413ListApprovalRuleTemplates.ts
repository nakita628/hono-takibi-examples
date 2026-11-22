import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413ListApprovalRuleTemplatesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
