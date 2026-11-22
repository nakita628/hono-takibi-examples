import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  deleteIdentityConditionalAccessRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  getIdentityConditionalAccessAuthenticationContextClassReferencesRoute,
  getIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  getIdentityConditionalAccessNamedLocationsRoute,
  getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getIdentityConditionalAccessPoliciesRoute,
  getIdentityConditionalAccessRoute,
  getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRoute,
  getIdentityConditionalAccessTemplatesRoute,
  patchIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
  patchIdentityConditionalAccessNamedLocationsNamedLocationIdRoute,
  patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  patchIdentityConditionalAccessRoute,
  postIdentityConditionalAccessAuthenticationContextClassReferencesRoute,
  postIdentityConditionalAccessNamedLocationsRoute,
  postIdentityConditionalAccessPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityConditionalAccessRootHandler = app
  .openapi(deleteIdentityConditionalAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessAuthenticationContextClassReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessAuthenticationContextClassReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityConditionalAccessAuthenticationContextClassReferencesAuthenticationContextClassReferenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getIdentityConditionalAccessNamedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessNamedLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessNamedLocationsNamedLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityConditionalAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityConditionalAccessTemplatesConditionalAccessTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
