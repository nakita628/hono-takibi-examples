import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesHandler =
  app.openapi(
    postXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
