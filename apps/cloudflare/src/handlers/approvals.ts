import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneRulesApprovalsIdRoute,
  getAccountsAccountIdCloudforceOneRulesApprovalsRoute,
  postAccountsAccountIdCloudforceOneRulesApprovalsIdCancelRoute,
  postAccountsAccountIdCloudforceOneRulesApprovalsIdResubmitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalsHandler = app
  .openapi(getAccountsAccountIdCloudforceOneRulesApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRulesApprovalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRulesApprovalsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRulesApprovalsIdResubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
