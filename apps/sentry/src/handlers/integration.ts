import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  deleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexRoute,
  deleteSentryAppsSentryAppIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexRoute,
  getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugSentryAppsIndexRoute,
  getSentryAppInstallationsUuidExternalRequestsIndexRoute,
  getSentryAppsSentryAppIdOrSlugIndexRoute,
  postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  postSentryAppInstallationsUuidExternalIssueActionsIndexRoute,
  postSentryAppInstallationsUuidExternalIssuesIndexRoute,
  putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  putSentryAppsSentryAppIdOrSlugIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationHandler = app
  .openapi(
    getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSentryAppsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSentryAppInstallationsUuidExternalIssueActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentryAppInstallationsUuidExternalRequestsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentryAppsSentryAppIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSentryAppsSentryAppIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSentryAppsSentryAppIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSentryAppInstallationsUuidExternalIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
