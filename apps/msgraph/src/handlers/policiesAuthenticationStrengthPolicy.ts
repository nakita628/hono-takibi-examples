import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRoute,
  getPoliciesAuthenticationStrengthPoliciesCountRoute,
  getPoliciesAuthenticationStrengthPoliciesRoute,
  patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
  postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRoute,
  postPoliciesAuthenticationStrengthPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesAuthenticationStrengthPolicyHandler = app
  .openapi(getPoliciesAuthenticationStrengthPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesAuthenticationStrengthPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesAuthenticationStrengthPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
