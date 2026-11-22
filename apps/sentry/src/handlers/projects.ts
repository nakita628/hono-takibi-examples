import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugDsnLookupIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexRoute,
  postOrganizationsOrganizationIdOrSlugProjectsIndexRoute,
  postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute,
  postTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugDsnLookupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
