import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTwilioIdRoute,
  getApiTransportTwilioIdRoute,
  getApiTransportTwilioRoute,
  postApiTransportTwilioRoute,
  putApiTransportTwilioIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTwilioHandler = app
  .openapi(getApiTransportTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTwilioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTwilioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTwilioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
