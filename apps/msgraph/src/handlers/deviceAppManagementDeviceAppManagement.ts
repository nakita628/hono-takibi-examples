import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceAppManagementRoute, patchDeviceAppManagementRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementDeviceAppManagementHandler = app
  .openapi(getDeviceAppManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
