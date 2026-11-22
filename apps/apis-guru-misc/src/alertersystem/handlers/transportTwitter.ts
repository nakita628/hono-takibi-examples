import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTwitterIdRoute,
  getApiTransportTwitterIdRoute,
  getApiTransportTwitterRoute,
  postApiTransportTwitterRoute,
  putApiTransportTwitterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTwitterHandler = app
  .openapi(getApiTransportTwitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTwitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTwitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTwitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTwitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
