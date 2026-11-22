import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportLightSmsIdRoute,
  getApiTransportLightSmsIdRoute,
  getApiTransportLightSmsRoute,
  postApiTransportLightSmsRoute,
  putApiTransportLightSmsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportLightSmsHandler = app
  .openapi(getApiTransportLightSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportLightSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportLightSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLightSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportLightSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
