import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSimCardDataUsageNotificationsIdRoute,
  deleteSimCardsIdRoute,
  getSimCardDataUsageNotificationsIdRoute,
  getSimCardDataUsageNotificationsRoute,
  getSimCardsIdActivationCodeRoute,
  getSimCardsIdDeviceDetailsRoute,
  getSimCardsIdPublicIpRoute,
  getSimCardsIdRoute,
  getSimCardsIdWirelessConnectivityLogsRoute,
  getSimCardsRoute,
  patchSimCardDataUsageNotificationsIdRoute,
  patchSimCardsIdRoute,
  postActionsPurchaseEsimsRoute,
  postActionsRegisterSimCardsRoute,
  postSimCardDataUsageNotificationsRoute,
  postSimCardsActionsBulkDisableVoiceRoute,
  postSimCardsActionsBulkEnableVoiceRoute,
  postSimCardsActionsBulkSetPublicIpsRoute,
  postSimCardsActionsValidateRegistrationCodesRoute,
  postSimCardsIdActionsDisableRoute,
  postSimCardsIdActionsDisableVoiceRoute,
  postSimCardsIdActionsEnableRoute,
  postSimCardsIdActionsEnableVoiceRoute,
  postSimCardsIdActionsRemovePublicIpRoute,
  postSimCardsIdActionsSetPublicIpRoute,
  postSimCardsIdActionsSetStandbyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simCardsHandler = app
  .openapi(postActionsPurchaseEsimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionsRegisterSimCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardDataUsageNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardDataUsageNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSimCardDataUsageNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardDataUsageNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSimCardDataUsageNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsActionsBulkDisableVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsActionsBulkEnableVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsActionsBulkSetPublicIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsActionsValidateRegistrationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSimCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSimCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsDisableVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsEnableVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsRemovePublicIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsSetPublicIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsSetStandbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsIdActivationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsIdDeviceDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsIdPublicIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsIdWirelessConnectivityLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
