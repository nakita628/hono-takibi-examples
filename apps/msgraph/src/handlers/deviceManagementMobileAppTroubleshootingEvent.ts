import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdRoute,
  deleteDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdRoute,
  getDeviceManagementMobileAppTroubleshootingEventsCountRoute,
  getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdRoute,
  getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsCountRoute,
  getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsRoute,
  getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdRoute,
  getDeviceManagementMobileAppTroubleshootingEventsRoute,
  patchDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdRoute,
  patchDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdRoute,
  postDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdCreateDownloadUrlRoute,
  postDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsRoute,
  postDeviceManagementMobileAppTroubleshootingEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementMobileAppTroubleshootingEventHandler = app
  .openapi(getDeviceManagementMobileAppTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementMobileAppTroubleshootingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsAppLogCollectionRequestIdCreateDownloadUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementMobileAppTroubleshootingEventsMobileAppTroubleshootingEventIdAppLogCollectionRequestsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementMobileAppTroubleshootingEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
