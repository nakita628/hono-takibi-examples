import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersAccountAnnouncementsAnnouncementIdRoute,
  getAnnouncementsRoute,
  getCustomersAccountAnnouncementsAnnouncementIdRoute,
  getCustomersAccountAnnouncementsRoute,
  postAnnouncementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const announcementsHandler = app
  .openapi(getAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersAccountAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersAccountAnnouncementsAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersAccountAnnouncementsAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
