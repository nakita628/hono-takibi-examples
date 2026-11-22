import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AnnouncementsAnnouncementIdRoute,
  getApiV2AnnouncementsRoute,
  patchApiV2AnnouncementsAnnouncementIdRoute,
  postApiV2AnnouncementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const announcementsHandler = app
  .openapi(getApiV2AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AnnouncementsAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AnnouncementsAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
