import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalSecurityPoliciesSecurityPolicyRoute,
  getProjectsProjectAggregatedSecurityPoliciesRoute,
  getProjectsProjectGlobalSecurityPoliciesListPreconfiguredExpressionSetsRoute,
  getProjectsProjectGlobalSecurityPoliciesRoute,
  getProjectsProjectGlobalSecurityPoliciesSecurityPolicyGetRuleRoute,
  getProjectsProjectGlobalSecurityPoliciesSecurityPolicyRoute,
  patchProjectsProjectGlobalSecurityPoliciesSecurityPolicyRoute,
  postProjectsProjectGlobalSecurityPoliciesResourceSetLabelsRoute,
  postProjectsProjectGlobalSecurityPoliciesRoute,
  postProjectsProjectGlobalSecurityPoliciesSecurityPolicyAddRuleRoute,
  postProjectsProjectGlobalSecurityPoliciesSecurityPolicyPatchRuleRoute,
  postProjectsProjectGlobalSecurityPoliciesSecurityPolicyRemoveRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityPoliciesHandler = app
  .openapi(getProjectsProjectAggregatedSecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSecurityPoliciesListPreconfiguredExpressionSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSecurityPoliciesResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalSecurityPoliciesSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSecurityPoliciesSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalSecurityPoliciesSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSecurityPoliciesSecurityPolicyAddRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSecurityPoliciesSecurityPolicyGetRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSecurityPoliciesSecurityPolicyPatchRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSecurityPoliciesSecurityPolicyRemoveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
