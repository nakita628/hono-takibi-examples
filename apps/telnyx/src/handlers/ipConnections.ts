import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpConnectionsIdRoute,
  getIpConnectionsIdRoute,
  getIpConnectionsRoute,
  patchIpConnectionsIdRoute,
  postIpConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipConnectionsHandler = app
  .openapi(getIpConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
