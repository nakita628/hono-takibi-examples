import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectPeersConnectPeerIdRoute,
  getConnectPeersConnectPeerIdRoute,
  getConnectPeersRoute,
  postConnectPeersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectPeersHandler = app
  .openapi(postConnectPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectPeersConnectPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectPeersConnectPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
