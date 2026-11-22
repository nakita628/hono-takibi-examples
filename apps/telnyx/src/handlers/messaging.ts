import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlphanumericSenderIdsIdRoute,
  getAlphanumericSenderIdsIdRoute,
  getAlphanumericSenderIdsRoute,
  getMessagingHostedNumbers2Route,
  getMessagingHostedNumbersIdRoute,
  getMessagingHostedNumbersRoute,
  getMessagingProfileMetricsRoute,
  getMessagingProfilesIdAlphanumericSenderIds2Route,
  getMessagingProfilesIdAlphanumericSenderIdsRoute,
  getMessagingProfilesIdMetrics2Route,
  getMessagingProfilesIdMetricsRoute,
  patchMessagingHostedNumbersIdRoute,
  postAlphanumericSenderIdsRoute,
  postMessagingProfilesIdActionsRegenerateSecret2Route,
  postMessagingProfilesIdActionsRegenerateSecretRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingHandler = app
  .openapi(getAlphanumericSenderIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlphanumericSenderIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlphanumericSenderIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlphanumericSenderIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingHostedNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProfilesIdActionsRegenerateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdAlphanumericSenderIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingHostedNumbers2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingHostedNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingHostedNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfileMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProfilesIdActionsRegenerateSecret2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdAlphanumericSenderIds2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdMetrics2Route, (c) => {
    throw new Error('Not implemented')
  })
