import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute,
  patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute,
  postPublicApiV1InboxesInboxIdentifierContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsAPIHandler = app
  .openapi(postPublicApiV1InboxesInboxIdentifierContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
