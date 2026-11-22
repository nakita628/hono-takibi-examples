import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SensitiveDataScannerConfigGroupsGroupIdRoute,
  deleteApiV2SensitiveDataScannerConfigRulesRuleIdRoute,
  getApiV2SensitiveDataScannerConfigRoute,
  getApiV2SensitiveDataScannerConfigStandardPatternsRoute,
  patchApiV2SensitiveDataScannerConfigGroupsGroupIdRoute,
  patchApiV2SensitiveDataScannerConfigRoute,
  patchApiV2SensitiveDataScannerConfigRulesRuleIdRoute,
  postApiV2SensitiveDataScannerConfigGroupsRoute,
  postApiV2SensitiveDataScannerConfigRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sensitiveDataScannerHandler = app
  .openapi(getApiV2SensitiveDataScannerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SensitiveDataScannerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SensitiveDataScannerConfigGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SensitiveDataScannerConfigGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SensitiveDataScannerConfigGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SensitiveDataScannerConfigRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SensitiveDataScannerConfigRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SensitiveDataScannerConfigRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SensitiveDataScannerConfigStandardPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
