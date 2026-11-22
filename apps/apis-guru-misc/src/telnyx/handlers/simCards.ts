import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSimCardsIdRoute,
  deleteSimCardsSimCardIdNetworkPreferencesRoute,
  deleteSimCardsSimCardIdPublicIpRoute,
  getSimCardsIdRoute,
  getSimCardsRoute,
  getSimCardsSimCardIdNetworkPreferencesRoute,
  getSimCardsSimCardIdPublicIpRoute,
  getSimCardsSimCardIdWirelessConnectivityLogsRoute,
  patchSimCardsIdRoute,
  postActionsRegisterSimCardsRoute,
  postSimCardsActionsValidateRegistrationCodesRoute,
  postSimCardsIdActionsDisableRoute,
  postSimCardsIdActionsEnableRoute,
  postSimCardsIdActionsSetStandbyRoute,
  postSimCardsSimCardIdPublicIpRoute,
  putActionsNetworkPreferencesSimCardsRoute,
  putSimCardsSimCardIdNetworkPreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simCardsHandler = app
  .openapi(putActionsNetworkPreferencesSimCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionsRegisterSimCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsRoute, (c) => {
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
  .openapi(postSimCardsIdActionsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsIdActionsSetStandbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSimCardsSimCardIdNetworkPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsSimCardIdNetworkPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSimCardsSimCardIdNetworkPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSimCardsSimCardIdPublicIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsSimCardIdPublicIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardsSimCardIdPublicIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardsSimCardIdWirelessConnectivityLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
