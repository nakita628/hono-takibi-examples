import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersAccountAnnouncementsAnnouncementIdRoute,
  getCustomersAccountAnnouncementsAnnouncementIdRoute,
  getCustomersAccountAnnouncementsRoute,
  getCustomersAccountRoute,
  getCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersAccountRoute, (c) => {
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
