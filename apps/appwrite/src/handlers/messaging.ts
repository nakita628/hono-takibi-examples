import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagingMessagesMessageIdRoute,
  deleteMessagingProvidersProviderIdRoute,
  deleteMessagingTopicsTopicIdRoute,
  deleteMessagingTopicsTopicIdSubscribersSubscriberIdRoute,
  getMessagingMessagesMessageIdLogsRoute,
  getMessagingMessagesMessageIdRoute,
  getMessagingMessagesMessageIdTargetsRoute,
  getMessagingMessagesRoute,
  getMessagingProvidersProviderIdLogsRoute,
  getMessagingProvidersProviderIdRoute,
  getMessagingProvidersRoute,
  getMessagingSubscribersSubscriberIdLogsRoute,
  getMessagingTopicsRoute,
  getMessagingTopicsTopicIdLogsRoute,
  getMessagingTopicsTopicIdRoute,
  getMessagingTopicsTopicIdSubscribersRoute,
  getMessagingTopicsTopicIdSubscribersSubscriberIdRoute,
  patchMessagingMessagesEmailMessageIdRoute,
  patchMessagingMessagesPushMessageIdRoute,
  patchMessagingMessagesSmsMessageIdRoute,
  patchMessagingProvidersApnsProviderIdRoute,
  patchMessagingProvidersFcmProviderIdRoute,
  patchMessagingProvidersMailgunProviderIdRoute,
  patchMessagingProvidersMsg91ProviderIdRoute,
  patchMessagingProvidersSendgridProviderIdRoute,
  patchMessagingProvidersSmtpProviderIdRoute,
  patchMessagingProvidersTelesignProviderIdRoute,
  patchMessagingProvidersTextmagicProviderIdRoute,
  patchMessagingProvidersTwilioProviderIdRoute,
  patchMessagingProvidersVonageProviderIdRoute,
  patchMessagingTopicsTopicIdRoute,
  postMessagingMessagesEmailRoute,
  postMessagingMessagesPushRoute,
  postMessagingMessagesSmsRoute,
  postMessagingProvidersApnsRoute,
  postMessagingProvidersFcmRoute,
  postMessagingProvidersMailgunRoute,
  postMessagingProvidersMsg91Route,
  postMessagingProvidersSendgridRoute,
  postMessagingProvidersSmtpRoute,
  postMessagingProvidersTelesignRoute,
  postMessagingProvidersTextmagicRoute,
  postMessagingProvidersTwilioRoute,
  postMessagingProvidersVonageRoute,
  postMessagingTopicsRoute,
  postMessagingTopicsTopicIdSubscribersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingHandler = app
  .openapi(getMessagingMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingMessagesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingMessagesEmailMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingMessagesPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingMessagesPushMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingMessagesSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingMessagesSmsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingMessagesMessageIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingMessagesMessageIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersApnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersApnsProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersFcmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersFcmProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersMailgunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersMailgunProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersMsg91Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersMsg91ProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersSendgridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersSendgridProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersSmtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersSmtpProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersTelesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersTelesignProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersTextmagicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersTextmagicProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersTwilioProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProvidersVonageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProvidersVonageProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProvidersProviderIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingSubscribersSubscriberIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTopicsTopicIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTopicsTopicIdSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingTopicsTopicIdSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTopicsTopicIdSubscribersSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingTopicsTopicIdSubscribersSubscriberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
