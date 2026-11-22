import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ApiFyiDeliveryoptionsDeviceIdRoute,
  getV1ApiFyiDeliveryoptionsRoute,
  getV1ApiFyiDisclaimerTypecodeRoute,
  getV1ApiFyiNotificationsRoute,
  getV1ApiFyiSettingsRoute,
  getV1ApiFyiUnreadnumberRoute,
  postV1ApiFyiDeliveryoptionsDeviceRoute,
  postV1ApiFyiSettingsTypecodeRoute,
  putV1ApiFyiDeliveryoptionsEmailRoute,
  putV1ApiFyiDisclaimerTypecodeRoute,
  putV1ApiFyiNotificationsNotificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingFYIsAndNotificationsHandler = app
  .openapi(postV1ApiFyiDeliveryoptionsDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFyiSettingsTypecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiDeliveryoptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiDisclaimerTypecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiFyiDisclaimerTypecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiUnreadnumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiFyiDeliveryoptionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiFyiNotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiFyiDeliveryoptionsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
