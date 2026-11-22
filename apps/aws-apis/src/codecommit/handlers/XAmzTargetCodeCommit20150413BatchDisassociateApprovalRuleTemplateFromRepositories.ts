import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesHandler =
  app.openapi(
    postXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
