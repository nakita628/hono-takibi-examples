import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportFreeMobileIdRoute,
  getApiTransportFreeMobileIdRoute,
  getApiTransportFreeMobileRoute,
  postApiTransportFreeMobileRoute,
  putApiTransportFreeMobileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportFreeMobileHandler = app
  .openapi(getApiTransportFreeMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFreeMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFreeMobileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFreeMobileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFreeMobileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
