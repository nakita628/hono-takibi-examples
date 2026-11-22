import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute,
  getV21AccountsAccountIdEnvelopesTransferRulesRoute,
  postV21AccountsAccountIdEnvelopesTransferRulesRoute,
  putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute,
  putV21AccountsAccountIdEnvelopesTransferRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeTransferRulesHandler = app
  .openapi(getV21AccountsAccountIdEnvelopesTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
