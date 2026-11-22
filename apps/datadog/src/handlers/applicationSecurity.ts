import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleIdRoute,
  deleteApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterIdRoute,
  deleteApiV2RemoteConfigProductsAsmWafPoliciesPolicyIdRoute,
  getApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleIdRoute,
  getApiV2RemoteConfigProductsAsmWafCustomRulesRoute,
  getApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterIdRoute,
  getApiV2RemoteConfigProductsAsmWafExclusionFiltersRoute,
  getApiV2RemoteConfigProductsAsmWafPoliciesPolicyIdRoute,
  getApiV2RemoteConfigProductsAsmWafPoliciesRoute,
  getApiV2SecurityAsmServicesServiceFilterRoute,
  postApiV2RemoteConfigProductsAsmWafCustomRulesRoute,
  postApiV2RemoteConfigProductsAsmWafExclusionFiltersRoute,
  postApiV2RemoteConfigProductsAsmWafPoliciesRoute,
  putApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleIdRoute,
  putApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterIdRoute,
  putApiV2RemoteConfigProductsAsmWafPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationSecurityHandler = app
  .openapi(getApiV2RemoteConfigProductsAsmWafCustomRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RemoteConfigProductsAsmWafCustomRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsAsmWafExclusionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RemoteConfigProductsAsmWafExclusionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsAsmWafPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RemoteConfigProductsAsmWafPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RemoteConfigProductsAsmWafPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsAsmWafPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RemoteConfigProductsAsmWafPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityAsmServicesServiceFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
