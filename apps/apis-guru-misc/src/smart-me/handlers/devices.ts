import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDevicesIdRoute,
  getApiDevicesRoute,
  postApiDevicesRoute,
  putApiDevicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getApiDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
