import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppInstallationsInstallationIdRoute,
  deleteAppInstallationsInstallationIdSuspendedRoute,
  getAppHookConfigRoute,
  getAppHookDeliveriesDeliveryIdRoute,
  getAppHookDeliveriesRoute,
  getAppInstallationRequestsRoute,
  getAppInstallationsInstallationIdRoute,
  getAppInstallationsRoute,
  getAppRoute,
  patchAppHookConfigRoute,
  postAppHookDeliveriesDeliveryIdAttemptsRoute,
  postAppInstallationsInstallationIdAccessTokensRoute,
  putAppInstallationsInstallationIdSuspendedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppHookDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppHookDeliveriesDeliveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppHookDeliveriesDeliveryIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstallationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstallationsInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstallationsInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppInstallationsInstallationIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppInstallationsInstallationIdSuspendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstallationsInstallationIdSuspendedRoute, (c) => {
    throw new Error('Not implemented')
  })
