import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInboxesInboxIdDraftsDraftIdRoute,
  deleteInboxesInboxIdLabelsLabelIdRoute,
  deleteInboxesInboxIdRoute,
  deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRoute,
  deleteInboxesInboxIdThreadsThreadIdRoute,
  getInboxesInboxIdAgentRoute,
  getInboxesInboxIdDraftsDraftIdRoute,
  getInboxesInboxIdDraftsRoute,
  getInboxesInboxIdLabelsRoute,
  getInboxesInboxIdRoute,
  getInboxesInboxIdThreadsRoute,
  getInboxesInboxIdThreadsSearchRoute,
  getInboxesInboxIdThreadsThreadIdEmailsEmailIdRoute,
  getInboxesInboxIdThreadsThreadIdEmailsRoute,
  getInboxesInboxIdThreadsThreadIdRoute,
  getInboxesRoute,
  patchInboxesInboxIdAgentRoute,
  patchInboxesInboxIdDraftsDraftIdRoute,
  patchInboxesInboxIdLabelsLabelIdRoute,
  patchInboxesInboxIdRoute,
  patchInboxesInboxIdThreadsThreadIdRoute,
  postInboxesInboxIdDraftsDraftIdSendRoute,
  postInboxesInboxIdDraftsRoute,
  postInboxesInboxIdLabelsRoute,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRoute,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRoute,
  postInboxesInboxIdThreadsThreadIdLabelsRoute,
  postInboxesRoute,
  putInboxesInboxIdThreadsThreadIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboxesHandler = app
  .openapi(postInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboxesInboxIdAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboxesInboxIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdThreadsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboxesInboxIdThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdThreadsThreadIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInboxesInboxIdThreadsThreadIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdThreadsThreadIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdThreadsThreadIdEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdDraftsDraftIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
