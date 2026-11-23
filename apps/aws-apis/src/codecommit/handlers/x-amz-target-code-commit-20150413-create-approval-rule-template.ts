import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413CreateApprovalRuleTemplateHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
