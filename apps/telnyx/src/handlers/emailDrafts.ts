import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailInboxesInboxIdDraftsDraftIdRoute,
  getEmailInboxesInboxIdDraftsDraftIdRoute,
  getEmailInboxesInboxIdDraftsRoute,
  patchEmailInboxesInboxIdDraftsDraftIdRoute,
  postEmailInboxesInboxIdDraftsDraftIdSendRoute,
  postEmailInboxesInboxIdDraftsRoute,
  postEmailInboxesInboxIdMessagesMessageIdDraftsRoute,
  putEmailInboxesInboxIdDraftsDraftIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailDraftsHandler = app
  .openapi(getEmailInboxesInboxIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdDraftsDraftIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdMessagesMessageIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
