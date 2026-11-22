import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  deleteIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesAuthenticationMethodModeDetailIdRoute,
  deleteIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  deleteIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  deleteIdentityConditionalAccessAuthenticationStrengthRoute,
  deleteIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRoute,
  deleteIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRoute,
  deleteIdentityConditionalAccessDeletedItemsRoute,
  deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesCountRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesRoute,
  getIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesAuthenticationMethodModeDetailIdRoute,
  getIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesCountRoute,
  getIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesCountRoute,
  getIdentityConditionalAccessAuthenticationStrengthPoliciesRoute,
  getIdentityConditionalAccessAuthenticationStrengthRoute,
  getIdentityConditionalAccessDeletedItemsNamedLocationsCountRoute,
  getIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRoute,
  getIdentityConditionalAccessDeletedItemsNamedLocationsRoute,
  getIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRoute,
  getIdentityConditionalAccessDeletedItemsPoliciesCountRoute,
  getIdentityConditionalAccessDeletedItemsPoliciesRoute,
  getIdentityConditionalAccessDeletedItemsRoute,
  getIdentityConditionalAccessNamedLocationsCountRoute,
  getIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  getIdentityConditionalAccessNamedLocationsRoute,
  getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getIdentityConditionalAccessPoliciesCountRoute,
  getIdentityConditionalAccessPoliciesRoute,
  getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRoute,
  getIdentityConditionalAccessTemplatesCountRoute,
  getIdentityConditionalAccessTemplatesRoute,
  patchIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  patchIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesAuthenticationMethodModeDetailIdRoute,
  patchIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
  patchIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
  patchIdentityConditionalAccessAuthenticationStrengthRoute,
  patchIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRoute,
  patchIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRoute,
  patchIdentityConditionalAccessDeletedItemsRoute,
  patchIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  postIdentityConditionalAccessAuthenticationContextClassReferencesRoute,
  postIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesRoute,
  postIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
  postIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRoute,
  postIdentityConditionalAccessAuthenticationStrengthPoliciesRoute,
  postIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRestoreRoute,
  postIdentityConditionalAccessDeletedItemsNamedLocationsRoute,
  postIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRestoreRoute,
  postIdentityConditionalAccessDeletedItemsPoliciesRoute,
  postIdentityConditionalAccessEvaluateRoute,
  postIdentityConditionalAccessNamedLocationsNamedLocationIdRestoreRoute,
  postIdentityConditionalAccessNamedLocationsRoute,
  postIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRestoreRoute,
  postIdentityConditionalAccessPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityConditionalAccessRootHandler = app
  .openapi(getIdentityConditionalAccessAuthenticationContextClassReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessAuthenticationContextClassReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityConditionalAccessAuthenticationContextClassReferencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessAuthenticationStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessAuthenticationStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessAuthenticationStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesAuthenticationMethodModeDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesAuthenticationMethodModeDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesAuthenticationMethodModeDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthAuthenticationMethodModesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityConditionalAccessAuthenticationStrengthPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessAuthenticationStrengthPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsAuthenticationCombinationConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdCombinationConfigurationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUpdateAllowedCombinationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityConditionalAccessAuthenticationStrengthPoliciesAuthenticationStrengthPolicyIdUsageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityConditionalAccessAuthenticationStrengthPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessDeletedItemsNamedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessDeletedItemsNamedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postIdentityConditionalAccessDeletedItemsNamedLocationsNamedLocationIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityConditionalAccessDeletedItemsNamedLocationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessDeletedItemsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessDeletedItemsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityConditionalAccessDeletedItemsPoliciesConditionalAccessPolicyIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityConditionalAccessDeletedItemsPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessNamedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessNamedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessNamedLocationsNamedLocationIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessNamedLocationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
