import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailMessagesEmailIdScheduleRoute,
  deleteEmailMessagesIdRoute,
  deleteEmailMessagesRoute,
  getEmailMessagesEmailIdEventsRoute,
  getEmailMessagesEmailIdRecipientsRecipientIdRoute,
  getEmailMessagesEmailIdRecipientsRoute,
  getEmailMessagesIdRoute,
  getEmailMessagesRoute,
  patchEmailMessagesEmailIdScheduleRoute,
  postEmailMessagesBatchRoute,
  postEmailMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailMessagesHandler = app
  .openapi(deleteEmailMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailMessagesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMessagesEmailIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMessagesEmailIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMessagesEmailIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailMessagesEmailIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailMessagesEmailIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
