import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceProfilesIdRoute,
  getDeviceProfilesIdRoute,
  getDeviceProfilesRoute,
  postDeviceProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceProfilesHandler = app
  .openapi(postDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
