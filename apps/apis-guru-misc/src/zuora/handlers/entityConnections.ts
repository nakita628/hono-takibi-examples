import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EntityConnectionsRoute,
  postV1EntityConnectionsRoute,
  putV1EntityConnectionsConnectionIdAcceptRoute,
  putV1EntityConnectionsConnectionIdDenyRoute,
  putV1EntityConnectionsConnectionIdDisconnectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entityConnectionsHandler = app
  .openapi(getV1EntityConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntityConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntityConnectionsConnectionIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntityConnectionsConnectionIdDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntityConnectionsConnectionIdDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
