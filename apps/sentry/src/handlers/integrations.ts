import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute,
  deleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute,
  getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugForwardingIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexRoute,
  postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexRoute,
  postOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute,
  postOrganizationsOrganizationIdOrSlugExternalUsersIndexRoute,
  postOrganizationsOrganizationIdOrSlugForwardingIndexRoute,
  postTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexRoute,
  putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugReposSettingsIndexRoute,
  putTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugExternalUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugForwardingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugForwardingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugReposSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
