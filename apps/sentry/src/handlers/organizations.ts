import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugMembersIndexRoute,
  getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute,
  getOrganizationsOrganizationIdOrSlugProjectKeysIndexRoute,
  getOrganizationsOrganizationIdOrSlugProjectsIndexRoute,
  getOrganizationsOrganizationIdOrSlugRelayUsageIndexRoute,
  getOrganizationsOrganizationIdOrSlugReposIndexRoute,
  getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexRoute,
  getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugStatsSummaryIndexRoute,
  getOrganizationsOrganizationIdOrSlugStatsV2IndexRoute,
  postOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute,
  postOrganizationsOrganizationIdOrSlugMembersIndexRoute,
  postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute,
  putOrganizationsOrganizationIdOrSlugIndexRoute,
  putOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugProjectKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugRelayUsageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugStatsSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugStatsV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
