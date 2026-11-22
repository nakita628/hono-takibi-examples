import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementApplePushNotificationCertificateRoute,
  getDeviceManagementApplePushNotificationCertificateDownloadApplePushNotificationCertificateSigningRequestRoute,
  getDeviceManagementApplePushNotificationCertificateRoute,
  patchDeviceManagementApplePushNotificationCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementApplePushNotificationCertificateHandler = app
  .openapi(getDeviceManagementApplePushNotificationCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementApplePushNotificationCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementApplePushNotificationCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementApplePushNotificationCertificateDownloadApplePushNotificationCertificateSigningRequestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
