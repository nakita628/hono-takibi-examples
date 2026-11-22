import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportFreshdeskIdRoute,
  getApiTransportFreshdeskIdRoute,
  getApiTransportFreshdeskRoute,
  postApiTransportFreshdeskRoute,
  putApiTransportFreshdeskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportFreshdeskHandler = app
  .openapi(getApiTransportFreshdeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFreshdeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFreshdeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFreshdeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFreshdeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
