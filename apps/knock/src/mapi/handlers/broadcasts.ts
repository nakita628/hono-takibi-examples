import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BroadcastsBroadcastKeyRoute,
  getV1BroadcastsRoute,
  putV1BroadcastsBroadcastKeyCancelRoute,
  putV1BroadcastsBroadcastKeyRoute,
  putV1BroadcastsBroadcastKeyRunRoute,
  putV1BroadcastsBroadcastKeySendRoute,
  putV1BroadcastsBroadcastKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const broadcastsHandler = app
  .openapi(getV1BroadcastsBroadcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
