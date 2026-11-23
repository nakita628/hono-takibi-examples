import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postNetConnectionsRoute,
  postNetConnectRoute,
  postNetDisconnectRoute,
  postNetStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const netHandler = app
  .openapi(postNetConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
