import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsSensitivityLevelIdRoute,
  getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsRoute,
  getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsSensitivityLevelIdRoute,
  postAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsRoute,
  putAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsSensitivityLevelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpSensitivityLevelsHandler = app
  .openapi(getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsSensitivityLevelIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsSensitivityLevelIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdDlpSensitivityGroupsSensitivityGroupIdLevelsSensitivityLevelIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
