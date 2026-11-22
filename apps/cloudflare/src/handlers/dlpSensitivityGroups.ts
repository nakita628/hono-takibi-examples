import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdRoute,
  getAccountsAccountIdDlpSensitivityGroupsRoute,
  getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelOrderRoute,
  getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdRoute,
  postAccountsAccountIdDlpSensitivityGroupsRoute,
  putAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelOrderRoute,
  putAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpSensitivityGroupsHandler = app
  .openapi(getAccountsAccountIdDlpSensitivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpSensitivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
