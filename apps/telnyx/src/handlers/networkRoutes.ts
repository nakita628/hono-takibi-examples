import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkRoutesIdRoute,
  getNetworkRoutesIdRoute,
  getNetworkRoutesRoute,
  postNetworkRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkRoutesHandler = app
  .openapi(getNetworkRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
