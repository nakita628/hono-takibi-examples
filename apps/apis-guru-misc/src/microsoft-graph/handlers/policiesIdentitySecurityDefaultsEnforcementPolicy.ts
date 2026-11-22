import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  getPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
  patchPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesIdentitySecurityDefaultsEnforcementPolicyHandler = app
  .openapi(deletePoliciesIdentitySecurityDefaultsEnforcementPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesIdentitySecurityDefaultsEnforcementPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
