import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportOneSignalIdRoute,
  getApiTransportOneSignalIdRoute,
  getApiTransportOneSignalRoute,
  postApiTransportOneSignalRoute,
  putApiTransportOneSignalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportOneSignalHandler = app
  .openapi(getApiTransportOneSignalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOneSignalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOneSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOneSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOneSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
