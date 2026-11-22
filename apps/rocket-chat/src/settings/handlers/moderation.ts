import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ModerationReportInfoRoute,
  getApiV1ModerationReportsByUsersRoute,
  getApiV1ModerationReportsRoute,
  getApiV1ModerationUserReportedMessagesRoute,
  getApiV1ModerationUserReportsByUserIdRoute,
  getApiV1ModerationUserReportsRoute,
  postApiV1ModerationDismissReportsRoute,
  postApiV1ModerationDismissUserReportsRoute,
  postApiV1ModerationUserDeleteReportedMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const moderationHandler = app
  .openapi(getApiV1ModerationReportsByUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationUserReportedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationReportInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationDismissReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationUserDeleteReportedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationDismissUserReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationUserReportsByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationUserReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
