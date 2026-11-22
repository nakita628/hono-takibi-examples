import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute,
  deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute,
  getOrganizationsOrganizationIdOrSlugScimV2GroupsRoute,
  getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute,
  getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameRoute,
  getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesRoute,
  getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriRoute,
  getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigRoute,
  getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute,
  getOrganizationsOrganizationIdOrSlugScimV2UsersRoute,
  patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute,
  patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute,
  postOrganizationsOrganizationIdOrSlugScimV2GroupsRoute,
  postOrganizationsOrganizationIdOrSlugScimV2UsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
