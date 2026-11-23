import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsContactIDAttachmentsAttachmentIDRoute,
  getContactsContactIDAttachmentsFileNameRoute,
  getContactsContactIDAttachmentsRoute,
  getContactsContactIDCISSettingsRoute,
  getContactsContactIDHistoryRoute,
  getContactsContactIDRoute,
  getContactsContactNumberRoute,
  getContactsRoute,
  postContactsContactIDAttachmentsFileNameRoute,
  postContactsContactIDRoute,
  postContactsRoute,
  putContactsContactIDAttachmentsFileNameRoute,
  putContactsContactIDHistoryRoute,
  putContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsContactIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDCISSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsContactIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
