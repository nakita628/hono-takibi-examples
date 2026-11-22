import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalFirewallPoliciesFirewallPolicyRoute,
  getProjectsProjectGlobalFirewallPoliciesFirewallPolicyGetAssociationRoute,
  getProjectsProjectGlobalFirewallPoliciesFirewallPolicyGetRuleRoute,
  getProjectsProjectGlobalFirewallPoliciesFirewallPolicyRoute,
  getProjectsProjectGlobalFirewallPoliciesResourceGetIamPolicyRoute,
  getProjectsProjectGlobalFirewallPoliciesRoute,
  patchProjectsProjectGlobalFirewallPoliciesFirewallPolicyRoute,
  postProjectsProjectGlobalFirewallPoliciesFirewallPolicyAddAssociationRoute,
  postProjectsProjectGlobalFirewallPoliciesFirewallPolicyAddRuleRoute,
  postProjectsProjectGlobalFirewallPoliciesFirewallPolicyCloneRulesRoute,
  postProjectsProjectGlobalFirewallPoliciesFirewallPolicyPatchRuleRoute,
  postProjectsProjectGlobalFirewallPoliciesFirewallPolicyRemoveAssociationRoute,
  postProjectsProjectGlobalFirewallPoliciesFirewallPolicyRemoveRuleRoute,
  postProjectsProjectGlobalFirewallPoliciesResourceSetIamPolicyRoute,
  postProjectsProjectGlobalFirewallPoliciesResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalFirewallPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkFirewallPoliciesHandler = app
  .openapi(getProjectsProjectGlobalFirewallPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesFirewallPolicyAddAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesFirewallPolicyAddRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesFirewallPolicyCloneRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalFirewallPoliciesFirewallPolicyGetAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalFirewallPoliciesFirewallPolicyGetRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesFirewallPolicyPatchRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesFirewallPolicyRemoveAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesFirewallPolicyRemoveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalFirewallPoliciesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalFirewallPoliciesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
