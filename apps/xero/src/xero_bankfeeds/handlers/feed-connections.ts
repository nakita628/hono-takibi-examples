import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedConnectionsIdRoute,
  getFeedConnectionsRoute,
  postFeedConnectionsDeleteRequestsRoute,
  postFeedConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedConnectionsHandler = app
  .openapi(getFeedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedConnectionsDeleteRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
