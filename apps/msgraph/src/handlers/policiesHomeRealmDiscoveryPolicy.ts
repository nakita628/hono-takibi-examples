import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesCountRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToCountRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToRoute,
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
  .openapi(getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToDirectoryObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdAppliesToCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesHomeRealmDiscoveryPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
