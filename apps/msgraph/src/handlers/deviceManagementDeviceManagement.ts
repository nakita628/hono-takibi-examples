import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceManagementRoute, patchDeviceManagementRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementHandler = app
  .openapi(getDeviceManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
