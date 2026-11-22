import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAppManagementPoliciesAppManagementPolicyIdRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToCountRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToRoute,
  getPoliciesAppManagementPoliciesAppManagementPolicyIdRoute,
  getPoliciesAppManagementPoliciesCountRoute,
  getPoliciesAppManagementPoliciesRoute,
  patchPoliciesAppManagementPoliciesAppManagementPolicyIdRoute,
  postPoliciesAppManagementPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesAppManagementPolicyHandler = app
  .openapi(getPoliciesAppManagementPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesAppManagementPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAppManagementPoliciesAppManagementPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesAppManagementPoliciesAppManagementPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesAppManagementPoliciesAppManagementPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToDirectoryObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesAppManagementPoliciesAppManagementPolicyIdAppliesToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAppManagementPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
