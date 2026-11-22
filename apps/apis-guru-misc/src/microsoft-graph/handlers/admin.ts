import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminServiceAnnouncementHealthOverviewsCountRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRoute,
  getAdminServiceAnnouncementIssuesCountRoute,
  getAdminServiceAnnouncementMessagesCountRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminServiceAnnouncementHealthOverviewsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
