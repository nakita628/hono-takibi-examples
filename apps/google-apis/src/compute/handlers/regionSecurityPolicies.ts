import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRoute,
  getProjectsProjectRegionsRegionSecurityPoliciesRoute,
  getProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyGetRuleRoute,
  getProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRoute,
  patchProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRoute,
  postProjectsProjectRegionsRegionSecurityPoliciesRoute,
  postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyAddRuleRoute,
  postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyPatchRuleRoute,
  postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRemoveRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionSecurityPoliciesHandler = app
  .openapi(getProjectsProjectRegionsRegionSecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyAddRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyGetRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyPatchRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRemoveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
