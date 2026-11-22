import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminServiceAnnouncementMessagesMicrosoftGraphArchiveRoute,
  postAdminServiceAnnouncementMessagesMicrosoftGraphFavoriteRoute,
  postAdminServiceAnnouncementMessagesMicrosoftGraphMarkReadRoute,
  postAdminServiceAnnouncementMessagesMicrosoftGraphMarkUnreadRoute,
  postAdminServiceAnnouncementMessagesMicrosoftGraphUnarchiveRoute,
  postAdminServiceAnnouncementMessagesMicrosoftGraphUnfavoriteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminActionsHandler = app
  .openapi(postAdminServiceAnnouncementMessagesMicrosoftGraphArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMicrosoftGraphFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMicrosoftGraphMarkReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMicrosoftGraphMarkUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMicrosoftGraphUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMicrosoftGraphUnfavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
