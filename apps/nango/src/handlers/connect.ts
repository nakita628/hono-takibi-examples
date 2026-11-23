import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectSessionRoute,
  getConnectSessionRoute,
  postConnectSessionsReconnectRoute,
  postConnectSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app
  .openapi(postConnectSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectSessionsReconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
