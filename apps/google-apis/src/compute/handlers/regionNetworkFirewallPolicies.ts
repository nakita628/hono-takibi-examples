import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRoute,
  getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyGetAssociationRoute,
  getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyGetRuleRoute,
  getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRoute,
  getProjectsProjectRegionsRegionFirewallPoliciesGetEffectiveFirewallsRoute,
  getProjectsProjectRegionsRegionFirewallPoliciesResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionFirewallPoliciesRoute,
  patchProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyAddAssociationRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyAddRuleRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyCloneRulesRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyPatchRuleRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRemoveAssociationRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRemoveRuleRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionFirewallPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionNetworkFirewallPoliciesHandler = app
  .openapi(getProjectsProjectRegionsRegionFirewallPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionFirewallPoliciesGetEffectiveFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyAddAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyAddRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyCloneRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyGetAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyGetRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyPatchRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRemoveAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRemoveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionFirewallPoliciesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionFirewallPoliciesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
