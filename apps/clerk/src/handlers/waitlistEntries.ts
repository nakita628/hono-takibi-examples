import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWaitlistEntriesWaitlistEntryIdRoute,
  getWaitlistEntriesRoute,
  postWaitlistEntriesRoute,
  postWaitlistEntriesWaitlistEntryIdInviteRoute,
  postWaitlistEntriesWaitlistEntryIdRejectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const waitlistEntriesHandler = app
  .openapi(getWaitlistEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWaitlistEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWaitlistEntriesWaitlistEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWaitlistEntriesWaitlistEntryIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWaitlistEntriesWaitlistEntryIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
