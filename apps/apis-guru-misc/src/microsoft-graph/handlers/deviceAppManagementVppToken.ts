import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementVppTokensVppTokenIdRoute,
  getDeviceAppManagementVppTokensRoute,
  getDeviceAppManagementVppTokensVppTokenIdRoute,
  patchDeviceAppManagementVppTokensVppTokenIdRoute,
  postDeviceAppManagementVppTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementVppTokenHandler = app
  .openapi(getDeviceAppManagementVppTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementVppTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementVppTokensVppTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementVppTokensVppTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementVppTokensVppTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
