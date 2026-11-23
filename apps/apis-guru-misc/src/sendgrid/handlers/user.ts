import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserScheduledSendsBatchIdRoute,
  deleteUserWebhooksParseSettingsHostnameRoute,
  getUserAccountRoute,
  getUserCreditsRoute,
  getUserEmailRoute,
  getUserProfileRoute,
  getUserScheduledSendsBatchIdRoute,
  getUserScheduledSendsRoute,
  getUserSettingsEnforcedTlsRoute,
  getUserUsernameRoute,
  getUserWebhooksEventSettingsRoute,
  getUserWebhooksEventSettingsSignedRoute,
  getUserWebhooksParseSettingsHostnameRoute,
  getUserWebhooksParseSettingsRoute,
  getUserWebhooksParseStatsRoute,
  patchUserProfileRoute,
  patchUserScheduledSendsBatchIdRoute,
  patchUserSettingsEnforcedTlsRoute,
  patchUserWebhooksEventSettingsRoute,
  patchUserWebhooksEventSettingsSignedRoute,
  patchUserWebhooksParseSettingsHostnameRoute,
  postUserScheduledSendsRoute,
  postUserWebhooksEventTestRoute,
  postUserWebhooksParseSettingsRoute,
  putUserEmailRoute,
  putUserPasswordRoute,
  putUserUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserScheduledSendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserScheduledSendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserScheduledSendsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserScheduledSendsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserScheduledSendsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSettingsEnforcedTlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserSettingsEnforcedTlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksEventSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserWebhooksEventSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksEventSettingsSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserWebhooksEventSettingsSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserWebhooksEventTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksParseSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserWebhooksParseSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserWebhooksParseSettingsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksParseSettingsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserWebhooksParseSettingsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksParseStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
