import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementApplePushNotificationCertificateRoute,
  getDeviceManagementApplePushNotificationCertificateRoute,
  patchDeviceManagementApplePushNotificationCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementApplePushNotificationCertificateHandler = app
  .openapi(deleteDeviceManagementApplePushNotificationCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementApplePushNotificationCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementApplePushNotificationCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
