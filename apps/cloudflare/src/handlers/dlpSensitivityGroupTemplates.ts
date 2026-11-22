import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDlpSensitivityGroupsTemplatesRoute,
  getAccountsAccountIdDlpSensitivityGroupsTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpSensitivityGroupTemplatesHandler = app
  .openapi(getAccountsAccountIdDlpSensitivityGroupsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpSensitivityGroupsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
