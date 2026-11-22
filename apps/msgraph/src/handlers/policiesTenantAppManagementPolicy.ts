import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesDefaultAppManagementPolicyRoute,
  getPoliciesDefaultAppManagementPolicyRoute,
  patchPoliciesDefaultAppManagementPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesTenantAppManagementPolicyHandler = app
  .openapi(getPoliciesDefaultAppManagementPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesDefaultAppManagementPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesDefaultAppManagementPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
