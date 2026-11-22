import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportFirebaseIdRoute,
  getApiTransportFirebaseIdRoute,
  getApiTransportFirebaseRoute,
  postApiTransportFirebaseRoute,
  putApiTransportFirebaseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportFirebaseHandler = app
  .openapi(getApiTransportFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFirebaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFirebaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFirebaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
