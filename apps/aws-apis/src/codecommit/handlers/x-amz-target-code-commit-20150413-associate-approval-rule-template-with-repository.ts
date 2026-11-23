import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryHandler =
  app.openapi(
    postXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
