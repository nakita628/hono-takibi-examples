import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterPeerPeerIdRoute,
  getClusterRoute,
  getClusterTelemetryRoute,
  postClusterRecoverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterHandler = app
  .openapi(getClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterPeerPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
