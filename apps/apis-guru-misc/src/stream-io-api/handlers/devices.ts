import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDevicesRoute, getDevicesRoute, postDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(deleteDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
