import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPoliciesCrossTenantAccessPolicyDefaultMicrosoftGraphResetToSystemDefaultRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetByIdsRoute,
  postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesActionsHandler = app
  .openapi(
    postPoliciesCrossTenantAccessPolicyDefaultMicrosoftGraphResetToSystemDefaultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetAvailableExtensionPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphGetByIdsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPoliciesFeatureRolloutPoliciesFeatureRolloutPolicyIdAppliesToMicrosoftGraphValidatePropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
