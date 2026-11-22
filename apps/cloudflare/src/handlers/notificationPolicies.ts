import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAlertingV3PoliciesPolicyIdRoute,
  getAccountsAccountIdAlertingV3PoliciesPolicyIdEmailUnsubscribeRoute,
  getAccountsAccountIdAlertingV3PoliciesPolicyIdRoute,
  getAccountsAccountIdAlertingV3PoliciesRoute,
  postAccountsAccountIdAlertingV3PoliciesPolicyIdEmailUnsubscribeRoute,
  postAccountsAccountIdAlertingV3PoliciesPolicyIdTestRoute,
  postAccountsAccountIdAlertingV3PoliciesRoute,
  putAccountsAccountIdAlertingV3PoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationPoliciesHandler = app
  .openapi(getAccountsAccountIdAlertingV3PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAlertingV3PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAlertingV3PoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertingV3PoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAlertingV3PoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertingV3PoliciesPolicyIdEmailUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAlertingV3PoliciesPolicyIdEmailUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAlertingV3PoliciesPolicyIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
