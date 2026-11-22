import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrgGroupMembershipsOrgGroupMembershipIdRoute,
  deleteApiV2OrgGroupPoliciesOrgGroupPolicyIdRoute,
  deleteApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideIdRoute,
  deleteApiV2OrgGroupsOrgGroupIdRoute,
  getApiV2OrgGroupMembershipsOrgGroupMembershipIdRoute,
  getApiV2OrgGroupMembershipsRoute,
  getApiV2OrgGroupPoliciesOrgGroupPolicyIdRoute,
  getApiV2OrgGroupPoliciesRoute,
  getApiV2OrgGroupPolicyConfigsRoute,
  getApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideIdRoute,
  getApiV2OrgGroupPolicyOverridesRoute,
  getApiV2OrgGroupPolicySuggestionsRoute,
  getApiV2OrgGroupsOrgGroupIdRoute,
  getApiV2OrgGroupsRoute,
  patchApiV2OrgGroupMembershipsBulkRoute,
  patchApiV2OrgGroupMembershipsOrgGroupMembershipIdRoute,
  patchApiV2OrgGroupPoliciesOrgGroupPolicyIdRoute,
  patchApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideIdRoute,
  patchApiV2OrgGroupsOrgGroupIdRoute,
  postApiV2OrgGroupMembershipsBulkDeleteRoute,
  postApiV2OrgGroupMembershipsRoute,
  postApiV2OrgGroupPoliciesRoute,
  postApiV2OrgGroupPolicyOverridesRoute,
  postApiV2OrgGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgGroupsHandler = app
  .openapi(getApiV2OrgGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrgGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgGroupMembershipsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrgGroupMembershipsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgGroupMembershipsOrgGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupMembershipsOrgGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgGroupMembershipsOrgGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrgGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgGroupPoliciesOrgGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupPoliciesOrgGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgGroupPoliciesOrgGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupPolicyConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupPolicyOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrgGroupPolicyOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupPolicySuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrgGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgGroupsOrgGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgGroupsOrgGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgGroupsOrgGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
