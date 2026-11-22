import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRoute,
  deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute,
  getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  getPoliciesFeatureRolloutPoliciesRoute,
  patchPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute,
  postPoliciesFeatureRolloutPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesFeatureRolloutPolicyHandler = app
  .openapi(getPoliciesFeatureRolloutPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesFeatureRolloutPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToDirectoryObjectIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
