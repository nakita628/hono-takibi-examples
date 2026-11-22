import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesRoute,
  patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  postPoliciesHomeRealmDiscoveryPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHomeRealmDiscoveryPolicyHandler = app
  .openapi(getPoliciesHomeRealmDiscoveryPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesHomeRealmDiscoveryPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
