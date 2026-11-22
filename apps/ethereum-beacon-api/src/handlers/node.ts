import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEthV1NodeHealthRoute,
  getEthV1NodeIdentityRoute,
  getEthV1NodePeerCountRoute,
  getEthV1NodePeersPeerIdRoute,
  getEthV1NodePeersRoute,
  getEthV1NodeSyncingRoute,
  getEthV1NodeVersionRoute,
  getEthV2NodeVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeHandler = app
  .openapi(getEthV1NodeIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1NodePeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1NodePeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1NodePeerCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1NodeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2NodeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1NodeSyncingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1NodeHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
