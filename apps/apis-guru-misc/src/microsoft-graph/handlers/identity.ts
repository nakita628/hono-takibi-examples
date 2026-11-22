import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdentityApiConnectorsCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRoute,
  getIdentityB2xUserFlowsCountRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesCountRoute,
  getIdentityConditionalAccessNamedLocationsCountRoute,
  getIdentityConditionalAccessPoliciesCountRoute,
  getIdentityConditionalAccessTemplatesCountRoute,
  getIdentityIdentityProvidersCountRoute,
  getIdentityUserFlowAttributesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app
  .openapi(getIdentityApiConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessAuthenticationContextClassReferencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessNamedLocationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityIdentityProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityUserFlowAttributesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
