import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailInboxesIdRoute,
  deleteEmailInboxesInboxIdFiltersRoute,
  deleteEmailInboxesInboxIdMessagesMessageIdLabelsRoute,
  deleteEmailInboxesInboxIdThreadsThreadIdLabelsRoute,
  getEmailInboxesIdRoute,
  getEmailInboxesInboxIdFiltersRoute,
  getEmailInboxesInboxIdMessagesRoute,
  getEmailInboxesInboxIdThreadsRoute,
  getEmailInboxesInboxIdThreadsThreadIdRoute,
  getEmailInboxesRoute,
  patchEmailInboxesInboxIdMessagesMessageIdRoute,
  postEmailInboxesInboxIdFiltersRoute,
  postEmailInboxesInboxIdMessagesMessageIdActionsForwardRoute,
  postEmailInboxesInboxIdMessagesMessageIdActionsReplyAllRoute,
  postEmailInboxesInboxIdMessagesMessageIdActionsReplyRoute,
  postEmailInboxesInboxIdMessagesMessageIdLabelsRoute,
  postEmailInboxesInboxIdThreadsThreadIdLabelsRoute,
  postEmailInboxesRoute,
  putEmailInboxesInboxIdFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailInboxesHandler = app
  .openapi(getEmailInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailInboxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailInboxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailInboxesInboxIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailInboxesInboxIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailInboxesInboxIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailInboxesInboxIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailInboxesInboxIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdMessagesMessageIdActionsForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdMessagesMessageIdActionsReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdMessagesMessageIdActionsReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailInboxesInboxIdMessagesMessageIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdMessagesMessageIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailInboxesInboxIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailInboxesInboxIdThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailInboxesInboxIdThreadsThreadIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailInboxesInboxIdThreadsThreadIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
