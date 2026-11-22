import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AccountsAccountIdReportingEventsRoute,
  getApiV2AccountsAccountIdReportsConversationsIndexRoute,
  getApiV2AccountsAccountIdReportsConversationsRoute,
  getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRoute,
  getApiV2AccountsAccountIdReportsInboxLabelMatrixRoute,
  getApiV2AccountsAccountIdReportsOutgoingMessagesCountRoute,
  getApiV2AccountsAccountIdReportsRoute,
  getApiV2AccountsAccountIdReportsSummaryRoute,
  getApiV2AccountsAccountIdSummaryReportsAgentRoute,
  getApiV2AccountsAccountIdSummaryReportsChannelRoute,
  getApiV2AccountsAccountIdSummaryReportsInboxRoute,
  getApiV2AccountsAccountIdSummaryReportsTeamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getApiV1AccountsAccountIdReportingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsConversationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsInboxLabelMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsOutgoingMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
