import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCustomDeviceIdRoute,
  getApiCustomDeviceRoute,
  postApiCustomDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customDeviceHandler = app
  .openapi(getApiCustomDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCustomDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
