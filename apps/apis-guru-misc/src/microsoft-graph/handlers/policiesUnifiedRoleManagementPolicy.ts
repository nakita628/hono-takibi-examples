import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
  deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute,
  deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
  getPoliciesRoleManagementPoliciesRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute,
  getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
  patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
  patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute,
  patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
  postPoliciesRoleManagementPoliciesRoute,
  postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute,
  postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesUnifiedRoleManagementPolicyHandler = app
  .openapi(getPoliciesRoleManagementPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesRoleManagementPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdEffectiveRulesUnifiedRoleManagementPolicyRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesRoleManagementPoliciesUnifiedRoleManagementPolicyIdRulesUnifiedRoleManagementPolicyRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
