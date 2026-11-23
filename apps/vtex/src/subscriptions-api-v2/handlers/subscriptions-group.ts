import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsGroupGroupIdAddressesRoute,
  getSubscriptionsGroupGroupIdConfigRoute,
  getSubscriptionsGroupGroupIdConversationMessageRoute,
  getSubscriptionsGroupGroupIdFrequencyOptionsRoute,
  getSubscriptionsGroupGroupIdPaymentSystemsRoute,
  getSubscriptionsGroupGroupIdRoute,
  getSubscriptionsGroupGroupIdWillCreateRoute,
  getSubscriptionsGroupListRoute,
  getSubscriptionsGroupNextPurchaseDateStrRoute,
  getSubscriptionsGroupRoute,
  getSubscriptionsGroupSimulateGroupIdRoute,
  patchSubscriptionsGroupGroupIdCancelRoute,
  patchSubscriptionsGroupGroupIdRoute,
  postSubscriptionsGroupGroupIdAdditemRoute,
  postSubscriptionsGroupGroupIdAddressesRoute,
  postSubscriptionsGroupGroupidInstancesInstanceIdRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsGroupHandler = app
  .openapi(getSubscriptionsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupNextPurchaseDateStrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupSimulateGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsGroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsGroupGroupIdAdditemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsGroupGroupIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsGroupGroupIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdConversationMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdFrequencyOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdPaymentSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsGroupGroupIdWillCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsGroupGroupidInstancesInstanceIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
