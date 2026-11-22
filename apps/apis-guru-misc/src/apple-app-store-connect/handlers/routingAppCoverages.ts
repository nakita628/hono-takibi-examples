import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1RoutingAppCoveragesIdRoute,
  getV1RoutingAppCoveragesIdRoute,
  patchV1RoutingAppCoveragesIdRoute,
  postV1RoutingAppCoveragesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routingAppCoveragesHandler = app
  .openapi(postV1RoutingAppCoveragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RoutingAppCoveragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RoutingAppCoveragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RoutingAppCoveragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
