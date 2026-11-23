import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryHandler =
  app.openapi(
    postXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
