import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagesMessageIdReactionsRoute,
  deleteMessagesMessageIdRoute,
  getMessagesMatchesNarrowRoute,
  getMessagesMessageIdHistoryRoute,
  getMessagesMessageIdReadReceiptsRoute,
  getMessagesMessageIdRoute,
  getMessagesRoute,
  patchMessagesMessageIdRoute,
  postMessagesFlagsNarrowRoute,
  postMessagesFlagsRoute,
  postMessagesMessageIdReactionsRoute,
  postMessagesMessageIdReportRoute,
  postMessagesMessageIdTypingRoute,
  postMessagesRenderRoute,
  postMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMessageIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesFlagsNarrowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesMessageIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagesMessageIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMessageIdReadReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMatchesNarrowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesMessageIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesMessageIdTypingRoute, (c) => {
    throw new Error('Not implemented')
  })
