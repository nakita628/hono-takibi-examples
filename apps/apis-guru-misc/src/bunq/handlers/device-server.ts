import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceServerItemIdRoute, getDeviceServerRoute, postDeviceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceServerHandler = app
  .openapi(getDeviceServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceServerItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
