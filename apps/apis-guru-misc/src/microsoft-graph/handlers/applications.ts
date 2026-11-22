import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdExtensionPropertiesCountRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsCountRoute,
  getApplicationsApplicationIdHomeRealmDiscoveryPoliciesCountRoute,
  getApplicationsApplicationIdOwnersCountRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphAppRoleAssignmentCountRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphEndpointCountRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphServicePrincipalCountRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphUserCountRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesCountRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesCountRoute,
  getApplicationsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getApplicationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdExtensionPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdFederatedIdentityCredentialsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdHomeRealmDiscoveryPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdTokenIssuancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdTokenLifetimePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
