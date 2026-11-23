import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMitigationactionsActionsActionNameRoute,
  getMitigationactionsActionsActionNameRoute,
  getMitigationactionsActionsRoute,
  patchMitigationactionsActionsActionNameRoute,
  postMitigationactionsActionsActionNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mitigationactionsHandler = app
  .openapi(postMitigationactionsActionsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMitigationactionsActionsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMitigationactionsActionsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMitigationactionsActionsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMitigationactionsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
