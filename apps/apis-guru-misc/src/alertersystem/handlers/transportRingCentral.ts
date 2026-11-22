import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportRingCentralIdRoute,
  getApiTransportRingCentralIdRoute,
  getApiTransportRingCentralRoute,
  postApiTransportRingCentralRoute,
  putApiTransportRingCentralIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportRingCentralHandler = app
  .openapi(getApiTransportRingCentralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportRingCentralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportRingCentralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportRingCentralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportRingCentralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
