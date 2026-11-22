import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRoute,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
