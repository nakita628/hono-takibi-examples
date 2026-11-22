import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryHandler =
  app.openapi(
    postXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
