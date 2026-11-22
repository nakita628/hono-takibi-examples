import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1PrivatePairingSessionsRoute,
  postV1PrivatePairingSessionsSessionIdActivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pairingHandler = app
  .openapi(postV1PrivatePairingSessionsSessionIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePairingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
