import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIdentityApiConnectorsIdentityApiConnectorIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersIdentityProviderBaseIdRefRoute,
  deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  deleteIdentityConditionalAccessRoute,
  deleteIdentityIdentityProvidersIdentityProviderBaseIdRoute,
  deleteIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute,
  getIdentityApiConnectorsCountRoute,
  getIdentityApiConnectorsIdentityApiConnectorIdRoute,
  getIdentityApiConnectorsRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersIdentityProviderIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdUserAttributeRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphGetOrderRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRoute,
  getIdentityB2xUserFlowsCountRoute,
  getIdentityB2xUserFlowsRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesCountRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesRoute,
  getIdentityConditionalAccessNamedLocationsCountRoute,
  getIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  getIdentityConditionalAccessNamedLocationsRoute,
  getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getIdentityConditionalAccessPoliciesCountRoute,
  getIdentityConditionalAccessPoliciesRoute,
  getIdentityConditionalAccessRoute,
  getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRoute,
  getIdentityConditionalAccessTemplatesCountRoute,
  getIdentityConditionalAccessTemplatesRoute,
  getIdentityIdentityProvidersCountRoute,
  getIdentityIdentityProvidersIdentityProviderBaseIdRoute,
  getIdentityIdentityProvidersMicrosoftGraphAvailableProviderTypesRoute,
  getIdentityIdentityProvidersRoute,
  getIdentityRoute,
  getIdentityUserFlowAttributesCountRoute,
  getIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute,
  getIdentityUserFlowAttributesRoute,
  patchIdentityApiConnectorsIdentityApiConnectorIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
  patchIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  patchIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  patchIdentityConditionalAccessRoute,
  patchIdentityIdentityProvidersIdentityProviderBaseIdRoute,
  patchIdentityRoute,
  patchIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute,
  postIdentityApiConnectorsIdentityApiConnectorIdMicrosoftGraphUploadClientCertificateRoute,
  postIdentityApiConnectorsRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphSetOrderRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute,
  postIdentityB2xUserFlowsRoute,
  postIdentityConditionalAccessAuthenticationContextClassReferencesRoute,
  postIdentityConditionalAccessNamedLocationsRoute,
  postIdentityConditionalAccessPoliciesRoute,
  postIdentityIdentityProvidersRoute,
  postIdentityUserFlowAttributesRoute,
  putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
  putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
} from '../routes'

export const getIdentityRouteHandler: RouteHandler<typeof getIdentityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityRouteHandler: RouteHandler<typeof patchIdentityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityApiConnectorsRouteHandler: RouteHandler<
  typeof getIdentityApiConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityApiConnectorsRouteHandler: RouteHandler<
  typeof postIdentityApiConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityApiConnectorsCountRouteHandler: RouteHandler<
  typeof getIdentityApiConnectorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityApiConnectorsIdentityApiConnectorIdRouteHandler: RouteHandler<
  typeof deleteIdentityApiConnectorsIdentityApiConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityApiConnectorsIdentityApiConnectorIdRouteHandler: RouteHandler<
  typeof getIdentityApiConnectorsIdentityApiConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityApiConnectorsIdentityApiConnectorIdRouteHandler: RouteHandler<
  typeof patchIdentityApiConnectorsIdentityApiConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityApiConnectorsIdentityApiConnectorIdMicrosoftGraphUploadClientCertificateRouteHandler: RouteHandler<
  typeof postIdentityApiConnectorsIdentityApiConnectorIdMicrosoftGraphUploadClientCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdRouteHandler: RouteHandler<
  typeof deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityB2xUserFlowsB2xIdentityUserFlowIdRouteHandler: RouteHandler<
  typeof patchIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRouteHandler: RouteHandler<
  typeof deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRouteHandler: RouteHandler<
  typeof patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRouteHandler: RouteHandler<
  typeof deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRouteHandler: RouteHandler<
  typeof patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRouteHandler: RouteHandler<
  typeof putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRouteHandler: RouteHandler<
  typeof deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRouteHandler: RouteHandler<
  typeof patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRouteHandler: RouteHandler<
  typeof putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphGetOrderRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphGetOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphSetOrderRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphSetOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRouteHandler: RouteHandler<
  typeof deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRouteHandler: RouteHandler<
  typeof patchIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdUserAttributeRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdUserAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRouteHandler: RouteHandler<
  typeof getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRouteHandler: RouteHandler<
  typeof postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersIdentityProviderBaseIdRefRouteHandler: RouteHandler<
  typeof deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersIdentityProviderBaseIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityConditionalAccessRouteHandler: RouteHandler<
  typeof deleteIdentityConditionalAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityConditionalAccessRouteHandler: RouteHandler<
  typeof patchIdentityConditionalAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessAuthenticationContextClassReferencesRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessAuthenticationContextClassReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityConditionalAccessAuthenticationContextClassReferencesRouteHandler: RouteHandler<
  typeof postIdentityConditionalAccessAuthenticationContextClassReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessAuthenticationContextClassReferencesCountRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessAuthenticationContextClassReferencesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRouteHandler: RouteHandler<
  typeof deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRouteHandler: RouteHandler<
  typeof patchIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessNamedLocationsRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessNamedLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityConditionalAccessNamedLocationsRouteHandler: RouteHandler<
  typeof postIdentityConditionalAccessNamedLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessNamedLocationsCountRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessNamedLocationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRouteHandler: RouteHandler<
  typeof deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessNamedLocationsNamedLocationIdRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessNamedLocationsNamedLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityConditionalAccessNamedLocationsNamedLocationIdRouteHandler: RouteHandler<
  typeof patchIdentityConditionalAccessNamedLocationsNamedLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessPoliciesRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityConditionalAccessPoliciesRouteHandler: RouteHandler<
  typeof postIdentityConditionalAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessPoliciesCountRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRouteHandler: RouteHandler<
  typeof patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessTemplatesRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessTemplatesCountRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRouteHandler: RouteHandler<
  typeof getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityIdentityProvidersRouteHandler: RouteHandler<
  typeof getIdentityIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityIdentityProvidersRouteHandler: RouteHandler<
  typeof postIdentityIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityIdentityProvidersCountRouteHandler: RouteHandler<
  typeof getIdentityIdentityProvidersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityIdentityProvidersMicrosoftGraphAvailableProviderTypesRouteHandler: RouteHandler<
  typeof getIdentityIdentityProvidersMicrosoftGraphAvailableProviderTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityIdentityProvidersIdentityProviderBaseIdRouteHandler: RouteHandler<
  typeof deleteIdentityIdentityProvidersIdentityProviderBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityIdentityProvidersIdentityProviderBaseIdRouteHandler: RouteHandler<
  typeof getIdentityIdentityProvidersIdentityProviderBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityIdentityProvidersIdentityProviderBaseIdRouteHandler: RouteHandler<
  typeof patchIdentityIdentityProvidersIdentityProviderBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityUserFlowAttributesRouteHandler: RouteHandler<
  typeof getIdentityUserFlowAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityUserFlowAttributesRouteHandler: RouteHandler<
  typeof postIdentityUserFlowAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityUserFlowAttributesCountRouteHandler: RouteHandler<
  typeof getIdentityUserFlowAttributesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityUserFlowAttributesIdentityUserFlowAttributeIdRouteHandler: RouteHandler<
  typeof deleteIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityUserFlowAttributesIdentityUserFlowAttributeIdRouteHandler: RouteHandler<
  typeof getIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityUserFlowAttributesIdentityUserFlowAttributeIdRouteHandler: RouteHandler<
  typeof patchIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
