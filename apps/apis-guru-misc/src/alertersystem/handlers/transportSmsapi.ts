import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSmsapiIdRoute,
  getApiTransportSmsapiIdRoute,
  getApiTransportSmsapiRoute,
  postApiTransportSmsapiRoute,
  putApiTransportSmsapiIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSmsapiHandler = app
  .openapi(getApiTransportSmsapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
