import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportOrangeSmsIdRoute,
  getApiTransportOrangeSmsIdRoute,
  getApiTransportOrangeSmsRoute,
  postApiTransportOrangeSmsRoute,
  putApiTransportOrangeSmsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportOrangeSmsHandler = app
  .openapi(getApiTransportOrangeSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOrangeSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOrangeSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOrangeSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOrangeSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
