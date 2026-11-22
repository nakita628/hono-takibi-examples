import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocationsGlobalFirewallPoliciesFirewallPolicyRoute,
  getLocationsGlobalFirewallPoliciesFirewallPolicyGetAssociationRoute,
  getLocationsGlobalFirewallPoliciesFirewallPolicyGetRuleRoute,
  getLocationsGlobalFirewallPoliciesFirewallPolicyRoute,
  getLocationsGlobalFirewallPoliciesListAssociationsRoute,
  getLocationsGlobalFirewallPoliciesResourceGetIamPolicyRoute,
  getLocationsGlobalFirewallPoliciesRoute,
  patchLocationsGlobalFirewallPoliciesFirewallPolicyRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyAddAssociationRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyAddRuleRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyCloneRulesRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyMoveRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyPatchRuleRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyRemoveAssociationRoute,
  postLocationsGlobalFirewallPoliciesFirewallPolicyRemoveRuleRoute,
  postLocationsGlobalFirewallPoliciesResourceSetIamPolicyRoute,
  postLocationsGlobalFirewallPoliciesResourceTestIamPermissionsRoute,
  postLocationsGlobalFirewallPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallPoliciesHandler = app
  .openapi(getLocationsGlobalFirewallPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsGlobalFirewallPoliciesListAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocationsGlobalFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsGlobalFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLocationsGlobalFirewallPoliciesFirewallPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyAddAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyAddRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyCloneRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsGlobalFirewallPoliciesFirewallPolicyGetAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsGlobalFirewallPoliciesFirewallPolicyGetRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyPatchRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyRemoveAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesFirewallPolicyRemoveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsGlobalFirewallPoliciesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsGlobalFirewallPoliciesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
