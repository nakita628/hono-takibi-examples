import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
  deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
  deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute,
  getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute,
  getPoliciesPermissionGrantPoliciesRoute,
  patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
  patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
  patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute,
  postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute,
  postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute,
  postPoliciesPermissionGrantPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesPermissionGrantPolicyHandler = app
  .openapi(getPoliciesPermissionGrantPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesPermissionGrantPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdExcludesPermissionGrantConditionSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesPermissionGrantPoliciesPermissionGrantPolicyIdIncludesPermissionGrantConditionSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
