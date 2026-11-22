import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTermiiIdRoute,
  getApiTransportTermiiIdRoute,
  getApiTransportTermiiRoute,
  postApiTransportTermiiRoute,
  putApiTransportTermiiIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTermiiHandler = app
  .openapi(getApiTransportTermiiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTermiiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTermiiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTermiiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTermiiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
