import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMessagesCancelScheduledRoute,
  postMessagesContentRoute,
  postMessagesInfoRoute,
  postMessagesListScheduledRoute,
  postMessagesParseRoute,
  postMessagesRescheduleRoute,
  postMessagesSearchRoute,
  postMessagesSearchTimeSeriesRoute,
  postMessagesSendMcTemplateRoute,
  postMessagesSendRawRoute,
  postMessagesSendRoute,
  postMessagesSendSmsRoute,
  postMessagesSendTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postMessagesSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesSendTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesSendMcTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesSearchTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesSendRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesListScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesCancelScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesRescheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesSendSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
