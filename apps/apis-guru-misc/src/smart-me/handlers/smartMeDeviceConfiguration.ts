import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSmartMeDeviceConfigurationIdRoute,
  postApiSmartMeDeviceConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smartMeDeviceConfigurationHandler = app
  .openapi(postApiSmartMeDeviceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSmartMeDeviceConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
