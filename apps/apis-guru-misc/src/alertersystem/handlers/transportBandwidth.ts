import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportBandwidthIdRoute,
  getApiTransportBandwidthIdRoute,
  getApiTransportBandwidthRoute,
  postApiTransportBandwidthRoute,
  putApiTransportBandwidthIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportBandwidthHandler = app
  .openapi(getApiTransportBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportBandwidthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportBandwidthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportBandwidthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
