import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexRoute,
  getSentryAppInstallationsUuidExternalRequestsIndexRoute,
  postSentryAppInstallationsUuidExternalIssueActionsIndexRoute,
  postSentryAppInstallationsUuidExternalIssuesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sentryAppInstallationsHandler = app
  .openapi(postSentryAppInstallationsUuidExternalIssueActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentryAppInstallationsUuidExternalRequestsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSentryAppInstallationsUuidExternalIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
