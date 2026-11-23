import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelSpotInstanceRequestsRoute,
  postActionCancelSpotInstanceRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCancelSpotInstanceRequestsHandler = app
  .openapi(getActionCancelSpotInstanceRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelSpotInstanceRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
