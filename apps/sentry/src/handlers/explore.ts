import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute,
  getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventsDroppedIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventsIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceLogsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexRoute,
  postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exploreHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventsDroppedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
