import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeviceAppManagementSyncMicrosoftStoreForBusinessAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementDeviceAppManagementActionsHandler = app.openapi(
  postDeviceAppManagementSyncMicrosoftStoreForBusinessAppsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
