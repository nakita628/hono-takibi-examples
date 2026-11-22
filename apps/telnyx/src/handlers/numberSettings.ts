import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagingNumbersBulkUpdatesOrderId2Route,
  getMessagingNumbersBulkUpdatesOrderIdRoute,
  getPhoneNumbersIdMessagingRoute,
  getPhoneNumbersMessagingRoute,
  patchPhoneNumbersIdMessagingRoute,
  postMessagingNumbersBulkUpdates2Route,
  postMessagingNumbersBulkUpdatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberSettingsHandler = app
  .openapi(postMessagingNumbersBulkUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingNumbersBulkUpdatesOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingNumbersBulkUpdates2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingNumbersBulkUpdatesOrderId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
