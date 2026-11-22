import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceAppManagementMobileAppsMicrosoftGraphManagedMobileLobAppRoute,
  getDeviceAppManagementMobileAppsMobileAppIdMicrosoftGraphManagedMobileLobAppRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileAppManagedMobileLobAppHandler = app
  .openapi(getDeviceAppManagementMobileAppsMicrosoftGraphManagedMobileLobAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementMobileAppsMobileAppIdMicrosoftGraphManagedMobileLobAppRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
