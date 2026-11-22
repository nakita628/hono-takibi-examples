import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRumSiteInfoSiteIdRoute,
  deleteAccountsAccountIdRumV2RulesetIdRuleRuleIdRoute,
  getAccountsAccountIdRumSiteInfoListRoute,
  getAccountsAccountIdRumSiteInfoSiteIdRoute,
  getAccountsAccountIdRumSiteInfoSiteTagListRoute,
  getAccountsAccountIdRumSiteInfoValidateHostnameRoute,
  getAccountsAccountIdRumSiteInfoZoneTagListRoute,
  getAccountsAccountIdRumV2RulesetIdRulesRoute,
  getZonesZoneIdSettingsRumRoute,
  patchZonesZoneIdSettingsRumRoute,
  postAccountsAccountIdRumSiteInfoRoute,
  postAccountsAccountIdRumV2RulesetIdRuleRoute,
  postAccountsAccountIdRumV2RulesetIdRulesRoute,
  putAccountsAccountIdRumSiteInfoSiteIdRoute,
  putAccountsAccountIdRumV2RulesetIdRuleRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webAnalyticsHandler = app
  .openapi(postAccountsAccountIdRumSiteInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRumSiteInfoListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRumSiteInfoSiteTagListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRumSiteInfoValidateHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRumSiteInfoZoneTagListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRumSiteInfoSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRumSiteInfoSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRumSiteInfoSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRumV2RulesetIdRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRumV2RulesetIdRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRumV2RulesetIdRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRumV2RulesetIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRumV2RulesetIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsRumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSettingsRumRoute, (c) => {
    throw new Error('Not implemented')
  })
