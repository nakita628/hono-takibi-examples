import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceAppManagementManagedAppRegistrationsMicrosoftGraphGetUserIdsWithFlaggedAppRegistrationRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementFunctionsHandler = app.openapi(
  getDeviceAppManagementManagedAppRegistrationsMicrosoftGraphGetUserIdsWithFlaggedAppRegistrationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
