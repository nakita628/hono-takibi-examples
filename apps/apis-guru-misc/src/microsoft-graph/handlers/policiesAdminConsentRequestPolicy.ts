import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAdminConsentRequestPolicyRoute,
  getPoliciesAdminConsentRequestPolicyRoute,
  patchPoliciesAdminConsentRequestPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesAdminConsentRequestPolicyHandler = app
  .openapi(deletePoliciesAdminConsentRequestPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAdminConsentRequestPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesAdminConsentRequestPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
