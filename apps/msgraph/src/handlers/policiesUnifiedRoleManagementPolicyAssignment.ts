import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
  getPoliciesRoleManagementPolicyAssignmentsCountRoute,
  getPoliciesRoleManagementPolicyAssignmentsRoute,
  getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRoute,
  getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
  patchPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
  postPoliciesRoleManagementPolicyAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesUnifiedRoleManagementPolicyAssignmentHandler = app
  .openapi(getPoliciesRoleManagementPolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesRoleManagementPolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesRoleManagementPolicyAssignmentsUnifiedRoleManagementPolicyAssignmentIdPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesRoleManagementPolicyAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
