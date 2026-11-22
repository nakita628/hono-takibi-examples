import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceAppManagementMobileAppsMicrosoftGraphMobileLobAppRoute,
  getDeviceAppManagementMobileAppsMobileAppIdMicrosoftGraphMobileLobAppRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileAppMobileLobAppHandler = app
  .openapi(getDeviceAppManagementMobileAppsMicrosoftGraphMobileLobAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdMicrosoftGraphMobileLobAppRoute, (c) => {
    throw new Error('Not implemented')
  })
